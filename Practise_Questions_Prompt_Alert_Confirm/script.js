//1Q-3Q

let check = true;
let age;
while(check){
    age = prompt("enter your age: ")
    age=Number(age)
    if(age<0) {
        alert("Enter a valid number")
        console.error("age can't be -ve")
    }else if(age>18){
        alert("he can drive")
    }else if(age<18) {
        alert("he cannot drive")
    }
    check = window.confirm("do you want to see prompt again")
}
//4Q
if(age>4) {
    location.href ="https://www.google.com"
}


//5Q

let color = prompt("enter a color to change background color")
document.body.style.backgroundColor = color;