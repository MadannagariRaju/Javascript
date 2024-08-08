let arr =[1,2,3,4,5,6];
let resarr = arr.map((val,index,array)=>{  // map return a new array
    console.log(val,index,array);
    return val;
})
let resarr1 = arr.map((val)=>{
    console.log(val);
    return val;
})
console.log(resarr);


let resarr2= arr.filter((val)=>{  //filter an array values that passes the test and create a new array
    return val>5;
})
console.log(resarr2)

let resarr3 = arr.reduce((a,b)=>{ // Reduce an array to single value  1,2,3,4,5,6 => 1+2=3 -> 3+3=6 -> 6+4=10 -> 10+5=15 -> 15+6=21
    return a+b;
})
console.log(resarr3)

// practise questions 

//1Q return an array that values divisible by 10
let a=[10,20,30,45,65,85,77,22,44,55];
let ares = a.filter((val)=>{
    return val%10!=0;
})
console.log(ares);

//2Q return an array that square of the values
let bres = a.map((val)=>{
    return val*val;
})
console.log(bres);

//3Q calculate the factorial of first given n natural numbers in an array

let n=[1,2,3,4,5,6];

let resn = n.reduce((a,b)=>{
    return a*b;
})
console.log(resn);