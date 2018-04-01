var winState = {

	create: function() {
        
        game.add.sprite(0,0,'win');
		game.add.text(500, 100, 'Twój wynik: ' + score, 
			{font: '40px Berlin Sans FB',fill: '#fff'});
        this.keyM = game.input.keyboard.addKey(Phaser.Keyboard.M);
        this.button = game.add.button(1200,650,'playing',this.Muzyka,this);
        this.button.input.useHandCursor = true;
        
        muzyka.play('', 0,1,true);
        
        this.x = 1;

	},

	update: function() {
        this.keyM.onDown.add(this.Muzyka, this);
        if (this.x % 2 == 0) {
            muzyka.pause();
            this.button.loadTexture('noplaying');
        }
        else 
        {muzyka.resume();
        this.button.loadTexture('playing');
        }
	},
    Muzyka: function () {
      this.x = this.x + 1;
    },

	restartGame: function () {
        game.state.start('menu');    
    },


};