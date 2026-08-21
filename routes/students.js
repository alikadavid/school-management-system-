import express from "express";
import db from "../db.js";

const router=express.Router()

router.get('/',(req,res)=>{
    res.render('index.ejs')
})
router.post('/register', async (req,res)=>{
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

        // console.log(Subjects)// console.log(Departments)// console.log(Classes)// console.log(classID) // console.log(array) // console.log(subjectID)// console.log(deptID)
    try {
        await db.query(`begin`);
        const queryForSeniorStudent =  
            `with new_senior as(
	        insert into senior_students(first_name,last_name,class_id,department_id)
	        values($1,$2,$3,$4) returning id
            ),
            newContact as(
	        insert into contact_detail(senior_student_id,email,telephone,address)
	        select id ,$5,$6,$7 from new_senior
	        returning senior_student_id
            )

            insert into senior_enrollment
            select senior_student_id as id,unnest($8:: int[]) from newContact`

            await db.query(`commit;`)      

            await db.query(queryForSeniorStudent,
            [first_name.toUpperCase(),last_name.toUpperCase(),classID,deptID,email,telephone,address,subjectID]);
            
        res.send('child has been registered')        
    } catch (error) {
        console.log(error)
        await db.query(`rollback`)
        res.send(error)
    }

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

        // console.log(Subject) // console.log(Classes) // console.log(classID) // console.log(array) // rewrite this as a transaction later
        try {
            await db.query(`begin`)
            const queryForJuniorStudent=
            `with new_junior as(INSERT into junior_students(first_name,last_name,class_id) 
            VALUES($1,$2,$3) RETURNING id),
            newContact as(INSERT into contact_detail(junior_student_id,email,telephone,address) 
            select id, $4,$5,$6 from new_junior RETURNING junior_student_id)
            insert into junior_enrollment
            select junior_student_id as id , unnest($7::int[]) from newContact
            `
            await db.query(queryForJuniorStudent,
            [first_name.toUpperCase(),last_name.toUpperCase(),classID,email,telephone,address,subjectID])

            await db.query(`commit`)
            res.send('child has been registered')            
        } catch (error) {
            console.log(error)
            await db.query(`rollback`)
        }
    }
})
router.get('/student/senior/',async (req,res)=>{

    const queryForSeniorStudent=`select senior_students.first_name,senior_students.last_name,classes.name as classes,
    departments.name as department,array_agg(senior_subjects.subject) as "subjects offered",contact_detail.email,
    contact_detail.address,contact_detail.telephone
    from senior_students
    join classes
    on senior_students.class_id=classes.id
    join departments
    on departments.id=senior_students.department_id
    join senior_enrollment
    on senior_enrollment.student_id=senior_students.id
    join senior_subjects
    on senior_subjects.id=senior_enrollment.subject_id
    join contact_detail
    on contact_detail.senior_student_id=senior_students.id

    group by first_name, last_name, classes.name,departments.name,contact_detail.email,
    contact_detail.telephone,contact_detail.address
    `
try {
    const obtainSeniorStudents=(await db.query(queryForSeniorStudent)).rows
    res.json(obtainSeniorStudents)
    console.log(obtainSeniorStudents)  
} catch (error) {
    console.log(error)
}
})

