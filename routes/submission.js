import express from 'express'
import db from '../db.js'
import getScoreSS1 from '../score_ss1.js'
import getScoreSS2 from '../score_ss2.js'
import getScoreSS3 from '../score_ss3.js'

const submit=express.Router()

submit.post('/submit',async(req,res)=>{
    console.log(req.isAuthenticated())
    console.log(req.user)
    console.log(Object.entries(req.body).filter(item=>item[1].length===1));

    if(req.isAuthenticated() && req.user.class==='Senior Secondary School 3' ){
        console.log(await getScoreSS3(req,res));
        res.render('profile.ejs',{
            first_name:req.user.first_name,
            last_name:req.user.last_name,
            subjects:req.user.subjects,
            subject:req.query.subject,
            student_class:req.user.class,
            questions:'',
            report: (await getScoreSS3(req,res))[0],
            percentage: (await getScoreSS3(req,res))[1],
        })
    }
    if(req.isAuthenticated() && req.user.class==='Senior Secondary School 2' ){
        await getScoreSS2(req,res);
        res.render('profile.ejs',{
            first_name:req.user.first_name,
            last_name:req.user.last_name,
            subjects:req.user.subjects,
            subject:req.query.subject,
            student_class:req.user.class,
            questions:'',
            report: (await getScoreSS2(req,res))[0],
            percentage: (await getScoreSS2(req,res))[1],
        })
    }
    if(req.isAuthenticated() && req.user.class==='Senior Secondary School 1' ){
        await getScoreSS2(req,res);
        res.render('profile.ejs',{
            first_name:req.user.first_name,
            last_name:req.user.last_name,
            subjects:req.user.subjects,
            subject:req.query.subject,
            student_class:req.user.class,
            questions:'',
            report: (await getScoreSS1(req,res))[0],
            percentage: (await getScoreSS1(req,res))[1],
        })
    }
})
// `-- create table ss3_further_math_solutions(
// -- 	question serial primary key,
// -- 	answer varchar(1)
// -- )
// -- insert into ss3_further_math_solutions(answer)
// -- select unnest(array['A','B','D','B','C','D','B','A','B','A','A','C','A','D','B','A','B','D','A','A'])
// -- select * from ss3_further_math_solutions`
export default submit