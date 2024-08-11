// here we look some of the methods to insert elements in the dom .here is another way

let a = document.getElementsByTagName('div')[0]
console.log(a)

let div = document.createElement('div');
div.className = "second div"
div.innerHTML = "Iam MLA"

// a.appendChild(div)

// inserting methods 

// 1. node.append(e)  -> append at the end of node
// 2. node.prepend(e) -> insert at the beginning of node
// 3. node.before(e)  -> insert before node
// 4. node.after(e)   -> insert after node
// 5. node.replaceWith(e) -> replaces node with the given node

// a.append(div)

// a.prepend(div)

// a.before(div)

// a.after(div)

// a.replaceWith(div)

// insertAdjacentHTML, insertAdjacentElement and insertAdjacentText 

// a.insertAdjacentHTML('beforebegin','<div>BEFORE BEGIN</div>')
// a.insertAdjacentHTML('beforeend','<div>BEFORE END</div>')
// a.insertAdjacentHTML('afterbegin','<div>AFTER BEGIN</div>')
// a.insertAdjacentHTML('afterend','<div>AFTER END</div>')



// node removal -> to remove a node there is a method

// a.remove()