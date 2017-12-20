function Level2() {
	Phaser.State.call(this);
}

/** @type Phaser.State */
var proto = Object.create(Phaser.State);
Level2.prototype = proto;


Level2.prototype.preload = function() {
	this.load.pack("level", "assets/assets-pack.json");
};



Level2.prototype.create = function() {
	this.game.physics.startSystem(Phaser.Physics.ARCADE);
	this.game.physics.arcade.gravity.y = 1000;
	
	this.bg = this.game.add.sprite(0, 0, "bggg540");
	this.bg.fixedToCamera = true;
	this.bg.width = this.game.width;
	this.bg.height = this.game.height;

	this.map = this.game.add.tilemap("real_level_2");
	this.map.addTilesetImage('tileset');
	this.maplayer4 = this.map.createLayer("Tile Layer 4");
	this.maplayer3 = this.map.createLayer("Tile Layer 3");
	this.maplayer1 = this.map.createLayer("Tile Layer 1");
	this.maplayer2 = this.map.createLayer("Tile Layer 2");

	this.music = this.add.sound("music1") ;
	this.music.loop =  true;
    this.music.allowMultiple=true ;
    this.music.play() ;
	
    this.maplayer1.resizeWorld();
	this.maplayer2.resizeWorld();
	this.maplayer3.resizeWorld();
	this.maplayer4.resizeWorld();


	this.map.setCollisionBetween(0,9999,true,this.maplayer1);
	this.map.setCollisionBetween(0,9999,true,this.maplayer3);
	this.map.setCollisionBetween(0,9999,true,this.maplayer2);
	this.map.setCollisionBetween(0,9999,true,this.maplayer4);
	



	this.enemies = this.add.group();
	this.cap1 = this.add.group();
	this.kabduk = this.add.group();
	
	for (x in this.map.objects.Object) {
		var obj = this.map.objects.Object[x];
		if (obj.type == "player") {
			console.log(this.player);
			this.player = this.addPlayer(obj.x, obj.y);
			this.game.camera.follow(this.player,
					Phaser.Camera.FOLLOW_PLATFORMER);
			this.player.play("idle");
		} else if (obj.type == "enemy1") {
			var c = this.addEnemy1(obj.x, obj.y);
			this.enemies.add(c);
		} else if (obj.type == "enemy2") {
			var c = this.addEnemy2(obj.x, obj.y);
			this.enemies.add(c);
		} else if (obj.type == "cap") {
			var c = this.addCap1(obj.x, obj.y);
			this.cap1.add(c);
		}else if (obj.type == "kabduk1") {
			var c = this.addKabduk1(obj.x, obj.y);
			this.kabduk.add(c);
		}else if (obj.type == "kabduk2") {
			var c = this.addKabduk2(obj.x, obj.y);
			this.kabduk.add(c);
		}else if (obj.type == "kabduk3") {
			var c = this.addKabduk3(obj.x, obj.y);
			this.kabduk.add(c);
		}else if (obj.type == "kabduk4") {
			var c = this.addKabduk4(obj.x, obj.y);
			this.kabduk.add(c);
		}else if (obj.type == "kabduk5") {
			var c = this.addKabduk5(obj.x, obj.y);
			this.kabduk.add(c);
		}else if (obj.type == "goal") {
		}
	}
	
	this.cap1.count = 0;
	
	this.game.time.events.add(Phaser.Timer.MINUTE * 1.5, this.onPlayerKilled, this);
	this.player.events.onKilled.addOnce(this.onPlayerKilled,this);
	this.player.canhit = true;
	this.player.inputEnabled = true;
	this.physics.enable(this.player, Phaser.Physics.ARCADE);
	this.cursors = this.input.keyboard.createCursorKeys();
	this.player.inputEnabled = true;
	this.cap1.enableBody = true;
	
};


Level2.prototype.update = function() {
	if(this.gameover) return;
	if(this.player == null) return;

	
	this.game.physics.arcade.collide(this.player, this.maplayer1);
	this.game.physics.arcade.collide(this.enemies, this.maplayer1);
	this.game.physics.arcade.collide(this.cap1, this.maplayer1);
	this.game.physics.arcade.collide(this.kabduk, this.maplayer1);
	
	this.physics.arcade.collide(this.player,this.enemies,this.onPlayerKilled,null,this);
	this.physics.arcade.collide(this.player,this.kabduk,this.onPlayerKilled,null,this);
	this.game.physics.arcade.overlap(this.player, this.cap1, this.collectCap, null, this);
	
	this.game.debug.text("Time : " + this.game.time.events.duration/1000, 20, 30);
	
	// ควบคุมการเคลื่อนที่ของ play โดยการกดที่หน้าจอ
	// อ่าน activePointer คือจุดที่ก าลังกด
	if(this.player.body.velocity.y==0){
		if (this.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
			this.player.body.acceleration.x = -100;
			this.player.play("Walk");
			this.player.body.drag.setTo(500, 0);
			this.player.scale.x = -1;
		} else if (this.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
			this.player.body.velocity.x = 100;
			this.player.play("Walk");
			this.player.scale.x = 1;
			this.player.body.drag.setTo(500, 0);
		} else {
			this.player.body.velocity.x = 0;
			this.player.play("Idle");
			
		}
		
		if (this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
			this.player.body.velocity.y = -500;
			this.player.body.velocity.x = 1;
			this.player.play("Jump");
			this.player.body.drag.setTo(0, 0);
			
			this.music = this.add.sound("Jump") ;
		    this.music.allowMultiple=true ;
		    this.music.play() ;
			if (this.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
				this.player.body.velocity.x = -150;
				this.player.play("Walk");
				this.player.scale.x = -1;
				
				
			} else if (this.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
				this.player.body.velocity.x = 150;
				this.player.play("Walk");
				this.player.scale.x = 1;
				this.player.body.drag.setTo(0, 0);
			}
		}
		
	}
	
	
};

