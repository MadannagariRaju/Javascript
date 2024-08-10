// firstChild,firstElementChild, lastChild, lastElementChild, nextsibling, nextElementsibling, previoussibling, previousElementsibling
// the above useful for small websites with less lines of code



// for large websites we need to search for elements using following:

// 1.document.getElementById()
// 2.document.getElementsByClassName()
// 3.document.getElementsByClassName()
// 4.document.getElementsByTagName()
// 5.document.getElementsByName()
// 6.document.querySelector()
// 7.document.querySelectorAll()

let title = document.body.getElementsByClassName('card-title'); // it has htmlCollections of class card-title
console.log(title)
title[0].style.color = "red"
title[1].style.color = "yellow"
title[2].style.color = "pink"

// similarly
// let title1 = document.getElementById();


//queryselector are css selector
//let select = document.body.querySelectorAll('card-title') -> wrong

let select = document.body.querySelectorAll('.card-title')
console.log(select)
select[0].style.color ="blue"
select[1].style.color ="blue"
select[2].style.color ="blue"

let oneselect = document.body.querySelector('.card-title')
oneselect.style.color = "Green"


