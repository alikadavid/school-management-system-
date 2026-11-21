import { getClasses,getSeniorSubjects,getJuniorSubjects } from "./class-subject.js";
import db from "./db.js";
// this function retrieves the file path of the uploaded question
export default async function getLocation(req,res) {
    let path;
    if(req.user.class.includes('Senior')){
        const class_id=(await getClasses()).indexOf(req.user.class)+1
        const subject_id=(await getSeniorSubjects()).indexOf(req.query.subject)+1
        path=(await db.query
            (`select location from senior_file_path where senior_class_id=$1 and senior_subject_id=$2`,
        [class_id,subject_id]));
        console.log(path.rows)
        if(path.rows.length===0){
            return res.status(404).json({message:'THE SUBJECT YOU ARE LOOKING FOR DOES NOT EXIST'})
        }
        return path.rows[0].location;
    }
    if(req.user.class.includes('Junior')){
        const class_id=(await getClasses()).indexOf(req.user.class)+1
        const subject_id=(await getJuniorSubjects()).indexOf(req.query.subject)+1
        path=(await db.query
            (`select location from junior_file_path where junior_class_id=$1 and junior_subject_id=$2`,
        [class_id,subject_id]));
        if(path.rows.length===0){
            return res.status(404).json({message:'THE SUBJECT YOU ARE LOOKING FOR DOES NOT EXIST'})
        }
        return path.rows[0].location;
    }
}