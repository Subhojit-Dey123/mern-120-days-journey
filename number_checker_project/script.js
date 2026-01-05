console.log("button clicked");

let btn = document.getElementById("checkBtn");
let resOutput = document.getElementById("output");
let secOutput = document.getElementById("secOutput");
let input = document.getElementById('inputBox')

btn.addEventListener('click',checkNum);

function checkNum() {

    if(input.value.trim()===" ") {
        resOutput.value="Enter a number";
        secOutput.value="-";
        return;      
    }

    let num=Number(input.value); 

    //Positive / Negative / Zero
    if(num<0) {
        secOutput.value="Negative";
    } else if(num===0) {
        secOutput.value="Zero";
    } else{
        secOutput.value="Positive";
    }

    //Even / Odd
    if(num!==0) {
        resOutput.value=(num%2===0) ? "Even":"Odd";

    } else {
        resOutput.value="-";
    }

    
}
