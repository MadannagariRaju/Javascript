// Local Storage is a web storage object which are not sent to server with each request
// This data survives a full page refresh and even a full browser restart

// These are the methods provided by localstorage:

// 1.setItem(key,value)  -> store key/value pair
// 2.getItem(key)        -> get the value by key
// 3.removeItem(key)     -> remove the key with its value
// 4.clear()             -> delete everything
// 5.key(index)          -> get the key on a given position
// 6.length              -> the number of stored items

console.log("local storage")

localStorage.setItem("name","raju");
localStorage.setItem("name1","raju");

console.log(localStorage.getItem("name"))
console.log(localStorage.getItem("name1"))

localStorage.removeItem("name")
localStorage.removeItem("name1")


localStorage.setItem("name1","raju1");
localStorage.setItem("name2","raju2");
localStorage.setItem("name3","raju3");
localStorage.setItem("name4","raju4");
localStorage.setItem("name5","raju5");

// index starts from 0
console.log(localStorage.key(0))
console.log(localStorage.key(1))
console.log(localStorage.key(2))
console.log(localStorage.key(3))
console.log(localStorage.key(4))
console.log(localStorage.key(5))   // null

console.log(localStorage.length);

// localStorage.clear();

console.log(localStorage.length);


// we can get and set values like an object

// localstorage.one =1;

console.log(localStorage.name1);
localStorage.name1 = "Rakesh";
console.log(localStorage.name1);

delete localStorage.name1

console.log(localStorage.name1);

// Important Note
// 1.Both key and values must be strings
// 2.we can use the two json methods to store objects in localstorage

// JSON.Stringfy(object)  --> converts object to json string
// JSON.parse(string)     --> converts string to objects (must be a valid JSON)