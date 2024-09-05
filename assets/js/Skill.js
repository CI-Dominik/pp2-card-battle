class Skill {

    constructor(damageValue) {

        this.damageValue = damageValue;

    }

}

class Dot extends Damage {

    constructor(damageValue, damageDuration) {

        super(damageValue);
        this.damageDuration = damageDuration;

    }

}

class Stun extends Damage {

    constructor(damageValue, stunDuration) {

        super(damageValue);
        this.stunDuration = stunDuration;

    }

}