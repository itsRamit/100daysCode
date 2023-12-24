//A JavaScript Set is a collection of unique values.
//Each value can only occur once in a Set.

const letters = new Set(["a","b","c"]); //we can pass a array while initializing

letters.add(5) // to add single element
letters.delete('b') // to delete a element
let a = letters.has('a') //return in boolean
let b = letters.values() // returns a iterable set
console.log(letters)
console.log(b)