let listItems=document.querySelectorAll('li');
if(listItems){
    for (let i=0; i< listItems.length; i++) {
        let firstInput=document.createElement('input'); let secondInput=document.createElement('input');
        let thirdInput=document.createElement('input'); let fourthInput=document.createElement('input');

        let firstLabel=document.createElement('label'); let secondLabel=document.createElement('label');
        let thirdLabel=document.createElement('label'); let fourthLabel=document.createElement('label');

        firstLabel.innerText='A'; secondLabel.innerText='B';
        thirdLabel.innerText='C'; fourthLabel.innerText='D';

        firstInput.setAttribute('type','radio'); 
        firstInput.setAttribute('name',`question ${[i+1]}`);
        firstInput.setAttribute('value',`${firstLabel.innerText}`);

        secondInput.setAttribute('type','radio');
        secondInput.setAttribute('name',`question ${[i+1]}`);
        secondInput.setAttribute('value',`${secondLabel.innerText}`);

        thirdInput.setAttribute('type','radio');
        thirdInput.setAttribute('name',`question ${[i+1]}`);
        thirdInput.setAttribute('value', `${thirdLabel.innerText}`);

        fourthInput.setAttribute('type','radio');
        fourthInput.setAttribute('name',`question ${[i+1]}`);
        fourthInput.setAttribute('value',`${fourthLabel.innerText}`);

        let div=document.createElement('div');
        div.append(firstLabel,firstInput,secondLabel,secondInput,thirdLabel,thirdInput,fourthLabel,fourthInput)

        listItems[i].insertAdjacentElement('afterend',div)
    }
}else{
    console.log('none')
}