router.get('/student/senior/:id',async(req,res)=>{
    const id=Number(req.params.id)
    const checkId=await db.query(`select exists(select 1 from senior_students where id=$1)`,[id])
    const particularStudent=`select senior_students.id, senior_students.first_name,senior_students.last_name,classes.name as classes,
        departments.name as department,array_agg(senior_subjects.subject) as "subjects offered",contact_detail.email,
        contact_detail.address,contact_detail.telephone
        from senior_students
        join classes
        on senior_students.class_id=classes.id
        join departments
        on departments.id=senior_students.department_id
        join senior_enrollment
        on senior_enrollment.student_id=senior_students.id
        join senior_subjects
        on senior_subjects.id=senior_enrollment.subject_id
        join contact_detail
        on contact_detail.senior_student_id=senior_students.id

        where senior_students.id=$1

        group by senior_students.id, first_name, last_name, classes.name,departments.name,contact_detail.email,
        contact_detail.address,contact_detail.telephone
        `
    try {
        if(checkId.rows[0].exists){
        
            const getParticularStudent=(await db.query(particularStudent,[id])).rows
            res.json(getParticularStudent[0])
            console.log(getParticularStudent[0])
        }
        else{
            res.send('STUDENT DOES NOT EXIST')
        }
    } catch (error) {
        console.log(error)
    }

})
router.get('/student/junior',async(req,res)=>{
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

router.get('/student/junior/:id',async(req,res)=>{
    const id=Number(req.params.id)
    const checkId=await db.query(`select exists(select 1 from junior_students where id=$1)`,[id])
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

        group by junior_students.id,first_name,last_name,class,telephone,address,email`
    try {
        if(checkId.rows[0].exists){
            const getJuniorStudent=(await db.query(juniorStudent,[id])).rows
            // console.log(getJuniorStudent)
            res.json(getJuniorStudent[0])
            console.log(getJuniorStudent[0])
        } 
        else{
            res.send('STUDENT DOES NOT EXIST')
        } 
    } catch (error) {
       console.log(error) 
    }
 
})
router.patch('/update/senior/:id',async(req,res)=>{
    const email=req.body.email
    const address=req.body.address
    const telephone=req.body.telephone
    const id=Number(req.params.id)
    console.log(req.body)

    const checkId=await db.query(`select exists(select 1 from senior_students where id=$1)`,[id])
    try {
        if(checkId.rows[0].exists){
            console.log(true)
            const updateQuery=`update contact_detail set email=$1,telephone=$2,address=$3 
            where senior_student_id=$4 returning *`
            const updatedValues=[email,telephone,address,id]
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
router.patch('/update/junior/:id',async(req,res)=>{
    const email=req.body.email
    const address=req.body.address
    const telephone=req.body.telephone
    const id=Number(req.params.id)
    console.log(req.body)

    const checkId=await db.query(`select exists(select 1 from junior_students where id=$1)`,[id])
    
    try {
        if(checkId.rows[0].exists){
            console.log(true)
            const updateQuery=`update contact_detail set email=$1,telephone=$2,address=$3 
            where junior_student_id=$4 returning *`
            const updatedValues=[email,telephone,address,id]
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
router.delete('/student/senior/:id',async(req,res)=>{
    const id=Number(req.params.id)
    const checkId=await db.query(`select exists(select 1 from senior_students where id=$1)`,[id])

    try {
        if (checkId.rows[0].exists) {
            const queryForSeniorStudent=`delete  from senior_students where id=$1 returning *`
            const valuesForSeniorStudent=[Number(req.params.id)]
            const deleteSenior=await db.query(queryForSeniorStudent,valuesForSeniorStudent)

            res.json(deleteSenior.rows)
            console.log(deleteSenior.rows)
        }
        else{
            res.send('STUDENT DOES NOT EXIST')
        }

    } catch (error) {
        console.log(error)
    }
})
router.delete('/student/junior/:id',async(req,res)=>{
    const id=Number(req.params.id)
    const checkId=await db.query(`select exists(select 1 from junior_students where id=$1)`,[id])
    try {
        if (checkId.rows[0].exists) {
            const queryForJuniorStudent=`delete  from junior_students where id=$1 returning *`
            const valuesForJuniorStudent=[Number(req.params.id)]
            const deleteJunior=await db.query(queryForJuniorStudent,valuesForJuniorStudent)

            res.json(deleteJunior.rows)
            console.log(deleteJunior.rows)
        }
        else{
            res.send('STUDENT DOES NOT EXIST')
        }

    } catch (error) {
        console.error(error)
    }
})
export default router