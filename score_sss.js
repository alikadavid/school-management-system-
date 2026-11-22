import db from "./db.js";
import { getClasses,getSeniorSubjects } from "./class-subject.js";
import { seniorScore } from './calculate_score.js'

async function getScoreSS1(req,res){
    if(req.user.class==='Senior Secondary School 1'){
        // const student_class=req.user.class
        const answers=Object.values(req.body).filter(item=>item.length===1);
        if(req.body.subject==='English'){
            return seniorScore(req)
        }
        if(req.body.subject==='Mathematics'){
            return seniorScore(req)
        }
        if(req.body.subject==='Physics'){
            return seniorScore(req)
        }
        if(req.body.subject==='Further Mathematics'){
            return seniorScore(req)
        }
        if(req.body.subject==='Data Processing'){
            return seniorScore(req)
        }
        if (req.body.subject==='ICT') {
            return seniorScore(req)
        }
        if (req.body.subject==='Civic') {
            return seniorScore(req)
        }
    }
}

async function getScoreSS2(req,res){
    if(req.user.class==='Senior Secondary School 2'){
        const answers=Object.values(req.body).filter(item=>item.length===1);
        if(req.body.subject==='English'){
            return seniorScore(req)
        }
        if(req.body.subject==='Mathematics'){
            return seniorScore(req)
        }
        if(req.body.subject==='Physics'){
            return seniorScore(req)
        }
        if(req.body.subject==='Further Mathematics'){
            return seniorScore(req)
        }
        if(req.body.subject==='Data Processing'){
            return seniorScore(req)
        }
    }
}

async function getScoreSS3(req,res){
    if(req.user.class==='Senior Secondary School 3'){
        // const answers=Object.values(req.body).filter(item=>item.length===1);
        switch (req.body.subject) {
            case 'English': 
                return seniorScore(req); 
            break;
            case 'Mathematics': 
                return seniorScore(req); 
            break;
            case 'Physics': 
                return seniorScore(req); 
            break;
            case 'Further Mathematics': 
                return seniorScore(req); 
            break;
            case 'Data Processing': 
                return seniorScore(req); 
            break;
            case 'ICT': 
                return seniorScore(req); 
            break;
            case 'Civic': 
                return seniorScore(req); 
            break;
            default:
            break;
        }
    }
}
export  {getScoreSS1,getScoreSS2,getScoreSS3}