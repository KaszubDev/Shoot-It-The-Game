var winState = {

	create: function() {

		game.add.text(100, 100, 'You won! Press space to restart', 
			{fill: '#fff'});
        game.sound.play('wygrana');

		this.spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		this.spaceKey.onDown.add(this.restartGame, this);
	},

	update: function() {
	},

	restartGame: function () {
        game.state.start('menu');    
    },


};