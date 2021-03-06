var menuState = {
    
	create: function() {

        game.add.sprite(0,0,'menu');
        this.napis = game.add.sprite(game.world.centerX-232.5,630,'napis');
        game.add.sprite(game.world.centerX-331.5,70,'tytul');
        game.add.sprite(game.world.centerX-260,150,'instrukcja');
        this.button = game.add.button(1200,650,'playing',this.Muzyka,this);
        this.button.input.useHandCursor = true;
        this.czas = 0;
        muzyka = game.add.audio('menu2');
        muzyka.play('', 0,1,true);
        this.x = 1;
		this.spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
        this.keyM = game.input.keyboard.addKey(Phaser.Keyboard.M);
		this.spaceKey.onDown.add(this.startGame, this);      
	},

	update: function() {
        this.czas += game.time.elapsed;
        this.keyM.onDown.add(this.Muzyka, this);
        if (this.x % 2 == 0) {
            muzyka.pause();
            this.button.loadTexture('noplaying');
        }
        else 
        {muzyka.resume();
        this.button.loadTexture('playing');
        }
        if ( this.czas >= 1000 )    
        {        
            this.czas -= 1000;        
            this.napis.visible = !this.napis.visible;    
        }
        },
    
    Muzyka: function () {
      this.x = this.x + 1;
    },

	startGame: function () {
        muzyka.resume();
        muzyka.stop();
        game.state.start('play');
    },

};