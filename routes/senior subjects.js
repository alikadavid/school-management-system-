import express from "express";
import session from "express-session";
import mammoth from "mammoth";
import {join,dirname} from 'node:path';
import { fileURLToPath } from "node:url";
import ss3 from "../read.js";

const SSS3=express.Router();
const directory=dirname(dirname(fileURLToPath(import.meta.url)))
const file=join(directory,'questions','senior')


const seniorQuestions=join(directory,'questions','senior')
const ss3_math=join(seniorQuestions,'SS3 MATHEMATICS.docx')
const ss3_english=join(seniorQuestions,'S.S.3 ENGLISH.docx')
const ss3_physics=join(seniorQuestions,'SS3 PHYSICS.docx');
const ss3_ict=join (seniorQuestions,'ss3 ict.docx');
const ss3_dp=join(seniorQuestions,'ss3 dataprocessing.docx');
const ss3_civic=join(seniorQuestions,'ss3 civic.docx');
const ss3_further_math=join(seniorQuestions,'ss3 furthermath.docx');
const ss3_questions=[ss3_math,ss3_english,ss3_physics,ss3_ict,ss3_dp,ss3_civic,ss3_further_math]

SSS3.get('/Mathematics',async(req,res)=>{
const result=await mammoth.convertToHtml({path:join(file,'plain.docx')})
// console.log(result.value)
    if(req.isAuthenticated() && req.user.class==='Senior Secondary School 3'){
        console.log(req.user)
        res.render('profile.ejs',{
            first_name:req.user.first_name,
            last_name:req.user.last_name,
            subjects:req.user.subjects,
            student_class:req.user.class,
            questions:await ss3(ss3_questions[0])
        })
    }else{
        res.redirect('/login')
    }

})

SSS3.get('/English',async(req,res)=>{
    if(req.isAuthenticated()&& req.user.class==='Senior Secondary School 3'){
        console.log(req.user)
        res.render('profile.ejs',{
            first_name:req.user.first_name,
            last_name:req.user.last_name,
            subjects:req.user.subjects,
            student_class:req.user.class,
            questions:await ss3(ss3_questions[1])
        })
    }else{
        res.redirect('/login')
    }
})

SSS3.get('/Physics',async(req,res)=>{
    if(req.isAuthenticated()&& req.user.class==='Senior Secondary School 3'){
        console.log(req.user)
        res.render('profile.ejs',{
            first_name:req.user.first_name,
            last_name:req.user.last_name,
            subjects:req.user.subjects,
            student_class:req.user.class,
            questions:await ss3(ss3_questions[2])
        })
    }else{
        res.redirect('/login')
    }
})

SSS3.get('/ICT',async(req,res)=>{
    if(req.isAuthenticated()&& req.user.class==='Senior Secondary School 3'){
        console.log(req.user)
        res.render('profile.ejs',{
            first_name:req.user.first_name,
            last_name:req.user.last_name,
            subjects:req.user.subjects,
            student_class:req.user.class,
            questions:await ss3(ss3_questions[3])
        })
    }else{
        res.redirect('/login')
    }
})
SSS3.get('/Data%20Processing',async(req,res)=>{
    if(req.isAuthenticated()&& req.user.class==='Senior Secondary School 3'){
        console.log(req.user)
        res.render('profile.ejs',{
            first_name:req.user.first_name,
            last_name:req.user.last_name,
            subjects:req.user.subjects,
            student_class:req.user.class,
            questions:await ss3(ss3_questions[4])
        })
    }else{
        res.redirect('/login')
    }
})
SSS3.get('/Civic',async(req,res)=>{
    if(req.isAuthenticated()&& req.user.class==='Senior Secondary School 3'){
        console.log(req.user)
        res.render('profile.ejs',{
            first_name:req.user.first_name,
            last_name:req.user.last_name,
            subjects:req.user.subjects,
            student_class:req.user.class,
            questions:await ss3(ss3_questions[5])
        })
    }else{
        res.redirect('/login')
    }
})

SSS3.get('/Further%20Mathematics',async(req,res)=>{
    if(req.isAuthenticated()&& req.user.class==='Senior Secondary School 3'){
        console.log(req.user);
        console.log(await ss3(ss3_questions[6]))
        res.render('profile.ejs',{
            first_name:req.user.first_name,
            last_name:req.user.last_name,
            subjects:req.user.subjects,
            student_class:req.user.class,
            questions:await ss3(ss3_questions[6])
        })
    }else{
        res.redirect('/login')
    }
})

export default SSS3