import bcrypt from 'bcrypt'
import passport from 'passport'
import LocalStrategy from 'passport-local'
import session from 'express-session'
import express from 'express'
import db from '../db.js'


const authRouter=express.Router();
const saltRounds=10;

authRouter.get('/test',async(req,res)=>{
    console.log(req.user)
    console.log(req.isAuthenticated())
    if(req.isAuthenticated()){
        res.render('profile.ejs',{
            first_name:req.user.first_name,
            last_name:req.user.last_name,
            subjects:req.user.subjects,
            student_class:req.user.class,
            questions:'',
            report:''
        })
    }
    else{
        res.redirect('/login')
    }
}
)
authRouter.get('/signup',(req,res)=>{
    res.render('signup.ejs')
})
authRouter.post('/signup',async(req,res)=>{
    const email=req.body.email
    const password=req.body.password
    
    try {
        const checkEmail= await db.query(`select * from contact_detail where email=$1`,[email])
        if (checkEmail.rows.length===0){
            return res.send('you need to register first')
        }
        else if(checkEmail.rows.length>0){

            if(checkEmail.rows[0].junior_student_id){
                const queryForJuniorStudent=`insert into users(email,password) values($1,$2) returning email`
                const hash=bcrypt.hashSync(password,saltRounds)
                let populateUsers=await db.query(queryForJuniorStudent,[email,hash])

                const userEmail= populateUsers.rows[0].email
                console.log(userEmail)
                const userInfo=
                `select first_name,last_name,email,array_agg(subject) as "subjects",classes.name as "class"
                from contact_detail
                join junior_students
                on junior_students.id=contact_detail.junior_student_id
                join junior_enrollment
                on junior_enrollment.student_id=junior_students.id
                join junior_subjects 
                on junior_subjects.id=junior_enrollment.subject_id
                join classes
                on classes.id=junior_students.class_id

                where email=$1

                group by first_name,last_name,email,classes.name
                `
                const getUserInfo=(await db.query(userInfo,[userEmail])).rows
                // res.json(getUserInfo)
                console.log(getUserInfo)
                req.login(getUserInfo[0],(err)=>{
                    if(err) return err; 
                     res.redirect('/test')
                })
            }
            if(checkEmail.rows[0].senior_student_id){
                const queryForSeniorStudent=`insert into users(email,password) values($1,$2) returning email`

                const hash=bcrypt.hashSync(password,saltRounds)
                const populateUsers=await db.query(queryForSeniorStudent,[email,hash]);
                const userEmail=populateUsers.rows[0].email
                const userInfo=
                `select first_name,last_name,email,array_agg(subject) as "subjects",classes.name as "class"
                from contact_detail
                join senior_students
                on senior_students.id=contact_detail.senior_student_id
                join senior_enrollment
                on senior_enrollment.student_id=senior_students.id
                join senior_subjects 
                on senior_subjects.id=senior_enrollment.subject_id
                join classes
                on classes.id=senior_students.class_id

                where contact_detail.email=$1

                group by first_name,last_name,classes.name,email`

                const getUserInfo=(await db.query(userInfo,[userEmail])).rows
                // res.json(getUserInfo)
                req.login(getUserInfo[0],(err)=>{
                    if(err) return err;
                    res.redirect('/test')
                })
                console.log(getUserInfo)
            }
        }
    } catch (error) {
        console.log(error.detail)
        res.send(error.detail)
    }
})

authRouter.get('/login',(req,res)=>{
    console.log(req.isAuthenticated())
    res.render('login.ejs');
})
authRouter.post('/login',passport.authenticate('local',{
    successRedirect:'/test',
    failureRedirect:'/login'
}))
// authRouter.get('/logout')
authRouter.post('/logout',(req,res,next)=>{
    console.log(req.isAuthenticated())
    req.logout((error)=>{
        if(error){
            return next(error)
        }else{
          res.redirect('/login')  
        }
    })
})

passport.use(new LocalStrategy({usernameField:'email'},
async(email,password,done)=>{
try {

  const getUser= await db.query(`
    select 
    junior_student_id,senior_student_id
    from contact_detail 
    where email=$1
    `,[email])
    
    if(getUser.rows.length===0){
        return done(null,false)
    }else{
        if(getUser.rows[0].junior_student_id){

            const juniorStudent=`select 
            junior_students.id,first_name,last_name,users.email,users.password,
            array_agg(junior_subjects.subject) as "subjects",
            classes.name as "class"
            from junior_students
            join junior_enrollment
            on junior_enrollment.student_id=junior_students.id
            join junior_subjects
            on junior_subjects.id=junior_enrollment.subject_id
            join contact_detail
            on contact_detail.junior_student_id=junior_students.id
            join users
            on users.email=contact_detail.email
            join classes 
            on classes.id=junior_students.class_id

            where users.email=$1

            group by first_name,last_name,users.email,users.password,class,junior_students.id`

            const getJuniorStudent=await db.query(juniorStudent,[email]);
            const userPassword=getJuniorStudent.rows[0].password;

            bcrypt.compare(password,userPassword,(error,valid)=>{
                if(error){
                    return done(error)
                }   
                if(valid){
                    return done(null,getJuniorStudent.rows[0])
                }else{
                    return done(null,false)
                }
            })
        }
        if(getUser.rows[0].senior_student_id){
            const seniorStudent=
            `
            select 
            senior_students.id,first_name,last_name,users.email,users.password,
            array_agg(senior_subjects.subject) as "subjects",
			classes.name as "class"
			
            from senior_students
            join senior_enrollment
            on senior_enrollment.student_id=senior_students.id
            join senior_subjects
            on senior_subjects.id=senior_enrollment.subject_id
            join contact_detail
            on contact_detail.senior_student_id=senior_students.id
            join users
            on users.email=contact_detail.email
			join classes
			on classes.id=senior_students.class_id

            where users.email=$1

            group by first_name,last_name,users.email,users.password,class,senior_students.id`
            const getSeniorStudent=await db.query(seniorStudent,[email])
            const userPassword=getSeniorStudent.rows[0].password;

            bcrypt.compare(password,userPassword,(error,valid)=>{
                if(error){
                    return done(error)
                }
                if(valid){
                    return done(null,getSeniorStudent.rows[0])
                }else{
                    return done(null,false)
                }
            })
        }

    }
} catch (error) {
    return done(error)
}
}))

passport.serializeUser((user,done)=>{
    return done(null,user)
})
passport.deserializeUser((user,done)=>{
    return done(null,user)
})

export default authRouter