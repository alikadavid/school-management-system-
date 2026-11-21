import express from "express";
import {join,dirname} from 'node:path';
import { fileURLToPath } from "node:url";
import convertToHTML from "../read.js";
import getLocation from "../location.js";
import furthermath from "../test.js";


const partFive=express.Router();
const directory=dirname(dirname(fileURLToPath(import.meta.url)))

partFive.get('/History',async(req,res)=>{
    if(req.isAuthenticated()){
        switch (req.user.class) {
            case 'Junior Secondary School 1':
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
            case 'Junior Secondary School 2':
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
            case 'Junior Secondary School 3':
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
partFive.get('/NVE',async(req,res)=>{
    if(req.isAuthenticated()){
        // console.log(req.user)
        switch (req.user.class) {
            case 'Junior Secondary School 1':
            console.log(req.user.class)
            res.render('profile.ejs',{
                first_name:req.user.first_name,
                last_name:req.user.last_name,
                subjects:req.user.subjects,
                subject:req.query.subject,
                student_class:req.user.class,
                questions:await furthermath(await getLocation(req))
            })
            break;
            case 'Junior Secondary School 2':
            console.log(req.user.class)
            res.render('profile.ejs',{
                first_name:req.user.first_name,
                last_name:req.user.last_name,
                subjects:req.user.subjects,
                subject:req.query.subject,
                student_class:req.user.class,
                questions:await furthermath(await getLocation(req))
            })
            break;
            case 'Junior Secondary School 3':
            console.log(req.user.class)
            res.render('profile.ejs',{
                first_name:req.user.first_name,
                last_name:req.user.last_name,
                subjects:req.user.subjects,
                subject:req.query.subject,
                student_class:req.user.class,
                questions:await furthermath(await getLocation(req))
            })
            break;
        }
    }else{
        res.redirect('/login')
    }
})

partFive.get('/BST',async(req,res)=>{
    if(req.isAuthenticated()){
        // console.log(req.user)
        switch (req.user.class) {
            case 'Junior Secondary School 1':
            console.log(req.user.class)
            res.render('profile.ejs',{
                first_name:req.user.first_name,
                last_name:req.user.last_name,
                subjects:req.user.subjects,
                subject:req.query.subject,
                student_class:req.user.class,
                questions:await furthermath(await getLocation(req))
            })
            break;
            case 'Junior Secondary School 2':
            console.log(req.user.class)
            res.render('profile.ejs',{
                first_name:req.user.first_name,
                last_name:req.user.last_name,
                subjects:req.user.subjects,
                subject:req.query.subject,
                student_class:req.user.class,
                questions:await furthermath(await getLocation(req))
            })
            break;
            case 'Junior Secondary School 3':
            console.log(req.user.class)
            res.render('profile.ejs',{
                first_name:req.user.first_name,
                last_name:req.user.last_name,
                subjects:req.user.subjects,
                subject:req.query.subject,
                student_class:req.user.class,
                questions:await furthermath(await getLocation(req))
            })
            break;
        }
    }else{
        res.redirect('/login')
    }
})

export default partFive