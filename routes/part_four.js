import {join,dirname} from 'node:path';
import { fileURLToPath } from "node:url";
import convertToHTML from "../read.js";
import express from "express";

const partFour=express.Router();
const directory=dirname(dirname(fileURLToPath(import.meta.url)))
const seniorQuestions=join(directory,'questions','senior')
const ss1_food_nut=join(seniorQuestions,'')
const ss1_agric=join(seniorQuestions,'')
const ss1_yoruba=join(seniorQuestions,'')
const ss1_visual_art=join(seniorQuestions,'')

partFour.get('/Food%20and%20Nutrition',async(req,res)=>{
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
                questions:await convertToHTML(ss3_food_nut)
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
                questions:await convertToHTML(ss2_food_nut)
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
                questions:await convertToHTML(ss1_food_nut)
            })
            break;
        }
    }else{
        res.redirect('/login')
    }
})

partFour.get('/Yoruba',async(req,res)=>{
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
                student_class:req.user.class,
                subject:req.query.subject,
                questions:await convertToHTML(ss3_yoruba)
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
                questions:await convertToHTML(ss2_yoruba)
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
                questions:await convertToHTML(ss1_yoruba)
            })
            break;
        }
    }else{
        res.redirect('/login')
    }
})

partFour.get('/Agricultural%20Science',async(req,res)=>{
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
                questions:await convertToHTML(ss3_yoruba)
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
                questions:await convertToHTML(ss2_yoruba)
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
                questions:await convertToHTML(ss1_yoruba)
            })
            break;
        }
    }else{
        res.redirect('/login')
    }
})

partFour.get('/Visual%20Art',async(req,res)=>{
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
                questions:await convertToHTML(ss3_visual_art)
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
                questions:await convertToHTML(ss2_visual_art)
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
                questions:await convertToHTML(ss1_visual_art)
            })
            break;
        }
    }else{
        res.redirect('/login')
    }
})

export default partFour;