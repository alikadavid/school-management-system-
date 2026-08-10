import express from 'express';
import pg from 'pg';
import {dirname,join} from 'node:path'
import { fileURLToPath } from 'node:url';
import dotenv from 'dotenv';

dotenv.config({path:'./config.env'})

const app=express();
const port=3000;
const { Client }= pg;
const db=new Client({
    user:process.env.user,
    host:process.env.host,
    port: process.env.port,
    password: process.env.password,
    database:process.env.database
})
const directory=dirname(fileURLToPath(import.meta.url))
const publicFolder=join(directory,'public')

app.use(express.urlencoded({extended:true}))
app.use(express.static(publicFolder));
await db.connect()

app.get('/',(req,res)=>{
    res.render('index.ejs')
})
// register a student
app.post('/register', async (req,res)=>{
    console.log(req.body)
    const {first_name,last_name,email,telephone,address,studentClass,department,subject}=req.body
    let isSenior=false;
    let isJunior=false;

    if(studentClass==='Senior Secondary School 1' || studentClass==='Senior Secondary School 2' || studentClass==='Senior Secondary School 3'){
        isSenior=true
    }
    if(isSenior){
        console.log('senior student')
        // this returns an array of all senior subjects in lowercase
        const Subjects=(await db.query('SELECT subject from senior_subjects')).rows.map(item=>item.subject.toLowerCase())

        // this returns an array of all the departments in lowercase
        const Departments=(await db.query('SELECT name from departments')).rows.map(item=>item.name.toLowerCase())

        // this returns an array of all the classes in lowercase
        const Classes=(await db.query('SELECT name from classes')).rows.map(item=>item.name.toLowerCase())

        const classID=Classes.findIndex(item=>item===studentClass.toLowerCase())+1
        
        let array=[]
        
        for(let i=0;i<subject.length;i++){
            // console.log(Subjects.includes(subject[i].toLowerCase()))
            array.push(Subjects.findIndex(item=>subject[i].toLowerCase()===item))   
        }

        // this is to get the right id for each subject in the senior_subjects table
        let subjectID=array.map(item=>item+1)
        const deptID=Departments.findIndex(item=>department.toLowerCase()===item)+1

        // console.log(Subjects)
        // console.log(Departments)
        // console.log(Classes)
        // console.log(classID)
        // console.log(array)
        // console.log(subjectID)
        // console.log(deptID)

        const queryForSeniorStudents='INSERT into senior_students(first_name,last_name,class_id,department_id) VALUES($1,$2,$3,$4) RETURNING *'
        const valuesForSeniorStudents=[first_name.toUpperCase(),last_name.toUpperCase(),classID,deptID];
        const populateSeniorStudents=(await db.query(queryForSeniorStudents,valuesForSeniorStudents))
        const student_id=populateSeniorStudents.rows[0].id
        // console.log(student_id)

        const queryForContactDetail='INSERT into contact_detail(senior_student_id,email,telephone,address) VALUES($1,$2,$3,$4) RETURNING *'
        const valuesForContactDetail=[student_id,email,telephone,address];
        const populateContactDetail= await db.query(queryForContactDetail,valuesForContactDetail);
        // console.log(populateContactDetail.rows[0])

        const queryForEnrollment='INSERT into senior_enrollment (student_id,subject_id) SELECT $1, unnest($2::int[])  RETURNING *'
        const valuesForEnrollment=[student_id,subjectID];
        const populateSeniorEnrollment=await db.query(queryForEnrollment,valuesForEnrollment);
        console.log(populateSeniorEnrollment.rows);
        
        res.send('child has been registered')

    }else{
        console.log('not a senior');
    }
    if(studentClass==='Junior Secondary School 1' || studentClass==='Junior Secondary School 2' || studentClass==='Junior Secondary School 3'){
        isJunior=true
    }
    if(isJunior){
        // console.log('junior student')
        const Subject=(await db.query('SELECT subject from junior_subjects')).rows.map(item=>item.subject.toLowerCase())
        const Classes=(await db.query('SELECT name from classes')).rows.map(item=>item.name.toLowerCase())
        const classID=Classes.findIndex(item=>studentClass.toLowerCase()===item)+1

        let array=[]

        for(let i=0;i<subject.length;i++){
            // console.log(Subjects.includes(subject[i].toLowerCase()))
            array.push(Subject.findIndex(item=>subject[i].toLowerCase()===item))   
        }
        let subjectID=array.map(item=>item+1)

        // console.log(Subject)
        // console.log(Classes)
        // console.log(classID)
        // console.log(array)

        const queryForJuniorStudent='INSERT into junior_students(first_name,last_name,class_id) VALUES($1,$2,$3) RETURNING *'
        const valuesForJuniorStudent=[first_name.toUpperCase(),last_name.toUpperCase(),classID]
        const populateJuniorStudents=(await db.query(queryForJuniorStudent,valuesForJuniorStudent))
        const student_id=populateJuniorStudents.rows[0].id;
        // console.log(populateJuniorStudents.rows[0])

        const queryForContactDetail='INSERT into contact_detail(junior_student_id,email,telephone,address) VALUES($1,$2,$3,$4) RETURNING * '
        const valuesForContactDetail=[student_id,email,telephone,address];
        const populateContactDetail=await db.query(queryForContactDetail,valuesForContactDetail);
        // console.log(populateContactDetail.rows)

        const queryForEnrollment='INSERT into junior_enrollment (student_id,subject_id) SELECT $1, unnest($2::int[]) RETURNING *'
        const valuesForEnrollment=[student_id,subjectID];
        const populateJuniorEnrollment=await db.query(queryForEnrollment,valuesForEnrollment);
        // console.log(populateJuniorEnrollment.rows)
        res.send('child has been registered')
    }
})
app.get('/student/senior/',async (req,res)=>{

    const queryForSeniorStudent=`select senior_students.first_name,senior_students.last_name,classes.name as classes,
    departments.name as department,array_agg(senior_subjects.subject) as "subjects offered"
    from senior_students
    join classes
    on senior_students.class_id=classes.id
    join departments
    on departments.id=senior_students.department_id
    join senior_enrollment
    on senior_enrollment.student_id=senior_students.id
    join senior_subjects
    on senior_subjects.id=senior_enrollment.subject_id


    group by first_name, last_name, classes.name,departments.name
    `
    const obtainSeniorStudents=(await db.query(queryForSeniorStudent)).rows
    res.json(obtainSeniorStudents)
    console.log(obtainSeniorStudents)

})

