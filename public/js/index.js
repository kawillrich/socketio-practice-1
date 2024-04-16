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
    this.load.image("fireball", "assets/images/special-attacks/fireball.png");
    const player = {};
    const players = {}
}

function create() {
    let fireball = this.add.image(400, 400, "fireball");

    
    
    socket.on('updatePlayers', (backendPlayers) => {
            for (const id in backendPlayers) {
                const backendPlayer = backendPlayers[id];
        
                if (!players[id]) {
                    players[id] = new Mage(backendPlayer.x, backendPlayer.y, mageConfig)
                }
            }
            console.log(players)

           
            addPlayer()

            function addPlayer() {
                console.log("test")// self.add.image(400, 400, "fireball");
             }
             

        })
}

function update() {

}


// const player = new Player(150, 150)
// const players = {

// }


