// Declare global variables

let cards = loadAvailableCards();
let handCards = [];
let currentCard = 0;
let fightingEnemies = loadEnemies(3);
let playerHealth = 0;
let phase = "attack";
let attackArray = [];
let defenseArray = [];
const maxHandCardsAmount = 4;

/** Function to load when DOM content is loaded */

document.addEventListener("DOMContentLoaded", (event) => {

    pickCards();
    scrollCards(currentCard);
    showCardAmount();
    showEnemy();
    playerLife(50);

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

    }

    
    currentCard = 0;
    document.getElementById("current-card").innerHTML = currentCard + 1;
    showCardAmount();
    showCurrentCardData();
    checkZero();

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

    if (handCards.length > 0) {

        document.getElementById("show-name").innerHTML = handCards[currentCard].name;
        document.getElementById("show-attack").innerHTML = `<i class="fa-solid fa-skull"></i> ` + handCards[currentCard].attack;
        document.getElementById("show-defense").innerHTML = handCards[currentCard].defense + ` <i class="fa-solid fa-shield-halved"></i>`;
        document.getElementById("show-description").innerHTML = handCards[currentCard].description;

    } else {

        console.log("No cards on hand.");
        document.getElementById("show-name").innerHTML = "No card in hand";
        document.getElementById("show-attack").innerHTML = `<i class="fa-solid fa-skull"></i> 0`;
        document.getElementById("show-defense").innerHTML = `0 <i class="fa-solid fa-shield-halved"></i>`;
        document.getElementById("show-description").innerHTML = "No card in hand";

    }

}

/** Function to remove num cards from current hand */

function removeCard(num) {

    handCards.splice(currentCard, 1);

    if(currentCard === handCards.length) {
        scrollCards(-1);
    }

    showCardAmount();
    showCurrentCardData();
    checkZero();

}

/** Update HTML content to show current enemy status */

function showEnemy() {

    document.getElementById("enemy-name").innerHTML = fightingEnemies[0].name;
    document.getElementById("enemy-attack").innerHTML = `<i class="fa-solid fa-skull"></i> ${fightingEnemies[0].attack}`;
    document.getElementById("enemy-defense").innerHTML = `${fightingEnemies[0].defense} <i class="fa-solid fa-shield-halved"></i>`
    document.getElementById("enemy-description").innerHTML = fightingEnemies[0].description;
    document.getElementById("enemy-health").innerHTML = fightingEnemies[0].life;

}

/** Shows current player life and adjust HTML elements */

function playerLife(value) {

    playerHealth += value;
    document.getElementById("player-health").innerHTML = playerHealth;

    // Check if player health reaches 0

    if (playerHealth <= 0) {

        gameLost();

    }

    }

/** Adjust enemy health */

function enemyLife(value) {

    fightingEnemies[0].life += value;

    // Check if more enemies are available

    if (fightingEnemies[0].life <= 0 && fightingEnemies.length > 0) {

        fightingEnemies.splice(0, 1);
        showEnemy();

        // Check if enemy counter is 0

        if (fightingEnemies.length === 0) {

            winGame();
        
        }

    } else {

        showEnemy();

    }

}

/** Declares the end of the game by winning */

function winGame() {
    alert("You win!");
}

/** Declares the end of the game by losing */

function gameLost() {
    alert("You lost!");
}

/** Attack with currentCard */

function attackWithCard(card) {

    if (phase === "attack") {

        let addButton = document.getElementById("add-button");
        addButton.style.display = "block";

        attackArray.push(card);
        removeCard(1);
 
    } else {

        alert("Currently in defense phase!");
        
    }

    console.log(`Attack array: ${attackArray}, handCards: ${handCards}`);
    
}

/** Starting defense phase */

function defensePhase() {

    // DEFENSE PHASE BANNER

    if (phase === "defense") {

        console.log("You are in defense phase.");

    } else {

        alert("Currently in attack phase!");

    }

}

/** Undo last card addition */

function undoAdd() {

    if (phase === "attack") {

        if (attackArray.length > 0) {

            handCards.push(attackArray.pop());
            showCardAmount();
            showCurrentCardData();

            console.log("Hand cards:" + handCards);
            console.log("Cards in array:" + attackArray);

        } else {

            console.log("No cards in array");

        }
    }

    if (phase === "defense") {

    }
}

/** Button to change phase */

function changePhase() {
    
    if (phase === "attack") {

        document.getElementById("phase").innerHTML = "Defense phase";
        phase = "defense";

    } else if (phase ==="defense") {

        document.getElementById("phase").innerHTML = "Attack phase";
        phase = "attack";
        attackPhase();

    } else {
        alert("Invalid phase value!");
    }

}