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

let obj2 = new Object();

obj2.name = "raju";
obj2.age = 22;
obj2.city = "hyd";
obj2.status = undefined;
obj2.job = null;

console.log(obj2);