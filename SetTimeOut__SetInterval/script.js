// setTimeOut(function, delay_time, function_argu1, function_argu2,.....);
// setTimeOut(function,delaytime,arguments of the function)

// setTimeOut allows us to run a function once after the interval of time
// setTimeOut runs only once
let timerId = setTimeout(function(){
    alert("hello1");
},3000);
console.log(timerId)

let timerId1 = setTimeout(function(){
    alert("hello2");
},3000);
console.log(timerId1)

//setTimeOut with arguments

const sum =(a,b,c,d)=>{
    console.log("a+b+c+d", a+b+c+d);
    return a+b+c+d;
}

setTimeout(sum,3000,10,20,30,40);


// setInterval -> It has similar syntax as setTimeOut
//But unlike setTimeOut, it runs the function not only onces but regularly after the given interval of time
//setInterval runs regularly after the given interval of time
// setInterval(function(){
//         alert("set interval out")
// },4000)


// with arguments

const sum1 =(a,b,c,d)=>{
    console.log("a+b+c+d", a+b+c+d);
    return a+b+c+d;
}

setInterval(sum1,5000,1,2,3,4);