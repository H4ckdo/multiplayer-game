const Game = Object.create({
	initialize: function() {
		this.canvas 				= document.createElement('canvas');
		this.canvas.width 	= 600;
		this.canvas.height 	= 400;
		this.canvas.style 	= 'border: 1px';
		this.main						= document.getElementById('main');

		this.ctx = this.canvas.getContext('2d');
		this.main.appendChild(this.canvas);
	},

	mainSocket: function(){},

	settings: function(){
		this.mainSocket();
	},

	start: function(){
		this.initialize();
		this.settings();
		console.log('the game was started');
	},

	update: function(){},
});