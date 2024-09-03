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

    if(value < 0) {

        fightingEnemies[0].life -= Math.round((Math.abs(value) * (100 - fightingEnemies[0].defense)) / 100);

    } else {

        fightingEnemies[0].life += value;

    }

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

        document.getElementById("add-cards-attack").style.display = "block";

        updateAttackValue(handCards[currentCard].attack);

        // Add card to attack array

        attackArray.push(card);
        handCards.splice(currentCard, 1)

        // Check for current card data

        if (currentCard === handCards.length) {
            scrollCards(-1);
        }
        showCardAmount();
        showCurrentCardData();
        checkZero();

        // Disable button once no more cards are in player's hand

        if (handCards.length === 0) {
            document.getElementById("add-cards-attack").disabled = true;
            document.getElementById("add-cards-attack").innerHTML = "No more cards";
        }
 
    } else {

        alert("Currently in defense phase!");
        
    }

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

/** Update current attack value */

function updateAttackValue(num) {

    let attackValue = 0;
    attackValue = parseInt(document.getElementById("attack-strength").innerHTML);
    attackValue += num;

    document.getElementById("attack-strength").innerHTML = attackValue;
    document.getElementById("calculated-damage").innerHTML = Math.round(attackValue * (100 - fightingEnemies[0].defense) / 100);

}

/** Undo last card addition */

function undoAdd() {

    if (phase === "attack") {

        if (attackArray.length > 0) {

            // Check if no cards are currently in hand to update currently selected card
            
            if (handCards.length === 0) {
                currentCard = 0;
                document.getElementById("current-card").innerHTML = currentCard + 1;
                showCardAmount();
                showCurrentCardData();
            }

            // Add card to hand

            updateAttackValue(-attackArray[attackArray.length -1].attack); 
            handCards.push(attackArray.pop());
            showCardAmount();
            showCurrentCardData();
            checkZero();

            // Enable clicking for add button again

            document.getElementById("add-cards-attack").disabled = false;
            document.getElementById("add-cards-attack").innerHTML = "Add card";
            
        } 
    }

    if (phase === "defense") {

    }

}

/** Start attacking with the current attackArray */

function startAttack() {

    // Calculate attack power from cards in attackArray

    for (let i = 0; i < attackArray.length; i++) {

        enemyLife(-attackArray[i].attack);

    }

    // Calculate special skill values for each card

    for (let i = 0; i < attackArray.length; i++) {

        // Use skill when right phase is active

        if (attackArray[i].specialPhase === phase) {

            console.log("Skill used in right phase.");

            // Execute when card does not have a skill 

        } else if (attackArray[i].specialPhase === "none") {

            console.log("Skill does not have special phase requirements.");

        } else {

            console.log("Neither right phase nor usable skill.");

        }

    }

    showOverlay();
    attackArray.splice(0, attackArray.length);
    document.getElementById("attack-strength").innerHTML = 0;
    pickCards();

}

/** Button to change phase */

function changePhase() {

    document.getElementById("popup").style.display = "none";
    
    if (phase === "attack") {

        document.getElementById("add-cards-attack").style.display = "none";
        document.getElementById("start-attack").style.display = "none";
        document.getElementById("phase").innerHTML = "Defense phase";
        document.getElementById("calculated-damage").innerHTML = 0;
        document.getElementById("attack-strength").innerHTML = fightingEnemies[0].attack;
        phase = "defense";

    } else if (phase ==="defense") {

        document.getElementById("phase").innerHTML = "Attack phase";
        phase = "attack";
        attackPhase();

    } else {

        alert("Invalid phase value!");

    }

}

function showOverlay() {
    document.getElementById("popup").style.display = "flex";

    if (phase === "attack") {

        document.getElementById("source-name").innerHTML = "Player";
        document.getElementById("target-damage").innerHTML = document.getElementById("attack-strength").innerHTML;

    } else {

        document.getElementById("source-name").innerHTML = "Enemy";
        
    }

}