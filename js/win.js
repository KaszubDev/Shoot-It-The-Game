var winState = {

	create: function() {
        
        game.add.sprite(0,0,'win');
        game.add.sprite(490,210,'ponowna');
        this.oMnie = game.add.sprite(20,50,'autor');
        this.oMnie.visible = false;
        this.krzyzyk = game.add.button(380,50,'cross',this.close,this);
        this.krzyzyk.visible = false;
        this.autorButton = game.add.button(10,10,'autor_spritesheet',this.about,this,1,0);
		game.add.text(520, 100, 'Twój wynik: ' + score, 
			{font: '40px Berlin Sans FB',fill: '#fff'});
        this.keyM = game.input.keyboard.addKey(Phaser.Keyboard.M);
        this.button = game.add.button(1200,650,'playing',this.Muzyka,this);
        this.button.input.useHandCursor = true;
        this.autorButton.input.useHandCursor = true;
        this.krzyzyk.input.useHandCursor = true;
        this.y = true;
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
    about: function () {
        if(this.y = true)
            {
            this.oMnie.visible = true;
            this.y = false;
            this.krzyzyk.visible = true;
            }
    },
    close: function () {
      this.y = true;
      this.oMnie.visible = false;
      this.krzyzyk.visible = false;
    },
	restartGame: function () {
        game.state.start('menu');    
    },

};