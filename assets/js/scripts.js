// Declare global variables

let cards = [];
let handCards = [];

/** Function to load when DOM content is loaded */

document.addEventListener("DOMContentLoaded", (event) => {

    initCards();
    console.log(cards);

});

/** Initiate cards to card deck */

function initCards() {

    for (let i = 0; i < 10; i++) {
        let card = new Card();
        cards.push(card);
    }

}

/** Declare number of cards to draw */

function drawCards() {

    let handCount = handCards.length;

    for (let i = handCount; i < 5; i++) {
        handCards[i] = randomCard();
    }

}

/** Get a random card from cards array */

function randomCard() {

    // Generate a random index, based on the length of the cards array

    const randomIndex = Math.floor(Math.random() * cards.length);
    const randomCard = cards[randomIndex];

    // Cut the chosen card from array

    cards.splice(randomIndex, 1);

    // Return value of the randomly chosen card

    return randomCard;

}

/** Load a random enemy to DOM */

function loadEnemy() {



}

/** Attack Phase Script */

function attackPhase() {



}

/** Defense Phase Script */

function defensePhase() {



}