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



let bankCards = [];

/** Generate card names and return them to variable */

function generateCards() {

    const cardPresets = [
        new Card("Martin", 20, 30, "", "It's Martin!", 3),
        new Card("Bert", 25, 11, "Hard defense", "It's Bert!", 1),
        new Card("Marie", 99, 1, "", "It's Marie!", 4),
        new Card("Maggie", 5, 88, "", "It's Maggie!", 3),
        new Card("John", 33, 12, "None.", "It's John!", 4)
    ];

    for (let i = 0; i < 4; i++) {

        let randomCard = cardPresets[Math.floor(Math.random() * cardPresets.length)];

        bankCards[i] = randomCard;

    }

    return bankCards;

}