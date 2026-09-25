import express from 'express';
import 'dotenv/config' ;
import db from '../db.js';
import passport from 'passport';
import bcrypt from 'bcrypt';
import LocalStrategy from 'passport-local';

const tutor=express.Router();

async function getJuniorSubjects() {
    const result= await db.query(`select subject from junior_subjects`)
    const juniorSubjects= result.rows.map(item=>item.subject)
    return juniorSubjects;
}

async function getSeniorSubjects() {
    const result=await db.query(`select subject from senior_subjects`);
    const seniorSubjects= result.rows.map(item=>item.subject)
    return seniorSubjects;
}

async function getJuniorClasses() {
    const result=await db.query(`select name from classes`);
    const getClasses=result.rows.map(item=>item.name);
    const juniorClasses=getClasses.filter(item=>item.includes('Junior'));
    return juniorClasses;
}
async function getSeniorClasses() {
    const result=await db.query(`select name from classes`);
    const getClasses=result.rows.map(item=>item.name);
    const seniorClasses=getClasses.filter(item=>item.includes('Senior'));
    return seniorClasses;
}
async function getClasses() {
    const result=await db.query(`select name from classes`);
    const getClasses=result.rows.map(item=>item.name);
    return getClasses;
}

tutor.get('/tutor/signup',async(req,res)=>{
    const junior_subjects=await getJuniorSubjects();
    const senior_subjects=await getSeniorSubjects();
    const junior_classes=await getJuniorClasses();
    const senior_classes=await getSeniorClasses();
    const abbrJunior=['JSS1','JSS2','JSS3'];
    const abbrSenior=['SSS1','SSS2','SSS3'];

    res.render('tutor_signup.ejs',{
        junior_subjects:junior_subjects,
        senior_subjects:senior_subjects,
        junior_classes:junior_classes,
        senior_classes:senior_classes,
        abbrJunior:abbrJunior,
        abbrSenior:abbrSenior
    })
})
tutor.post('/tutor_signup',async(req,res)=>{

    const junior_subjects=await getJuniorSubjects();
    const senior_subjects=await getSeniorSubjects();
    const junior_classes=await getJuniorClasses();
    const senior_classes=await getSeniorClasses();
    const allSubjects=[...junior_subjects,...senior_subjects];
    const allClasses=await getClasses();

    const password=req.body.password;
    const first_name=req.body.first_name;
    const last_name=req.body.last_name;
    const email=req.body.email;

    const arrayOfSubjects = Object.entries(req.body).filter((item)=>{
        if(allSubjects.includes(item[0])){
            return item
        }
    })
    const arrayOfSubjectId=arrayOfSubjects.map((item)=>{
        if(item[0]!=='' && (item[1]!=='' && !Array.isArray(item[1]))){
            return [item[0],allClasses.indexOf(item[1])+1]
        }
        if(item[0]!==''  && Array.isArray(item[1])){
            const arr=item[1]
            let new_arr=[]
            for(let i=0;i<arr.length;i++){
                new_arr.push(allClasses.indexOf(arr[i])+1)
            }
            return [item[0],new_arr]
        }
    })
    // create profile
    bcrypt.hash(password,10,async(err,hash)=>{
        if(hash){
            try {
                await db.query('begin');
                const createTeacher=`
                insert into teacher_bio(first_name,last_name,email,password) values($1,$2,$3,$4) returning id
                `
                const response=await db.query(createTeacher,[first_name,last_name,email,hash])
                const id=response.rows[0].id
                for(let i=0;i<arrayOfSubjectId.length;i++){
                    const enroll=arrayOfSubjectId[i];
                    const subject=enroll[0];
                    const classes=enroll[1];

                    if(Array.isArray(classes)){
                        for(let j=0;j<classes.length;j++){
                            if(classes[j]>=1 && classes[j]<=3){
                                const subject_id=junior_subjects.indexOf(subject)+1;
                                await db.query(`insert into teacher_enrollment(teacher_id,junior_subject_id,junior_class_id) 
                                values ($1,$2,$3)`,[id,subject_id,classes[j]])
                            }   
                            if(classes[j]>=4 && classes[j]<=6){
                                const subject_id=senior_subjects.indexOf(subject)+1;
                                await db.query(`insert into teacher_enrollment(teacher_id,senior_subject_id,senior_class_id) values($1,$2,$3)`,
                                [id,subject_id,classes[j]]);
                            }
                        }
                    }
                    if(!Array.isArray(classes)){
                        if(classes>=1 && classes <=3){
                            const subject_id=junior_subjects.indexOf(subject)+1;
                            await db.query(`insert into teacher_enrollment(teacher_id,junior_subject_id,junior_class_id) values ($1,$2,$3)`,
                            [id,subject_id,classes]);
                        }
                        if(classes>=4 && classes<=6){
                            const subject_id=senior_subjects.indexOf(subject)+1;
                            await db.query(`insert into teacher_enrollment(teacher_id,senior_subject_id,senior_class_id) values($1,$2,$3)`,
                            [id,subject_id,classes]);
                        }
                    }
                }
                await db.query('commit')
                // next order of business: create login session and redirect to tutor profile 
                const getUser=`select teacher_id , password
                from teacher_enrollment
                join teacher_bio
                on teacher_bio.id=teacher_enrollment.teacher_id

                where teacher_bio.email=$1
                group by teacher_id,password`

                const queryForUser=await db.query(getUser,[email])
                const user=queryForUser.rows[0];
                req.login(user,(error)=>{
                    if(error){
                        res.send(error.detail)
                    }
                    res.redirect('/profile')
                })
                // res.send('you have been registered as a teacher')  
            } catch (error) {
                await db.query(`rollback`)
                return res.send(error.detail)
            }
        }
    })
})
tutor.get('/t/login',(req,res)=>{
    res.render('tutor_login.ejs')
})
tutor.post('/t/login',passport.authenticate('teacher-local',{
    successRedirect:'/profile',
    failureRedirect:'/t/login'
}))
tutor.get('/profile',async(req,res)=>{
    if(req.isAuthenticated()){
        const teacher_classes=`select 
        teacher_id,array_agg(junior.name) as "junior_classes",
        array_agg(senior.name) as "senior_classes",
        senior_subjects.subject as "senior_subjects",junior_subjects.subject as "junior_subjects"

        from teacher_enrollment
        left join junior_subjects
        on junior_subjects.id=teacher_enrollment.junior_subject_id
        left join senior_subjects
        on senior_subjects.id=teacher_enrollment.senior_subject_id
        left join classes as senior
        on senior.id=teacher_enrollment.senior_class_id
        left join classes as junior
        on junior.id=teacher_enrollment.junior_class_id

        where teacher_id=$1
        group by teacher_id,senior_subjects.subject,junior_subjects.subject`

        const getClasses=await db.query(teacher_classes,[req.user.teacher_id]);
        // console.log(getClasses.rows)
        const enrollment=getClasses.rows.map((item)=>{
            if(item.junior_subjects===null && item.senior_subjects){
                return [item.senior_subjects,item.senior_classes]
            }
            if(item.senior_subjects===null && item.junior_subjects){
                return [item.junior_subjects,item.junior_classes]
            }
            if(item.senior_subjects && item.junior_subjects){
                return [item.junior_subjects,item.junior_classes,item.senior_subjects,item.senior_classes];
            }
        })
        res.render('tutor_profile.ejs',{
            enrollment:enrollment
        })
    }else{
        res.redirect('/t/login')
    }
})
passport.use('teacher-local',new LocalStrategy({usernameField:'email'},
async(email,password,done)=>{
    const queryForUser=`select teacher_id , password
    from teacher_enrollment
    join teacher_bio
    on teacher_bio.id=teacher_enrollment.teacher_id

    where teacher_bio.email=$1
    group by teacher_id,password`
    const user= await db.query(queryForUser,[email])
    if(user.rows.length===0){
        return done(null,false)
    }
    else{
        const savedPassword=user.rows[0].password
        bcrypt.compare(password,savedPassword,(error,valid)=>{
            if(error){
                return done(error)
            }
            if(valid){
                return done(null,user.rows[0])
            }else{
                return done(null,false,{ message: 'Incorrect username or password.' });
            }
        })
    }
}))
passport.serializeUser((user,done)=>{
    return done(null,user)
})
passport.deserializeUser((user,done)=>{
    return done(null,user)
})
export default tutor