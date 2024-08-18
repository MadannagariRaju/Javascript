// Synchronous 

// let a = prompt("enter your name");
// let b = prompt("enter your age");
// let c = prompt("enter your city");

// console.log("My Name is Raju "+a+".Iam"+b+" old"+" I live in "+c)

// Asynchronous

// console.log("first")
// setTimeout(function(){
//     console.log("second")
// },3000)
// console.log("third")


// Callback function
// A callback function is a function passed into another function as an argument which is then invoked inside the outer function to complete an action




function loadscript(src,callback){
    let script = document.createElement('script')
    script.src = src;
    script.onload = function(){
        callback(null,src)
    }
    script.onerror = function(){
        callback(new Error())
    }
    document.body.appendChild(script);
}


function greet(error,src) {
    if(error){
        console.log("script error ",error);
        return;
    }
    console.log("script loaded with src ",src);
}
loadscript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js',greet)




// simple example

function loadhello(callback){
    callback()
}

function hello() {
    console.log("say, Hello");
}

loadhello(hello)