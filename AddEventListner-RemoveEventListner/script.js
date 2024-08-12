document.write("hello world")

// addEventListner and removeEventListner
// addEventListner is used to assign multiple handlers to an event

// ele.addEventListner(event, handler)
// ele.removerEventListner(event,handler)
// removeEventListner here -> handler must be the same function object for this to work


let ele= document.getElementById('btn');


// ele.addEventListener('click',function(){
//     alert("hello1")
// })

// ele.addEventListener('click',function(){
//     alert("hello2")
// })

// To remove handler alert('hello2') below removeEventListner does not work

// ele.removeEventListener('click',function(){
//     alert('hello2')
// })

// to work removeEventListner handler must be same function object like below

let x= function(e){
    console.log(e.target)
    console.log(e.type)
    console.log(e.currentTarget)
    console.log(e.clientX+" , "+e.clientY)
    alert("hello1")
}

let y = function(){
    alert("hello2")
}

let z = function(event){
    console.log(event.clientX+" , "+event.clientY)
    console.log(event.type)
}

ele.addEventListener('click',x);
ele.addEventListener('click',y);

ele.addEventListener('mouseenter',z)

// to remove handler y alert('hello2')

ele.removeEventListener('click',y)


// The Event Object
// When an event happens, the browser creates an event object,puts details into it and passes it as an argument to the handler

// ele.onclick = function(event){
//                  ......
//              }