Level2.prototype.onPlayerKilled = function(){
	this.game.sound.stopAll();
	this.game.state.start("gover2");

	};

	
Level2.prototype.collectCap  = function (player, cap) {
		this.pick = this.add.sound("Pick") ;
		this.pick.allowMultiple=true ;
		this.pick.play() ;
		cap.destroy();
		this.cap1.count++;
		this.scap =[];
		for(var i=0;i<=this.cap1.count;i++){
			if(i==0){
				this.scap[i] = this.add.sprite(20,50, "Cap");
			}else{
			this.scap[i] = this.add.sprite(20*i,50, "Cap");
			this.scap[i].scale.set(0.5);
			this.scap[i].fixedToCamera = true;
			}
		} 
		
		if(this.cap1.count==5){
			this.Next();
		}
	  };
  
  
Level2.prototype.Next  = function () {
	 this.game.sound.stopAll();
	 this.game.state.start("StoryEnd");
	 };
	  

Level2.prototype.addPlayer = function(x, y) {
	j = this.add.sprite(x, y, "zom_re_64");
	j.animations.add("Idle", zframe("Idle", 4), 6, true);
	j.animations.add("Attack", zframe("Attack", 6), 6, true);
	j.animations.add("Dead", zframe("Dead", 8), 8, true);
	j.animations.add("Hurt", zframe("Hurt", 5), 5, true);
	j.animations.add("Run", zframe("Run", 10), 10, true);
	j.animations.add("Walk", zframe("Walk", 6), 6, true);
	j.animations.add("Jump", zframe("Jump", 7), 7, true);
	j.anchor.set(0, 1);
	this.game.physics.enable(j);
	j.play("Idle");
	j.body.collideWorldBounds = true;
	return j;
};

Level2.prototype.addEnemy1 = function(x, y) {
	c = this.add.sprite(x, y, "person1_re_64");
	c.animations.add("Attack", zframe("Attack", 6), 12, true);
	c.animations.add("Hurt", zframe("Hurt", 9), 12, true);
	c.animations.add("Idle", zframe("Idle", 8), 12, true);
	c.animations.add("Run", zframe("Run", 6), 12, true);
	c.animations.add("Walk", zframe("Walk", 8), 12, true);
	c.play("Idle");
	c.scale.x = -1;
	c.anchor.set(0, 0.9);
	this.game.physics.enable(c);
	c.body.collideWorldBounds = true;
	return c;
};
Level2.prototype.addEnemy2 = function(x, y) {
	c = this.add.sprite(x, y, "person2_re_64");
	c.animations.add("Attack", zframe("Attack", 6), 12, true);
	c.animations.add("Hurt", zframe("Hurt", 9), 12, true);
	c.animations.add("Idle", zframe("Idle", 8), 12, true);
	c.animations.add("Jump", zframe("Jump", 8), 12, true);
	c.animations.add("Run", zframe("Run", 6), 12, true);
	c.animations.add("Walk", zframe("Walk", 8), 12, true);
	c.play("Idle");
	c.scale.x = -1;
	c.anchor.set(0, 0.9);
	this.game.physics.enable(c);
	c.body.collideWorldBounds = true;
	return c;
};

Level2.prototype.addCap1 = function(x, y) {
	c = this.add.sprite(x, y, "Cap");
	c.anchor.set(0,0.9);
	c.smoothed = false;
	this.game.physics.enable(c);
	return c;
};

Level2.prototype.addKabduk1 = function(x, y) {
	c = this.add.sprite(x, y, "Kabduk1");
	c.anchor.set(0,0.9);
	c.smoothed = false;
	this.game.physics.enable(c);
	return c;
};


Level2.prototype.addKabduk2 = function(x, y) {
	c = this.add.sprite(x, y, "Kabduk6");
	c.anchor.set(0,0.9);
	c.smoothed = false;
	this.game.physics.enable(c);
	return c;
};


Level2.prototype.addKabduk3 = function(x, y) {
	c = this.add.sprite(x, y, "Kabduk2");
	c.anchor.set(0,0.9);
	c.smoothed = false;
	this.game.physics.enable(c);
	return c;
};

Level2.prototype.addKabduk4 = function(x, y) {
	c = this.add.sprite(x, y, "Kabduk4");
	c.anchor.set(0,0.9);
	c.smoothed = false;
	this.game.physics.enable(c);
	return c;
};

function gframes(key, n) {
	var f = [];
	for (var i = 0; i <= n; i++) {
		var kf = key + "_" + (("00" + i).slice(-3));
		f.push(kf);
	}
	return f;

}

function mframe(key, n) {
	f = [];
	for (var i = 1; i < n; i++) {
		f.push(key + " (" + i + ")");
	}
	return f;
}

function zframe(key, n) {
	f = [];
	for (var i = 1; i < n; i++) {
		f.push(key +i);
	}
	return f;
}

Level2.prototype.hitEnemy = function(p, x) {
	p.damage(1);
};

Level2.prototype.quitGame = function() {
	this.game.state.start("Menu");
};

	
	