// Declare global variables

let cards = loadAvailableCards();
let handCards = [];
let currentCard = 0;
let fightingEnemies = loadEnemies(3);
let playerHealth = 0;
let phase = "attack";
let cardUseStack = [];
const maxHandCardsAmount = 4;

/** Function to load when DOM content is loaded */

document.addEventListener("DOMContentLoaded", () => {

    pickCards();
    scrollCards(currentCard);
    showCardAmount();
    showEnemy();
    playerLife(500);
    document.getElementById("defense-strength").innerHTML = fightingEnemies[0].defense;

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
        document.getElementById("card-image").style.background = "url(../images/cards/" + handCards[currentCard].image + ") center center/cover";

    } else {

        document.getElementById("show-name").innerHTML = "No card in hand";
        document.getElementById("show-attack").innerHTML = `<i class="fa-solid fa-skull"></i> 0`;
        document.getElementById("show-defense").innerHTML = `0 <i class="fa-solid fa-shield-halved"></i>`;
        document.getElementById("show-description").innerHTML = "No card in hand";
        document.getElementById("card-image").style.background = "url(../images/no-card.jpg) center center/cover";

    }

}

/** Function to remove num cards from current hand */

function removeCard(num) {

    handCards.splice(currentCard, 1);

    if (currentCard === handCards.length) {

        scrollCards(-1);

    }

    showCardAmount();
    showCurrentCardData();
    checkZero();

}

/** Update HTML content to show current enemy status */

function showEnemy() {

    if (fightingEnemies.length > 0 ) {

        document.getElementById("enemy-name").innerHTML = fightingEnemies[0].name;
        document.getElementById("enemy-attack").innerHTML = `<i class="fa-solid fa-skull"></i> ${fightingEnemies[0].attack}`;
        document.getElementById("enemy-defense").innerHTML = `${fightingEnemies[0].defense} <i class="fa-solid fa-shield-halved"></i>`
        document.getElementById("enemy-description").innerHTML = fightingEnemies[0].description;
        document.getElementById("enemy-health").innerHTML = fightingEnemies[0].life;
        document.getElementById("enemy-image").style.background = "url(../images/enemies/" + fightingEnemies[0].image + ") center center/cover";
    
    } else {

        winGame();

    }
    
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

    if (value < 0) {

        fightingEnemies[0].life -= Math.round((Math.abs(value) * (100 - fightingEnemies[0].defense)) / 100);

    } else {

        fightingEnemies[0].life += value;

    }

    // Check if more enemies are available

    if (fightingEnemies[0].life <= 0 && fightingEnemies.length > 0) {

        fightingEnemies.splice(0, 1);
        

    } else if (fightingEnemies.length === 0) {

        winGame();

    }

    showEnemy();

}

/** Declares the end of the game by winning */

function winGame() {

    document.getElementById("enemy-name").innerHTML = "No enemy available";
    document.getElementById("enemy-attack").innerHTML = 0;
    document.getElementById("enemy-defense").innerHTML = 0;
    document.getElementById("enemy-description").innerHTML = "No enemy available";
    document.getElementById("enemy-health").innerHTML = 0
    document.getElementById("enemy-image").style.background = "url(../assets/images/no-card.jpg) center center/cover";

    document.getElementById("add-cards").disabled = true;
    document.getElementById("undo-add").disabled = true;
    document.getElementById("start-attack").disabled = true;

    document.getElementById("button-left").disabled = true;
    document.getElementById("button-right").disabled = true;

    alert("You win!");

}

/** Declares the end of the game by losing */

function gameLost() {

    alert("You lost!");

}

/** Attack with currentCard */

