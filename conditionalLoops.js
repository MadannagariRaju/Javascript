/* 
 if
 if else
 if else if
 switch(value){
  case val1: 
  .
  .

 }
  Ternary Operator
*/
console.log((5>4)?true:false)

/*
 for loop
 for in loop -->loops througth the loops of the object and also work for arrays
 for of loop --> loops througth the values of the object and also work for arrays
 while loop
 do - while loop
*/

for(let m=0;m<5;m++) {
  console.log(m);
}

let obj ={
  name: "raju",
  age:22
}

for(let val of "233") {
  console.log(val);
}

// while loop

let i=5;
while(i>0) {
  console.log(i);
  i--;
}


let j=0;
do{
  console.log(j);
  j++;
}while(j<5)