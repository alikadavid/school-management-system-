import db from "./db.js";
// import g
async function getJuniorSubjects() {
    const result= await db.query(`select subject from junior_subjects`)
    const juniorSubjects= result.rows.map(item=>item.subject)
    return juniorSubjects;
}

async function getSeniorSubjects() {
    const result=await db.query(`select subject from senior_subjects`);
    const seniorSubjects= result.rows.map(item=>item.subject)
    return seniorSubjects;
}
async function getClasses() {
    const result=await db.query(`select name from classes`);
    const getClasses=result.rows.map(item=>item.name);
    return getClasses;
}

async function saveAnswers(req,array) {
    if (req.body['Further Mathematics']) {
        if(req.body['Further Mathematics']==='Senior Secondary School 1'){
            let subject_index=await getSeniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Senior Secondary School 1')+1
            let subject_id=subject_index.indexOf('Further Mathematics')+1;

            await db.query(`insert into senior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }  
        if (req.body['Further Mathematics']==='Senior Secondary School 2') {
            let subject_index=await getSeniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Senior Secondary School 2')+1
            let subject_id=subject_index.indexOf('Further Mathematics')+1;

            await db.query(`insert into senior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
        if (req.body['Further Mathematics']==='Senior Secondary School 3') {
            let subject_index=await getSeniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Senior Secondary School 3')+1
            let subject_id=subject_index.indexOf('Further Mathematics')+1;

            await db.query(`insert into senior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
    }
    if (req.body.Mathematics) {
        if (req.body.Mathematics==='Senior Secondary School 1') {
            let subject_index=await getSeniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Senior Secondary School 1')+1
            let subject_id=subject_index.indexOf('Mathematics')+1;

            await db.query(`insert into senior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
       if (req.body.Mathematics==='Senior Secondary School 2') {
            let subject_index=await getSeniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Senior Secondary School 2')+1
            let subject_id=subject_index.indexOf('Mathematics')+1;

            await db.query(`insert into senior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
       if (req.body.Mathematics==='Senior Secondary School 3') {
            let subject_index=await getSeniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Senior Secondary School 3')+1
            let subject_id=subject_index.indexOf('Mathematics')+1;

            await db.query(`insert into senior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
        if (req.body.Mathematics==='Junior Secondary School 1') {
            let subject_index=await getJuniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Junior Secondary School 1')+1
            let subject_id=subject_index.indexOf('Mathematics')+1;

            await db.query(`insert into junior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
        if (req.body.Mathematics==='Junior Secondary School 2') {
            let subject_index=await getJuniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Junior Secondary School 2')+1
            let subject_id=subject_index.indexOf('Mathematics')+1;

            await db.query(`insert into senior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
        if (req.body.Mathematics==='Junior Secondary School 3') {
            let subject_index=await getJuniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Junior Secondary School 3')+1
            let subject_id=subject_index.indexOf('Mathematics')+1;

            await db.query(`insert into senior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
    }
    if (req.body.English) {
        if (req.body.English==='Senior Secondary School 1') {
            let subject_index=await getSeniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Senior Secondary School 1')+1
            let subject_id=subject_index.indexOf('English')+1;

            await db.query(`insert into senior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
        if (req.body.English==='Senior Secondary School 2') {
            let subject_index=await getSeniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Senior Secondary School 2')+1
            let subject_id=subject_index.indexOf('English')+1;

            await db.query(`insert into senior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
        if (req.body.English==='Senior Secondary School 3') {
            let subject_index=await getSeniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Senior Secondary School 3')+1
            let subject_id=subject_index.indexOf('English')+1;

            await db.query(`insert into senior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
        if (req.body.English==='Junior Secondary School 1') {
            let subject_index=await getJuniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Junior Secondary School 1')+1
            let subject_id=subject_index.indexOf('English')+1;

            await db.query(`insert into junior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
        if (req.body.English==='Junior Secondary School 2') {
            let subject_index=await getJuniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Junior Secondary School 2')+1
            let subject_id=subject_index.indexOf('English')+1;

            await db.query(`insert into junior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
        if (req.body.English==='Junior Secondary School 3') {
            let subject_index=await getJuniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Junior Secondary School 3')+1
            let subject_id=subject_index.indexOf('English')+1;

            await db.query(`insert into junior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
    }
    if (req.body.Yoruba) {
        if (req.body.Yoruba==='Senior Secondary School 1') {
            let subject_index=await getSeniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Senior Secondary School 1')+1
            let subject_id=subject_index.indexOf('Yoruba')+1;

            await db.query(`insert into senior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
        if (req.body.Yoruba==='Senior Secondary School 2') {
            let subject_index=await getSeniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Senior Secondary School 2')+1
            let subject_id=subject_index.indexOf('Yoruba')+1;

            await db.query(`insert into senior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
        if (req.body.Yoruba==='Senior Secondary School 3') {
            let subject_index=await getSeniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Senior Secondary School 3')+1
            let subject_id=subject_index.indexOf('Yoruba')+1;

            await db.query(`insert into senior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
        if (req.body.Yoruba==='Junior Secondary School 1') {
            let subject_index=await getJuniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Junior Secondary School 1')+1
            let subject_id=subject_index.indexOf('Yoruba')+1;

            await db.query(`insert into junior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
        if (req.body.Yoruba==='Junior Secondary School 2') {
            let subject_index=await getJuniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Junior Secondary School 2')+1
            let subject_id=subject_index.indexOf('Yoruba')+1;

            await db.query(`insert into junior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
        if (req.body.Yoruba==='Junior Secondary School 3') {
            let subject_index=await getJuniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Junior Secondary School 3')+1
            let subject_id=subject_index.indexOf('Yoruba')+1;

            await db.query(`insert into junior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
    }
    if (req.body.Physics) {
        if (req.body.Physics==='Senior Secondary School 1') {
            let subject_index=await getSeniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Senior Secondary School 1')+1
            let subject_id=subject_index.indexOf('Physics')+1;

            await db.query(`insert into senior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
        if (req.body.Physics==='Senior Secondary School 2') {
            let subject_index=await getSeniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Senior Secondary School 2')+1
            let subject_id=subject_index.indexOf('Physics')+1;

            await db.query(`insert into senior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
        if (req.body.Physics==='Senior Secondary School 3') {
            let subject_index=await getSeniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Senior Secondary School 3')+1
            let subject_id=subject_index.indexOf('Physics')+1;

            await db.query(`insert into senior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
    }
    if (req.body.Chemistry) {
        if (req.body.Chemistry==='Senior Secondary School 1') {
            let subject_index=await getSeniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Senior Secondary School 1')+1
            let subject_id=subject_index.indexOf('Physics')+1;

            await db.query(`insert into senior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
        if (req.body.Chemistry==='Senior Secondary School 2') {
            let subject_index=await getSeniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Senior Secondary School 2')+1
            let subject_id=subject_index.indexOf('Physics')+1;

            await db.query(`insert into senior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
        if (req.body.Chemistry==='Senior Secondary School 3') {
            let subject_index=await getSeniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Senior Secondary School 3')+1
            let subject_id=subject_index.indexOf('Physics')+1;

            await db.query(`insert into senior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
    }
    if (req.body.Biology) {
        if (req.body.Biology==='Senior Secondary School 1') {
            let subject_index=await getSeniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Senior Secondary School 1')+1
            let subject_id=subject_index.indexOf('Biology')+1;

            await db.query(`insert into senior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
        if (req.body.Biology==='Senior Secondary School 2') {
            let subject_index=await getSeniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Senior Secondary School 2')+1
            let subject_id=subject_index.indexOf('Biology')+1;

            await db.query(`insert into senior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
        if (req.body.Biology==='Senior Secondary School 3') {
            let subject_index=await getSeniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Senior Secondary School 3')+1
            let subject_id=subject_index.indexOf('Biology')+1;

            await db.query(`insert into senior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
    }
    if (req.body.ICT) {
        if (req.body.ICT==='Senior Secondary School 1') {
            let subject_index=await getSeniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Senior Secondary School 1')+1
            let subject_id=subject_index.indexOf('ICT')+1;

            await db.query(`insert into senior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
        if (req.body.ICT==='Senior Secondary School 2') {
            let subject_index=await getSeniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Senior Secondary School 2')+1
            let subject_id=subject_index.indexOf('ICT')+1;

            await db.query(`insert into senior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
        if (req.body.ICT==='Senior Secondary School 3') {
            let subject_index=await getSeniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Senior Secondary School 3')+1
            let subject_id=subject_index.indexOf('ICT')+1;

            await db.query(`insert into senior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
    }
    if (req.body['Data Processing']) {
        if (req.body['Data Processing']==='Senior Secondary School 1') {
            let subject_index=await getSeniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Senior Secondary School 1')+1
            let subject_id=subject_index.indexOf('Data Processing')+1;

            await db.query(`insert into senior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
        if (req.body['Data Processing']==='Senior Secondary School 2') {
            let subject_index=await getSeniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Senior Secondary School 2')+1
            let subject_id=subject_index.indexOf('Data Processing')+1;

            await db.query(`insert into senior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
        if (req.body['Data Processing']==='Senior Secondary School 3') {
            let subject_index=await getSeniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Senior Secondary School 3')+1
            let subject_id=subject_index.indexOf('Data Processing')+1;

            await db.query(`insert into senior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
    }
    if (req.body['Food and Nutrition']) {
        if (req.body['Food and Nutrition']==='Senior Secondary School 1') {
            let subject_index=await getSeniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Senior Secondary School 1')+1
            let subject_id=subject_index.indexOf('Food and Nutrition')+1;

            await db.query(`insert into senior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
        if (req.body['Food and Nutrition']==='Senior Secondary School 2') {
            let subject_index=await getSeniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Senior Secondary School 2')+1
            let subject_id=subject_index.indexOf('Food and Nutrition')+1;

            await db.query(`insert into senior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
        if (req.body['Food and Nutrition']==='Senior Secondary School 3') {
            let subject_index=await getSeniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Senior Secondary School 3')+1
            let subject_id=subject_index.indexOf('Food and Nutrition')+1;

            await db.query(`insert into senior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
    }
    if (req.body['Agricultural Science']) {
        if (req.body['Agricultural Science']==='Senior Secondary School 1') {
            let subject_index=await getSeniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Senior Secondary School 1')+1
            let subject_id=subject_index.indexOf('Agricultural Science')+1;

            await db.query(`insert into senior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
        if (req.body['Agricultural Science']==='Senior Secondary School 2') {
            let subject_index=await getSeniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Senior Secondary School 2')+1
            let subject_id=subject_index.indexOf('Agricultural Science')+1;

            await db.query(`insert into senior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
        if (req.body['Agricultural Science']==='Senior Secondary School 3') {
            let subject_index=await getSeniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Senior Secondary School 3')+1
            let subject_id=subject_index.indexOf('Agricultural Science')+1;

            await db.query(`insert into senior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
    }
    if (req.body.Commerce) {
        if (req.body.Commerce==='Senior Secondary School 1') {
            let subject_index=await getSeniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Senior Secondary School 1')+1
            let subject_id=subject_index.indexOf('Commerce')+1;

            await db.query(`insert into senior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
        if (req.body.Commerce==='Senior Secondary School 2') {
            let subject_index=await getSeniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Senior Secondary School 2')+1
            let subject_id=subject_index.indexOf('Commerce')+1;

            await db.query(`insert into senior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
        if (req.body.Commerce==='Senior Secondary School 3') {
            let subject_index=await getSeniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Senior Secondary School 3')+1
            let subject_id=subject_index.indexOf('Commerce')+1;

            await db.query(`insert into senior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
    }
    if (req.body.Civic) {
        if (req.body.Civic==='Senior Secondary School 1') {
            let subject_index=await getSeniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Senior Secondary School 1')+1
            let subject_id=subject_index.indexOf('Civic')+1;

            await db.query(`insert into senior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
        if (req.body.Civic==='Senior Secondary School 2') {
            let subject_index=await getSeniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Senior Secondary School 2')+1
            let subject_id=subject_index.indexOf('Civic')+1;

            await db.query(`insert into senior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
        if (req.body.Civic==='Senior Secondary School 3') {
            let subject_index=await getSeniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Senior Secondary School 3')+1
            let subject_id=subject_index.indexOf('Civic')+1;

            await db.query(`insert into senior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
    }
    if (req.body.Literature) {
        if (req.body.Literature==='Senior Secondary School 1') {
            let subject_index=await getSeniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Senior Secondary School 1')+1
            let subject_id=subject_index.indexOf('Literature')+1;

            await db.query(`insert into senior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
        if (req.body.Literature==='Senior Secondary School 2') {
            let subject_index=await getSeniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Senior Secondary School 2')+1
            let subject_id=subject_index.indexOf('Literature')+1;

            await db.query(`insert into senior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
        if (req.body.Literature==='Senior Secondary School 3') {
            let subject_index=await getSeniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Senior Secondary School 3')+1
            let subject_id=subject_index.indexOf('Literature')+1;

            await db.query(`insert into senior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
    }
    if (req.body.Geography) {
        if (req.body.Geography==='Senior Secondary School 1') {
            let subject_index=await getSeniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Senior Secondary School 1')+1
            let subject_id=subject_index.indexOf('Geography')+1;

            await db.query(`insert into senior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
        if (req.body.Geography==='Senior Secondary School 2') {
            let subject_index=await getSeniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Senior Secondary School 2')+1
            let subject_id=subject_index.indexOf('Geography')+1;

            await db.query(`insert into senior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
        if (req.body.Geography==='Senior Secondary School 3') {
            let subject_index=await getSeniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Senior Secondary School 3')+1
            let subject_id=subject_index.indexOf('Geography')+1;

            await db.query(`insert into senior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
    }
    if (req.body['Visual Art']) {
        if (req.body['Visual Art']==='Senior Secondary School 1') {
            let subject_index=await getSeniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Senior Secondary School 1')+1
            let subject_id=subject_index.indexOf('Visual Art')+1;

            await db.query(`insert into senior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
        if (req.body['Visual Art']==='Senior Secondary School 2') {
            let subject_index=await getSeniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Senior Secondary School 2')+1
            let subject_id=subject_index.indexOf('Visual Art')+1;

            await db.query(`insert into senior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
        if (req.body['Visual Art']==='Senior Secondary School 3') {
            let subject_index=await getSeniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Senior Secondary School 3')+1
            let subject_id=subject_index.indexOf('Visual Art')+1;

            await db.query(`insert into senior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
    }
    if (req.body.Government) {
        if (req.body.Government==='Senior Secondary School 1') {
            let subject_index=await getSeniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Senior Secondary School 1')+1
            let subject_id=subject_index.indexOf('Government')+1;

            await db.query(`insert into senior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
        if (req.body.Government==='Senior Secondary School 2') {
            let subject_index=await getSeniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Senior Secondary School 2')+1
            let subject_id=subject_index.indexOf('Government')+1;

            await db.query(`insert into senior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
        if (req.body.Government==='Senior Secondary School 3') {
            let subject_index=await getSeniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Senior Secondary School 3')+1
            let subject_id=subject_index.indexOf('Government')+1;

            await db.query(`insert into senior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
    }
    if (req.body.Accounting) {
        if (req.body.Accounting==='Senior Secondary School 1') {
            let subject_index=await getSeniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Senior Secondary School 1')+1
            let subject_id=subject_index.indexOf('Accounting')+1;

            await db.query(`insert into senior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
        if (req.body.Accounting==='Senior Secondary School 2') {
            let subject_index=await getSeniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Senior Secondary School 2')+1
            let subject_id=subject_index.indexOf('Accounting')+1;

            await db.query(`insert into senior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
        if (req.body.Accounting==='Senior Secondary School 3') {
            let subject_index=await getSeniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Senior Secondary School 3')+1
            let subject_id=subject_index.indexOf('Accounting')+1;

            await db.query(`insert into senior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
    }
    if (req.body.Economics) {
        if (req.body.Economics==='Senior Secondary School 1') {
            let subject_index=await getSeniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Senior Secondary School 1')+1
            let subject_id=subject_index.indexOf('Economics')+1;

            await db.query(`insert into senior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
        if (req.body.Economics==='Senior Secondary School 2') {
            let subject_index=await getSeniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Senior Secondary School 2')+1
            let subject_id=subject_index.indexOf('Economics')+1;

            await db.query(`insert into senior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
        if (req.body.Economics==='Senior Secondary School 3') {
            let subject_index=await getSeniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Senior Secondary School 3')+1
            let subject_id=subject_index.indexOf('Economics')+1;

            await db.query(`insert into senior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
    }
    if (req.body.History) {
        if (req.body.History==='Junior Secondary School 1') {
            let subject_index=await getJuniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Junior Secondary School 1')+1
            let subject_id=subject_index.indexOf('History')+1;

            await db.query(`insert into junior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
        if (req.body.History==='Junior Secondary School 2') {
            let subject_index=await getJuniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Junior Secondary School 2')+1
            let subject_id=subject_index.indexOf('History')+1;

            await db.query(`insert into junior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
        if (req.body.History==='Junior Secondary School 3') {
            let subject_index=await getJuniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Junior Secondary School 3')+1
            let subject_id=subject_index.indexOf('History')+1;

            await db.query(`insert into junior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
    }
    if (req.body.NVE) {
        if (req.body.NVE==='Junior Secondary School 1') {
            let subject_index=await getJuniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Junior Secondary School 1')+1
            let subject_id=subject_index.indexOf('NVE')+1;

            await db.query(`insert into junior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
        if (req.body.NVE==='Junior Secondary School 2') {
            let subject_index=await getJuniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Junior Secondary School 2')+1
            let subject_id=subject_index.indexOf('NVE')+1;

            await db.query(`insert into junior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
        if (req.body.NVE==='Junior Secondary School 3') {
            let subject_index=await getJuniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Junior Secondary School 3')+1
            let subject_id=subject_index.indexOf('NVE')+1;

            await db.query(`insert into junior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
    }
    if (req.body.BST) {
        if (req.body.BST==='Junior Secondary School 1') {
            let subject_index=await getJuniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Junior Secondary School 1')+1
            let subject_id=subject_index.indexOf('BST')+1;

            await db.query(`insert into junior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
        if (req.body.BST==='Junior Secondary School 2') {
            let subject_index=await getJuniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Junior Secondary School 2')+1
            let subject_id=subject_index.indexOf('BST')+1;

            await db.query(`insert into junior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
        if (req.body.BST==='Junior Secondary School 3') {
            let subject_index=await getJuniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Junior Secondary School 3')+1
            let subject_id=subject_index.indexOf('BST')+1;

            await db.query(`insert into junior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
    }
    if (req.body['CCA/MUSIC']) {
        if (req.body['CCA/MUSIC']==='Junior Secondary School 1') {
            let subject_index=await getJuniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Junior Secondary School 1')+1
            let subject_id=subject_index.indexOf('CCA/MUSIC')+1;

            await db.query(`insert into junior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
        if (req.body['CCA/MUSIC']==='Junior Secondary School 2') {
            let subject_index=await getJuniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Junior Secondary School 2')+1
            let subject_id=subject_index.indexOf('CCA/MUSIC')+1;

            await db.query(`insert into junior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
        if (req.body['CCA/MUSIC']==='Junior Secondary School 3') {
            let subject_index=await getJuniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Junior Secondary School 3')+1
            let subject_id=subject_index.indexOf('CCA/MUSIC')+1;

            await db.query(`insert into junior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
    }
    if (req.body.CRS) {
        if (req.body.CRS==='Junior Secondary School 1') {
            let subject_index=await getJuniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Junior Secondary School 1')+1
            let subject_id=subject_index.indexOf('CRS')+1;

            await db.query(`insert into junior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
        if (req.body.CRS==='Junior Secondary School 2') {
            let subject_index=await getJuniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Junior Secondary School 2')+1
            let subject_id=subject_index.indexOf('CRS')+1;

            await db.query(`insert into junior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
        if (req.body.CRS==='Junior Secondary School 3') {
            let subject_index=await getJuniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Junior Secondary School 3')+1
            let subject_id=subject_index.indexOf('CRS')+1;

            await db.query(`insert into junior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
    }
    if (req.body['Business Studies']) {
        if (req.body['Business Studies']==='Junior Secondary School 1') {
            let subject_index=await getJuniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Junior Secondary School 1')+1
            let subject_id=subject_index.indexOf('Business Studies')+1;

            await db.query(`insert into junior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
        if (req.body['Business Studies']==='Junior Secondary School 2') {
            let subject_index=await getJuniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Junior Secondary School 2')+1
            let subject_id=subject_index.indexOf('Business Studies')+1;

            await db.query(`insert into junior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
        if (req.body['Business Studies']==='Junior Secondary School 3') {
            let subject_index=await getJuniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Junior Secondary School 3')+1
            let subject_id=subject_index.indexOf('Business Studies')+1;

            await db.query(`insert into junior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
    }
    if (req.body.French) {
        if (req.body.French==='Junior Secondary School 1') {
            let subject_index=await getJuniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Junior Secondary School 1')+1
            let subject_id=subject_index.indexOf('French')+1;

            await db.query(`insert into junior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
        if (req.body.French==='Junior Secondary School 2') {
            let subject_index=await getJuniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Junior Secondary School 2')+1
            let subject_id=subject_index.indexOf('French')+1;

            await db.query(`insert into junior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
        if (req.body.French==='Junior Secondary School 3') {
            let subject_index=await getJuniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Junior Secondary School 3')+1
            let subject_id=subject_index.indexOf('French')+1;

            await db.query(`insert into junior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
    }
    if (req.body['Pre-Vocational Studies']) {
        if (req.body['Pre-Vocational Studies']==='Junior Secondary School 1') {
            let subject_index=await getJuniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Junior Secondary School 1')+1
            let subject_id=subject_index.indexOf('Pre-Vocational Studies')+1;

            await db.query(`insert into junior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
        if (req.body['Pre-Vocational Studies']==='Junior Secondary School 2') {
            let subject_index=await getJuniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Junior Secondary School 2')+1
            let subject_id=subject_index.indexOf('Pre-Vocational Studies')+1;

            await db.query(`insert into senior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
        if (req.body['Pre-Vocational Studies']==='Junior Secondary School 3') {
            let subject_index=await getJuniorSubjects();
            let class_index=await getClasses();
            let class_id=class_index.indexOf('Junior Secondary School 3')+1
            let subject_id=subject_index.indexOf('Pre-Vocational Studies')+1;

            await db.query(`insert into junior_solutions(class_id,subject_id,answer) select $1, $2, unnest($3::text[])`,[class_id,subject_id,array])
        }
    }
}
    
export default saveAnswers