/** Card class to initiate enemies */

class Enemy {

    constructor(name, attack, defense, special, description, maxAmount) {

        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.special = special;
        this.description = description;
        this.maxAmount = maxAmount;

    }

}

// Load Enemies to insert into array

const enemyPresets = [

    new Enemy("Enemy1", 20, 30, "PH", "PH"),
    new Enemy("Enemy2", 50, 80, "PH", "PH"),
    new Enemy("Enemy3", 10, 20, "PH", "PH"),
    new Enemy("Enemy4", 100, 75, "PH", "PH"),
    new Enemy("Enemy5", 45, 23, "PH", "PH"),
    new Enemy("Enemy6", 5, 10, "PH", "PH")

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