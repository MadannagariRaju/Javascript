// JavaScript can be used to send and return information from the network when needed(AJAX)
// Fetch API
// fetch is used to get data over the network and it returns promise
// let promise =  fetch(url, [optional])  --> without optional, a get request is sent

// Getting a response is a 2 stage process

// 1. An object of Response class containing "status" or "ok" properties

// status - The http status code, eg 200
// ok - boolean true if the http status code is 200 - 299

// 2. After that we need to call another method to access the body in different formats:
// response.text()  --> Read & return the text
// response.json()  --> parse the response as JSON

// Note: we can use only one body reading method example: if we have already got the response with response.text() then response.json() won't work

//" Response headers":
// The response headers are available in response headers

// "Request headers":
// To set a request header in  fetch, we can use the header option

// let res = fetch(url,{
//     headers:{
//         Authentication:'send'
//     }
// });


// let a = fetch('http://api.weatherapi.com/v1/current.json?key=4b7d0fdbad874658a1d53919241908&q=india&aqi=no');
// a.then((value)=>{
//     console.log(value.status);
//     console.log(value.ok);
//     console.log(value.headers)
//     // return value.text();
//     return value.json();
//     // return value;
// }).then((value)=>{
//     console.log(value)
// })


// async function usingasyncawait() {
//     let a = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//     let res = await a.json();
//     console.log(res);
// }
// usingasyncawait();


// Sending POST request with Fetch API
 
async function myfunc(obj) {
    let a = await fetch('https://jsonplaceholder.typicode.com/posts/',{
        method : 'POST',
        headers : {
            'Content-type' : 'application/json'
        },
        body:JSON.stringify(obj)
    })
    let res = await a.json();
    return res;
}

async function myfunc2(id){
    let a = await fetch(('https://jsonplaceholder.typicode.com/posts/'+id),{
        method: 'GET',
        headers: {
            'Content-type' : 'application/json'
        }
    })
    let res = await a.json();
    return res;
}

async function main(){
    let obj ={
        title : 'raju',
        body : 'bhai',
        userId : 2200
    }
    let res1 = await myfunc(obj);
    console.log(res1);
    let res2 = await myfunc2(5);
    console.log(res2)
}

main();
