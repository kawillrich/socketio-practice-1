class Archer extends Player {
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
        this.spriteSheet = "/assets/images/archer-male48x48.png",
        this.spriteSheetFemale = "/assets/images/archer-female48x48.png",
        this.atlasJSON = "/assets/images/archer48x48.json",
        this.dashSpeed = 100
    }    
}