// matches, closest, contains methods in javascript
// There are three important methods to search  the DOM

// ele.matches(css) ->to check if element matches the given css selector
// ele.closest(css) ->to look for the nearest ancestor that matches the given selector. the element is also checked
// eleA.contains(eleB) -> returns true if eleB is inside eleA (a descendent of eleA) or when eleA == eleB



let id1 = document.getElementById('id1')
let cont = document.getElementsByClassName('container')[0]
console.log(id1)

console.log(id1.matches('.raju')) // false because  <h1 class="box" id="id1">Hello , Iam Robot</h1> here class is 'box'
console.log(id1.matches('.box'))

console.log(id1.closest('.container'))  // returns ancestore element that matches given css 
console.log(id1.closest('.box'))

let id3 = document.getElementById('id3')
console.log(cont.contains(id3)) // false  
//false because
//<div class="container">
//<h1 class="box" id="id1">Hello , Iam Robot</h1>
//<h1 class="box" id="id1">Hello , Iam Robot</h1>
//</div>
//<h1 id="id3">hello, Iam Robot</h1>

console.log(cont.contains(id1))
