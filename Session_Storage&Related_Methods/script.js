// Session storage
// Used less often than localstorage. Properties and methods are same as localstorage. but....

// 1.The sessions storage exists only within the current browser tab. Another tab with same page will have a different storage

// 2.The data survives page refresh, but not closing/opening the tab


// Methods of session storage are similar to local storage


// Storage Event
// When the data gets updated in localstorage or sessionStorage,
// storage event triggers with these properties:

// 1.key -> key
// 2.oldValue -> previous value
// 3.newValue -> New Value
// 4.url -> page url
// 5.storageArea -> local or sessionStorage

// we can listen the onstorage event of window which is triggered when updates are made to the same storage from other documents.

console.log("Session storage")

// sessionStorage.setItem("name","raju")

window.onstorage = () =>{
    alert("changed")
}