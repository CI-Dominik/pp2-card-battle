/** Card class to initiate cards */

class Card {

    constructor(name, attack, defense, specialDescription, specialPhase, specialType, specialValue, specialDuration, description, image, maxAmount) {

        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.specialDescription = specialDescription;
        this.specialPhase = specialPhase;
        this.specialType = specialType;
        this.specialValue = specialValue;
        this.specialDuration = specialDuration;
        this.description = description;
        this.image = image;
        this.maxAmount = maxAmount;

    }

}

// Card presets to include in cards array

const cardPresets = [

        new Card("Doctor Goodman", 5, 40, "DEFENSE MODE: Healing over time effect for 10 HP", "defense", "hot", 10, 3, "Description", "doctor", 6),
        new Card("Nest Protector", 40, 5, "Special Description", "defense", "Special Type", "Special Value", 3, "Description", "eagle-warrior", 4),
        new Card("Woodland Shaman", 5, 30, `ATTACK MODE: DoT effect for 15 damage`, "attack", "dot", 15, 3, "Description", "forest-shaman", 5),
        new Card("Irydil", 10, 25, "Special Description", "defense", "clear", 0, 3, "Description", "forest-spirit", 6),
        new Card("Magna", 35, 5, "Special Description", "none", "Special Type", "Special Value", 3, "Description", "mage", 4),
        new Card("Mercenary", 40, 10, "Special Description", "attack", "Special Type", "Special Value", 3, "Description", "mercenary", 3),
        new Card("Dominik, the Bearded One", 30, 30, "Special Description", "defense", "Special Type", "Special Value", 3, "Description", "dominik", 1),
        new Card("Daniela, the Owl Witch", 15, 35, "Special Description", "defense", "Special Type", "Special Value", 3, "Description", "daniela", 1),
        new Card("Frederic, the Mad Genius", 25, 25, "Special Description", "defense", "Special Type", "Special Value", 3, "Description", "frederic", 1),
        new Card("Alicja, the Radiant", 5, 25, "Special Description", "defense", "Special Type", "Special Value", 3, "Description", "alicja", 1),
        new Card("Lentje, the Crazy Chicken Lady", 25, 15, "Special Description", "defense", "Special Type", "Special Value", 3, "Description", "lentje", 1),
        new Card("Lisa, the Soda-Lover", 10, 30, "Special Description", "defense", "Special Type", "Special Value", 3, "Description", "lisa", 1),
        new Card("Nadine, the Dinosaur Tamer", 30, 15, "Special Description", "defense", "Special Type", "Special Value", 3, "Description", "nadine", 1),
        new Card("Anita, the Pineapple Freak", 15, 20, "Special Description", "defense", "Special Type", "Special Value", 3, "Description", "anita", 1)

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