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

        new Card("Doctor Goodman", 5, 15, "DEFENSE PHASE: HoT effect for 10 HP over 2 rounds", "defense", "hot", 10, 2, "Description", "doctor", 6),
        new Card("Nest Protector", 40, 5, "No special skill", "none", "none", 0, 0, "Description", "eagle-warrior", 4),
        new Card("Woodland Shaman", 5, 30, "ATTACK PHASE: DoT effect for 8 damage over 5 rounds", "attack", "dot", 15, 5, "Description", "forest-shaman", 5),
        new Card("Irydil", 5, 40, "No special skill", "none", "none", 0, 0, "Description", "forest-spirit", 6),
        new Card("Magna", 35, 10, "No special skill", "none", "none", 0, 0, "Description", "mage", 4),
        new Card("Mercenary", 40, 10, "No special skill", "none", "none", 0, 0, "Description", "mercenary", 3),
        new Card("Dominik, the Bearded One", 30, 15, "ATTACK PHASE: Stun enemy for 4 rounds", "attack", "stun", 0, 4, "Description", "dominik", 1),
        new Card("Daniela, the Owl Witch", 15, 35, "DEFENSE PHASE: HoT effect of 12 HP over 4 rounds", "defense", "hot", 12, 4, "Description", "daniela", 1),
        new Card("Frederic, the Mad Genius", 25, 25, "DEFENSE PHASE: Stun enemy for 3 rounds", "defense", "stun", 0, 3, "Description", "frederic", 1),
        new Card("Alicja, the Radiant", 5, 25, "DEFENSE PHASE: Clear one DoT effect from the player", "defense", "clear", 0, 0, "Description", "alicja", 1),
        new Card("Lentje, the Crazy Chicken Lady", 25, 15, "ATTACK PHASE: DoT effect for 12 damage over 3 rounds", "attack", "dot", 12, 3, "Description", "lentje", 1),
        new Card("Lisa, the Soda-Lover", 10, 30, "ATTACK PHASE: Clear one DoT effect from the player", "attack", "clear", 0, 0, "Description", "lisa", 1),
        new Card("Nadine, the Dinosaur Tamer", 30, 15, "ATTACK PHASE: DoT effect of 10 damage over 4 rounds", "attack", "dot", 10, 4, "Description", "nadine", 1),
        new Card("Anita, the Pineapple Freak", 15, 20, "DEFENSE PHASE: HoT effect for 15 HP over 3 rounds", "defense", "hot", 15, 3, "Description", "anita", 1)

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