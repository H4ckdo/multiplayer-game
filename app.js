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


const io = require('socket.io')(servr, {});

io.sockets.on('connection', socket => {
	console.log('there is a new conected user: ');
	
	socket.emit('hi', {
		userName: 'Fredye'
	});

	socket.on('scoreChange', score => {
		console.log('the score has been saved: ', score.addition);
	});

});