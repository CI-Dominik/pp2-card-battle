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

        new Card("Doctor Goodman", 5, 40, "Special Description", "attack", "Special Type", "Special Value", "Description", "doctor", 3),
        new Card("Talonus", 40, 5, "Special Description", "defense", "Special Type", "Special Value", "Description", "eagle-warrior", 1),
        new Card("Shamus", 30, 10, "Special Description", "attack", "Special Type", "Special Value", "Description", "forest-shaman", 3),
        new Card("Ingrid", 10, 65, "Special Description", "none", "Special Type", "Special Value", "Description", "forest-spirit", 3),
        new Card("Magus", 35, 15, "Special Description", "none", "Special Type", "Special Value", "Description", "mage", 2),
        new Card("Rambo", 25, 10, "Special Description", "attack", "Special Type", "Special Value", "Description", "mercenary", 1),
        new Card("Dominik, the Bearded One", 30, 30, "Special Description", "defense", "Special Type", "Special Value", "Description", "dominik", 1),
        new Card("Daniela, the Owl Witch", 15, 35, "Special Description", "defense", "Special Type", "Special Value", "Description", "daniela", 1),
        new Card("Frederic, the Mad Genius", 25, 25, "Special Description", "defense", "Special Type", "Special Value", "Description", "frederic", 1),
        new Card("Alicja, the Radiant", 5, 25, "Special Description", "defense", "Special Type", "Special Value", "Description", "alicja", 1),
        new Card("Lentje, the Crazy Chicken Lady", 25, 15, "Special Description", "defense", "Special Type", "Special Value", "Description", "lentje", 1),
        new Card("Lisa, the Soda-Lover", 10, 30, "Special Description", "defense", "Special Type", "Special Value", "Description", "lisa", 1),
        new Card("Nadine, the Dinosaur Tamer", 30, 15, "Special Description", "defense", "Special Type", "Special Value", "Description", "nadine", 1),
        new Card("Anita, the Pineapple Freak", 15, 20, "Special Description", "defense", "Special Type", "Special Value", "Description", "anita", 1)

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