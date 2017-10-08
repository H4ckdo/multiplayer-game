const path 			=	require('path');
const express 	= require('express');
const app 			= new express;
const	servr 		= require('http').Server(app);


//Request handler
let resolve = (req, res) => {
	res.sendFile(path.join(__dirname, 'client', 'index.html'))
}

app.use("/client", express.static(path.join(__dirname, 'client')));
app.get('/', resolve);

servr.listen(4000, () => {
	console.log('the server is running on port: ', 4000);
});


const io 					= require('socket.io')(servr, {});
const socketList 	= require('./server/game/socket-list');
const playerList 	= require('./server/game/player-list')
const Player 			= require('./server/game/player');
const gameLoop		= require('./server/game/game-loop');


io.sockets.on('connection', socket => {
	socket.id 						= Math.random();
	var player 						= Player(socket.id);
	socketList[socket.id] = socket;
	playerList[socket.id]	= player;

	socket.on('scoreChange', score => {
		console.log('the score has been saved: ', score.addition);
	});

	socket.on("disconnect", () => {
		console.log('a player has been deisconnected: ', socketList[socket.id]);
		delete socketList[socket.id];
		delete playerList[socket.id];
	});

	socket.on('keydown', positionData => {
		if(positionData.input === 'right') {
			playerList[socket.id].right = positionData.value;
		} else if(positionData.input === 'left') {
			playerList[socket.id].left = positionData.value;
		} else if(positionData.input === 'up') {
			playerList[socket.id].up = positionData.value;
		} else if(positionData.input === 'down') {
			playerList[socket.id].down = positionData.value;
		}
	});

	socket.on('keyup', positionData => {
		if(positionData.input === 'right') {
			playerList[socket.id].right = positionData.value;
		} else if(positionData.input === 'left') {
			playerList[socket.id].left = positionData.value;
		} else if(positionData.input === 'up') {
			playerList[socket.id].up = positionData.value;
		} else if(positionData.input === 'down') {
			playerList[socket.id].down = positionData.value;
		}
	});

	gameLoop(playerList);

});

