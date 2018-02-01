var loadState = {

	preload: function(){
		game.load.image('tlo', 'assets/tlo.jpg');
        game.load.image('menu', 'assets/menu2.jpg');
        game.load.image('celownik', 'assets/celownik.png');
        game.load.image('ufo', 'assets/ufo.png');
        game.load.image('napis', 'assets/napis.png');
        game.load.audio('shot', 'assets/shot.wav');
	},

	create: function() {
        game.physics.startSystem(Phaser.Physics.ARCADE);

		game.state.start('menu');
	}

}