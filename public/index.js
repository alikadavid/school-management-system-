let department=document.querySelector('.department');
let admissionLevel=document.querySelector('.admissionLevel')
let juniorSubject=document.querySelector('.junior')
let seniorSubject=document.querySelector('.senior');
const arrayOfJuniorSubject=Array.from(document.querySelector('.junior').children)
const arrayOfSeniorSubject=Array.from(document.querySelector('.senior').children)
const arrayOfDepartment=Array.from(document.querySelector('.dept').children)

const arrayOflevel=Array.from(admissionLevel.children);

admissionLevel.addEventListener('change',()=>{
    if(admissionLevel.value===arrayOflevel[3].innerText || 
        admissionLevel.value===arrayOflevel[4].innerText || 
        admissionLevel.value===arrayOflevel[5].innerText ) {
        department.classList.add('visible')
        juniorSubject.classList.remove('visible')

        seniorSubject.classList.add('visible')
        arrayOfJuniorSubject.forEach(item=>{
            if(item.tagName==='INPUT' && item.type==='checkbox'){
                item.checked=false
            }
        })
    }
    else if(admissionLevel.value===arrayOflevel[0].innerText || 
        admissionLevel.value===arrayOflevel[1].innerText || 
        admissionLevel.value===arrayOflevel[2].innerText ){
        
        juniorSubject.classList.add('visible')
        department.classList.remove('visible')
        seniorSubject.classList.remove('visible')

        arrayOfSeniorSubject.forEach(item=>{
            if(item.tagName==='INPUT' && item.type==='checkbox'){
                item.checked=false
            }
        })
        arrayOfDepartment.forEach(item=>{
            if(item.tagName==='INPUT' && item.type==='radio'){
                item.checked=false
            }
        })
    }
})



