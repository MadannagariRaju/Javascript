// Browser Events
// An event is a signal that something has happend.
// All the DOM nodes generates such signals

// Some important DOM events are:

// Mouse Events: click,contestmenu(right click),mouseover/mouseout, mousedown/mouseup, mousemove
// keyboard events: keydown and keyup
// form element events : submit, focus etc
// Document events: DOMContentLoaded

// Handling Events
// Events can be handled through HTML attributes

// <input value="hey" onclick = "alert('hey')" type = "button">
// alert('hey') --> can be another js function like below

// ele.onclick = function(){
//              alert("yes")
//              }


let ele = document.getElementById('btn');
ele.onclick = function() {
    alert('hey');
}

// Note: Adding a handler with javascript overwrites the existing handler