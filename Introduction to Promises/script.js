// 1. Introduction to promises
// The solution to the callback hell is promises.
// A promise is a "promise of code execution". The code either executes or fails in both the cases the user will be notified

// The syntax of promise looks like
// let promise = new Promise(functino(resolve, reject){
//                  })

// resolve and reject are the two callbacks provided by javascript itself.
// They are called like this:
// resolve  --> if the job is finished succesfully
// reject --> if the job fails


// let promise = new Promise(function(resolve,reject){
//     alert("inside promise");
//     resolve(50);
// })

// alert("hello one")
// setTimeout(function(){
//     alert("hello two")
// },2000)

// alert("hello three")

// console.log(promise)    


// Promise .then() and .catch()


// let p1 = new Promise((resolve,reject)=>{
//     setTimeout(function(){
//         alert("Promises 1");
//         resolve(true)
//     },5000)
// })

// console.log(p1)

// you can use then, catch separately or In then(resove, reject)
// p1.then((value)=>{
//     console.log(value)
// })
// p1.catch((err)=>{
//     console.log(err);
// })

// then(resove, reject)

// p1.then((value)=>{
//     console.log(value);
// },(err)=>{
//     console.log(err)
// })

// let p2 = new Promise((resolve,reject)=>{
//     setTimeout(function(){
//         alert("Promises 2");
//         reject(new Error("Iam a new error"));
//     },5000)
// })

// console.log(p2)

// p2.then((value)=>{
//     console.log(value)
// },(error)=>{
//     console.log("some error has been occured "+error)
// })



//2. Promise chaining .then() calls

// alert("hello")

// let promise1 = new Promise((resolve,reject)=>{
//     setTimeout(function(){
//         console.log("inside settimeout 1") 
//         resolve(50);
//     },2000);
// })
// console.log(promise1)

// promise1.then((value)=>{
//     console.log(value)
//     let promise2 = new Promise((resolve, reject)=>{
//         console.log("inside settimeout 2")
//         resolve(25)
//     })
//     return promise2
// }).then((value)=>{
//     console.log(value);
//     return 10;
// }).then((value)=>{
//     console.log(value)
//     let promise3 = new Promise((resolve,reject)=>{
//         setTimeout(function(){
//             console.log("inside settimeout 3")
//             reject(new Error("iam a new error"))
//         })
//     })
//     return promise3

// }).catch((err)=>{
//     console.log(err)
// })


//  Quiz:  load Script we have done in Introduction callback function so, Now we do using promises.

// function loadscript(src) {
//     let script = document.createElement('script');
//     script.src=src;
//     document.body.appendChild(script)
//     let promise6 = new Promise((resolve,reject)=>{
//         script.onload =()=> resolve("script 1 loaded boss")
//         script.onerror =()=> reject("script 1 has been rejected")
//     })
//     return promise6;
// }



// let p1 = loadscript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js');

// p1.then((value)=>{
//     console.log(value);
//     return loadscript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js')
// }).then((value)=>{
//     console.log("script 2 is loaded ")
// })
// .catch((err)=>{
//     console.log(err)
// })


// Chaining is a SERIES process and Multiple Handlers is a PARALLEL process, As simple as that.

// let promise9 = new Promise((resolve,reject)=>{
//     alert("Iam not resolved");
//     resolve(1);
// })

// promise9.then((value)=>{
//     console.log(value);
//     return new Promise((resolve,reject)=>{
//         reject(new Error("Iam new Error"));
//     })
// }).catch((err)=>{
//     console.log(err)
// })

// promise9.then((value)=>{
//     console.log("handler 1",value);
// })

// promise9.then((value)=>{
//     console.log("handler 2",value);
// })



// Promises API

// 1.Promise.all(promises) -> Waits for all Promises to resolve and returns the array of their results. If any one fails, it becomes the error and all other results are ignored
// 2.Promise.allSettled(promises) -> Waits for all the Promises to settle and return their results as an array of objects with status and value
// 3.Promise.race(promises) -> Waits for the first promises to settle and its result/error becomes the outcome.
// 4.Promise.any(promises) -> Waits for the first Promises to fullfill ( & not rejected), and its result becomes the outcomes throws AggregateError if all the promises are rejected.
// 5.Promise.resolve(value) -> Makes a resolved promise with the given value.
// 6.Promise.reject(error) -> Makes a rejected promises with the given error

let p1 = new Promise((resolve,reject)=>{
    setTimeout(function(){
        console.log("value 1");
        // resolve(1);
        reject(new Error("Iam a new Error"))

    },1000)
})

let p2 = new Promise((resolve,reject)=>{
    setTimeout(function(){
        console.log("value 2");
        // resolve(2);
        reject(new Error("Iam a new Error"))
    },2000)
})

let p3 = new Promise((resolve,reject)=>{
    setTimeout(function(){
        console.log("value 3");
        resolve(3);
    },3000)
})

// p1.then((value)=>{
//     console.log(value);
// })
// p2.then((value)=>{
//     console.log(value);
// })
// p3.then((value)=>{
//     console.log(value);
// })

// the above .then() calls fullfill with their time
// but we need to full fill the promises all at one time then we use promises API

// let promises_all = Promise.all([p1,p2,p3])
// let promises_all = Promise.allSettled([p1,p2,p3])
// let promises_all = Promise.race([p1,p2,p3])
let promises_all = Promise.any([p1,p2,p3])
promises_all.then((value)=>{
    console.log(value)
})


