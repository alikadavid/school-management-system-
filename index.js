import express from 'express';
import {dirname,join} from 'node:path'
import { fileURLToPath } from 'node:url';
import router from './routes/students.js';
import authRouter from './routes/auth.js';
import partOne from './routes/part_one.js'
import partTwo from './routes/part_two.js'
import partThree from './routes/part_three.js';
import partFour from './routes/part_four.js'
import t_upload from './routes/upload.js';
import session from 'express-session';
import passport from 'passport';
import LocalStrategy from 'passport-local'
import submit from './routes/submission.js';
import tutor from './routes/tutor.js';

const app=express();
const port=3000;

const directory=dirname(fileURLToPath(import.meta.url))
const publicFolder=join(directory,'public')

app.set('view engine','ejs');

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static(publicFolder));

app.use(session({
    secret:'test',
    resave:false,
    saveUninitialized:true,
    cookie:{
        maxAge:1000*60*60*24
    }
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(router)
app.use(authRouter)
app.use(partFour)
app.use(partThree)
app.use(partTwo)
app.use(partOne)
app.use(submit)
app.use(tutor)
app.use(t_upload)

app.listen(port,()=>{
    console.log(`running on ${port}`)
})
