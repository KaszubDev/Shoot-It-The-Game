var menuState = {

	create: function() {

        game.add.sprite(0,0,'menu');
        game.add.sprite(game.world.centerX-353.5,300,'napis');

		this.spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
		this.spaceKey.onDown.add(this.startGame, this);
	},

	update: function() {
	},

	startGame: function () {
        game.state.start('play');
    },

};