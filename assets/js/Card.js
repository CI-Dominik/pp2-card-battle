/** Card class to initiate cards */

class Card {

    constructor(name, attack, defense, specialDescription, specialPhase, specialType, specialValue, description, maxAmount) {

        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.specialDescription = specialDescription;
        this.specialPhase = specialPhase;
        this.specialType = specialType;
        this.specialValue = specialValue;
        this.description = description;
        this.maxAmount = maxAmount;

    }

}

// Card presets to include in cards array

const cardPresets = [

        new Card("Test1", 20, 30, "Special Description", "attack", "Special Type", "Special Value", "Description", 3),
        new Card("Test2", 50, 80, "Special Description", "defense", "Special Type", "Special Value", "Description", 1),
        new Card("Test3", 10, 20, "Special Description", "attack", "Special Type", "Special Value", "Description", 3),
        new Card("Test4", 100, 75, "Special Description", "none", "Special Type", "Special Value", "Description", 3),
        new Card("Test5", 45, 23, "Special Description", "none", "Special Type", "Special Value", "Description", 2),
        new Card("Test6", 5, 10, "Special Description", "attack", "Special Type", "Special Value", "Description", 10)

]

// Create deck variable

const availableCards = [];

/** Load cards into the deck */

function loadAvailableCards() {

    for(let i = 0; i < cardPresets.length; i++) {

        // Add every card preset until cards maxAmount is reached

        for(let j = 0; j < cardPresets[i].maxAmount; j++) {

            availableCards.push(cardPresets[i]);

        }

    }

    // Add availableCards variable to cards array

    return availableCards;

}