const Game = Object.create({
	initialize: function() {
		this.canvas 				= document.createElement('canvas');
		this.canvas.width 	= 600;
		this.canvas.height 	= 400;
		this.canvas.style 	= 'border: 1px';
		this.main						= document.getElementById('main');
		this.canvas.style.border = "1px solid black";

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
		console.log('running game');
	},

	update: function(){},
});