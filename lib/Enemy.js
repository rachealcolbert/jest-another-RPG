const Character = require('./Character');
const Potion = require('./Potion');

class Enemy extends Character {
    constructor(name, weapon) {
        super(name);
        this.weapon = weapon;
        this.potion = new Potion();

        this.agility = Math.floor(Math.random() * 5 + 5);
    }

    getDescription() {
        return `A ${this.name} holding a ${this.weapon} has appeared!`
    };
};

module.exports = Enemy;