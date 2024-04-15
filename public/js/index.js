const config = {
    type: Phaser.AUTO,
    parent: "game-container",
    width: 800,
    height: 800,
    physics: {
        default: "arcade",
        arcade: {
            debug: true
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
}

let game = new Phaser.Game(config);

const socket = io();

const mageConfig = {
    classTitle: "Mage",
    hitPoints: 50,
    armor: 7,
    specialAttack: {
        name: "Fire Ball",
        image: "assets/images/special-attacks/fireBall.png",
        damage: 100,
    },
    damage: {
        primaryAttack: 20,
        dashAttack: 30,
        specialAttackDamage: 0
    }
}

function preload() {
    this.load.image("fireball", "assets/images/special-attacks/fireball.png")
}

function create() {
    // this.add.image(400, 400, "fireball");

    let self = this;

    
    socket.on('updatePlayers', (backendPlayers) => {
            for (const id in backendPlayers) {
                const backendPlayer = backendPlayers[id];
        
                if (!players[id]) {
                    players[id] = new Mage(backendPlayer.x, backendPlayer.y, mageConfig)
                }
            }
            console.log(players)

           
            addPlayer(self, players)

        })
}

function update() {

}


// const player = new Player(150, 150)
// const players = {

// }

function addPlayer(self, playerInfo) {
    self.add.image(400, 400, "fireball");
    console.log("test")
    console.log(self);
}

