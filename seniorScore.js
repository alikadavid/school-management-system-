import { getJuniorSubjects,getSeniorSubjects,getClasses } from "./class-subject.js";
import db from "./db.js";

async function seniorScore(req){
    // console.log(length)
    const subject_id=(await getSeniorSubjects()).indexOf(req.body.subject)+1;
    const class_id=(await getClasses()).indexOf(req.user.class)+1;
    const result=await db.query(`select answer from senior_solutions where class_id=$1 and subject_id=$2`,[class_id,subject_id]);
    const arrayOfAnswers=result.rows.map(item=>(Object.values(item))).flat()
    const myArray=Object.entries(req.body).filter(item=>item[1].length===1)
    const index=myArray.map(item=>item[0].slice(8)).map(item=>Number(item));
    // sliced by 8 because question is 8 chars long
    const studentAnswers=myArray.map(item=>item[1])
    let score=0;
    for(let i=0;i<index.length;i++){
        if (studentAnswers[i]=== arrayOfAnswers[index[i]-1]) {
            score++;
        }
    }
    const grade=`You scored ${score} out of ${arrayOfAnswers.length}`
    const percentage= (score/arrayOfAnswers.length)*100
    return [grade,`${Number(percentage).toFixed(2)}%`]
}
async function juniorScore(req){
    console.log(length)
    const subject_id=(await getJuniorSubjects()).indexOf(req.body.subject)+1;
    const class_id=(await getClasses()).indexOf(req.user.class)+1;
    const result=await db.query(`select answer from junior_solutions where class_id=$1 and subject_id=$2`,[class_id,subject_id]);
    const arrayOfAnswers=result.rows.map(item=>(Object.values(item))).flat()
    const myArray=Object.entries(req.body).filter(item=>item[1].length===1)
    const index=myArray.map(item=>item[0].slice(8)).map(item=>Number(item));
    // sliced by 8 because question is 8 chars long
    const studentAnswers=myArray.map(item=>item[1])
    let score=0;
    for(let i=0;i<index.length;i++){
        if (studentAnswers[i]=== arrayOfAnswers[index[i]-1]) {
            score++;
        }
    }
    const grade=`You scored ${score} out of ${arrayOfAnswers.length}`
    const percentage= (score/arrayOfAnswers.length)*100
    return [grade,`${Number(percentage).toFixed(2)}%`]
}

export  {seniorScore,juniorScore}