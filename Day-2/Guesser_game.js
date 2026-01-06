let random = Math.floor(Math.random()*100) + 1;

let guess;
while(true) {
    
     let input=prompt("Guess a number between 1-100");
     if(input===null) {
        console.log("Game cancelled");
        break;
     }
     guess=Number(input);
    if(isNaN(guess) || guess>100 || guess<1) {
        console.log("Enter number between 1-100");
        continue;
    }
    if(guess>random) {
        console.log('too high!, try again');     
    } else if(guess<random) {
        console.log('too low!, try again');       
    } else {
        console.log("congrats! 🎉 and number was",guess);
        break;
    }
}