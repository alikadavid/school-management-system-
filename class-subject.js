import db from "./db.js";

async function getClasses() {
    const result=await db.query(`select name from classes`);
    const getClasses=result.rows.map(item=>item.name);
    return getClasses;
}
async function getSeniorSubjects() {
    const result=await db.query(`select subject from senior_subjects`);
    const seniorSubjects= result.rows.map(item=>item.subject)
    return seniorSubjects;
}
async function getJuniorSubjects() {
    const result=await db.query(`select subject from junior_subjects`);
    const seniorSubjects= result.rows.map(item=>item.subject)
    return seniorSubjects;
}
async function getJuniorClasses() {
    const result=await db.query(`select name from classes`);
    const getClasses=result.rows.map(item=>item.name);
    const juniorClasses=getClasses.filter(item=>item.includes('Junior'));
    return juniorClasses;
}
async function getSeniorClasses() {
    const result=await db.query(`select name from classes`);
    const getClasses=result.rows.map(item=>item.name);
    const seniorClasses=getClasses.filter(item=>item.includes('Senior'));
    return seniorClasses;
}

export  {getClasses,getJuniorSubjects,getSeniorSubjects,getJuniorClasses,getSeniorClasses};