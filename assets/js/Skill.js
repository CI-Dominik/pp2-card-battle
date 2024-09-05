class Skill {

    constructor(damageValue) {

        this.damageValue = damageValue;

    }

}

class Dot extends Skill {

    constructor(damageValue, damageDuration) {

        super(damageValue);
        this.damageDuration = damageDuration;

    }

}

class Stun extends Skill {

    constructor(damageValue, stunDuration) {

        super(damageValue);
        this.stunDuration = stunDuration;

    }

}