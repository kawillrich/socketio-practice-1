//express setup
const express = require('express')
const app = express();

//http setup
const http = require('http');
const server = http.createServer(app);

//socket.io setup
const { Server } = require('socket.io')
const io = new Server(server);

const port = 3000;

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

const players = {

}

io.on('connection', (socket) => {
    console.log('a user connected');
    players[socket.id] = { 
        x: 100,
        y: 100
    }

    io.emit('updatePlayers', players)

    console.log(players)
})

server.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

console.log('server loaded')