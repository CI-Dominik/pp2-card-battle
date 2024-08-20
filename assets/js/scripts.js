// Declare global variables

let cards = loadAvailableCards();
let handCards =[];
const maxHandCardsAmount = 4;

/** Function to load when DOM content is loaded */

document.addEventListener("DOMContentLoaded", (event) => {

    pickCards();

});

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

}