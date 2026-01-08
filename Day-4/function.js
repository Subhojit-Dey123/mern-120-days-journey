//1️⃣Create a function to print "Hello World"
/*function printHello() {
    console.log("Hello World");    
}
printHello();*/

//2️⃣Function to add two numbers
/*function add(a,b) {
    return a+b;
} 
console.log(add(5,6));*/

//3️⃣Function to find square of a number
/*function square(n) {
    return n*n;
}
console.log(square(67));*/

//4️⃣Function to check even or odd
/*function check(n) {
    if(n%2===0) {
        console.log(`${n} is an even number`);       
    } else {
        console.log(`${n} is an odd number`); 
    }
}
check(56);*/

//5️⃣Function to print numbers from 1 to N
/*function printNumbers(n) {
    for(let i=1; i<=n; i++) {
        console.log(i);
        
    }
}
printNumbers(45);*/

//6️⃣Function to find maximum of two numbers
/*function maximum(a,b) {
    if(a>b) {
        console.log(`${a} is the maximum number among ${a} and ${b}`);       
    } else {
        console.log(`${b} is the maximum number among ${a} and ${b}`);
    }
}
maximum(56,32);*/

//7️⃣Function to calculate factorial
/*function factorial(num) {  
    let fact=1;
    for(let i=1; i<=num; i++) {
        fact= fact*i;
    }  
    return fact;
}
console.log(factorial(5))*/

//8️⃣Function to check prime number
/*function prime(num) {
  let isPrime = true;
  if (num <= 1) {
    isPrime = false;
  } else {
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
  }
  return isPrime;
}
console.log(prime(3));*/

//9️⃣Function to reverse a number
/*function reverse(num) {
    let rev=0;
    while(num>0){
        let rem=num%10;
        rev= rev*10+rem;
        num=Math.floor(num/10);
    }
    return rev;
}
console.log(reverse(12345));*/


//🔟Function to check palindrome number
/*function palindrome(num) {
    let original=num;
    let rev=0;
    while(num>0) {
       let rem=num%10;
       rev=rev*10+rem;
       num=Math.floor(num/10); 
    }
    if(original===rev) {
        console.log(`${original} is a Palindrome number`);       
    } else {
        console.log(`${original} is NOT a Palindrome number`);   
    }
}
palindrome(1221);*/


//1️⃣1️⃣Function that returns sum of digits
/*function sum(num) {
    let sum=0;
    while(num>0) {
        let lastDigit=num%10;
        sum += lastDigit;
        num=Math.floor(num/10);
    }
       return sum;   
}
console.log(sum(342)); */

//1️⃣2️⃣Function that counts digits
/*function countDigit(num) {
    let count=0;
    if(count===0) {
        count=1;
    }
    while(num>0) {
        count++;
        num=Math.floor(num/10);
    }
    return count;
}
console.log(countDigit(0));*/


//1️⃣3️⃣Function to find power (without Math.pow)
/*function power(a,b) {
    return a**b;
}
console.log(power(5,2));*/

/*function power(a, b) {
    let result = 1;
    for (let i = 1; i <= b; i++) {
        result *= a;
    }
    return result;
}*/


//1️⃣4️⃣Function to check leap year
/*function leapYear(year) {
    if(year%4===0 && year%100!==0 || year%400===0) {
        console.log(`${year} is a leap year`);      
    } else {
        console.log(`${year} is NOT a leap year`)
    }
}
leapYear(2024);*/


//1️⃣5️⃣Function that returns grade based on marks
/*function grade(marks) {
    if(marks<0 || marks>100) {
        console.log("Enter a valid number");       
    } else if(marks>=90 && marks<=100) {
        console.log("You have scored grade A");       
    } else if(marks>=80 && marks<90) {
        console.log("You have scored grade B"); 
    } else if(marks>=60 && marks<80) {
        console.log("You have scored grade C"); 
    } else if(marks>=40 && marks<60) {
        console.log("You have scored grade D"); 
    } else {
        console.log("You have failed");
    }
}
grade(60);*/
    
    



