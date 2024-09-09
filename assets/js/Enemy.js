/** Card class to initiate enemies */

class Enemy {

    constructor(name, attack, defense, special, specialValue, description, life, image, stunDuration, damageArray = [], healingArray = []) {

        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.special = special;
        this.specialValue = specialValue;
        this.description = description;
        this.life = life;
        this.image = image;
        this.stunDuration = stunDuration;
        this.damageArray = damageArray;
        this.healingArray = healingArray;

    }

}

// Load Enemies to insert into array

const enemyPresets = [

    new Enemy("Monk-E", 20, 50, "stun", 10, "PH", 150, "ape-warrior", 0),
    new Enemy("Draco", 50, 50, "stun", 10, "PH", 150, "dragon-warrior", 0),
    new Enemy("Nympha", 30, 20, "stun", 10, "PH", 150, "forest-ghost", 0),
    new Enemy("Bob", 25, 60, "stun", 10, "PH", 150, "goblin-warrior", 0),
    new Enemy("Dargul", 40, 25, "stun", 10, "PH", 150, "mage", 0),
    new Enemy("Snakos", 60, 10, "stun", 10, "PH", 150, "snake-warrior", 0)

]

/** Load enemies randomly based on difficulty */

function loadEnemies(difficulty) {

    let enemyInFight = [];

    for (let i = 0; i < difficulty; i++) {

        let randomEnemy = Math.floor(Math.random() * enemyPresets.length);
        enemyInFight.push(enemyPresets[randomEnemy]);
        enemyPresets.splice(randomEnemy, 1);

    }

    return enemyInFight;

}