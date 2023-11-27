// let myAge = 35
// let humanDogRatio = 7

// let myDogAge = myAge*humanDogRatio

// console.log(myDogAge)

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0
function increment(){ 
    count++
    countEl.innerText = count
}

function save(){
    saveEl.innerText += count + "-"
    countEl.innerText = 0
    count = 0
}

// let name = "Ramit"
// let greeting = "hi, my name is "
// let myGreeting = greeting + name
// console.log(myGreeting)

// let firstcard = 6
// let secondcard = 8

// let sum = firstcard + secondcard


// if(sum < 21){
//     console.log("Do you want to draw a new card")
// }
// else if(sum === 21){

// }
// else{

// }