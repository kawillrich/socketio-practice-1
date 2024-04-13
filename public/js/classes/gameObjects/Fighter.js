class Fighter extends Player {
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
        this.spriteSheet = "/assets/images/fighter-male48x48.png",
        this.spriteSheetFemale = "/assets/images/fighter-female48x48.png",
        this.atlasJSON = "/assets/images/fighter48x48.json",
        this.dashSpeed = 100
    }    
}