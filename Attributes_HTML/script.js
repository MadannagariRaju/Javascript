// Attributes Methods 

// Attributes are nothing but id, class, hidden, href, alt, src ... etc


// 1. ele.hasAttribute(name) -> Method to check the existance of the attribute 
// 2. ele.getAttribute(name) -> Method used to get the value of the attribute
// 3. ele.setAttribute(name,value) -> Method used to set the value of the attribute or can add a new attribute using this method
// 4. ele.removeAttribute(name) -> Method used to remove the attribute from element
// 5. ele.attributes() -> Method to get the collection of all attributes

let ele = document.getElementById('id1')
console.log(ele)

console.log(ele.hasAttribute('class'))

console.log(ele.getAttribute('class'))
console.log(ele.getAttribute('id'))

ele.setAttribute('hidden','true')

console.log(ele.getAttribute('hidden'))

console.log(ele.attributes)

// Custom Attributes -> we can set a custom attribute . The attribute must start with data-attribute. you can get all custom attribute using ele.dataset method

console.log(ele.dataset)
