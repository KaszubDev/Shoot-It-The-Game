var playState = {

	create: function() {
        game.add.sprite(0,0,'tlo');
        this.player = game.add.sprite(Math.round((Math.random()*1200)), Math.round((Math.random()*700)), 'celownik');
        //punkt = new Phaser.Point(this.player.x+40,this.player.y+38.5); //tutaj!!
        //this.punkt = game.add.sprite(srodekX,srodekY,'puste');
        
        game.physics.enable(this.player, Phaser.Physics.ARCADE);
        this.player.body.collideWorldBounds = true;
        
		this.cursors = game.input.keyboard.createCursorKeys();
        this.spacja = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        
        this.targets = game.add.group();
        this.targets.enableBody = true;
        game.physics.arcade.enable(this.targets);
        for(let i=0;i<8;i++)
            {
                var target = this.targets.create(Math.round((Math.random()*1146)),0,'ufo');
                target.body.gravity.y = Math.round((Math.random()*40));
            }
        
        bum = game.add.emitter(0,0,100);
        bum.makeParticles('ufo');
        //bum.emitter.gravity = 200;
        
        scoreText = game.add.text(100,650,'Score: 0',{fontSize: '32px',fill:'#ffffff'});
},


	update: function() {
        
        game.world.bringToTop(this.player);
        
		if (this.cursors.left.isDown){
	        this.player.body.x -= 10;
	    } 

	    if (this.cursors.right.isDown){
	        this.player.body.x += 10;
	    } 

	    if (this.cursors.down.isDown){
	        this.player.body.y += 10;
	    }  

	    if (this.cursors.up.isDown){
	        this.player.body.y -= 10;
	    } 
        if(this.spacja.isDown){
            game.sound.play('shot');
        }
        //punkt = new Phaser.Point(this.player.x+40,this.player.y+38.5);
        this.player.body.width = this.player.body.sourceWidth * 0.5;
        this.player.body.height = this.player.body.sourceHeight * 0.5;
        game.physics.arcade.overlap(this.player, this.targets, wybuch, null, this);
        
        function wybuch(player,ufo)
        {
            if(this.spacja.isDown){
            bum.start(true,500,null,20);
            bum.x = ufo.x + 67;
            bum.y = ufo.y + 47.5;
            ufo.kill();
        }
        }
        
        //this.keyM.onDown.add(Music, this);
        
        function rozwal(player,statek)
        {
        bum.x = statek.x;
        bum.y = statek.y;
        bum.start(true,500,null,20);
        //game.sound.play('dzwiek');
        //statek.kill();
        //score += 10;
        //scoreText.text = 'Score: ' + score;
        }
        
        //game.physics.arcade.overlap(punkt,this.targets, rozwal, null, this);
    }
};
