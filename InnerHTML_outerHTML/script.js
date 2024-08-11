// "The innerHTML" property allows to get the HTML inside the element as a string 
console.log(document.getElementsByTagName('span')[0].innerHTML)

document.getElementsByTagName('span')[0].innerHTML='<div>hi Iam Raju from hyd</div>'

// "The outerHTML" property contains the full HTML innerHTML + the element itself

console.log(document.getElementsByTagName('span')[0].outerHTML)

// document.getElementsByTagName('span')[0].outerHTML= '<div> Code with harry </div>'

//  "textContent" property gives you the test inside the element
console.log(document.body.textContent)

console.log(document.getElementsByTagName('span')[0].textContent)

// "hidden" attribute and the DOM property specifies whether the element is visible or not

let hmla = document.getElementById('mla')
hmla.hidden = true // hidden = true  -> not visible

hmla.hidden = false // hidden = false -> visible