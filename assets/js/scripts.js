// Declare global variables

let cards = [];
let handCards = [];
let selectedCard = 0;

/** Function to load when DOM content is loaded */

document.addEventListener("DOMContentLoaded", (event) => {

    initCards();
    drawCards();
    showCard();

    document.getElementById("button-left").addEventListener("click", scrollCards(-1));
    document.getElementById("button-right").addEventListener("click", scrollCards(1));

    console.log(handCards);

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

function showCard() {

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

    showName.innerHTML = handCards[selectedCard].name;
    showAttack.innerHTML = `<i class="fa-solid fa-skull"></i> ${handCards[selectedCard].attack}`;
    showDefense.innerHTML = `${handCards[selectedCard].defense} <i class="fa-solid fa-shield-halved"></i>`;
    showDescription.innerHTML = handCards[selectedCard].description;
    cardDisplayLeft.innerHTML = selectedCard + 1;
    cardDisplayRight.innerHTML = handCards.length;
    
    if (handCards[selectedCard].special) {
        showSpecial.innerHTML = handCards[selectedCard].special;
    }

}

function scrollCards(num) {



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