app.get('/student/senior/:id',async(req,res)=>{
    const countSeniors=(await db.query('select count($1::text) from senior_students',['id'])).rows[0].count

    if(Number(req.params.id)<=Number(countSeniors)){
        const particularStudent=`select senior_students.id, senior_students.first_name,senior_students.last_name,classes.name as classes,
        departments.name as department,array_agg(senior_subjects.subject) as "subjects offered"
        from senior_students
        join classes
        on senior_students.class_id=classes.id
        join departments
        on departments.id=senior_students.department_id
        join senior_enrollment
        on senior_enrollment.student_id=senior_students.id
        join senior_subjects
        on senior_subjects.id=senior_enrollment.subject_id

        where senior_students.id=$1

        group by senior_students.id, first_name, last_name, classes.name,departments.name
        `
        const getParticularStudent=(await db.query(particularStudent,[Number(req.params.id)])).rows
        res.json(getParticularStudent[0])
    }
    else{
        res.send('STUDENT DOES NOT EXIST')
    }
})
app.get('/student/junior',async(req,res)=>{
    const queryForJuniorStudents=`select 
    junior_students.id,junior_students.first_name,
    junior_students.last_name,classes.name as class,array_agg(junior_subjects.subject) as "subjects offered",
    contact_detail.email,contact_detail.telephone,contact_detail.address 

    from junior_enrollment
    join junior_students
    on junior_students.id=junior_enrollment.student_id
    join classes
    on classes.id=junior_students.class_id
    join junior_subjects
    on junior_subjects.id=junior_enrollment.subject_id
    join contact_detail
    on contact_detail.junior_student_id=junior_enrollment.student_id

    group by junior_students.id,first_name,last_name,class,telephone,address,contact_detail.email`

    const obtainJuniorStudents=(await db.query(queryForJuniorStudents)).rows
    console.log(obtainJuniorStudents)
    res.json(obtainJuniorStudents)
})
app.get('/student/junior/:id',async(req,res)=>{
    const countJuniors=(await db.query('select count($1::text) from junior_students',['id'])).rows[0].count

    if(Number(req.params.id)<=Number(countJuniors)){
        const juniorStudent=`select 
        junior_students.id,junior_students.first_name,
        junior_students.last_name,classes.name as class,array_agg(junior_subjects.subject) as "subjects offered",
        contact_detail.email,contact_detail.telephone,contact_detail.address 

        from junior_enrollment
        join junior_students
        on junior_students.id=junior_enrollment.student_id
        join classes
        on classes.id=junior_students.class_id
        join junior_subjects
        on junior_subjects.id=junior_enrollment.subject_id
        join contact_detail
        on contact_detail.junior_student_id=junior_enrollment.student_id

        where junior_students.id=$1

        group by junior_students.id,first_name,last_name,class,telephone,address,contact_detail.email`

        const getJuniorStudent=(await db.query(juniorStudent,[Number(req.params.id)])).rows
        // console.log(getJuniorStudent)
        res.json(getJuniorStudent[0])
    } else{
        res.send('STUDENT DOES NOT EXIST')
    }
})
app.patch('/update/senior/:id',async(req,res)=>{
    const email=req.body.email
    const address=req.body.address
    const telephone=req.body.telephone
    const id=req.params.id
    console.log(req.body)

    const check=await db.query(`select id from senior_students`) 
    const seniorId=check.rows.map(item=>item.id)
    try {
        if(seniorId.includes(Number(id))){
            console.log(true)
            const updateQuery=`update contact_detail set email=$1,telephone=$2,address=$3 
            where senior_student_id=$4 returning *`
            const updatedValues=[email,telephone,address,Number(id)]
            const updateSenior=await db.query(updateQuery,updatedValues)
            console.log(updateSenior.rows)
            res.json(updateSenior.rows)
            // console.log((await db.query(`select * from contact_detail`)).rows)
        }
        else{
            res.send('not found')
        }
    } catch (error) {
        console.log(error.detail)
    }
})
app.patch('/update/junior/:id',async(req,res)=>{
    const email=req.body.email
    const address=req.body.address
    const telephone=req.body.telephone
    const id=req.params.id
    console.log(req.body)

    const check=await db.query(`select id from junior_students`)
    
    try {
        const juniorId=check.rows.map(item=>item.id)
        if(juniorId.includes(Number(id))){
            console.log(true)
            const updateQuery=`update contact_detail set email=$1,telephone=$2,address=$3 
            where junior_student_id=$4 returning *`
            const updatedValues=[email,telephone,address,Number(id)]
            const updateJunior=await db.query(updateQuery,updatedValues)
            console.log(updateJunior.rows)
            res.json(updateJunior.rows)
        }
        else{
            res.send('not found')
        }
    } catch (error) {
        console.log(error.detail)
    }

})
app.delete('/student/senior/:id',async(req,res)=>{
    try {
        const queryForSeniorStudent=`delete  from senior_students where id=$1`
        const valuesForSeniorStudent=[Number(req.params.id)]
        const deleteSenior=await db.query(queryForSeniorStudent,valuesForSeniorStudent)

        res.json(deleteSenior.rows)
        console.log(deleteSenior.rows)
    } catch (error) {
        console.error(error)
    }
})
app.delete('/student/junior/:id',async(req,res)=>{
    try {
        const queryForJuniorStudent=`delete  from junior_students where id=$1 returning *`
        const valuesForJuniorStudent=[Number(req.params.id)]
        const deleteJunior=await db.query(queryForJuniorStudent,valuesForJuniorStudent)

        res.json(deleteJunior.rows)
        console.log(deleteJunior.rows)
    } catch (error) {
        console.error(error)
    }
})
app.listen(port,()=>{
    console.log(`running on ${port}`)
})
