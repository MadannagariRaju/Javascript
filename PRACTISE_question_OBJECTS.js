//create a variable of type string and a number to it

let a=10;
a=a+10;
console.log(a);
console.log(typeof (a))


let s = "Raju";
s = 20+s+20;
console.log(s);

//2Q
console.log(typeof (s))

//3Q create an const object javascript can you change it to hold a number later

const obj={
    name:"raju",
    age:22
}
// obj =23 // throws error const cannot be reassigned
console.log(obj) 

let obj1={
    name:"raju",
    age:22
}
obj1 =23
console.log(obj1) 

//4Q can you add a new key to const object were you able to do it
//ans-> Yes
const obj2={
    name:"raju",
    age:22
}

obj2.city = "hyd";
obj2.job ={}
console.log(obj2)
