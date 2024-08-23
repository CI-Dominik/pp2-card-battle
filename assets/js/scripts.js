// Declare global variables

let cards = loadAvailableCards();
let handCards = [];
let currentCard = 0;
const maxHandCardsAmount = 4;

/** Function to load when DOM content is loaded */

document.addEventListener("DOMContentLoaded", (event) => {

    pickCards();
    scrollCards(currentCard);
    showCardAmount()

});

/** Function to pick up cards from deck */

function pickCards() {

    // Calculate amount of Cards to add to hand

    let cardsToPick = maxHandCardsAmount - handCards.length;

    for(i = 0; i < cardsToPick; i++) {

        if (cards.length === 0) {

            console.log("No cards remaining.");
            return;

        }
    
        // Get random card from stack (availableCards)

        let card = cards[Math.floor(Math.random() * availableCards.length)];
        const index = cards.indexOf(card);

        //Remove Card from Stack

        cards.splice(index, 1);

        // Add card to hand

        handCards.push(card);

        console.log("Remaining Cards in Stack: " + availableCards.length);
        console.log("Card picked: " + card.name);

    }

    showCardAmount();
    showCurrentCardData();
    currentCard = 0;
    document.getElementById("current-card").innerHTML = currentCard + 1;

}

/** Scroll through cards */

function scrollCards(num) {

    currentCard += num;

    if (handCards.length === 0) {
        document.getElementById("current-card").innerHTML = 0;
    }

    if (currentCard > handCards.length - 1) {
        currentCard = 0;
    }

    if (currentCard < 0) {
        currentCard = handCards.length - 1;
    }

    document.getElementById("current-card").innerHTML = currentCard + 1;

    checkZero();

}

/** Check if current card amount equals 0 */

function checkZero() {
    if (handCards.length > 0) {
        showCurrentCardData();
    } else {
        document.getElementById("current-card").innerHTML = 0;
    }
}

/** Show handCards amount */

function showCardAmount() {

    document.getElementById("hand-cards").innerHTML = handCards.length;

}

/** Show data of current card */

function showCurrentCardData() {

    document.getElementById("show-name").innerHTML = handCards[currentCard].name;
    document.getElementById("show-attack").innerHTML = `<i class="fa-solid fa-skull"></i> ` + handCards[currentCard].attack;
    document.getElementById("show-defense").innerHTML = handCards[currentCard].defense + ` <i class="fa-solid fa-shield-halved"></i>`;
    document.getElementById("show-description").innerHTML = handCards[currentCard].description;

}

function removeCard(num) {

    handCards.splice(handCards.length - 1, 1);

    if(currentCard === handCards.length) {
        scrollCards(-1);
    }

    showCardAmount();
    showCurrentCardData();
    checkZero();

}