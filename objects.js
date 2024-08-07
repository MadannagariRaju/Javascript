let obj = {
    name: "raju",
    age: 22,
    city: "hyd",
    status: undefined,
    job: null
}

obj['name'] = "Raju"
obj.name = "raju"
console.log(obj['name']);
console.log(obj.name);

// iterate object
for(let key in obj) {
    console.log(key);
}

//keys(), values(), entries()

console.log(Object.keys(obj));
let Keys = Object.keys(obj);
console.log(Keys);
for(let key in Keys) {
    console.log(Keys[key])
}


console.log(Object.values(obj))
let Values = Object.values(obj)
console.log(Values);
for(let value in Values) {
    console.log(Values[value]);
}


console.log(Object.entries(obj))
let Entries = Object.entries(obj);
console.log(Entries)
for(let entry in Entries) {
    console.log(Entries[entry]);
}
for(let i in Entries) {
    for(let j in i) {
        console.log(Entries[i[j]]);
    }
}

// object clone

let o1={};
let o2={
    name:"raju",
    age:22
}
let combined = {...o1,...o2}
console.log(combined)


let a =Object.assign(o1,o2);
console.log(a);
console.log(o1);


// Object freeze  -> This method freezes an object, preventing new properties from being added and existing properties from being removed or modified.

let egobj ={
    name: "raju",
    age: 22
}
Object.freeze(egobj)
egobj.name = "Raju ";
console.log(egobj.name);

// Object seal -> This method seals an object, preventing new properties from being added, but allows existing properties to be modified.

let egobj2 ={
    name: "raju",
    age: 22
}
Object.seal(egobj2);
egobj2.name = "Raju";
egobj2.city = "hyd";
console.log(egobj2);


let obj2 = new Object();

obj2.name = "raju";
obj2.age = 22;
obj2.city = "hyd";
obj2.status = undefined;
obj2.job = null;

console.log(obj2);