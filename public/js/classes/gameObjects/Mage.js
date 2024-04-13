class Mage extends Player {
    constructor(x, y, config) { 
        super(x, y);
        
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
            specialAttackDamage: 0
        },
        this.spriteSheet = "/assets/images/mage-male48x48.png",
        this.spriteSheetFemale = "/assets/images/mage-female48x48.png",
        this.atlasJSON = "/assets/images/mage48x48.json",
        this.dashSpeed = 100
    }    
}