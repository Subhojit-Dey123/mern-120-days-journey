//1️⃣Print numbers from 1–50
// Skip multiples of 5
/*for(let i=1;i<=50;i++) {
    if(i%5!==0){
        console.log(i);      
    }      
}*/

//2️⃣Print numbers from 1–50
// Stop when number becomes greater than 35
/*for(let i=1;i<=50; i++) {
    if(i>35) {
        break;       
    }
    console.log(i);
}*/

//3️⃣Count how many numbers between 1–100 are divisible by 3
/*let count=0;
for(let i=1;i<=100; i++) {
    if(i%3===0) {
        count++;
    }
}
console.log(count);*/

// 4️⃣Print numbers from 1–100
// Print "Fizz" for multiples of 3
// Print "Buzz" for multiples of 5
/*for(let i=1; i<=100; i++){
    if(i%3===0 && i%5===0) {
        console.log("FizzBuzz");      
    } else if(i%3===0) {
        console.log("Fizz");
    } else if(i%5===0) {
        console.log("Buzz");      
    }
    else {
        console.log(i);       
    }
}*/

//5️⃣Find the sum of digits of a number
/*let num=2345;
let sum=0;
while(num>0) {
    let rem=num%10; //extracting the lastdigit
    sum += rem;
    num=Math.floor(num/10)
}
console.log(sum);*/

//6️⃣ Count the number of digits
/*let num = 457254;
let count = 0;
if (num === 0) {
  count = 1;
} else {
  while (num > 0) {
    count++;
    num = Math.floor(num / 10);
  }
}
console.log(count);*/

//7️⃣Reverse a number
/*let num=12345;
let rev=0;
while(num>0) {
    let lastdigit=num%10;
    rev = rev *10 + lastdigit;
    num=Math.floor(num/10);
}
console.log(rev);*/

// 8️⃣Check if a number is a palindrome
/*let num=123321;
let original=num;
let reverse=0;
while(num>0) {
    let lastdigit = num%10;
    reverse = reverse * 10 + lastdigit;
    num=Math.floor(num/10);
}
if(original===reverse) {
    console.log("It is a palindrome number");   
} else {
    console.log("It is not a palindrome number"); 
}*/

//9️⃣Find the factorial of a number
/*let num=5;
let fact=1;
for(let i=1;i<=num;i++) {
    fact=fact*i;
}
console.log(fact);*/

//🔟Print all factors of a number
/*let num=36;
for(let i=1; i<=num;i++) {
    if(num%i===0) {
        console.log(i);
    }
}*/

//1️⃣1️⃣Check if a number is prime
/*let num=7;
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
console.log(isPrime?"prime":"NOT a prime");*/

//1️⃣2️⃣Print all prime numbers between 1–50

/*function isPrime(n) {
    if(n<=1) return false;

    for(let i=2; i*i<=n;i++) {
        if(n%i===0) {
            return false;
        }
    }
    return true;
}
for(let num=1; num<=50;num ++) {
    if(isPrime(num)){
        console.log(num);      
    }
}*/
