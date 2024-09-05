/** Card class to initiate enemies */

class Enemy {

    constructor(name, attack, defense, special, description, life, image) {

        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.special = special;
        this.description = description;
        this.life = life;
        this.image = image;

    }

}

// Load Enemies to insert into array

const enemyPresets = [

    new Enemy("Monk-E", 2, 30, "PH", "PH", 50, "ape-warrior"),
    new Enemy("Draco", 5, 80, "PH", "PH", 60, "dragon-warrior"),
    new Enemy("Nympha", 1, 20, "PH", "PH", 70, "forest-ghost"),
    new Enemy("Bob", 10, 75, "PH", "PH", 80, "goblin-warrior"),
    new Enemy("Dargul", 4, 23, "PH", "PH", 90, "mage"),
    new Enemy("Snakos", 5, 10, "PH", "PH", 100, "snake-warrior")

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