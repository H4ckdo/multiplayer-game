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
const gameLoop		= require('./server/game/game-loop');


io.sockets.on('connection', socket => {
	socket.id = Math.random();
	socket.x 	= 0;
	socket.y 	= 0;
	socketList[socket.id] = socket;

	socket.on('scoreChange', score => {
		console.log('the score has been saved: ', score.addition);
	});

	socket.on("disconnect", () => {
		delete socketList[socket.id];
	});

	gameLoop(socketList);

});

