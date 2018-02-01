var playState = {

	create: function() {
        game.add.sprite(0,0,'tlo');
        this.player = game.add.sprite(Math.round((Math.random()*1200)), Math.round((Math.random()*700)), 'celownik');
        //this.punkt = new Phaser.Point(player.width-40,player.height-38.5);
        
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
    }
};
