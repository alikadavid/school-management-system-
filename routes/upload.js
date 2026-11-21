import express from 'express';
import multer from 'multer';
import location from '../destination.js';
import db from '../db.js';
import mammoth from 'mammoth';
import { dirname,join } from 'node:path'
import { fileURLToPath } from 'node:url';
import save from '../save-answers.js';
import {getClasses,getJuniorSubjects,getSeniorSubjects} from '../class-subject.js'

const t_upload=express.Router();

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        return location(req,file,cb);
    },
    filename:(req,file,cb)=>{
        return cb(null,Date.now()+' '+file.originalname)
    },
})

const upload=multer({storage:storage,fileFilter:(req,file,cb)=>{
    if(file.mimetype!=='application/vnd.openxmlformats-officedocument.wordprocessingml.document'){
        cb(new Error('INVALID FILE TYPE, ONLY FILES WITH A .DOCX EXTENSION ARE ALLOWED'))
    }else{
        cb(null,true)
    }
}})

async function read(file_path) {
    let string=mammoth.extractRawText({path:file_path})
    let final=(await string).value
    return final.split('\n').filter(item=>{return item.trim()!==''})
}
const SolutionMiddleWare=async (req,res,next)=>{

    const subject= Object.keys(req.body)[0];
    const classEnrolled= Object.values(req.body)[0];

    if(classEnrolled.includes('Senior')){
        const subject_id= (await getSeniorSubjects()).indexOf(subject)+1;
        const class_id=(await getClasses()).indexOf(classEnrolled)+1;
        // console.log(class_id)
        console.log(req.files)
        const checkForSolution=await db.query(`select exists(
            select 1 from senior_solutions where class_id=$1 and subject_id=$2)`,
            [class_id,subject_id]
        );
        if(checkForSolution.rows[0].exists){
          return  res.send('solution already exists')
        }
        else{
            next()
        }
    }
    if(classEnrolled.includes('Junior')){
        const subject_id= (await getJuniorSubjects()).indexOf(subject)+1;
        const class_id=(await getClasses()).indexOf(classEnrolled)+1;

        const checkForSolution=await db.query(`select exists(
            select 1 from junior_solutions where class_id=$1 and subject_id=$2)`,
            [class_id,subject_id]
        );
        if(checkForSolution.rows[0].exists){
          return  res.send('solution already exists')
        }
        else{
            next()
        }
    }
}
const ArrayOfMiddleware=[upload.fields([{name:'question'}, {name:'solution'}]),SolutionMiddleWare];

t_upload.post('/upload',ArrayOfMiddleware, async(req,res)=>{
    if(req.isAuthenticated()){
        console.log(req.files)
        console.log(req.body)
        let pathOfQuestion=req.files.question[0].path;
        const subject= Object.keys(req.body)[0];
        const classEnrolled= Object.values(req.body)[0];
        if(classEnrolled.includes('Senior')){
            try {
                const solution=Object.entries(req.files)[1][1][0].path;
                const subject_id= (await getSeniorSubjects()).indexOf(subject)+1;
                const class_id=(await getClasses()).indexOf(classEnrolled)+1;
                const teacher_id=Number(req.user.teacher_id);

                await db.query(`insert into senior_file_path(senior_subject_id,senior_class_id,teacher_id,location)
                values($1,$2,$3,$4)`,[subject_id,class_id,teacher_id,pathOfQuestion]);

                const answer=await read(solution)
                save(req,res,answer)
                res.send('uploaded')
            } catch (error) {
                res.send(error)
            }
        }
        if(classEnrolled.includes('Junior')){
            try {
                const solution=Object.entries(req.files)[1][1][0].path;
                const subject_id= (await getJuniorSubjects()).indexOf(subject)+1;
                const class_id=(await getClasses()).indexOf(classEnrolled)+1;
                const teacher_id=Number(req.user.teacher_id);

                await db.query(`insert into junior_file_path(junior_subject_id,junior_class_id,teacher_id,location)
                values($1,$2,$3,$4)`,[subject_id,class_id,teacher_id,pathOfQuestion]);
                const answer=await read(solution)
                save(req,res,answer)
                res.send('uploaded')
            } catch (error) {
                res.send(error)
            }
        }
    }else{
        res.redirect('/t/login')
    }
})
const acceptedMimeType='application/vnd.openxmlformats-officedocument.wordprocessingml.document';
export default {t_upload};
// senior_subject_id int references senior_subjects on delete cascade on update cascade,
// 	senior_class_id int references classes on delete cascade on update cascade,