const prompt = require('prompt-sync')()

let min = 1;
let max = 100;
let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
let score=0;
while(true) {
    let n = prompt("enter your number")
    if(n == randomNumber) {
        score++;
        console.log("your score: ",100-score)
        break;
    }
    else if( n<randomNumber) {
        console.log("number is lower than random number")
        score++;
    }
    else if(n>randomNumber) {
        console.log("number is higher than random number")
        score++;
    }
    console.log("Score ", score)
}