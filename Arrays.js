// In javascript Arrays stores multiple type of values 
// In javascript Arrays are Objects and typeof operator for arrays return object

let arr = [1,2,3,"raju",true,'hi']
console.log(arr);

console.log(typeof arr)
// Assignign values
let arr1=[];
arr1[0]=0
arr1[1]=10;
arr1[2]=20;
arr1[3]=30;
arr1[4]=40;
arr1[5]=50;
console.log(arr1);

// finding length
console.log(arr1.length);

//changing values

arr1[0]=100;
console.log(arr1)

// Array Method

let arr2=[1,2,3,4,5]

console.log(arr2.toString())
console.log(arr2.join("->"))

let lastelement = arr2.pop();  // removes last element of array
console.log(lastelement)
console.log(arr2);

arr2.push(6);  // adds new element at last of array
console.log(arr2)

let firstelement = arr2.shift() // removes first element of array
console.log(firstelement);
console.log(arr2);

arr2.unshift(7)  // add new element at first of array
console.log(arr2);


// **delete operator --> it deletes the value  but it doesn't change the size of the array
console.log(arr2.length);
delete arr2[2];
console.log(arr2);
console.log(arr2.length);

//concat --> returns a new array does not change the existing array

let a1=[1,2,3,4,5]
let a2=[6,7,8,9,10]
let a4=[11,12,13,14,15]
let a5=[16,17,18,19,20]
let a3=a1.concat(a2,a4,a5)
console.log(a3);

//sort  --> modifies the original array

let arr4 = [18,29,17,56,85,3,5,34,41,72,83];
arr4.sort() // it sort the array by alphabetical order like first letter 1,2,3,4,5....
// to sort the numbers we need to pass optional compare function to sort()
const compare =(a,b)=>{
    // return a-b; // ascending order
    return b-a;    // descending order
}
arr4.sort(compare)
console.log(arr4);

//reverse() --> reverse the elements in the source array

let arr5 =[1,2,3,4,5,6,7,8,9]
arr5.reverse()
console.log(arr5);

// slice() --> slice out a piece from an array. It creates a new array

let arr6 =[1,2,3,4];
console.log(arr6.slice(2));
console.log(arr6.slice(1,4))

// splice() --> splice helps to add a new element to the array and returs removed elements
// splice(position to add ,number of elements to remove, elements to be added)

let arr7 =[1,2,3,4,6,7,8,9]
let removedElements = arr7.splice(2,3,1,2)
console.log(removedElements);
console.log(arr7);

// for, forEach, for of, for in

let arr8 =[1,2,3,4,5,6,7,8,9]

for(let i=0;i<arr8.length;i++) {
    console.log(arr8[i]);
}

// array.forEach(function)
arr8.forEach((Element)=>{
    console.log(Element);
})
arr8.forEach(function(Element){
    console.log(Element);
})

//for of loop

for(let i of arr8) {
    console.log(i);
}

//for in loop  --> in case of Objects it prints keys but arrays in js is objects so it prints its index value

for(let i in arr8) {
    console.log(i); // index value
    console.log(arr8[i]);
}