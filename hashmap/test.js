import { Hashmap } from "./classes.js";

const myMap = new Hashmap();


myMap.set('Bob', 3)
myMap.set('Alice', 5)
myMap.set('Zeneva', 9)
myMap.set('Oleg', 2)

console.log(myMap.get('Bob'))
console.log(myMap.has('Bob'))

console.log(myMap.remove('Bob'))
console.log(myMap.has('Bob'))

console.log(myMap.length())

//myMap.clear()
//console.log(myMap.length())

console.log(myMap.keys())
console.log(myMap.values())
console.log(myMap.entries())