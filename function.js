let res = add(10,20);
console.log(res);

function add(a,b) {
    return a+b;
}

// arrow function are not hoisted but function declaration are hoisted
/*

In JavaScript, function expressions (including arrow functions) are not hoisted, which means you cannot use them before they are defined. This is why you're encountering an error when you try to call addition before it is defined.

let res1 = addition(10,20);
           ^
ReferenceError: Cannot access 'addition' before initialization

let res1 = addition(10,20);
console.log(res1);
const addition = (a,b)=>{
    return a+b;
}

*/

// To fix this, you have two main options:

//1. Move the function declaration above its first use:

const addition = (a, b) => {
    return a + b;
};

let res1 = addition(10, 20);
console.log(res1);

// 2.Use a function declaration instead of a function expression, as function declarations are hoisted:

let res1 = addition(10, 20);
console.log(res1);

function addition(a, b) {
    return a + b;
}


