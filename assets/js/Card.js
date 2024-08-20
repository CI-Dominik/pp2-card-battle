/** Card class to initiate cards */

class Card {

    constructor(name, attack, defense, special, description, maxAmount) {

        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.special = special;
        this.description = description;
        this.maxAmount = maxAmount;

    }

}

// Card presets to include in cards array

const CardPresets = 
    [
        new Card("Uther", 20, 30, "PH", "PH", 3),
        new Card("Arthas", 50, 80, "PH", "PH", 1),
        new Card("Jaina", 10, 20, "PH", "PH", 3),
        new Card("Illidan", 100, 75, "PH", "PH", 3),
        new Card("Tyrande", 45, 23, "PH", "PH", 2),
        new Card("Herbert", 5, 10, "PH", "PH", 10)
    ]

// Create deck

const availableCards = [];

function loadAvailableCards() {

    for(let i = 0; i < CardPresets.length; i++) {

        // Add every Card Preset till Cards maxAmount is reached

        for(let j = 0; j < CardPresets[i].maxAmount; j++)
        {
            availableCards.push(CardPresets[i]);
        }
    }

    return availableCards;

}