import bcrypt from 'bcrypt'
import passport from 'passport'
import LocalStrategy from 'passport-local'
import session from 'express-session'
import express from 'express'
import db from '../db.js'


const authRouter=express.Router();
const saltRounds=10;

authRouter.get('/test',async(req,res)=>{
    // const user=req.user.email;
    // console.log(req.user)
    console.log(req)
    console.log(req.isAuthenticated())
    if(req.isAuthenticated()){
        // console.log(req)
        const checkEmail= await db.query(`select senior_student_id,junior_student_id from contact_detail where email=$1`,[req.user.email]);
        if(checkEmail.rows[0].junior_student_id){
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

                group by first_name,last_name,email,classes.name`
            const juniorProfile= await db.query(userInfo,[user]);
            const first_name=juniorProfile.rows[0].first_name;
            const last_name=juniorProfile.rows[0].last_name;
            const subjects=juniorProfile.rows[0].subjects;

            res.render('profile.ejs',{
                first_name:first_name,
                last_name:last_name,
                subjects:subjects
            })
            res.json(juniorProfile.rows[0])
        }
        if(checkEmail.rows[0].senior_student_id){
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

            const seniorProfile= await db.query(userInfo,[req.user.email]);
            const first_name=seniorProfile.rows[0].first_name;
            const last_name=seniorProfile.rows[0].last_name;
            const subjects=seniorProfile.rows[0].subjects
            // res.json(seniorProfile.rows[0])
            res.render('profile.ejs',{
                first_name:first_name,
                last_name:last_name,
                subjects:subjects
            })
        }
        else{
            res.redirect('/login')
        }
    }}
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
                res.json(getUserInfo)
                console.log(getUserInfo)
                // res.render('profile.ejs',{
                //     first_name:getUserInfo[0].first_name,
                //     last_name:getUserInfo[0].last_name,
                //     subjects:getUserInfo[0].subjects,
                // })
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
                res.json(getUserInfo)
                // res.render('profile.ejs',{
                //     first_name:getUserInfo.rows[0].first_name,
                //     last_name:getUserInfo[0].rows.last_name,
                //     subjects:getUserInfo[0].rows.subjects
                // })
            }
        }
    } catch (error) {
        console.log(error.detail)
        res.send(error.detail)
    }
})

authRouter.get('/login',(req,res)=>{
    res.render('login.ejs');
})
authRouter.post('/login',passport.authenticate('local',{
    successRedirect:'/test',
    failureRedirect:'/login'
}))

passport.use(new LocalStrategy({usernameField:'email'},
async(email,password,done)=>{
try {
  const getUser= await db.query(`select users.email,password,
    senior_students.class_id,junior_student_id,
    senior_student_id from users

    join contact_detail
    on contact_detail.email=users.email
    join senior_students
    on senior_students.id=contact_detail.senior_student_id

    where users.email=$1`,[email])
    if(getUser.rows.length===0){
        return done(null,false)
    }else{
        const userPassword=getUser.rows[0].password;
        bcrypt.compare(password,userPassword,(error,valid)=>{
            if(error){
                return done(error)
            }
            if(valid){
                return done(null,getUser.rows[0])
            }else{
                return done(null,false)
            }
        })
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