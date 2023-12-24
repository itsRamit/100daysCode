//A Map holds key-value pairs where the keys & values can be any datatype.
let map = new Map() //Creates a new Map
map.set("Ramit",20) //Sets the value for a key in a Map
map.set("Karan",19)
let val = map.get("Ramit") //returns the value for a key in a Map
map.delete("Karan") //Removes a Map element specified by the key
let check = map.has("Ramit")	//Returns true if a key exists in a Map
let size = map.size //returns size
console.log(size)


console.log(typeof map) // returns object