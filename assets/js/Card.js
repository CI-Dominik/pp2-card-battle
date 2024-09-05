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

        new Card("Doctor Goodman", 20, 30, "Special Description", "attack", "Special Type", "Special Value", "Description", "doctor", 3),
        /* new Card("Talonus", 50, 80, "Special Description", "defense", "Special Type", "Special Value", "Description", "eagle-warrior", 1),
        new Card("Shamus", 10, 20, "Special Description", "attack", "Special Type", "Special Value", "Description", "forest-shaman", 3),
        new Card("Ingrid", 100, 75, "Special Description", "none", "Special Type", "Special Value", "Description", "forest-spirit", 3),
        new Card("Magus", 45, 23, "Special Description", "none", "Special Type", "Special Value", "Description", "mage", 2),
        new Card("Rambo", 10, 10, "Special Description", "attack", "Special Type", "Special Value", "Description", "mercenary", 1),
        new Card("Dominik, the Bearded One", 10, 10, "Special Description", "defense", "Special Type", "Special Value", "Description", "dominik", 1),
        new Card("Daniela, the Owl Witch", 10, 10, "Special Description", "defense", "Special Type", "Special Value", "Description", "daniela", 1), */
        new Card("Frederic, the Mad Genius", 50, 10, "Special Description", "defense", "Special Type", "Special Value", "Description", "frederic", 1),
        new Card("Alicja, the Radiant", 10, 10, "Special Description", "defense", "Special Type", "Special Value", "Description", "alicja", 1),
        new Card("Lentje, the Crazy Chicken Lady", 50, 10, "Special Description", "defense", "Special Type", "Special Value", "Description", "lentje", 1),
        new Card("Lisa, the Soda-Lover", 50, 10, "Special Description", "defense", "Special Type", "Special Value", "Description", "lisa", 1),
        new Card("Nadine, the Dinosaur Tamer", 10, 10, "Special Description", "defense", "Special Type", "Special Value", "Description", "nadine", 1),
        new Card("Anita, the Pineapple Freak", 10, 10, "Special Description", "defense", "Special Type", "Special Value", "Description", "anita", 1)

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