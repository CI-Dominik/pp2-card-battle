// Declare global variables

cards = loadAvailableCards();

/** Function to load when DOM content is loaded */

document.addEventListener("DOMContentLoaded", (event) => {

});

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