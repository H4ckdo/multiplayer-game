Game.packages = function() {
  this.socket.on('hi', function(userName){
    console.log('welcome: ', userName);
  });

  this.sendScore();
}

Game.sendScore = function() {
  this.socket.emit('scoreChange', {
    currentScore: 10,
    addition: 5
  });
}