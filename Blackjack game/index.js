let firstCard = 10
let secondCard = 4
let cards = [firstCard, secondCard]
let sum = cards[0] + cards[1]
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

// let sumEl = document.querySelector("#sum-el") --> can also use this

function randomNumber(){
    return Math.floor( Math.random()*14 )
}

function startGame(){
    renderGame()
    }
    
function renderGame() {
    cardsEl.textContent = "Cards: "
    for(let i = 0 ; i<cards.length;i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    let card = randomNumber()
    sum += card
    cards.push(card)
    renderGame()
}


// let c = Math.random()*21
// let b = Math.floor(c)
// console.log(c)
// console.log(b)


