/*
 <html>
    <head>
    </head>
    <body>
    </body>
 </html>
*/

// Accessing Children

console.log(document.head.childNodes) // childNodes will gives you NodeList, it is not same as array , inorder to convert it to array, you need to this

let arr = Arrays.from(document.head.childNodes); // now you can apply all array methods on arr


console.log("first child inside body tage",document.body.firstChild) // if there is space between head and body tag then it is considered as firstchild
console.log("last child inside body tage",document.body.lastChild)
console.log("list child nodes inside body tage",document.body.childNode)


for(let i=0;i<document.body.childNodes.length;i++) {
    console.log(document.body.childNodes[i])
}

// document.body.getElementsByTagName("h1") it looks like array but it is not an array it is a HTMLcollection
// we can convert it into array using Array.from()

console.log(document.body.getElementsByTagName("h1"));  // it creates an HTMLCollection of group of h1 tags looks like an array but it is not an array
for(let i=0;i<document.body.getElementsByTagName("h1").length;i++) {
    console.log(document.body.getElementsByTagName("h1")[i])
}

let arr = Array.from(document.body.getElementsByTagName("h1"))  // 
console.log(arr);
for(let i=0;i<arr.length;i++) {
    console.log(arr[i])
}

// Parents and siblings of an Element

// siblings are nodes that are children of the same parent
//example: head and body are siblings and there parent is html

// <body> is said to be next or right sibling of <head>
// <head> is said to be previous or left sibling of <body>

// The next sibling is in nextSibling property and the previous one in previousSibling property

console.log(document.head.nextSibling)
console.log(document.body.previousSibling)
console.log(document.body.getElementsByTagName("div")[0].parentNode)  // here two div child in body either it first div or second div but parent is body
console.log(document.body.getElementsByTagName("div")[1].parentNode)
console.log(document.body.getElementsByTagName("h1")[1].parentNode)   // here five h1 in div so its parent is div
console.log(document.body.getElementsByTagName("h1")[8].parentNode)

console.log(document.body.parentNode) // gives you textnode or html element
console.log(document.body.parentElement) // gives you a valid html


// Element only Navigation

// Sometimes we don't want text or comment nodes(eg: document.body.firstChild  -> text(empty space))
// So we need take Elements only into Account

 // For that we use firstElementChild, lastElementChild, nextElementSibling, previousElementSibling, 


 // Before
console.log(document.body.firstChild)
// After
console.log(document.body.firstElementChild);


 // Before
console.log(document.body.lastChild)
// After
console.log(document.body.lastElementChild);


 // Before
console.log(document.body.nextSibling)
// After
console.log(document.body.nextElementSibling);


 // Before
console.log(document.body.previousSibling)
// After
console.log(document.body.previousElementSibling);

