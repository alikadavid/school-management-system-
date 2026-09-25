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
    const accepted_mime_type='application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    const answer=await read(solution)
    saveAnswers(req,answer)
    res.send('uploaded')

})
export default t_upload;