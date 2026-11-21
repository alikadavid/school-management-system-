import db from "./db.js";
import { getClasses,getJuniorSubjects,getSeniorSubjects } from "./class-subject.js";

async function save(req,res,array){
    const subject=Object.keys(req.body)[0];
    const classOfSubmission=Object.values(req.body)[0];
    try {
        if(classOfSubmission.includes('Junior')){
            const class_id=(await getClasses()).indexOf(classOfSubmission)+1
            const subject_id=(await getJuniorSubjects()).indexOf(subject)+1
            await db.query(`
                insert into junior_solutions(class_id,subject_id,answer) 
                select $1, $2, unnest($3::text[])`,
                [class_id,subject_id,array]
            )
        }
        if(classOfSubmission.includes('Senior')){
            const class_id=(await getClasses()).indexOf(classOfSubmission)+1
            const subject_id=(await getSeniorSubjects()).indexOf(subject)+1
            await db.query(`
                insert into senior_solutions(class_id,subject_id,answer) 
                select $1, $2, unnest($3::text[])`,
                [class_id,subject_id,array]
            )
        }
       return array.length;
    } catch (error) {
        res.send(error)
    }
}

export default save
