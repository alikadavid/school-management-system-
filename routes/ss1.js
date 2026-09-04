import express from "express";
import session from "express-session";
import mammoth from "mammoth";
import {join,dirname} from 'node:path';
import { fileURLToPath } from "node:url";
import convertToHTML from "../read.js";
import furthermath from "../test.js";

const SSS1=express.Router();
const directory=dirname(dirname(fileURLToPath(import.meta.url)))
const file=join(directory,'questions','senior')

const seniorQuestions=join(directory,'questions','senior')
const ss1_math=join(seniorQuestions,'SS3 MATHEMATICS.docx')
const ss1_english=join(seniorQuestions,'S.S.3 ENGLISH.docx')
const ss1_physics=join(seniorQuestions,'SS3 PHYSICS.docx');
const ss1_ict=join (seniorQuestions,'ss3 ict.docx');
const ss1_dp=join(seniorQuestions,'ss3 dataprocessing.docx');
const ss1_civic=join(seniorQuestions,'ss3 civic.docx');
const ss1_further_math=join(seniorQuestions,'ss3 furthermath.docx');
const ss1_geography=join(seniorQuestions,'')
const ss1_food_nut=join(seniorQuestions,'')
const ss1_agric=join(seniorQuestions,'')
const ss1_economics=join(seniorQuestions,'')
const ss1_govt=join(seniorQuestions,'')
const ss1_commerce=join(seniorQuestions,'')
const ss1_acct=join(seniorQuestions,'')
const ss1_literature=join(seniorQuestions,'')
const ss1_yoruba=join(seniorQuestions,'')
const ss1_visual_art=join(seniorQuestions,'')
const ss1_chemistry=join(seniorQuestions,'')
const ss1_biology=join(seniorQuestions,'')


SSS1.get('/Mathematics',async(req,res)=>{

    if(req.isAuthenticated() && req.user.class==='Senior Secondary School 1'){
        console.log(req.user)
        res.render('profile.ejs',{
            first_name:req.user.first_name,
            last_name:req.user.last_name,
            subjects:req.user.subjects,
            student_class:req.user.class,
            questions:await convertToHTML(ss3_math)
        })
    }else{
        res.redirect('/login')
    }

})

SSS1.get('/English',async(req,res)=>{
    if(req.isAuthenticated()&& req.user.class==='Senior Secondary School 1'){
        console.log(req.user)
        res.render('profile.ejs',{
            first_name:req.user.first_name,
            last_name:req.user.last_name,
            subjects:req.user.subjects,
            student_class:req.user.class,
            questions:await convertToHTML(ss3_english)
        })
    }else{
        res.redirect('/login')
    }
})

SSS1.get('/Physics',async(req,res)=>{
    if(req.isAuthenticated()&& req.user.class==='Senior Secondary School 1'){
        console.log(req.user)
        res.render('profile.ejs',{
            first_name:req.user.first_name,
            last_name:req.user.last_name,
            subjects:req.user.subjects,
            student_class:req.user.class,
            questions:await convertToHTML(ss3_physics)
        })
    }else{
        res.redirect('/login')
    }
})

SSS1.get('/ICT',async(req,res)=>{
    if(req.isAuthenticated()&& req.user.class==='Senior Secondary School 1'){
        console.log(req.user)
        res.render('profile.ejs',{
            first_name:req.user.first_name,
            last_name:req.user.last_name,
            subjects:req.user.subjects,
            student_class:req.user.class,
            questions:await convertToHTML(ss3_ict)
        })
    }else{
        res.redirect('/login')
    }
})
SSS1.get('/Data%20Processing',async(req,res)=>{
    if(req.isAuthenticated()&& req.user.class==='Senior Secondary School 1'){
        console.log(req.user)
        res.render('profile.ejs',{
            first_name:req.user.first_name,
            last_name:req.user.last_name,
            subjects:req.user.subjects,
            student_class:req.user.class,
            questions:await convertToHTML(ss3_dp)
        })
    }else{
        res.redirect('/login')
    }
})
SSS1.get('/Civic',async(req,res)=>{
    if(req.isAuthenticated()&& req.user.class==='Senior Secondary School 1'){
        console.log(req.user)
        res.render('profile.ejs',{
            first_name:req.user.first_name,
            last_name:req.user.last_name,
            subjects:req.user.subjects,
            student_class:req.user.class,
            questions:await convertToHTML(ss3_civic)
        })
    }else{
        res.redirect('/login')
    }
})

