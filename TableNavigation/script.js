let t = document.body.firstElementChild.firstElementChild
console.log(t) // table element

console.log(t.rows) // Collections of tr elements

console.log(t.caption) // reference to the caption

console.log(t.tHead) // reference to the tHead

console.log(t.tFoot) // reference to the tFoot

console.log(t.tBodies) // collection of the tbodies elements in an html collection as [tbody,tbody,tbody]

console.log(t.tBodies[0].rows) // returns 0th index tbody rows
console.log(t.tBodies[0].rows) // returns 1st index tbody rows
console.log(t.tBodies[0].rows) // returns 2nd index tbody rows

// Quiz what is the type of document and type of window in console

console.log(typeof document) // object

console.log(typeof window)  // object