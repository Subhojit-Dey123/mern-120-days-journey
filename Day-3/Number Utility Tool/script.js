let input = document.getElementById("inputBox");
let reverseBtn = document.getElementById("reverseBtn");
let PalindromeBtn = document.getElementById("PalindromeBtn");
let sumBtn = document.getElementById("sumBtn");
let primeBtn = document.getElementById('primeBtn');
let result = document.querySelector(".result");

reverseBtn.addEventListener("click",reverse);
PalindromeBtn.addEventListener("click",palindrome);
sumBtn.addEventListener('click',sum);
primeBtn.addEventListener('click',Prime);


function reverse() {
    let num=parseInt(input.value);
    let original=num;
    let rev=0;
    while(num>0) {
        let lastDigit=num%10;
        rev = rev*10+lastDigit;
        num=Math.floor(num/10);
    }
    result.innerHTML=`Reverse of ${original} is ${rev}`;
}
function palindrome() {
    let num=parseInt(input.value);
    let original=num;
    let rev=0;
    while(num>0) {
        let lastDigit=num%10;
        rev = rev*10+lastDigit;
        num=Math.floor(num/10);
    }
    if(original===rev){
        result.innerHTML="It is a Palindrome number";
    } else {
        result.innerHTML="It is NOT a Palindrome number";
    }  
}

function sum() {
    let num=parseInt(input.value);
    let original=num;
    let sum=0;
    while(num>0) {
        let lastDigit=num%10;
        sum += lastDigit;
        num=Math.floor(num/10);
    }
    result.innerHTML=`Sum of ${original} is ${sum}`;
}

function Prime() {
    let num=parseInt(input.value);

    if (isNaN(num)) {
        result.innerHTML = "Please enter a valid number";
        return;
    }

    let isPrime=true;
    if(num<=1) {
        isPrime=false;
    } else {
        for(let i=2; i*i<=num; i++) {
            if(num%i===0) {
                isPrime=false;
                break;
            }
        }
    }
    if(isPrime) {
        result.innerHTML="It is a Prime number"
    } else {
        result.innerHTML="It is NOT a Prime number"
    }
}