import express from "express";
import {join,dirname} from 'node:path';
import { fileURLToPath } from "node:url";
import convertToHTML from "../read.js";
import furthermath from "../test.js";
import getLocation from "../location.js";

const partOne=express.Router();

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
                questions:await furthermath(await getLocation(req,res))
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
                questions:await furthermath(await getLocation(req,res))
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
                questions:await furthermath(await getLocation(req,res))
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
                questions:await furthermath(await getLocation(req,res))
            })
            break;
            case 'Senior Secondary School 2':
            res.render('profile.ejs',{
                first_name:req.user.first_name,
                last_name:req.user.last_name,
                subjects:req.user.subjects,
                subject:req.query.subject,
                student_class:req.user.class,
                questions:await furthermath(await getLocation(req,res))
            })
            break;
            case 'Senior Secondary School 1':
            res.render('profile.ejs',{
                first_name:req.user.first_name,
                last_name:req.user.last_name,
                subjects:req.user.subjects,
                subject:req.query.subject,
                student_class:req.user.class,
                questions:await furthermath(await getLocation(req,res))
            })
            break;
        }
    }else{
        res.redirect('/login')
    }
})
partOne.get('/Accounting',async(req,res)=>{
    if(req.isAuthenticated()){
        switch (req.user.class) {
            case 'Senior Secondary School 3':
            res.render('profile.ejs',{
                first_name:req.user.first_name,
                last_name:req.user.last_name,
                subjects:req.user.subjects,
                subject:req.query.subject,
                student_class:req.user.class,
                questions:await furthermath(await getLocation(req,res))
            })
            break;
            case 'Senior Secondary School 2':
            res.render('profile.ejs',{
                first_name:req.user.first_name,
                last_name:req.user.last_name,
                subjects:req.user.subjects,
                subject:req.query.subject,
                student_class:req.user.class,
                questions:await furthermath(await getLocation(req,res))
            })
            break;
            case 'Senior Secondary School 1':
            res.render('profile.ejs',{
                first_name:req.user.first_name,
                last_name:req.user.last_name,
                subjects:req.user.subjects,
                subject:req.query.subject,
                student_class:req.user.class,
                questions:await furthermath(await getLocation(req,res))
            })
            break;
        }
    }else{
        res.redirect('/login')
    }
})
partOne.get('/Literature',async(req,res)=>{
    if(req.isAuthenticated()){
        switch (req.user.class) {
            case 'Senior Secondary School 3':
            res.render('profile.ejs',{
                first_name:req.user.first_name,
                last_name:req.user.last_name,
                subjects:req.user.subjects,
                subject:req.query.subject,
                student_class:req.user.class,
                questions:await furthermath(await getLocation(req,res))
            })
            break;
            case 'Senior Secondary School 2':
            res.render('profile.ejs',{
                first_name:req.user.first_name,
                last_name:req.user.last_name,
                subjects:req.user.subjects,
                subject:req.query.subject,
                student_class:req.user.class,
                questions:await furthermath(await getLocation(req,res))
            })
            break;
            case 'Senior Secondary School 1':
            res.render('profile.ejs',{
                first_name:req.user.first_name,
                last_name:req.user.last_name,
                subjects:req.user.subjects,
                subject:req.query.subject,
                student_class:req.user.class,
                questions:await furthermath(await getLocation(req,res))
            })
            break;
        }
    }else{
        res.redirect('/login')
    }
})
partOne.get('/Geography',async(req,res)=>{
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
                questions:await furthermath(await getLocation(req,res))
            })
            break;
            case 'Senior Secondary School 2':
            res.render('profile.ejs',{
                first_name:req.user.first_name,
                last_name:req.user.last_name,
                subjects:req.user.subjects,
                subject:req.query.subject,
                student_class:req.user.class,
                questions:await furthermath(await getLocation(req,res))
            })
            break;
            case 'Senior Secondary School 1':
            res.render('profile.ejs',{
                first_name:req.user.first_name,
                last_name:req.user.last_name,
                subjects:req.user.subjects,
                subject:req.query.subject,
                student_class:req.user.class,
                questions:await furthermath(await getLocation(req,res))
            })
            break;
        }
    }else{
        res.redirect('/login')
    }
})

export default partOne