import express from "express";
import session from "express-session";
import mammoth from "mammoth";
import {join,dirname} from 'node:path';
import { fileURLToPath } from "node:url";
import convertToHTML from "../read.js";
import furthermath from "../test.js";

const partThree=express.Router();

const directory=dirname(dirname(fileURLToPath(import.meta.url)))
const seniorQuestions=join(directory,'questions','senior')
const ss3_math=join(seniorQuestions,'SS3 MATHEMATICS.docx')
const ss3_physics=join(seniorQuestions,'SS3 PHYSICS.docx');
const ss3_ict=join (seniorQuestions,'ss3 ict.docx');
const ss3_dp=join(seniorQuestions,'ss3 dataprocessing.docx');

const ss2_math=join(seniorQuestions,'SS3 MATHEMATICS.docx')
const ss2_physics=join(seniorQuestions,'SS3 PHYSICS.docx');
const ss2_ict=join (seniorQuestions,'ss3 ict.docx');
const ss2_dp=join(seniorQuestions,'ss3 dataprocessing.docx');

const ss1_math=join(seniorQuestions,'SS3 MATHEMATICS.docx')
const ss1_physics=join(seniorQuestions,'SS3 PHYSICS.docx');
const ss1_ict=join (seniorQuestions,'ss3 ict.docx');
const ss1_dp=join(seniorQuestions,'ss3 dataprocessing.docx');

partThree.get('/Mathematics',async(req,res)=>{
    if(req.isAuthenticated()){
        switch (req.user.class) {
            case 'Senior Secondary School 3':
            console.log(req.user.class)
            res.render('profile.ejs',{
                first_name:req.user.first_name,
                last_name:req.user.last_name,
                subjects:req.user.subjects,
                subject:req.query.subject,
                student_class:req.user.class,
                questions:await furthermath(ss3_math)
            })
            break;
            case 'Senior Secondary School 2':
            console.log(req.user.class)
            res.render('profile.ejs',{
                first_name:req.user.first_name,
                last_name:req.user.last_name,
                subjects:req.user.subjects,
                subject:req.query.subject,
                student_class:req.user.class,
                questions:await convertToHTML(ss2_math)
            })
            break;
            case 'Senior Secondary School 1':
            console.log(req.user.class)
            res.render('profile.ejs',{
                first_name:req.user.first_name,
                last_name:req.user.last_name,
                subjects:req.user.subjects,
                subject:req.query.subject,
                student_class:req.user.class,
                questions:await convertToHTML(ss1_math)
            })
            break;
        }
    }else{
        res.redirect('/login')
    }
    const result=await mammoth.convertToHtml({path:join(seniorQuestions,'ss3 furthermath.docx')})
// console.log(result.value)
console.log(result.messages)
})

partThree.get('/English',async(req,res)=>{

    if(req.isAuthenticated()){
        console.log(req.url)
        console.log(req.query)
        switch (req.user.class) {
            case 'Senior Secondary School 3':
            console.log(req.user.class)
            res.render('profile.ejs',{
                first_name:req.user.first_name,
                last_name:req.user.last_name,
                subjects:req.user.subjects,
                subject:req.query.subject,
                student_class:req.user.class,
                questions:await convertToHTML(ss3_english)
            })
            break;
            case 'Senior Secondary School 2':
            console.log(req.user.class)
            res.render('profile.ejs',{
                first_name:req.user.first_name,
                last_name:req.user.last_name,
                subjects:req.user.subjects,
                subject:req.query.subject,
                student_class:req.user.class,
                questions:await convertToHTML(ss2_english)
            })
            break;
            case 'Senior Secondary School 1':
            console.log(req.user.class)
            res.render('profile.ejs',{
                first_name:req.user.first_name,
                last_name:req.user.last_name,
                subjects:req.user.subjects,
                subject:req.query.subject,
                student_class:req.user.class,
                questions:await convertToHTML(ss1_english)
            })
            break;
        }
    }else{
        res.redirect('/login')
    }
})

partThree.get('/Physics',async(req,res)=>{
    if(req.isAuthenticated()){
        console.log(req.user)
        switch (req.user.class) {
            case 'Senior Secondary School 3':
            console.log(req.user.class)
            res.render('profile.ejs',{
                first_name:req.user.first_name,
                last_name:req.user.last_name,
                subjects:req.user.subjects,
                subject:req.query.subject,
                student_class:req.user.class,
                questions:await convertToHTML(ss3_physics)
            })
            break;
            case 'Senior Secondary School 2':
            console.log(req.user.class)
            res.render('profile.ejs',{
                first_name:req.user.first_name,
                last_name:req.user.last_name,
                subjects:req.user.subjects,
                subject:req.query.subject,
                student_class:req.user.class,
                questions:await convertToHTML(ss2_physics)
            })
            break;
            case 'Senior Secondary School 1':
            console.log(req.user.class)
            res.render('profile.ejs',{
                first_name:req.user.first_name,
                last_name:req.user.last_name,
                subjects:req.user.subjects,
                subject:req.query.subject,
                student_class:req.user.class,
                questions:await convertToHTML(ss1_physics)
            })
            break;
        }
    }else{
        res.redirect('/login')
    }
})

partThree.get('/ICT',async(req,res)=>{
    if(req.isAuthenticated()){
        console.log(req.user)
        switch (req.user.class) {
            case 'Senior Secondary School 3':
            console.log(req.user.class)
            res.render('profile.ejs',{
                first_name:req.user.first_name,
                last_name:req.user.last_name,
                subjects:req.user.subjects,
                subject:req.query.subject,
                student_class:req.user.class,
                questions:await convertToHTML(ss3_ict)
            })
            break;
            case 'Senior Secondary School 2':
            console.log(req.user.class)
            res.render('profile.ejs',{
                first_name:req.user.first_name,
                last_name:req.user.last_name,
                subjects:req.user.subjects,
                subject:req.query.subject,
                student_class:req.user.class,
                questions:await convertToHTML(ss2_ict)
            })
            break;
            case 'Senior Secondary School 1':
            console.log(req.user.class)
            res.render('profile.ejs',{
                first_name:req.user.first_name,
                last_name:req.user.last_name,
                subjects:req.user.subjects,
                subject:req.query.subject,
                student_class:req.user.class,
                questions:await convertToHTML(ss1_ict)
            })
            break;
        }
    }else{
        res.redirect('/login')
    }
})
partThree.get('/Data%20Processing',async(req,res)=>{
    if(req.isAuthenticated()){
        console.log(req.user)
        switch (req.user.class) {
            case 'Senior Secondary School 3':
            console.log(req.user.class)
            res.render('profile.ejs',{
                first_name:req.user.first_name,
                last_name:req.user.last_name,
                subjects:req.user.subjects,
                subject:req.query.subject,
                student_class:req.user.class,
                questions:await convertToHTML(ss3_dp)
            })
            break;
            case 'Senior Secondary School 2':
            console.log(req.user.class)
            res.render('profile.ejs',{
                first_name:req.user.first_name,
                last_name:req.user.last_name,
                subjects:req.user.subjects,
                subject:req.query.subject,
                student_class:req.user.class,
                questions:await convertToHTML(ss2_dp)
            })
            break;
            case 'Senior Secondary School 1':
            console.log(req.user.class)
            res.render('profile.ejs',{
                first_name:req.user.first_name,
                last_name:req.user.last_name,
                subjects:req.user.subjects,
                subject:req.query.subject,
                student_class:req.user.class,
                questions:await convertToHTML(ss1_dp)
            })
            break;
        }
    }else{
        res.redirect('/login')
    }
})

export default partThree