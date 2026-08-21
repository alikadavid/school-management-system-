import express from 'express';
import {dirname,join} from 'node:path'
import { fileURLToPath } from 'node:url';
import router from './routes/students.js';

const app=express();
const port=3000;

const directory=dirname(fileURLToPath(import.meta.url))
const publicFolder=join(directory,'public')


app.use(express.urlencoded({extended:true}))
app.use(router)
app.use(express.static(publicFolder));

app.listen(port,()=>{
    console.log(`running on ${port}`)
})
