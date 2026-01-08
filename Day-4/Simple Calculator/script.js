let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let addBtn = document.getElementById('addBtn');
let subBtn = document.getElementById('subBtn');
let mulBtn = document.getElementById('mulBtn');
let divBtn = document.getElementById('divBtn');
let result = document.querySelector('.result');

addBtn.addEventListener('click', ()=> {
    let a = Number(num1.value);
    let b = Number(num2.value);
    result.innerHTML=add(a,b);
} )
subBtn.addEventListener('click', ()=> {
    let a = Number(num1.value);
    let b = Number(num2.value);
    result.innerHTML=subtract(a,b);
} )
mulBtn.addEventListener('click', ()=> {
    let a = Number(num1.value);
    let b = Number(num2.value);
    result.innerHTML=multiply(a,b);
} )
divBtn.addEventListener('click', ()=> {
    let a = Number(num1.value);
    let b = Number(num2.value);
    result.innerHTML=divide(a,b);
} )

function add(a,b) {
    return a+b;
}
function subtract(a,b) {
    return a-b;
}
function multiply(a,b) {
    return a*b;
}
function divide(a,b) {
    if(b===0) {
        return("Cannot divide by 0");       
    }
    return a/b;
}


