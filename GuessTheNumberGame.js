const prompt = require('prompt-sync')()

let min = 1;
let max = 100;
let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
let count=0;
while(true) {
    let n = prompt("enter a number between 1 - 100:  ")
    if(n == randomNumber) {
        count++;
        console.log("Number of Guesses ", count)
        console.log("Hurrah!!");
        console.log("your score: ",100-count)
        break;
    }
    else if( n<randomNumber && n<=100) {
        console.log("number is lower than random number")
        count++;
    }
    else if(n>randomNumber && n<=100) {
        console.log("number is higher than random number")
        count++;
    }else {
        console.log("please enter number between 1 -100")
    }
    console.log("Number of Guesses ", count)
}