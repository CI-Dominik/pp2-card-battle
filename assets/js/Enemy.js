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

    new Enemy("Monk-E", 20, 30, "PH", "PH", 50, "ape-warrior.webp"),
    new Enemy("Draco", 50, 80, "PH", "PH", 60, "dragon-warrior.webp"),
    new Enemy("Nympha", 10, 20, "PH", "PH", 70, "forest-ghost.webp"),
    new Enemy("Bob", 100, 75, "PH", "PH", 80, "goblin-warrior.webp"),
    new Enemy("Dargul", 45, 23, "PH", "PH", 90, "mage.webp"),
    new Enemy("Snakos", 5, 10, "PH", "PH", 100, "snake-warrior.webp")

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