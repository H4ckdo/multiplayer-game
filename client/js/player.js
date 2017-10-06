const Player = {
	init: function() {
		this.healt;
		this.pos = {
			x: 0,
			y: 0
		};
	},

	update: function(position) {
		this.pos.x = position.x;
		this.pos.y = position.y;
	}
};