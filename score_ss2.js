import db from '../students/db.js'
const student_class=['ss3_','ss2_','ss1_']
const Mathematics='math_solutions';
const English='eng_solutions';
const Physics='phy_solutions'
const Data_Processing='dp_solutions'
const Further_Math='further_math_solutions'


async function getScoreSS2(req,res){
    if(req.user.class==='Senior Secondary School 2'){
        let stud_class=student_class[1]
        const answers=Object.values(req.body).filter(item=>item.length===1);
        if(req.body.subject==='English'){
            const result=await db.query(`select answer from ${stud_class}${English}`);
            const arrayOfAnswers=result.rows.map(item=>(Object.values(item))).flat()
            const myArray=Object.entries(req.body).filter(item=>item[1].length===1)
            // slicing by 8 because each question starts with 'question'
            // which is an 8 letter word
            const index=myArray.map(item=>item[0].slice(8)).map(item=>Number(item));
            const studentAnswers=myArray.map(item=>item[1])
            console.log(studentAnswers);
            console.log(index)
            let score=0;
            for(let i=0;i<index.length;i++){
                console.log(index[i])
                if (studentAnswers[i]=== arrayOfAnswers[index[i]-1]) {
                    score++;
                }
            }
            console.log(score);
            const grade=`You scored ${score} out of ${arrayOfAnswers.length}`
            const percentage= (score/arrayOfAnswers.length)*100
            return [grade,`${Number(percentage).toFixed(2)}%`]
        }
        if(req.body.subject==='Mathematics'){
            const result=await db.query(`select answer from ${stud_class}${Mathematics}`);
            const arrayOfAnswers=result.rows.map(item=>(Object.values(item))).flat()
            const myArray=Object.entries(req.body).filter(item=>item[1].length===1)
            // slicing by 8 because each question starts with 'question'
            // which is an 8 letter word
            const index=myArray.map(item=>item[0].slice(8)).map(item=>Number(item));
            const studentAnswers=myArray.map(item=>item[1])
            console.log(studentAnswers);
            console.log(index)
            let score=0;
            for(let i=0;i<index.length;i++){
                console.log(index[i])
                if (studentAnswers[i]=== arrayOfAnswers[index[i]-1]) {
                    score++;
                }
            }
            console.log(score);
            const grade=`You scored ${score} out of ${arrayOfAnswers.length}`
            const percentage= (score/arrayOfAnswers.length)*100
            return [grade,`${Number(percentage).toFixed(2)}%`]
        }
        if(req.body.subject==='Physics'){
            const result=await db.query(`select answer from ${stud_class}${Physics}`);
            const arrayOfAnswers=result.rows.map(item=>(Object.values(item))).flat()
            const myArray=Object.entries(req.body).filter(item=>item[1].length===1)
            // slicing by 8 because each question starts with 'question'
            // which is an 8 letter word
            const index=myArray.map(item=>item[0].slice(8)).map(item=>Number(item));
            const studentAnswers=myArray.map(item=>item[1])
            console.log(studentAnswers);
            console.log(index)
            let score=0;
            for(let i=0;i<index.length;i++){
                console.log(index[i])
                if (studentAnswers[i]=== arrayOfAnswers[index[i]-1]) {
                    score++;
                }
            }
            console.log(score);
            const grade=`You scored ${score} out of ${arrayOfAnswers.length}`
            const percentage= (score/arrayOfAnswers.length)*100
            return [grade,`${Number(percentage).toFixed(2)}%`]
        }
        if(req.body.subject==='Further Mathematics'){
            const result=await db.query(`select answer from ${stud_class}${Further_Math}`);
            const arrayOfAnswers=result.rows.map(item=>(Object.values(item))).flat()
            const myArray=Object.entries(req.body).filter(item=>item[1].length===1)
            // slicing by 8 because each question starts with 'question'
            // which is an 8 letter word
            const index=myArray.map(item=>item[0].slice(8)).map(item=>Number(item));
            const studentAnswers=myArray.map(item=>item[1])
            console.log(studentAnswers);
            console.log(index)
            let score=0;
            for(let i=0;i<index.length;i++){
                console.log(index[i])
                if (studentAnswers[i]=== arrayOfAnswers[index[i]-1]) {
                    score++;
                }
            }
            console.log(score);
            const grade=`You scored ${score} out of ${arrayOfAnswers.length}`
            const percentage= (score/arrayOfAnswers.length)*100
            return [grade,`${Number(percentage).toFixed(2)}%`]
        }
        if(req.body.subject==='Data Processing'){
            const result=await db.query(`select answer from ${stud_class}${Data_Processing}`);
            const arrayOfAnswers=result.rows.map(item=>(Object.values(item))).flat()
            const myArray=Object.entries(req.body).filter(item=>item[1].length===1)
            // slicing by 8 because each question starts with 'question'
            // which is an 8 letter word
            const index=myArray.map(item=>item[0].slice(8)).map(item=>Number(item));
            const studentAnswers=myArray.map(item=>item[1])
            console.log(studentAnswers);
            console.log(index)
            let score=0;
            for(let i=0;i<index.length;i++){
                console.log(index[i])
                if (studentAnswers[i]=== arrayOfAnswers[index[i]-1]) {
                    score++;
                }
            }
            console.log(score);
            const grade=`You scored ${score} out of ${arrayOfAnswers.length}`
            const percentage= (score/arrayOfAnswers.length)*100
            return [grade,`${Number(percentage).toFixed(2)}%`]
        }
    }
}
export default getScoreSS2