// 1️⃣Check if a number is divisible by 5 and 11
/*let num=110;
if(num%5===0 && num%11===0) {
    console.log(`${num} is divisible by both 5 and 11`);    
} else {
    console.log(`${num} is not divisible by both 5 and 11`);
}*/


//2️⃣Check whether a character is a vowel or consonant
/*let char="e";
if(char=="a" || char=="e" || char=="i" || char=="o" || char=="u") {
    console.log(`${char} is a vowel`);  
}
else {
    console.log(`${char} is a consonant`);  
}*/


//3️⃣Check if a number is a 3-digit number
/*let number=100;
if(number>=100 && number<=999) {
    console.log(`${number} is a three digit number`); 
} else {
    console.log(`${number} is not a three digit number`);  
}*/


//4️⃣Check whether a number is multiple of both 3 and 7
/*let num=21;
if(num%3===0 && num%7===0) {
    console.log(`${num} is multiple of both 3 and 7`);   
} else {
    console.log(`${num} is not a multiple of both 3 and 7`);
}*/


//5️⃣Check if a person is eligible to vote
/*let age=45;
if(age>=18) {
    console.log(`The person is eligible to vote`);
} else {
    console.log("The person is not eligible to vote");
}*/

//6️⃣Check if a number is a perfect square
/*let num=36;
const square=Math.sqrt(num);
if(square%1===0) {
    console.log(`${num} is a perfect square`);    
} else {
    console.log(`${num} is not a perfect square`);
}*/

//7️⃣Calculate profit or loss
/*let cp=450;
let sp=600;
if(cp<sp) {
    console.log('profit');    
} else {
    console.log("loss");
    
}*/

//8️⃣Find the last digit of a number
/*let num=457;
console.log(num%10);*/

//9️⃣Find the first digit of a number
/*let num=325;
num=Math.abs(num) // to handle -ve numbers
while(num>=10) {
  num= Math.floor(num/10)
}
console.log(num);*/


//🔟Electricity bill calculator
// ≤100 → ₹1/unit
// 101–200 → ₹2/unit
// 200 → ₹3/unit

/*let unit=202;
let amount=0;
if(unit>200) {
   amount= (unit-200)*3;
   unit=200;
}
if(unit>100 && unit<=200) {
    amount += (unit-100)*2;
    unit=100
}
amount+=(unit*1)
console.log(amount);*/

//1️⃣1️⃣Discount calculator
// 5000 → 20%
// 2000 → 10%
// Else → 0%

/*let bill=2000;
if(bill>=5000) {
   console.log(bill-(bill*20)/100) 
} else if(bill>=2000 && bill<5000) {
    console.log(bill-(bill*10)/100) 
} else {
    console.log("No Discount for you");
    
}*/

let num1 = Number(prompt("Enter first number"));
let operator = prompt("Enter operator (+, -, *, /)");
let num2 = Number(prompt("Enter second number"));

let result;

switch (operator) {
    case "+":
        result = num1 + num2;
        break;

    case "-":
        result = num1 - num2;
        break;

    case "*":
        result = num1 * num2;
        break;

    case "/":
        if (num2 === 0) {
            console.log("Division by zero is not allowed");
            break;
        }
        result = num1 / num2;
        break;

    default:
        console.log("Invalid operator");
}

if (result !== undefined) {
    console.log("Result:", result);
}

