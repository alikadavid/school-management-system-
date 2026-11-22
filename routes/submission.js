import express from 'express'
import db from '../db.js'
import { getScoreSS1,getScoreSS2,getScoreSS3 } from '../score_sss.js'
import { getScoreJSS1,getScoreJSS2,getScoreJSS3 } from '../score_jss.js'

const submit=express.Router()

submit.post('/submit',async(req,res)=>{
    if(req.isAuthenticated() && req.user.class==='Senior Secondary School 3' ){
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
    if(req.isAuthenticated() && req.user.class==='Junior Secondary School 1' ){
        res.render('profile.ejs',{
            first_name:req.user.first_name,
            last_name:req.user.last_name,
            subjects:req.user.subjects,
            subject:req.query.subject,
            student_class:req.user.class,
            questions:'',
            report: (await getScoreJSS1(req,res))[0],
            percentage: (await getScoreJSS1(req,res))[1],
        })
    }
    if(req.isAuthenticated() && req.user.class==='Junior Secondary School 2' ){
        console.log(await getScoreJSS2(req,res))
        res.render('profile.ejs',{
            first_name:req.user.first_name,
            last_name:req.user.last_name,
            subjects:req.user.subjects,
            subject:req.query.subject,
            student_class:req.user.class,
            questions:'',
            report: (await getScoreJSS2(req,res))[0],
            percentage: (await getScoreJSS2(req,res))[1],
        })
    }
    if(req.isAuthenticated() && req.user.class==='Junior Secondary School 3' ){
        res.render('profile.ejs',{
            first_name:req.user.first_name,
            last_name:req.user.last_name,
            subjects:req.user.subjects,
            subject:req.query.subject,
            student_class:req.user.class,
            questions:'',
            report: (await getScoreJSS3(req,res))[0],
            percentage: (await getScoreJSS3(req,res))[1],
        })
    }
})
export default submit