function addCard(card) {

    if (phase === "attack") {

        updateAttackValue(handCards[currentCard].attack);
            

    } else if (phase === "defense") {

        updateDefenseValue(handCards[currentCard].defense);

    }

    cardUseStack.push(card);
    handCards.splice(currentCard, 1);

    // Check for current card data

    if (currentCard === handCards.length) {

        scrollCards(-1);

    }

    showCardAmount();
    showCurrentCardData();
    checkZero();

    // Disable button once no cards are in player's hand

    if (handCards.length === 0) {

        document.getElementById("add-cards").disabled = true;
        document.getElementById("add-cards").innerHTML = "No cards";
            
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

/** Update current defense value */

function updateDefenseValue(num) {

    let defenseValue = 0;
    defenseValue = parseInt(document.getElementById("defense-strength").innerHTML);
    defenseValue += num;

    document.getElementById("defense-strength").innerHTML = defenseValue;
    document.getElementById("calculated-damage").innerHTML = Math.round((100 - defenseValue) / 100 * fightingEnemies[0].attack);

    if (document.getElementById("calculated-damage").innerHTML < 0) {
        document.getElementById("calculated-damage").innerHTML = 0;
    }

}

/** Undo last card addition */

function undoAdd() {

    if (cardUseStack.length > 0) {

        // Check if no cards are currently in hand to update currently selected card
            
        if (handCards.length === 0) {

            currentCard = 0;
            document.getElementById("current-card").innerHTML = currentCard + 1;
            showCardAmount();
            showCurrentCardData();

        }

        // Add card to hand

        if (phase === "attack") {

            updateAttackValue(-cardUseStack[cardUseStack.length -1].attack);
                
        } else if (phase === "defense") {

            updateDefenseValue(-cardUseStack[cardUseStack.length -1].defense);
                
        }

        handCards.push(cardUseStack.pop());
        document.getElementById("add-cards").disabled = false;
        document.getElementById("add-cards").innerHTML = "Add card";

        showCardAmount();
        showCurrentCardData();
        checkZero();

    }

}

/** Start attacking with the current cardUseStack */

function startAttack() {

    // Calculate attack power from cards in cardUseStack

    if (phase === "attack") {

        for (let i = 0; i < cardUseStack.length; i++) {

            if (fightingEnemies.length > 0) {
    
                enemyLife(-cardUseStack[i].attack);
    
            } else {
                console.log("No enemies.");
            }
        
        }

    } else if (phase === "defense") {

        let defenseValue = 0;
        
        for (let i = 0; i < cardUseStack.length; i++) {
            defenseValue += cardUseStack[i].defense;
        }

        playerLife(-Math.round((100 - defenseValue) / 100 * fightingEnemies[0].attack));

    }

    // showDamage();

    if (fightingEnemies.length > 0) {
        showOverlay();
    }
    cardUseStack.splice(0, cardUseStack.length);

}

/** Calculate special skill values for each card */

function skillUsage() {

    for (let i = 0; i < cardUseStack.length; i++) {

        // Use skill when right phase is active
    
        if (cardUseStack[i].specialPhase === phase) {
    
            switch (cardUseStack[i].specialType) {

                case "magic": {

                }

                case "heal": {

                }

                case "defense": {

                }

            }

        // Execute when card does not have a skill 
    
        } else if (cardUseStack[i].specialPhase === "none") {
    
            console.log("Skill does not have special phase requirements.");
    
        } else {
    
            console.log("Neither right phase nor usable skill.");
    
        }

    }

}

/** Button to change phase */

function changePhase() {

    document.getElementById("popup").style.display = "none";
    
    if (phase === "attack") {

        document.getElementById("phase").innerHTML = "Defense";
        document.getElementById("calculated-damage").innerHTML = fightingEnemies[0].attack;
        document.getElementById("attack-strength").innerHTML = fightingEnemies[0].attack;
        document.getElementById("defense-strength").innerHTML = 0;
        phase = "defense";

    } else if (phase ==="defense") {

        document.getElementById("phase").innerHTML = "Attack";
        document.getElementById("calculated-damage").innerHTML = 0;
        document.getElementById("defense-strength").innerHTML = fightingEnemies[0].defense;
        document.getElementById("attack-strength").innerHTML = 0;
        pickCards();
        document.getElementById("add-cards").disabled = false;
        document.getElementById("add-cards").innerHTML = "Add card";
        phase = "attack";

    } else {

        alert("Invalid phase value!");

    }

}

function showOverlay() {
    
    document.getElementById("popup").style.display = "flex";

    if (phase === "attack") {

        document.getElementById("source-name").innerHTML = "Player";
        document.getElementById("target-damage").innerHTML = document.getElementById("calculated-damage").innerHTML;

    } else {

        document.getElementById("source-name").innerHTML = "Enemy";
        document.getElementById("target-damage").innerHTML = document.getElementById("calculated-damage").innerHTML;
        
    }

}


/** Show damage number on enemy or player */

/*

function showDamage(type) {

    // Select player or enemy damage number, based on phase

    let number = phase === "attack" ? document.getElementById("damage-number-enemy") : document.getElementById("damage-number-player");
    let shrinkInterval = null;
    let size = 0;
    let increaseInterval = setInterval(increaseSize, 5);
    number.innerHTML = document.getElementById("attack-strength").innerHTML

    // **************** TO DO ****************
    // let audioHit = new Audio("assets/sounds/" + type + "-hit.wav");

    function increaseSize() {

        // Increase size up to 50px

        if (size >= 50) {

            // Check if sound is enabled and play audio if true
            
            if (soundEnabled === true) {

                audioHit.play();

            }
            
            // Stop increase and start shrinking

            clearInterval(increaseInterval);
            shrinkInterval = setInterval(shrinkSize, 5);
            
        } else {

            size++;
            number.style.fontSize = size + "px";

        }
    }

    // Shrink damage number

    function shrinkSize() {

        // Check if text is gone

        if (size <= 0) {

            clearInterval(shrinkInterval);

        } else {

            size--;
            number.style.fontSize = size + "px";
            
        }

    }
    
} */