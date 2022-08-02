// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }

    attack(){
        if(this.strength){
            return this.strength;
        }
    }

    receiveDamage(damage){
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier{
    constructor (name, health, strength){
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage){
        this.health -= damage;
        if(this.health>0){
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }
    
    battleCry(){
        return `Odin Owns You All!`;
    }


}

// Saxon
class Saxon extends Soldier {

    receiveDamage(damage){
        this.health -= damage;
        if(this.health>0){
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
    }
}


// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    

    addViking(Viking) {
        this.vikingArmy.push(Viking);
    }

    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon);
    }

    vikingAttack() { 
        const iSaxonRandom = Math.floor(Math.random()*this.saxonArmy.length);
        const randomSaxon = this.saxonArmy[iSaxonRandom];

        const iVikingRandom = Math.floor(Math.random()*this.vikingArmy.length);
        const randomViking = this.vikingArmy[iVikingRandom];

        const result = randomSaxon.receiveDamage(randomViking.attack());

        if(randomSaxon.health<=0){
            this.saxonArmy.splice(iSaxonRandom, 1);
            console.log(this.saxonArmy);
        }
        return result;
    }

    saxonAttack() {
        const iSaxonRandom = Math.floor(Math.random()*this.saxonArmy.length);
        const randomSaxon = this.saxonArmy[iSaxonRandom];
        
        const iVikingRandom = Math.floor(Math.random()*this.vikingArmy.length);
        const randomViking = this.vikingArmy[iVikingRandom];
        
    
        const result = randomViking.receiveDamage(randomSaxon.attack());
        if(randomViking.health<=0){
            this.vikingArmy.splice(iVikingRandom, 1);
            console.log(this.vikingArmy);
        }

        return result;
    }

    showStatus() {
        if(this.saxonArmy.length===0){
            return `Vikings have won the war of the century!`;
        } else if (this.vikingArmy.length===0){
            return `Saxons have fought for their lives and survived another day...`
        } else {
            return `Vikings and Saxons are still in the thick of battle.`;
        }
    }
}

const myWar = new War()

const ragnar = new Viking('Ragnar', 200, 90);
const loki = new Viking('Loki', 100, 70);
const ivar = new Viking('Ivar', 70, 100);
const bjorn = new Viking('Björn', 100, 90);


const saxJr = new Saxon(75,25);
const sssax = new Saxon(75,32);
const bigSax = new Saxon(75,52);
const lilSax = new Saxon(75,12);

myWar.addViking(ragnar);
myWar.addViking(loki);
myWar.addViking(ivar);
myWar.addViking(bjorn);


myWar.addSaxon(saxJr);
myWar.addSaxon(sssax);
myWar.addSaxon(bigSax);
myWar.addSaxon(lilSax);


console.log(myWar.saxonAttack());
console.log(myWar.vikingAttack());
console.log(myWar.saxonAttack());
console.log(myWar.vikingAttack());
console.log(myWar.saxonAttack());
console.log(myWar.vikingAttack());
console.log(myWar.saxonAttack());
console.log(myWar.vikingAttack());
console.log(myWar.saxonAttack());
console.log(myWar.vikingAttack());
console.log(myWar.saxonAttack());
console.log(myWar.vikingAttack());
console.log(myWar.showStatus());