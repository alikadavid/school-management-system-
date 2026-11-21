import {join,dirname} from 'node:path';
import { fileURLToPath } from "node:url";
import convertToHTML from "../read.js";
import express from "express";
import getLocation from '../location.js';
import furthermath from '../test.js';

const partFour=express.Router();

partFour.get('/Food%20and%20Nutrition',async(req,res)=>{
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

partFour.get('/Yoruba',async(req,res)=>{
    if(req.isAuthenticated()){
        switch (req.user.class) {
            case 'Senior Secondary School 3':
            res.render('profile.ejs',{
                first_name:req.user.first_name,
                last_name:req.user.last_name,
                subjects:req.user.subjects,
                student_class:req.user.class,
                subject:req.query.subject,
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

partFour.get('/Agricultural%20Science',async(req,res)=>{
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
            case 'Junior Secondary School 1':
            res.render('profile.ejs',{
                first_name:req.user.first_name,
                last_name:req.user.last_name,
                subjects:req.user.subjects,
                subject:req.query.subject,
                student_class:req.user.class,
                questions:await furthermath(await getLocation(req,res))
            })
            break;
            case 'Junior Secondary School 2':
            res.render('profile.ejs',{
                first_name:req.user.first_name,
                last_name:req.user.last_name,
                subjects:req.user.subjects,
                subject:req.query.subject,
                student_class:req.user.class,
                questions:await furthermath(await getLocation(req,res))
            })
            break;
            case 'Junior Secondary School 3':
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

partFour.get('/Visual%20Art',async(req,res)=>{
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

export default partFour;