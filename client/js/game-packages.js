Game.packages = function() {
  this.socket.on('hi', function(userName){
    console.log('welcome: ', userName);
  });

  this.sendScore();
  this.verifyPosition();
}

Game.sendScore = function() {
  this.socket.emit('scoreChange', {
    currentScore: 10,
    addition: 5
  });
}

Game.verifyPosition = function() {
  _this = this;
  this.socket.on('positionChange', function(pack) {
    /*console.log('x: ', position.x);
    console.log('y: ', position.y);*/

    _this.ctx.clearRect(0,0, _this.canvas.width, _this.canvas.height);
    for(var i = 0; i < pack.length; i++) {
      _this.ctx.fillRect(pack[i].x, pack[i].y, 30,30);
    }
    _this.ctx.strokeStyle =  "red";
    _this.ctx.stroke();
  });
}