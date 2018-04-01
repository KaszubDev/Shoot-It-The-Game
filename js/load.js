var loadState = {

	preload: function(){
		game.load.image('tlo', 'assets/tlo.jpg');
        game.load.image('menu', 'assets/menu2.jpg');
        game.load.image('celownik', 'assets/celownik.png');
        game.load.image('ufo', 'assets/ufo.png');
        game.load.image('napis', 'assets/napis.png');
        game.load.image('tytul', 'assets/Tytul.png');
        game.load.image('playing', 'assets/playing.png');
        game.load.image('puste', 'assets/puste.png');
        game.load.image('instrukcja', 'assets/instrukcja.png');
        game.load.image('noplaying', 'assets/noplaying.png');
        game.load.image('win', 'assets/win2.jpg');
        game.load.audio('shot', 'assets/shot.wav');
        game.load.audio('menu2', 'assets/menu.mp3');
        var scoreText, timer, timerEvent, timeText, score;
	},

	create: function() {
        game.physics.startSystem(Phaser.Physics.ARCADE);

		game.state.start('menu');
	}

}