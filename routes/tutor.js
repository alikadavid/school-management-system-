import express from 'express';
// import 'dotenv/config' ;
import db from '../db.js';


const tutor=express.Router();
const getJuniorSubjects=async()=>{
    await db.query(`select subject from junior_subjects`);
}
const getSeniorSubjects=async()=>{
    await db.query(`select subject from senior_subjects`);
}

const juniorArray=(await getJuniorSubjects).rows;
const seniorArray=(await getSeniorSubjects).rows;

console.log(process.env.password)
// console.log(juniorArray);
// console.log(seniorArray);
// tutor.get('/tutor/signup',(req,res)=>{
    
//     res.render('tutor_signup.ejs')
// })