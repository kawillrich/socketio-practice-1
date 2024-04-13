class Halfling extends Player {
    constructor(config) { 
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
        this.spriteSheetMale = "/assets/images/halfling-male48x48.png",
        this.spriteSheetFemale = "/assets/images/halfling-female48x48.png",
        this.atlasJSON = "/assets/images/halfling-male48x48.json",
        this.dashSpeed = 100
    }    
}