import express from 'express';
import multer from 'multer';
import location from '../destination.js';
import db from '../db.js';
import mammoth from 'mammoth';
import { dirname,join } from 'node:path'
import { fileURLToPath } from 'node:url';
import saveAnswers from '../save-answers.js';

const t_upload=express.Router();

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        return location(req,file,cb);
    },
    filename:(req,file,cb)=>{
        return cb(null,Date.now()+' '+file.originalname)
    }
})
const upload=multer({storage:storage})

async function read(file_path) {
    let string=mammoth.extractRawText({path:file_path})
    let final=(await string).value
    return final.split('\n').filter(item=>{return item.trim()!==''})
}

t_upload.post('/upload',upload.fields([{name:'question'},{name:'solution'}]),async(req,res)=>{
    const solution=Object.entries(req.files)[1][1][0].path;
    
    // console.log(Object.entries(req.body))
    // for(let i=0;i<Object.entries(req.files).length;i++){
    // if(Object.entries(req.files)[i].mimetype!=='application/vnd.openxmlformats-officedocument.wordprocessingml.document'){
    //     res.send('invalid document type');
    // }else{
    //     res.send('question uploaded')
    // }
    // }
    const answer=await read(solution)
    saveAnswers(req,answer)

    console.log(answer)
    res.send('uploaded')
    // console.log(Object.entries(req.files)[1][1])
    // console.log(Object.entries(req.body))

})
// let ans=await db.query(`select * from ss3_math_solutions`)
// const arr=ans.rows
// const directory=dirname(fileURLToPath(import.meta.url))
// const file=join(dirname(directory),'solution.docx');

// let text=await read()
// console.log(arr)


// console.log(dirname(directory))
// console.log(text)
export default t_upload;