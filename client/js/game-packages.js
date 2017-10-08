Game.packages = function() {
  this.socket.on('hi', function(userName){
    console.log('welcome: ', userName);
  });

  this.sendScore();
  this.getInput();
  this.verifyPosition();
};

Game.getInput = function() {
  _this = this;

  document.addEventListener('keydown', function(e) {
    if(e.keyCode === 37) {
      console.log('undio izquierda ');
      _this.socket.emit('keydown', {
        input: 'left',
        value: true
      });
    } else if(e.keyCode === 38) {
      console.log('undio arriba ');
      _this.socket.emit('keydown', {
        input: 'up',
        value: true
      });
    } else if(e.keyCode === 39) {
      console.log('undio derecha ');
      _this.socket.emit('keydown', {
        input: 'right',
        value: true
      });
    } else if(e.keyCode === 40) {
      console.log('undio abajo');
      _this.socket.emit('keydown', {
        input: 'down',
        value: true
      });
    }
  });

  document.addEventListener('keyup', function(e) {
    if(e.keyCode === 37) {
      _this.socket.emit('keyup', {
        input: 'left',
        value: false
      });
    } else if(e.keyCode === 38) {
      _this.socket.emit('keyup', {
        input: 'up',
        value: false
      });
    } else if(e.keyCode === 39) {
      _this.socket.emit('keyup', {
        input: 'right',
        value: false
      });
    } else if(e.keyCode === 40) {
      _this.socket.emit('keyup', {
        input: 'down',
        value: false
      });
    }
  });

};

Game.sendScore = function() {
  this.socket.emit('scoreChange', {
    currentScore: 10,
    addition: 5
  });
};

Game.verifyPosition = function() {
  _this = this;
  this.socket.on('positionChange', function(pack) {
    _this.ctx.clearRect(0,0, _this.canvas.width, _this.canvas.height);
    for(var i  in pack) {
      _this.ctx.fillRect(pack[i].x, pack[i].y, 30,30);
      _this.ctx.stroke();
    }
  });
};