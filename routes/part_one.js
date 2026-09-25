import express from "express";
import {join,dirname} from 'node:path';
import { fileURLToPath } from "node:url";
import convertToHTML from "../read.js";


const partOne=express.Router();
const directory=dirname(dirname(fileURLToPath(import.meta.url)))
// console.log(directory);

const seniorQuestions=join(directory,'questions','senior')

const ss3_govt=join(seniorQuestions,'SSS3','')
const ss3_commerce=join(seniorQuestions,'SSS3','')
const ss3_acct=join(seniorQuestions,'SSS3','')
const ss3_literature=join(seniorQuestions,'SSS3','')
const ss3_geography=join(seniorQuestions,'SSS3','')

const ss2_govt=join(seniorQuestions,'SSS2','')
const ss2_commerce=join(seniorQuestions,'SSS2','')
const ss2_acct=join(seniorQuestions,'SSS2','')
const ss2_literature=join(seniorQuestions,'SSS2','')
const ss2_geography=join(seniorQuestions,'SSS2','')

const ss1_govt=join(seniorQuestions,'SSS1','')
const ss1_commerce=join(seniorQuestions,'SSS1','')
const ss1_acct=join(seniorQuestions,'SSS1','')
const ss1_literature=join(seniorQuestions,'SSS1','')
const ss1_geography=join(seniorQuestions,'SSS1','')

partOne.get('/Government',async(req,res)=>{
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
                questions:await convertToHTML(ss3_govt)
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
                questions:await convertToHTML(ss2_govt)
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
                questions:await convertToHTML(ss1_govt)
            })
            break;
        }
    }else{
        res.redirect('/login')
    }
})
partOne.get('/Commerce',async(req,res)=>{
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
                questions:await convertToHTML(ss3_commerce)
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
                questions:await convertToHTML(ss2_commerce)
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
                questions:await convertToHTML(ss1_commerce)
            })
            break;
        }
    }else{
        res.redirect('/login')
    }
})
partOne.get('/Accounting',async(req,res)=>{
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
                questions:await convertToHTML(ss3_acct)
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
                questions:await convertToHTML(ss2_acct)
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
                questions:await convertToHTML(ss1_acct)
            })
            break;
        }
    }else{
        res.redirect('/login')
    }
})
partOne.get('/Literature',async(req,res)=>{
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
                questions:await convertToHTML(ss3_literature)
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
                questions:await convertToHTML(ss2_literature)
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
                questions:await convertToHTML(ss1_literature)
            })
            break;
        }
    }else{
        res.redirect('/login')
    }
})
partOne.get('/Geography',async(req,res)=>{
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
                questions:await convertToHTML(ss3_geography)
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
                questions:await convertToHTML(ss2_geography)
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
                questions:await convertToHTML(ss1_geography)
            })
            break;
        }
    }else{
        res.redirect('/login')
    }
})

export default partOne