import db from "./db.js";
import { getClasses,getJuniorSubjects } from "./class-subject.js";
import { juniorScore } from "./seniorScore.js";

async function getScoreJSS1(req,res){
    if(req.user.class==='Junior Secondary School 1'){
        // const student_class=req.user.class
        // const answers=Object.values(req.body).filter(item=>item.length===1);
        switch (req.body.subject) {
            case 'English':
                return (await juniorScore(req))
            break;
            case 'Mathematics':
                return (await juniorScore(req))
            break;
            case 'History':
                return (await juniorScore(req))
            break;
            case 'NVE':
                return (await juniorScore(req))
            break;
            case 'BST':
                return (await juniorScore(req))
            break;
            case 'CCA/MUSIC':
                return (await juniorScore(req))
            break;
            case 'CRS':
                return (await juniorScore(req))
            break;
            case 'Business Studies':
                return (await juniorScore(req))
            break;
            case 'Yoruba':
                return (await juniorScore(req))
            break;
            case 'French':
                return (await juniorScore(req))
            break;
            case 'Pre-Vocational Studies':
                return (await juniorScore(req))
            break;
            default:
            break;
        }
    }
}
async function getScoreJSS2(req,res){
    if(req.user.class==='Junior Secondary School 2'){
        // const answers=Object.values(req.body).filter(item=>item.length===1);
        switch (req.body.subject) {
            case 'English':
               return (await juniorScore(req))
            break;
            case 'Mathematics':
                return (await juniorScore(req))
            break;
            case 'History':
                return (await juniorScore(req))
            break;
            case 'NVE':
                return (await juniorScore(req))
            break;
            case 'BST':
                return (await juniorScore(req))
            break;
            case 'CCA/MUSIC':
                return (await juniorScore(req))
            break;
            case 'CRS':
                return (await juniorScore(req))
            break;
            case 'Business Studies':
                return (await juniorScore(req))
            break;
            case 'Yoruba':
                return (await juniorScore(req))
            break;
            case 'French':
                return (await juniorScore(req))
            break;
            case 'Pre-Vocational Studies':
                return (await juniorScore(req))
            break;
            default:
            break;
        }
    }
}
async function getScoreJSS3(req,res){
    if(req.user.class==='Junior Secondary School 3'){
        // const student_class=req.user.class
        const answers=Object.values(req.body).filter(item=>item.length===1);
        switch (req.body.subject) {
            case 'English':
                return (await juniorScore(req)) 
            break;
            case 'Mathematics':
                return (await juniorScore(req))
            break;
            case 'History':
                return (await juniorScore(req))
            break;
            case 'NVE':
                return (await juniorScore(req))
            break;
            case 'BST':
                return (await juniorScore(req))
            break;
            case 'CCA/MUSIC':
                return (await juniorScore(req))
            break;
            case 'CRS':
                return (await juniorScore(req))
            break;
            case 'Business Studies':
                return (await juniorScore(req))
            break;
            case 'Yoruba':
                return (await juniorScore(req))
            break;
            case 'French':
                return (await juniorScore(req))
            break;
            case 'Pre-Vocational Studies':
                return (await juniorScore(req))
            break;
            default:
            break;
        }
    }
}
export  {getScoreJSS1,getScoreJSS2,getScoreJSS3}