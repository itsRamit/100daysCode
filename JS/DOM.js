document.title // return title string
document.documentElement // returns elements (HTML tags)
document.body.firstChild // returns anytype of first child
document.body.firstElementChild // returns first Element child

// Searching the DOM
let a = document.getElementById("id")  //to get DOM element by id
let b = document.querySelectorAll(".selector") //to get DOM element by CSS selector (returns all the element having the selector)
let c = document.querySelectorAll(".selector")[0] // first element
let d = document.querySelector(".selector") //to get DOM element by CSS selector (returns the first elemnt element having the selector)
let e = document.getElementsByTagName("tag") //to get all DOM elements by tag
let f = document.getElementsByClassName("Classname") //to get all DOM elements by CSS Class name

element.matches("CSS") //Checks if the element matches the selector or not
element.closest("CSS") //Checks the nearest ancester with the selector
element.contains("Element") //checks if "Element" present inside the element or not
