class Adventurer extends Player {
    constructor(config) { 
        this.title = 'Adventurer',
        this.classTitle = config.classTitle;
        this.hitPoints = config.hitPoints;
        this.armor = config.armor;
        config.specialAttack = {
            name: "",
            image: "",
            damage: 0
        };
        config.damage = {
            primaryAttack: 0,
            dashAttack: 0,
            specialAttackDamage: specialAttack.damage
        },
        this.spriteSheet = "/assets/images/mage48x48.png",
        this.atlasJSON = "/assets/images/mage48x48.json",
        this.dashSpeed = 100
    }    
}