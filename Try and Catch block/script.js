// We all make mistakes Also sometimes our script can have errors. Usually a program breaks when an error occurs.
// The try... catch syntax allows us to catch errors . so that the script instead of dying can do some thing more reasonable

// The try.. catch syntax
// The try catch syntax has two main blocks:
// try and  catch

// try{
//     // try the code
// }catch(err){
//     // error handling   // err varible contains an error object
// }

// It works like this
// 1.first the code in try is executed
// 2.if there is no error, catch is ignored else catch is executed


// setTimeout(function(){
//     console.log("function 1......")
// },1000);
// //console.log(rahul)   //script.js:6 Uncaught ReferenceError: rahul is not defined at script.js:6:17 . And also it breaks the code

// try{
//     console.log(rahul);
// }
// catch(err){
//     console.log(err)
// }
// setTimeout(function(){
//     console.log("function 2......")
//     // console.log(rahul)    //script.js:6 Uncaught ReferenceError: rahul is not defined at script.js:6:17
// },2000);
// setTimeout(function(){
//     console.log("function 3......")
// },3000);
// setTimeout(function(){
//     console.log("function 4......")
// },4000);
// setTimeout(function(){
//     console.log("function 5......")
// },5000);


// try catch works synchronouly
// if an exception happens in scheduled code, like in setTimeout, then try... catch won't catch it:

// try{
//     setTimeout(function(){
//         // error code   -> script dies and catch won't work
//     })
// }
// catch(){   

// }

// Thats because the function itself is executed later, when the engine has already left the try... catch construct

// console.log("before try catch block")

// try{
//     setTimeout(function(){
//         console.log(rahul)
//     },8000)
// }
// catch(err){
//     console.log(err);
// }

// console.log("After try catch block")


// The error object
// for all the built in errors, the error object has two main properties:
// err.name
// err.message


// try{
//     // console.log(rahul);
//     // throw new Error('hi iam new error')
//     throw new ReferenceError('hi iam reference error')
// }catch(err){
//     console.log(err)
//     console.log(err.name)       // -> which type of error it is -> 1.Error  2.ReferenceError
//     console.log(err.message)    // rahul is not defined
//     console.log(err.stack)      // ReferenceError: rahul is not defined at script.js:80:17
// }


// Custom Error

// try{
//     if(15<19){
//         throw new Error('invalid age')
//     }
// }
// catch(err){
//     console.log(err)
//     console.log(err.name)
//     console.log(err.message)
// }

// console.log("after blocks")


// The finally clause
// The try... catch construct may have one more code clause: finally
// if it exits it runs in all cases:
// after try if there were no errors
// after catch if there were errors
// if there is a return in try, finally is executed just before the control returns to the outer code


function check(){
    try{
        console.log(harry);
    }
    catch(err){
        console.log(err);
        console.log(p)
    }
    // console.log("hi how are you")
    finally{
        console.log('finally block')
    
        // Must to do task when an application opens
        // close the file
        // exit the loop
        // write to the log file
    }
}
check();


