import express from 'express';
import {dirname,join} from 'node:path'
import { fileURLToPath } from 'node:url';
import router from './routes/students.js';
import authRouter from './routes/auth.js'
import session from 'express-session';
import passport from 'passport';
import LocalStrategy from 'passport-local'

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
        maxAge:1000*60*10
    }
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(router)
app.use(authRouter)

app.listen(port,()=>{
    console.log(`running on ${port}`)
})
