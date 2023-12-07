let array = [1, 45, 53, "Ramit", true];
console.log(array) //print whole array
console.log(array.length) // prints lenth of array


// Methods
array.push("Hi") // add elements in last and returns length

array.pop() // remove element from last and returns it

array.shift() //remove first element and returns it

array.unshift(5) // add elements in first and returns length

let b = array.toString() //converts the array into string, returns 1,45,53,Ramit,true

let c = array.join("_") //join each element of array with _ , returns 1_45_53_Ramit_true (string)

delete array[0] // deletes 0th position element but the length of array doesn't changes

let newArray = array.concat(array) //Concatinate both the arrays and retuerns a new array

array.sort()   //Sort the array in Alphabetical order

let compare = (a , b) => a-b
array.sort(compare) //Sort the array in Assending order

let Compare = (a , b) => b-a
array.sort(Compare) //Sort the array in desending order

array.reverse() // reverse the whole array

array.splice(1, 3, 45,667,4453,644) //splice(start idx, delete count, nums to be inserted)  modifies the array like this

let newArray1 = array.slice(45) // slice out elements after 45(data) 

let newArray2 = array.slice(45,113) // slice out elements present after 45(data) & upto 113 

let a = "Ramit"
let newArray4 = Array.from(a)  // Creates an array from an iterable object(String etc)