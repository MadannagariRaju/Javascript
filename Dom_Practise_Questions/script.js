//1Q

let firstelement = document.querySelector('.navbar-brand')

firstelement = document.getElementsByClassName('navbar-brand')[0]

firstelement = document.querySelectorAll('.navbar-brand')[0]


firstelement.style.color="red"

//2Q
// ans -> no

//3Q
let parent = document.querySelector('.container')
parent.firstElementChild.style.color= "blue"
parent.lastElementChild.style.color = "red"

parent.querySelectorAll('p')[0].style.color ="green"
parent.querySelectorAll('p')[2].style.color ="orange"
parent.querySelectorAll('p')[parent.querySelectorAll('p').length-1].style.color ="yellow"

console.log(parent)

//4Q


let liele = document.querySelectorAll('li')
for(let i=0;i<liele.length;i++) {
    liele[i].style.backgroundColor = 'cyan'
}


document.querySelectorAll('li').forEach((li)=>{
    li.style.backgroundColor = 'cyan'
})

//5Q
// ans -> closest