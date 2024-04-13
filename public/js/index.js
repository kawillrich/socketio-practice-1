const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 800,
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
        image: "assets/images/specialAttacks/fireBall.png",
        damage: 100,
    },
    damage: {
        primaryAttack: 20,
        dashAttack: 30,
        specialAttackDamage: 0
    }
}

function preload() {
    
}

function create() {
socket.on('updatePlayers', (backendPlayers) => {
        for (const id in backendPlayers) {
            const backendPlayer = backendPlayers[id];
    
            if (!players[id]) {
                players[id] = new Mage(backendPlayer.x, backendPlayer.y, mageConfig)
            }
        }
        console.log(players)

        for (const id in players) {
            const player = players[id];
            player.attack();
        }

    })
}

function update() {

}


const player = new Player(150, 150)
const players = {

}


