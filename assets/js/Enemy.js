/** Card class to initiate enemies */

class Enemy {

    constructor(name, attack, defense, special, specialValue, specialDuration, description, life, image, stunDuration, enemyEffects = []) {

        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.special = special;
        this.specialValue = specialValue;
        this.specialDuration = specialDuration;
        this.description = description;
        this.life = life;
        this.image = image;
        this.stunDuration = stunDuration;
        this.enemyEffects = enemyEffects;

    }

}

// Load Enemies to insert into array

const enemyPresets = [

    new Enemy("Monk-E", 20, 50, "special", 10, 0, "PH", 150, "ape-warrior", 0),
    new Enemy("Draco", 50, 50, "special", 10, 0, "PH", 150, "dragon-warrior", 0),
    new Enemy("Nympha", 30, 20, "special", 10, 0, "PH", 150, "forest-ghost", 0),
    new Enemy("Bob", 25, 60, "special", 10, 0, "PH", 150, "goblin-warrior", 0),
    new Enemy("Dargul", 40, 25, "special", 10, 0, "PH", 150, "mage", 0),
    new Enemy("Snakos", 60, 10, "special", 10, 0, "PH", 150, "snake-warrior", 0)

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