SSS1.get('/Further%20Mathematics',async(req,res)=>{
    if(req.isAuthenticated()&& req.user.class==='Senior Secondary School 1'){
        console.log(req.user);
        // console.log(await ss3(ss3_questions[6]))
        res.render('profile.ejs',{
            first_name:req.user.first_name,
            last_name:req.user.last_name,
            subjects:req.user.subjects,
            student_class:req.user.class,
            questions:await furthermath(ss3_further_math)
        })
    }else{
        res.redirect('/login')
    }
})
SSS1.get('/Chemistry',async(req,res)=>{
    if(req.isAuthenticated()&& req.user.class==='Senior Secondary School 1'){
        console.log(req.user);
        // console.log(await ss3(ss3_questions[6]))
        res.render('profile.ejs',{
            first_name:req.user.first_name,
            last_name:req.user.last_name,
            subjects:req.user.subjects,
            student_class:req.user.class,
            questions:await convertToHTML(ss3_chemistry)
        })
    }else{
        res.redirect('/login')
    }
})
SSS1.get('/Biology',async(req,res)=>{
    if(req.isAuthenticated()&& req.user.class==='Senior Secondary School 1'){
        console.log(req.user);
        // console.log(await ss3(ss3_questions[6]))
        res.render('profile.ejs',{
            first_name:req.user.first_name,
            last_name:req.user.last_name,
            subjects:req.user.subjects,
            student_class:req.user.class,
            questions:await convertToHTML(ss3_biology)
        })
    }else{
        res.redirect('/login')
    }
})
SSS1.get('/Economics',async(req,res)=>{
    if(req.isAuthenticated()&& req.user.class==='Senior Secondary School 1'){
        console.log(req.user);
        // console.log(await ss3(ss3_questions[6]))
        res.render('profile.ejs',{
            first_name:req.user.first_name,
            last_name:req.user.last_name,
            subjects:req.user.subjects,
            student_class:req.user.class,
            questions:await convertToHTML(ss3_economics)
        })
    }else{
        res.redirect('/login')
    }
})
SSS1.get('/Government',async(req,res)=>{
    if(req.isAuthenticated()&& req.user.class==='Senior Secondary School 1'){
        console.log(req.user);
        // console.log(await ss3(ss3_questions[6]))
        res.render('profile.ejs',{
            first_name:req.user.first_name,
            last_name:req.user.last_name,
            subjects:req.user.subjects,
            student_class:req.user.class,
            questions:await convertToHTML(ss3_govt)
        })
    }else{
        res.redirect('/login')
    }
})
SSS1.get('/Commerce',async(req,res)=>{
    if(req.isAuthenticated()&& req.user.class==='Senior Secondary School 1'){
        console.log(req.user);
        // console.log(await ss3(ss3_questions[6]))
        res.render('profile.ejs',{
            first_name:req.user.first_name,
            last_name:req.user.last_name,
            subjects:req.user.subjects,
            student_class:req.user.class,
            questions:await convertToHTML(ss3_commerce)
        })
    }else{
        res.redirect('/login')
    }
})
SSS1.get('/Accounting',async(req,res)=>{
    if(req.isAuthenticated()&& req.user.class==='Senior Secondary School 1'){
        console.log(req.user);
        // console.log(await ss3(ss3_questions[6]))
        res.render('profile.ejs',{
            first_name:req.user.first_name,
            last_name:req.user.last_name,
            subjects:req.user.subjects,
            student_class:req.user.class,
            questions:await convertToHTML(ss3_acct)
        })
    }else{
        res.redirect('/login')
    }
})
SSS1.get('/Literature',async(req,res)=>{
    if(req.isAuthenticated()&& req.user.class==='Senior Secondary School 1'){
        console.log(req.user);
        // console.log(await ss3(ss3_questions[6]))
        res.render('profile.ejs',{
            first_name:req.user.first_name,
            last_name:req.user.last_name,
            subjects:req.user.subjects,
            student_class:req.user.class,
            questions:await convertToHTML(ss3_literature)
        })
    }else{
        res.redirect('/login')
    }
})
SSS1.get('/Geography',async(req,res)=>{
    if(req.isAuthenticated()&& req.user.class==='Senior Secondary School 1'){
        console.log(req.user);
        // console.log(await ss3(ss3_questions[6]))
        res.render('profile.ejs',{
            first_name:req.user.first_name,
            last_name:req.user.last_name,
            subjects:req.user.subjects,
            student_class:req.user.class,
            questions:await convertToHTML(ss3_geography)
        })
    }else{
        res.redirect('/login')
    }
})
SSS1.get('/Visual%20Art',async(req,res)=>{
    if(req.isAuthenticated()&& req.user.class==='Senior Secondary School 1'){
        console.log(req.user);
        // console.log(await ss3(ss3_questions[6]))
        res.render('profile.ejs',{
            first_name:req.user.first_name,
            last_name:req.user.last_name,
            subjects:req.user.subjects,
            student_class:req.user.class,
            questions:await convertToHTML(ss3_visual_art)
        })
    }else{
        res.redirect('/login')
    }
})
SSS1.get('/Food%20and%20Nutrition',async(req,res)=>{
    if(req.isAuthenticated()&& req.user.class==='Senior Secondary School 1'){
        console.log(req.user);
        // console.log(await ss3(ss3_questions[6]))
        res.render('profile.ejs',{
            first_name:req.user.first_name,
            last_name:req.user.last_name,
            subjects:req.user.subjects,
            student_class:req.user.class,
            questions:await convertToHTML(ss3_food_nut)
        })
    }else{
        res.redirect('/login')
    }
})
SSS1.get('/Yoruba',async(req,res)=>{
    if(req.isAuthenticated()&& req.user.class==='Senior Secondary School 1'){
        console.log(req.user);
        // console.log(await ss3(ss3_questions[6]))
        res.render('profile.ejs',{
            first_name:req.user.first_name,
            last_name:req.user.last_name,
            subjects:req.user.subjects,
            student_class:req.user.class,
            questions:await convertToHTML(ss3_yoruba)
        })
    }else{
        res.redirect('/login')
    }
})
SSS1.get('/Agricultural%20Science',async(req,res)=>{
    if(req.isAuthenticated()&& req.user.class==='Senior Secondary School 1'){
        console.log(req.user);
        // console.log(await ss3(ss3_questions[6]))
        res.render('profile.ejs',{
            first_name:req.user.first_name,
            last_name:req.user.last_name,
            subjects:req.user.subjects,
            student_class:req.user.class,
            questions:await convertToHTML(ss3_agric)
        })
    }else{
        res.redirect('/login')
    }
})
export default SSS1