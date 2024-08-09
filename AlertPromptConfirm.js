const prompt = require('prompt-sync')()

alert("hi")
let a = prompt("Enter your number")

let write = confirm("do you want to confirm")  // yes -> true  || no -> false

if(write) {
    console.log(a)
}else{
    console.log("not allowed")
}