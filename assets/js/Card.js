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

        new Card("Doctor Goodman", 5, 15, "DEFENSE PHASE: HoT effect for 10 HP over 2 rounds", "defense", "hot", 10, 2, "A highly and famous doctor who revolutionized the modern steampunk world.", "doctor", 6),
        new Card("Nest Protector", 40, 5, "No special skill", "none", "none", 0, 0, "A proud avian warrior who was sent out to protect his land from evil.", "eagle-warrior", 4),
        new Card("Woodland Shaman", 5, 30, "ATTACK PHASE: DoT effect for 8 damage over 5 rounds", "attack", "dot", 15, 5, "Coming from the lands of the unknown, the Woodland Shaman inflicts curses to his enemies.", "forest-shaman", 5),
        new Card("Irydil", 5, 40, "No special skill", "none", "none", 0, 0, "A forest spirit sent by the nature gods to cleanse the woods of threats.", "forest-spirit", 6),
        new Card("Magna", 35, 10, "No special skill", "none", "none", 0, 0, "An arcane sorceress who gains her power from ancient spirits of the earth.", "mage", 4),
        new Card("Mercenary", 40, 10, "No special skill", "none", "none", 0, 0, "A mercenary, here for one reason: Combat.", "mercenary", 3),
        new Card("Dominik, the Bearded One", 30, 15, "ATTACK PHASE: Stun enemy for 4 rounds", "attack", "stun", 0, 4, "Famous for his beard and power, he conquers even the greatest foes.", "dominik", 1),
        new Card("Daniela, the Owl Witch", 15, 35, "DEFENSE PHASE: HoT effect of 12 HP over 4 rounds", "defense", "hot", 12, 4, "Dominik's loyal and harmonious girlfriend. Able to heal even the biggest wounds.", "daniela", 1),
        new Card("Frederic, the Mad Genius", 25, 25, "DEFENSE PHASE: Stun enemy for 3 rounds", "defense", "stun", 0, 3, "Dominik's clever advisor who finds solutions for every problem he encounters.", "frederic", 1),
        new Card("Alicja, the Radiant", 5, 25, "DEFENSE PHASE: Clear one DoT effect from the player", "defense", "clear", 0, 0, "A girl with a radiant aura who is able to build a connection to every being.", "alicja", 1),
        new Card("Lentje, the Crazy Chicken Lady", 25, 15, "ATTACK PHASE: DoT effect for 12 damage over 3 rounds", "attack", "dot", 12, 3, "A girl with a friendly and crazy attitude. Her obsession with chickens rules her life.", "lentje", 1),
        new Card("Lisa, the Soda-Lover", 10, 30, "ATTACK PHASE: Clear one DoT effect from the player", "attack", "clear", 0, 0, "A clever and organized girl, always seen with a soda in her hand.", "lisa", 1),
        new Card("Nadine, the Dinosaur Tamer", 30, 15, "ATTACK PHASE: DoT effect of 10 damage over 4 rounds", "attack", "dot", 10, 4, "Dinosaurs and turtles, those are her companions. She is quite chaotic, but a pure soul.", "nadine", 1),
        new Card("Anita, the Pineapple Freak", 15, 20, "DEFENSE PHASE: HoT effect for 15 HP over 3 rounds", "defense", "hot", 15, 3, "A girl with pure intentions and always thoughtful about the people around her.", "anita", 1)

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