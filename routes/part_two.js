import express from "express";
import {join,dirname} from 'node:path';
import { fileURLToPath } from "node:url";
import convertToHTML from "../read.js";
import furthermath from "../test.js";

const partTwo=express.Router();
const directory=dirname(dirname(fileURLToPath(import.meta.url)))
const seniorQuestions=join(directory,'questions','senior');

const ss3_civic=join(seniorQuestions,'ss3 civic.docx');
const ss3_further_math=join(seniorQuestions,'ss3 furthermath.docx');
const ss3_chemistry=join(seniorQuestions,'');
const ss3_biology=join(seniorQuestions,'');
const ss3_economics=join(seniorQuestions,'');

const ss2_civic=join(seniorQuestions,'ss3 civic.docx');
const ss2_further_math=join(seniorQuestions,'ss3 furthermath.docx');
const ss2_chemistry=join(seniorQuestions,'');
const ss2_biology=join(seniorQuestions,'');
const ss2_economics=join(seniorQuestions,'ss2econs.docx');

const ss1_civic=join(seniorQuestions,'ss3 civic.docx');
const ss1_further_math=join(seniorQuestions,'ss3 furthermath.docx');
const ss1_chemistry=join(seniorQuestions,'');
const ss1_biology=join(seniorQuestions,'');
const ss1_economics=join(seniorQuestions,'');

partTwo.get('/Civic',async(req,res)=>{
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
                questions:await convertToHTML(ss3_civic)
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

partTwo.get('/Further%20Mathematics',async(req,res)=>{
    if(req.isAuthenticated()){
        console.log(req.user);
        switch (req.user.class) {
            case 'Senior Secondary School 3':
            console.log(req.user.class)
            res.render('profile.ejs',{
                first_name:req.user.first_name,
                last_name:req.user.last_name,
                subjects:req.user.subjects,
                subject:req.query.subject,
                student_class:req.user.class,
                questions:await furthermath(ss3_further_math)
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
                questions:await furthermath(ss2_further_math)
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
                questions:await furthermath(ss1_further_math)
            })
            break;
        }
    }else{
        res.redirect('/login')
    }
})
partTwo.get('/Chemistry',async(req,res)=>{
    if(req.isAuthenticated()){
        console.log(req.user);
        // console.log(await ss3(ss3_questions[6]))
        switch (req.user.class) {
            case 'Senior Secondary School 3':
            console.log(req.user.class)
            res.render('profile.ejs',{
                first_name:req.user.first_name,
                last_name:req.user.last_name,
                subjects:req.user.subjects,
                subject:req.query.subject,
                student_class:req.user.class,
                questions:await convertToHTML(ss3_chemistry)
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
                questions:await convertToHTML(ss2_chemistry)
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
                questions:await convertToHTML(ss1_chemistry)
            })
            break;
        }
    }else{
        res.redirect('/login')
    }
})
partTwo.get('/Biology',async(req,res)=>{
    if(req.isAuthenticated()){
        console.log(req.user);
        // console.log(await ss3(ss3_questions[6]))
        switch (req.user.class) {
            case 'Senior Secondary School 3':
            console.log(req.user.class)
            res.render('profile.ejs',{
                first_name:req.user.first_name,
                last_name:req.user.last_name,
                subjects:req.user.subjects,
                subject:req.query.subject,
                student_class:req.user.class,
                questions:await convertToHTML(ss3_biology)
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
                questions:await convertToHTML(ss2_biology)
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
                questions:await convertToHTML(ss1_biology)
            })
            break;
        }
    }else{
        res.redirect('/login')
    }
})
partTwo.get('/Economics',async(req,res)=>{
    if(req.isAuthenticated()){
        console.log(req.user);
        // console.log(await ss3(ss3_questions[6]))
        switch (req.user.class) {
            case 'Senior Secondary School 3':
            console.log(req.user.class)
            res.render('profile.ejs',{
                first_name:req.user.first_name,
                last_name:req.user.last_name,
                subjects:req.user.subjects,
                subject:req.query.subject,
                student_class:req.user.class,
                questions:await convertToHTML(ss3_economics)
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
                questions:await furthermath(ss2_economics)
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
                questions:await convertToHTML(ss1_economics)
            })
            break;
        }
    }else{
        res.redirect('/login')
    }
})

export default partTwo