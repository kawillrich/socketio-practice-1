class Elf extends Player {
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
        this.spriteSheetFemale = "/assets/images/elf-female48x48.png",
        this.spriteSheet = "/assets/images/elf-male48x48.png",
        this.atlasJSON = "/assets/images/elf48x48.json",
        this.dashSpeed = 100
    }    
}