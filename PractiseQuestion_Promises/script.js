// async function loadscript(src){
//     let script = document.createElement('script');
//     document.body.appendChild(script);
//     script.src = src;
//     let p1 = new Promise((resolve,reject)=>{
//             script.onload =()=>{
//             resolve('script loaded');
//             }
//             script.onerror =()=>{
//                 reject("script not loaded");
//             }
//     })
//     return p1
// }


// let src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js'


// 1.Problem

// let a = loadscript(src);
// a.then((value)=>{
//     console.log(value)
// }).catch((err)=>{
//     console.log(err);
// })

// 2.Problem

// const main =async ()=>{
//     console.log(new Date());
//     let a= await loadscript(src);
//     console.log(new Date());
//     console.log(a);
// }
// main();


// 3.Problem


// function ThirdQuestion(){
//     let p1 = new Promise((resolve,reject)=>{
//         setTimeout(function(){
//             reject(new Error("this is new error"));
//         },3000)
//     })
//     return p1;
// }

// const ans = async ()=>{
//     try{
//         let a = await ThirdQuestion();
//         console.log(a)
//     }catch(err){
//         console.log(err)
//     }
// }

// ans();


// 4.Problem
const p1 = async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            resolve(10)
        },1000)
    })
}

const p2 = async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            resolve(20)
        },5000)
    })
}

const p3 = async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            resolve(30)
        },2000)
    })
}

const ansthree = async () =>{
    // console.time("run");
    // let a1 = await p1();
    // console.log(a1);
    // let a2 = await p2();
    // console.log(a2);
    // let a3 = await p3();
    // console.log(a3);
    // console.timeEnd("run")


    let a1 =  p1();
    let a2 =  p2();
    let a3 =  p3();
    let a4 = Promise.all([a1,a2,a3])
    console.log(a4);
    console.timeEnd("run")
    a4.then((value)=>{
        console.log(value);
    }).catch((err)=>{
        console.log(err)
    })

}

ansthree()