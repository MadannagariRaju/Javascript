// String is used to store and manipulate the text
// we can create a string using following syntax
// String are immutable
let a ="raju"
console.log(a);
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])  // undefined 

// can access using index value but cannot change
// a[0]='R'  --> not possible

for(let i=0;i<a.length;i++) {
    console.log(a[i]);
}

let b='rahul'
console.log(b);

// template literals uses backticks to define a string

let c = `${a} is friend of ${b}`;
console.log(c);

// in template literal it is possible to use both double quotes and single quotes inside a string

// we can insert varible directly in template literal this is called "string interpolation"
let d = `${a} is "friend" 'of' ${b}`;
console.log(d);

// Escape sequence Character

let fruit = 'Banana'
// if i want to print Banana's then i would write 'Banana's' but it thinks string end at character a. for this we use escape sequence character

fruit = 'Banana\'s'
fruit = 'Banana\"s'
fruit = 'Banana\"s\nApple\nGrapes'   // \n -> next line
fruit = 'Banana\"s\tApple\tGrapes'   // \t -> tab
fruit = 'Banana\"s\rApple\rGrapes'   // \r -> carriage return 

console.log(fruit);


// String Methods

let city = "Hyderabad"

console.log(city.length)
console.log(city.toUpperCase())
console.log(city.toLowerCase())

console.log(city.slice(2,4)) // 4th index not included
console.log(city.slice(2))   // 2th index to end

city = city.replace("abad","nagar")
console.log(city)

let name1 = "raju";
let name2 = "rahul"
let name3 = name1.concat("is friend of ",name2, " yes Iam")  // or we can use + operator
console.log(name3)

let city2= "   Hyd    "
console.log(city2.trim())

// Practise Questions

//1Q what is the output of the "raju\"" 
//ans : 5   raju"

//2Q Explore includes(), startswith(), endswith()

let city3 = "Ramnagar"
console.log(city3.includes("nagar"));
console.log(city3.startsWith("R"));
console.log(city3.startsWith("r"));
console.log(city3.endsWith('r'));
console.log(city3.endsWith('R'));

//3Q convert a string to lowercase()

console.log(city3.toLowerCase());

//4Q extract amount out of the string

let txt = "Please give Rs 1000";

let arr = txt.split(" ");
for(let i=0;i<arr.length;i++) {
    if(!isNaN(arr[i])) {
        console.log(arr[i]);
    }
}

//5Q try to change 4th character of a string --> Not Possible

let m = "Rajuiamhere"
m[4]='Rahul'
console.log(m); // m is not changed because string is immutable