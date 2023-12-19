let a = new Date("03-03-2020")  //returns current date & time
let x = new Date(milliseconds) // returns date & time after the given ms from jan 1 1970
let y = new Date(dateString) //returns a specific date
let z = new Date(year, month, day, hours, minutes, seconds, milliseconds) // returns a specific date & time




let b = new Date().getDate() // returns current day of month (1-31)
let c = new Date().getDay()  // returns current day of week (0-6)
let d = new Date().getFullYear() // returns current year
let e = new Date().getHours() // returns current hours (0-23)
let f = new Date().getMilliseconds() // returns current milliseconds (0-999)
let g = new Date().getSeconds() // returns current seconds (0-59)
let h = new Date().getMinutes() // returns current seconds (0-59)
let i = new Date().getMonth() // returns current month (0-11)
let j = new Date().getUTCDate() // returns current UTC day of month (1-31)...and we can implement UTC for all the above methods

console.log(x)