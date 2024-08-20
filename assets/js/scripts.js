// Declare global variables

let cards = [];
let handCards = [];
let slideNumber = 0;

/** Function to load when DOM content is loaded */

document.addEventListener("DOMContentLoaded", (event) => {

    initCards();
    drawCards();
    showCards();

    document.getElementById("button-left").addEventListener("click", scrollCards(-1));
    document.getElementById("button-right").addEventListener("click", scrollCards(1));

});

/** Initiate cards to card deck */

function initCards() {

    let cardName = [];
    let cardAttack = [];
    let cardDefense = [];
    let cardSpecial = [];
    let cardDescription = [];

    for (let i = 0; i < 6; i++) {
        let card = new Card(cardName[i], cardAttack[i], cardDefense[i], cardSpecial[i], cardDescription[i]);
        cards[i] = card;
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

/** Show cards on hand */

function showCards() {



}

function scrollCards(click) {

    const showName = document.getElementById("show-name");
    const showAttack = document.getElementById("show-attack");
    const showDefense = document.getElementById("show-defense");
    const showSpecial = document.getElementById("show-special");
    const showDescription = document.getElementById("show-description");

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