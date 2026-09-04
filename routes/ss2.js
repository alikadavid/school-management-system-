import express from "express";
import session from "express-session";
import mammoth from "mammoth";
import {join,dirname} from 'node:path';
import { fileURLToPath } from "node:url";
import convertToHTML from "../read.js";
import furthermath from "../test.js";

const SSS2=express.Router();
const directory=dirname(dirname(fileURLToPath(import.meta.url)))
const file=join(directory,'questions','senior')

const seniorQuestions=join(directory,'questions','senior');
const ss2_math=join(seniorQuestions,'SS3 MATHEMATICS.docx');
const ss2_english=join(seniorQuestions,'S.S.3 ENGLISH.docx');
const ss2_physics=join(seniorQuestions,'SS3 PHYSICS.docx');
const ss2_ict=join (seniorQuestions,'ss3 ict.docx');
const ss2_dp=join(seniorQuestions,'ss3 dataprocessing.docx');
const ss2_civic=join(seniorQuestions,'ss3 civic.docx');
const ss2_further_math=join(seniorQuestions,'ss3 furthermath.docx');
const ss2_geography=join(seniorQuestions,'');
const ss2_food_nut=join(seniorQuestions,'');
const ss2_agric=join(seniorQuestions,'');
const ss2_economics=join(seniorQuestions,'');
const ss2_govt=join(seniorQuestions,'');
const ss2_commerce=join(seniorQuestions,'');
const ss2_acct=join(seniorQuestions,'');
const ss2_literature=join(seniorQuestions,'');
const ss2_yoruba=join(seniorQuestions,'');
const ss2_visual_art=join(seniorQuestions,'');
const ss2_chemistry=join(seniorQuestions,'');
const ss2_biology=join(seniorQuestions,'');


SSS2.get('/Mathematics',async(req,res)=>{

    if(req.isAuthenticated() && req.user.class==='Senior Secondary School 2'){
        console.log(req.user)
        console.log('ss2 student')
        res.render('profile.ejs',{
            first_name:req.user.first_name,
            last_name:req.user.last_name,
            subjects:req.user.subjects,
            student_class:req.user.class,
            questions:await convertToHTML(ss2_math)
        })
    }else{
        res.redirect('/login')
    }

})

SSS2.get('/English',async(req,res)=>{
    if(req.isAuthenticated()&& req.user.class==='Senior Secondary School 2'){
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

SSS2.get('/Physics',async(req,res)=>{
    if(req.isAuthenticated()&& req.user.class==='Senior Secondary School 2'){
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

SSS2.get('/ICT',async(req,res)=>{
    if(req.isAuthenticated()&& req.user.class==='Senior Secondary School 2'){
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
SSS2.get('/Data%20Processing',async(req,res)=>{
    if(req.isAuthenticated()&& req.user.class==='Senior Secondary School 2'){
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
SSS2.get('/Civic',async(req,res)=>{
    if(req.isAuthenticated()&& req.user.class==='Senior Secondary School 2'){
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

SSS2.get('/Further%20Mathematics',async(req,res)=>{
    if(req.isAuthenticated()&& req.user.class==='Senior Secondary School 2'){
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
SSS2.get('/Chemistry',async(req,res)=>{
    if(req.isAuthenticated()&& req.user.class==='Senior Secondary School 2'){
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
SSS2.get('/Biology',async(req,res)=>{
    if(req.isAuthenticated()&& req.user.class==='Senior Secondary School 2'){
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
SSS2.get('/Economics',async(req,res)=>{
    if(req.isAuthenticated()&& req.user.class==='Senior Secondary School 2'){
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
SSS2.get('/Government',async(req,res)=>{
    if(req.isAuthenticated()&& req.user.class==='Senior Secondary School 2'){
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
SSS2.get('/Commerce',async(req,res)=>{
    if(req.isAuthenticated()&& req.user.class==='Senior Secondary School 2'){
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
SSS2.get('/Accounting',async(req,res)=>{
    if(req.isAuthenticated()&& req.user.class==='Senior Secondary School 2'){
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
SSS2.get('/Literature',async(req,res)=>{
    if(req.isAuthenticated()&& req.user.class==='Senior Secondary School 2'){
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
SSS2.get('/Geography',async(req,res)=>{
    if(req.isAuthenticated()&& req.user.class==='Senior Secondary School 2'){
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
SSS2.get('/Visual%20Art',async(req,res)=>{
    if(req.isAuthenticated()&& req.user.class==='Senior Secondary School 2'){
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
SSS2.get('/Food%20and%20Nutrition',async(req,res)=>{
    if(req.isAuthenticated()&& req.user.class==='Senior Secondary School 2'){
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
SSS2.get('/Yoruba',async(req,res)=>{
    if(req.isAuthenticated()&& req.user.class==='Senior Secondary School 2'){
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
SSS2.get('/Agricultural%20Science',async(req,res)=>{
    if(req.isAuthenticated()&& req.user.class==='Senior Secondary School 2'){
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
export default SSS2