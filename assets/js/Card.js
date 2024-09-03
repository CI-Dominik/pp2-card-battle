/** Card class to initiate cards */

class Card {

    constructor(name, attack, defense, specialDescription, specialPhase, specialType, specialValue, description, image, maxAmount) {

        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.specialDescription = specialDescription;
        this.specialPhase = specialPhase;
        this.specialType = specialType;
        this.specialValue = specialValue;
        this.description = description;
        this.image = image;
        this.maxAmount = maxAmount;

    }

}

// Card presets to include in cards array

const cardPresets = [

        new Card("Doctor Goodman", 20, 30, "Special Description", "attack", "Special Type", "Special Value", "Description", "doctor.webp", 3),
        new Card("Talonus", 50, 80, "Special Description", "defense", "Special Type", "Special Value", "Description", "eagle-warrior.webp", 1),
        new Card("Shamus", 10, 20, "Special Description", "attack", "Special Type", "Special Value", "Description", "forest-shaman.webp", 3),
        new Card("Ingrid", 100, 75, "Special Description", "none", "Special Type", "Special Value", "Description", "forest-spirit.webp", 3),
        new Card("Magus", 45, 23, "Special Description", "none", "Special Type", "Special Value", "Description", "mage.webp", 2),
        new Card("Rambo", 10, 10, "Special Description", "attack", "multiplier", 0.25, "Description", "mercenary.webp", 10)

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