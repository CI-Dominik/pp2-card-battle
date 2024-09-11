// Declare global variables

let cards = loadAvailableCards();
let handCards = [];
let currentCard = 0;
let fightingEnemies = loadEnemies(3);
let playerHealth = 0;
let playerStunDuration = 0;
let phase = "attack";
let playerEffects = [];
let cardUseStack = [];
const maxHandCardsAmount = 4;

/** Function to load when DOM content is loaded */

document.addEventListener("DOMContentLoaded", () => {

    pickCards();
    scrollCards(currentCard);
    showCardAmount();
    addRandomSkill();
    showEnemy();
    playerLife(250);
    document.getElementById("defense-strength").innerHTML = fightingEnemies[0].defense;
    document.getElementById("remaining-enemies").innerHTML = fightingEnemies.length;
    clickPopup();

    window.onclick = function(event) {

        if (event.target === document.getElementById("popup-handler") || event.target === document.getElementById("stun-popup-handler")) {

            event.target.style.display = "none";

        }

    };

});

/** Function to pick up cards from deck */

function pickCards() {

    // Calculate amount of Cards to add to hand

    let cardsToPick = maxHandCardsAmount - handCards.length;

    for(i = 0; i < cardsToPick; i++) {

        if (cards.length === 0 && handCards.length <= 0) {

            gameLost();
            return;

        } else if(cards.length === 0) {

            document.getElementById("add-cards").disabled = false;
            continue;

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
    updateCardCounter();

}

function updateCardCounter() {

    if (cards.length > 0) {

        document.getElementById("remaining-cards").innerHTML = cards.length;

    } else {

        document.getElementById("remaining-cards").innerHTML = 0;

    }

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
        document.getElementById("show-special-description").innerHTML = handCards[currentCard].specialDescription;
        document.getElementById("card-image").style.background = "url(assets/images/cards/" + handCards[currentCard].image + ".webp) center center/cover";

    } else {

        document.getElementById("show-name").innerHTML = "No card in hand";
        document.getElementById("show-attack").innerHTML = `<i class="fa-solid fa-skull"></i> 0`;
        document.getElementById("show-defense").innerHTML = `0 <i class="fa-solid fa-shield-halved"></i>`;
        document.getElementById("show-description").innerHTML = "No card in hand";
        document.getElementById("show-special-description").innerHTML = "No card in hand";
        document.getElementById("card-image").style.background = "url(assets/images/no-cards.webp) no-repeat center center/cover";

    }

}

/** Update HTML content to show current enemy status */

function showEnemy() {

    if (fightingEnemies.length > 0 ) {

        document.getElementById("enemy-name").innerHTML = fightingEnemies[0].name;
        document.getElementById("enemy-attack").innerHTML = `<i class="fa-solid fa-skull"></i> ${fightingEnemies[0].attack}`;
        document.getElementById("enemy-defense").innerHTML = `${fightingEnemies[0].defense} <i class="fa-solid fa-shield-halved"></i>`;
        document.getElementById("enemy-description").innerHTML = fightingEnemies[0].description;
        document.getElementById("enemy-special-description").innerHTML = fightingEnemies[0].specialDescription;
        document.getElementById("enemy-health").innerHTML = fightingEnemies[0].life;
        document.getElementById("enemy-image").style.background = "url(assets/images/enemies/" + fightingEnemies[0].image + ".webp) center center/cover";
    
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

        playerHealth = 0;
        document.getElementById("player-health").innerHTML = playerHealth;
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

        document.getElementById("effect-text").innerHTML += `• ${fightingEnemies[0].name} was defeated.<br>`;

        fightingEnemies[0].enemyEffects.length = 0;
        fightingEnemies[0].stunDuration = 0;
        document.getElementById("show-enemy-stun").innerHTML = "";
        document.getElementById("show-enemy-stun").style.display = "none";
        document.getElementById("show-enemy-effect").innerHTML = "";
        document.getElementById("show-enemy-effect").style.display = "none";
        fightingEnemies.splice(0, 1);
        document.getElementById("remaining-enemies").innerHTML = fightingEnemies.length;

    } else if (fightingEnemies.length === 0) {

        document.getElementById("remaining-enemies").innerHTML = 0;
        winGame();
        return;

    }

    showEnemy();

}

/** Declares the end of the game by winning */

function winGame() {

    // Erase enemy data

    document.getElementById("enemy-name").innerHTML = "No enemy available";
    document.getElementById("enemy-attack").innerHTML = 0;
    document.getElementById("enemy-defense").innerHTML = 0;
    document.getElementById("enemy-description").innerHTML = "No enemy available";
    document.getElementById("enemy-special-description").innerHTML = "No enemy available";
    document.getElementById("enemy-health").innerHTML = 0;
    document.getElementById("enemy-image").style.background = "url(../assets/images/no-card.jpg) center center/cover";
    document.getElementById("show-enemy-effect").innerHTML = "";
    document.getElementById("show-enemy-effect").style.display = "none";
    document.getElementById("show-enemy-stun").innerHTML = "";
    document.getElementById("show-enemy-stun").style.display = "none";

    // Erase fighting data

    document.getElementById("attack-strength").innerHTML = 0;
    document.getElementById("defense-strength").innerHTML = 0;
    document.getElementById("calculated-damage").innerHTML = 0;

    // Disable buttons

    document.getElementById("add-cards").disabled = true;
    document.getElementById("undo-add").disabled = true;
    document.getElementById("start-attack").disabled = true;

    document.getElementById("button-left").disabled = true;
    document.getElementById("button-right").disabled = true;

    document.getElementById("win-lose-message").innerHTML = "You have won the game! Do you want to play again?";
    document.getElementById("win-lose-popup").style.display = "flex";

}

/** Declares the end of the game by losing */

function gameLost() {

    // Disable buttons

    document.getElementById("add-cards").disabled = true;
    document.getElementById("undo-add").disabled = true;
    document.getElementById("start-attack").disabled = true;

    document.getElementById("button-left").disabled = true;
    document.getElementById("button-right").disabled = true;

    document.getElementById("win-lose-message").innerHTML = "You have lost the game! Do you want to play again?";
    document.getElementById("win-lose-popup").style.display = "flex";

}

/** Attack with currentCard */

function addCard(card) {

    if (playerStunDuration <= 0) {

        // Update attack value when adding a card in the attack phase

        if (phase === "attack") {

            updateAttackValue(handCards[currentCard].attack);
                
        // Update the defense value when adding a card in the defense phase

        } else if (phase === "defense") {

            updateDefenseValue(handCards[currentCard].defense);

        }

        // Add card to fighting deck and remove currently selected hand card

        cardUseStack.push(card);
        handCards.splice(currentCard, 1);

        // Check for current card data

        if (currentCard === handCards.length) {

            scrollCards(-1);

        }

        // Show amount of cards after adding

        showCardAmount();
        showCurrentCardData();
        checkZero();

        // Disable add button once no cards are in player's hand

        if (handCards.length === 0) {

            document.getElementById("add-cards").disabled = true;
            document.getElementById("add-cards").innerHTML = '<i class="fa-solid fa-xmark"></i>';
        
        }

    } else {

        document.getElementById("stun-popup-handler").style.display = "flex";

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

        // Re-enable add cards button

        document.getElementById("add-cards").disabled = false;
        document.getElementById("add-cards").innerHTML = '<i class="fa-solid fa-plus"></i>';

        // Show new card amount

        showCardAmount();
        showCurrentCardData();
        checkZero();

    }

}

/** Start attacking with the current cardUseStack */

function startAttack() {

    // Check for player stun and reduce the amount by one round

    if (playerStunDuration > 0) { 

        playerStunDuration -= 1;

    }

    // Check for enemy stun and reduce the amount by one round

    if (fightingEnemies[0].stunDuration > 0) {

        fightingEnemies[0].stunDuration -= 1;

    }

    // Check the stun status of the player and current enemy

    stunCheckPlayer();
    stunCheckEnemy();

    checkPlayerEffects();

    if (fightingEnemies[0].enemyEffects.length !== 0) {

        checkEnemyEffects();

    }

    // Check for player an enemy skills

    skillCheckPlayer();

    let randomChance = Math.round(Math.random() * 100);
    
    if (randomChance <= 8) {

        if (fightingEnemies[0].stunDuration <= 0) {

            skillCheckEnemy();

        } 

    }

    if (phase === "attack") {

        for (let i = 0; i < cardUseStack.length; i++) {
    
            if (fightingEnemies.length > 0) {
        
                enemyLife(-cardUseStack[i].attack);
        
            }
            
        }

    }

    // Calculate defense power from cards in cardUseStack

    if (phase === "defense") {

        if (fightingEnemies[0].stunDuration <= 0) {

            let defenseValue = 0;
        
            for (let i = 0; i < cardUseStack.length; i++) {

                defenseValue += cardUseStack[i].defense;

            }

            if (playerHealth > 0) {

                playerLife(-Math.round((100 - defenseValue) / 100 * fightingEnemies[0].attack));

            }

        } else {

            document.getElementById("effect-text").innerHTML += `• ${fightingEnemies[0].name} is stunned and did not attack.`;

        }
        
    }

    if (cards.length === 0 && handCards.length <= 0 && fightingEnemies.length === 0) {

        winGame();
        return;

    } else if (cards.length === 0 && handCards.length <= 0) {

        gameLost();
        return;

    }

    // Disable buttons to disable actions during popup window

    if (fightingEnemies.length > 0 && playerHealth > 0) {

        document.getElementById("add-cards").disabled = true;
        document.getElementById("undo-add").disabled = true;
        document.getElementById("start-attack").disabled = true;

        document.getElementById("button-left").disabled = true;
        document.getElementById("button-right").disabled = true;

        // Show popup window for next phase

        showOverlay();

    }

    // Clear stack after phase

    cardUseStack.splice(0, cardUseStack.length);

}

/** Button to change phase */

function changePhase() {

    // Hide the popup

    document.getElementById("popup").style.display = "none";

    // Clear every used skill

    document.getElementById("effect-text").innerHTML = "";

    // Check if all cards were played before the popup appeared

    if (handCards.length > 0) {

        document.getElementById("add-cards").disabled = false;

    }

    // Re-enable buttons after closing popup window

    document.getElementById("undo-add").disabled = false;
    document.getElementById("start-attack").disabled = false;

    document.getElementById("button-left").disabled = false;
    document.getElementById("button-right").disabled = false;

    // Change from attack phase to defense phase

    if (phase === "attack") {

        document.getElementById("phase").innerHTML = "Defense";
        if (fightingEnemies[0].stunDuration === 0) {

            document.getElementById("calculated-damage").innerHTML = fightingEnemies[0].attack;
            document.getElementById("attack-strength").innerHTML = fightingEnemies[0].attack;

        } else {

            document.getElementById("calculated-damage").innerHTML = 0;
            document.getElementById("attack-strength").innerHTML = 0;

        }
        
        document.getElementById("defense-strength").innerHTML = 0;

        // Change background color on change to attack phase

        document.getElementById("score").style.background = "#CCFEFF";

        phase = "defense";

    // Change from defense phase to attack phase

    } else if (phase ==="defense") {
    
        document.getElementById("phase").innerHTML = "Attack";
        document.getElementById("calculated-damage").innerHTML = 0;
        document.getElementById("defense-strength").innerHTML = fightingEnemies[0].defense;
        document.getElementById("attack-strength").innerHTML = 0;
        pickCards();

        // Check if there are more actions available after chaning the phase

        if (cards.length !== 0 && handCards.length > 0) {

            document.getElementById("add-cards").disabled = false;

        }

        // Change button to plus icon

        document.getElementById("add-cards").innerHTML = '<i class="fa-solid fa-plus"></i>';

        // Change background color on change to attack phase

        document.getElementById("score").style.background = "#FFCCCB";

        // Change to attack phase

        phase = "attack";

    }

}

/** Show popup for attack summary */

function showOverlay() {

    let source = "";

    if (phase === "attack") {

        source = "Player";

    } else {

        source = "Enemy";

    }

    document.getElementById("damage-summary").innerHTML = `${source} inflicted ${document.getElementById("calculated-damage").innerHTML} damage.`;
    document.getElementById("popup").style.display = "flex";

}

/** Close help popup */

function clickPopup() {

    // Get popup window and close button

    let popupWindow = document.getElementById("popup-handler");

    // Check for display status and change it

    if (popupWindow.style.display === "flex") {

        popupWindow.style.display = "none";

    } else {

        popupWindow.style.display = "flex";

    }
}

/** Check for usable skills of cards in fight stack */

function skillCheckPlayer() {

    for (let card of cardUseStack) {

        if (card.specialPhase === phase) {

            switch (card.specialType) {

                case "healing":

                    playerLife(card.specialValue);
                    document.getElementById("effect-text").innerHTML += `• ${card.name} restored ${card.specialValue} HP to the player.<br>`;

                    break;

                case "dot":

                    if (fightingEnemies[0].enemyEffects.length === 0) {

                        fightingEnemies[0].enemyEffects.push(new Dot(card.specialValue, card.specialDuration));
                        document.getElementById("effect-text").innerHTML += `• ${card.name} applied a DoT effect for ${card.specialDuration} rounds.<br>`;
                        document.getElementById("show-enemy-effect").style.display = "block";
                        document.getElementById("show-enemy-effect").innerHTML = `DoT: ${card.specialValue} / ${card.specialDuration} rounds`;

                    } else {

                        document.getElementById("effect-text").innerHTML += `• Usage of ${card.name}'s DoT effect failed, because every slot is occupied.<br>`;

                    }

                    break;

                case "hot":

                    if (playerEffects.length === 0) {

                        playerEffects.push(new Hot(card.specialValue, card.specialDuration));
                        document.getElementById("effect-text").innerHTML += `• ${card.name} applied a HoT effect for ${card.specialValue} HP for ${card.specialDuration} rounds.<br>`;
                        document.getElementById("show-player-effect").style.display = "block";
                        document.getElementById("show-player-effect").innerHTML = `HoT: ${card.specialValue} HP / ${card.specialDuration} rounds`;
                        

                    } else {

                        document.getElementById("effect-text").innerHTML += `• ${card.name} tried to apply a HoT effect, but all slots are taken.<br>`;

                    }              

                    break;

                case "stun":

                    fightingEnemies[0].stunDuration += card.specialDuration;
                    document.getElementById("effect-text").innerHTML += `• ${card.name} stunned the enemy for ${card.specialDuration} rounds.<br>`;
                    document.getElementById("show-enemy-stun").style.display = "block";
                    document.getElementById("show-enemy-stun").innerHTML = `Stun: ${card.specialDuration} rounds`;

                    break;

                case "clear":

                    if (playerEffects.length > 0 && playerEffects[0] instanceof Dot) {

                        playerEffects.splice(0, 1);
                        document.getElementById("show-player-effect").innerHTML = "";
                        document.getElementById("show-player-effect").style.display = "none";
                        document.getElementById("effect-text").innerHTML += `• ${card.name} cleared player's DoT effect.<br>`;

                    }

                    break;

                default:
                    
                    break;

            }

        }

    }

}

/** Check which skill the enemy is able to perform */

function skillCheckEnemy() {

    switch (fightingEnemies[0].special) {

        case "hot":

            if (fightingEnemies[0].enemyEffects.length === 0) {

                fightingEnemies[0].enemyEffects.push(new Hot(fightingEnemies[0].specialValue, fightingEnemies[0].specialDuration));
                document.getElementById("effect-text").innerHTML += `• ${fightingEnemies[0].name} applied a HoT effect for ${fightingEnemies[0].specialValue} health points for ${fightingEnemies[0].specialDuration} rounds.<br>`;
                document.getElementById("show-enemy-effect").style.display = "block";
                document.getElementById("show-enemy-effect").innerHTML = `HoT: ${fightingEnemies[0].specialValue} HP / ${fightingEnemies[0].specialDuration} rounds`;

            } else {

                document.getElementById("effect-text").innerHTML += `• ${fightingEnemies[0].name} tried to apply a HoT, but the slot is occupied.<br>`;

            }

            break;

        case "dot":
            
            if (playerEffects.length === 0) {

                playerEffects.push(new Dot(fightingEnemies[0].specialValue, fightingEnemies[0].specialDuration));
                document.getElementById("effect-text").innerHTML += `• ${fightingEnemies[0].name} applied a DoT to the player for ${fightingEnemies[0].specialValue} damage over ${fightingEnemies[0].specialDuration} rounds.<br>`;
                document.getElementById("show-player-effect").style.display = "block";
                document.getElementById("show-player-effect").innerHTML = `DoT: ${fightingEnemies[0].specialValue} HP / ${fightingEnemies[0].specialDuration} rounds`;

            } else {

                document.getElementById("effect-text").innerHTML += `• ${fightingEnemies[0].name} tried to apply a DoT effect, but the slot is occupied.<br>`;

            }

            break;

        case "stun":

            if (playerStunDuration > 0) {

                document.getElementById("effect-text").innerHTML += `• ${fightingEnemies[0].name} tried to stun the player, but they are already stunned.<br>`;

            } else {

                playerStunDuration = fightingEnemies[0].specialDuration;
                document.getElementById("effect-text").innerHTML += `• ${fightingEnemies[0].name} stunned the player for ${fightingEnemies[0].specialDuration} rounds.<br>`;
                document.getElementById("show-player-stun").style.display = "block";
                document.getElementById("show-player-stun").innerHTML = `Stun: ${playerStunDuration} rounds`;

            }

            break;

        case "healing":

            enemyLife(fightingEnemies[0].specialValue);
            document.getElementById("effect-text").innerHTML += `• ${fightingEnemies[0].name} healed for ${fightingEnemies[0].specialValue} HP.<br>`;

            break;

        default:

            break;

    }

}

/** Update stun duration for enemy */

function stunCheckEnemy() {

    if (fightingEnemies[0].stunDuration > 0) {

        document.getElementById("show-enemy-stun").style.display = "block";
        document.getElementById("show-enemy-stun").innerHTML = `Stun: ${fightingEnemies[0].stunDuration} rounds`;

    } else {

        document.getElementById("show-enemy-stun").innerHTML = "";
        document.getElementById("show-enemy-stun").style.display = "none";

    }

}

/** Update stun duration for player */

function stunCheckPlayer() {

    if (playerStunDuration > 0) {

        document.getElementById("show-player-stun").style.display = "block";

        document.getElementById("show-player-stun").innerHTML = `Stun: ${playerStunDuration} rounds`;
        document.getElementById("effect-text").innerHTML += `• Player is stunned for ${playerStunDuration} more rounds.<br>`;

    } else {

        document.getElementById("show-player-stun").style.display = "none";

    }

}

/** Check which effects are affecting the player */

function checkPlayerEffects() {

    for (let effect of playerEffects) {

        if (effect instanceof Dot) {

            document.getElementById("show-player-effect").style.display = "block";

            playerLife(-effect.damageValue);
            effect.damageDuration -= 1;
            document.getElementById("effect-text").innerHTML += `• Player suffered ${effect.damageValue} damage from their DoT.<br>`;
            document.getElementById("show-player-effect").innerHTML = `DoT: ${effect.damageValue} HP / ${effect.damageDuration} rounds`;

            if (effect.damageDuration <= 0) {

                document.getElementById("show-player-effect").innerHTML = "";
                document.getElementById("show-player-effect").style.display = "none";
                playerEffects.splice(playerEffects.indexOf(effect), 1);

            }

        }

        if (effect instanceof Hot) {

            document.getElementById("show-player-effect").style.display = "block";

            playerLife(effect.damageValue);
            effect.damageDuration -= 1;
            document.getElementById("effect-text").innerHTML += `• Player was healed for ${effect.damageValue} HP.<br>`;
            document.getElementById("show-player-effect").innerHTML = `HoT: ${effect.damageValue} HP / ${effect.damageDuration} rounds`;

            if (effect.damageDuration <= 0) {

                document.getElementById("show-player-effect").innerHTML = "";
                document.getElementById("show-player-effect").style.display = "none";
                playerEffects.splice(playerEffects.indexOf(effect), 1);

            }

        }

    }

}

/** Add random values to generated enemies */

function addRandomSkill() {

    for (let i = 0; i < fightingEnemies.length; i++) {

        let randomSkill = Math.floor(Math.random() * 5);

        switch (randomSkill) {

            case 0:
                fightingEnemies[i].special = "hot";
                fightingEnemies[i].specialValue = Math.floor(Math.random() * 10 + 5);
                fightingEnemies[i].specialDuration = Math.floor(Math.random() * 4 + 2);
                fightingEnemies[i].specialDescription = `Able to heal ${fightingEnemies[i].specialValue} HP every round for ${fightingEnemies[i].specialDuration} rounds.`;
                break;

            case 1:
                fightingEnemies[i].special = "dot";
                fightingEnemies[i].specialValue = Math.floor(Math.random() * 10 + 5);
                fightingEnemies[i].specialDuration = Math.floor(Math.random() * 4 + 2);
                fightingEnemies[i].specialDescription = `Able to deal ${fightingEnemies[i].specialValue} damage every round for ${fightingEnemies[i].specialDuration} rounds.`;
                break;

            case 2:
                fightingEnemies[i].special = "healing";
                fightingEnemies[i].specialValue = Math.floor(Math.random() * 20 + 3);
                fightingEnemies[i].specialDescription = `Able to heal ${fightingEnemies[i].specialValue} HP.`;
                break;

            case 3:
                fightingEnemies[i].special = "stun";
                fightingEnemies[i].specialValue = Math.floor(Math.random() * 2 + 1);
                fightingEnemies[i].specialDuration = Math.floor(Math.random() * 2 + 1);
                fightingEnemies[i].specialDescription = `Able to stun the player for ${fightingEnemies[i].specialDuration} rounds.`;
                break;

            case 4:
                fightingEnemies[i].special = "none";
                fightingEnemies[i].specialValue = 0;
                fightingEnemies[i].specialDuration = 0;
                fightingEnemies[i].specialDescription = `No special skill available.`;
                break;

            default:
                break;

        }

    }

}

/** Check if enemy has HoT or DoT effects */

function checkEnemyEffects() {

    for (let effect of fightingEnemies[0].enemyEffects) {

        if (effect instanceof Dot) {

            document.getElementById("show-enemy-effect").style.display = "block";

            effect.damageDuration -= 1;
            document.getElementById("effect-text").innerHTML += `• ${fightingEnemies[0].name} suffered ${Math.round((effect.damageValue * (100 - fightingEnemies[0].defense)) / 100)} damage from their DoT.<br>`;
            enemyLife(-effect.damageValue);
            document.getElementById("show-enemy-effect").innerHTML = `DoT: ${effect.damageValue} HP / ${effect.damageDuration} rounds`;

            if (effect.damageDuration <= 0) {

                document.getElementById("show-enemy-effect").innerHTML = "";
                document.getElementById("show-enemy-effect").style.display = "none";
                fightingEnemies[0].enemyEffects.splice(playerEffects.indexOf(effect), 1);

            }

        }

        if (effect instanceof Hot) {

            document.getElementById("show-enemy-effect").style.display = "block";

            enemyLife(effect.damageValue);
            effect.damageDuration -= 1;
            document.getElementById("effect-text").innerHTML += `• ${fightingEnemies[0].name} was healed for ${effect.damageValue} HP.<br>`;

            if (fightingEnemies[0].enemyEffects.length > 0) {

                document.getElementById("show-enemy-effect").innerHTML = `HoT: ${effect.damageValue} HP / ${effect.damageDuration} rounds`;

            }
            

            if (effect.damageDuration <= 0) {

                document.getElementById("show-enemy-effect").innerHTML = "";
                document.getElementById("show-enemy-effect").style.display = "none";
                fightingEnemies[0].enemyEffects.splice(fightingEnemies[0].enemyEffects.indexOf(effect), 1);

            }

        }

    }

}

/** Reload the homepage to start a new game */

function reloadDocument() {

    location.reload();

}

/** Close the stun popup */

function closeStunPopup() {

    document.getElementById("stun-popup-handler").style.display = "none";

}