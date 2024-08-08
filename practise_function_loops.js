// 1Q write a program to print marks of a student in an object using for loop

let obj ={
    raju: 98,
    rohan:97,
    rahul:86
}

for(let i=0;i<Object.keys(obj).length;i++) {
    console.log(Object.keys(obj)[i] , " ", obj[Object.keys(obj)[i]]);
}

//2Q  using for in loop
for(let key in obj) {
    console.log(obj[key]);
}

//3Q mean of five numbers

let a=1;
let b=2;
let c=3;
let d=4;
let e=5;

console.log("mean is: "+ (a+b+c+d+e)/5);

let res = mean(a,b,c,d,e);
console.log(res);

function mean(a,b,c,d,e) {
    return (a+b+c+d+e)/5;
}


let res1 = mean1([a,b,c,d,e]);
console.log(res1);

function mean1(arr) {
    let sum=0;
    for(let i=0;i<arr.length;i++) {
        sum +=arr[i];
    }
    return sum/arr.length;
}
