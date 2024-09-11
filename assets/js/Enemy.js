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

    new Enemy("Winston", 20, 50, "special", 10, 0, "Starting out as an experiment for social behaviour studies, this subject escaped and terrorizes the citizens.", 150, "ape-warrior", 0),
    new Enemy("Drakthul", 25, 25, "special", 10, 0, "A dragon mercenary, hired by Dargul, the head of social experiments.", 120, "dragon-warrior", 0),
    new Enemy("Necra", 30, 10, "special", 10, 0, "A restless soul that was disturbed in the enchanted woods and seeks out for revenge.", 90, "forest-ghost", 0),
    new Enemy("Gerrit", 10, 50, "special", 10, 0, "The leader of the forest goblins, ready to free anyone of his head who stands in his way.", 160, "goblin-warrior", 0),
    new Enemy("Dargul", 35, 25, "special", 10, 0, "Being in charge of Winston's social experiment, this man tries to hide the truth behind his project.", 130, "mage", 0),
    new Enemy("Sal'thras", 40, 10, "special", 10, 0, "A slithering desert mecenary hired by Dargul.", 100, "snake-warrior", 0)

];

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