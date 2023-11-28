let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = "Want to play a round?"

let msgEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

// let sumEl = document.querySelector("#sum-el") --> can also use this

function startGame(){
    renderGame()
}

function renderGame(){
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }
    cardsEl.innerText = "Cards: " + firstCard + " " + secondCard
    sumEl.innerText = "Sum: "+ sum
    msgEl.innerText = message

}

if(sum <= 21) function newCard(){
    let card = 8
    firstCard = secondCard
    secondCard = card
    sum += card
    renderGame()
}

