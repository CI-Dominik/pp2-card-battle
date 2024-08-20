// Declare global variables

let cards = generateCards();
let handCards = [];
let selectedCard = 0;

/** Function to load when DOM content is loaded */

document.addEventListener("DOMContentLoaded", (event) => {

    // initCards();
    drawCards();
    showCard(0);

    console.log(cards);

});

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

function showCard(newSelect) {

    // Get HTML elements for card

    const showName = document.getElementById("show-name");
    const showAttack = document.getElementById("show-attack");
    const showDefense = document.getElementById("show-defense");
    const showSpecial = document.getElementById("show-special");
    const showDescription = document.getElementById("show-description");

    // Get display for amount of cards and selected card

    const cardDisplayLeft = document.getElementById("current-card");
    const cardDisplayRight = document.getElementById("hand-cards");

    // Change HTML content to attributes of currently selected card

    showName.innerHTML = handCards[newSelect].name;
    showAttack.innerHTML = `<i class="fa-solid fa-skull"></i> ${handCards[newSelect].attack}`;
    showDefense.innerHTML = `${handCards[newSelect].defense} <i class="fa-solid fa-shield-halved"></i>`;
    showDescription.innerHTML = handCards[newSelect].description;
    cardDisplayLeft.innerHTML = newSelect + 1;
    cardDisplayRight.innerHTML = handCards.length;
    
    if (handCards[newSelect].special) {
        showSpecial.innerHTML = handCards[selectedCard].special;
    } else {
        showAttack.innerHTML = "";
    }

}

/** Function to scroll through hand cards */

function scrollCards(num) {

    selectedCard += num;

    if (selectedCard > handCards.length - 1) {
        selectedCard = 0;
    }

    if (selectedCard < 0) {
        selectedCard = handCards.length - 1;
    }

    showCard(selectedCard);

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