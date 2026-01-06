//7️⃣ Find the sum of digits of a number
/*let num=34;
let sum=0;
while(num>0) {
    let rem=num%10;
    sum += rem;
    num=Math.floor(num/10)
}
console.log(sum);*/

// 8️⃣ Reverse a number

/*let num=1234;
let rev=0;
while(num>0) {
    let rem=num%10;
    rev = rev*10+rem
    num=Math.floor(num/10);
}
console.log(rev);*/

// 🔟 Find the first digit of a number
/*let num=2354;
num = Math.abs(num);
while(num>=10) {
    num=Math.floor(num/10);
}
console.log(num);*/

// 6️⃣ Count the number of digits in a number
// let num=2353;
// let count = num.toString().length;
// console.log(count);

/*let num=15;
let count = 0;
if(num===0) {
    count=1;
}
else {
    while(num>0) {
        count++;
        num=Math.floor(num/10);
    }
}
console.log(count);*/

// 9️⃣ Check whether a number is a Palindrome
let num=1225221;
let original = num;

let reverse=0;
while(num>0) {
    let lastDigit= num%10;
    reverse = reverse*10 + lastDigit;
    num=Math.floor(num/10);
}
// console.log(reverse);
if(original===reverse){
    console.log("The number is a palindrome");
    
} else  {
    console.log("The number is not a palindrome");
}

