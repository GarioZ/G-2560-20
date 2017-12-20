/**
 * Story state.
 */
function Story() {
	Phaser.State.call(this);
}

/** @type Phaser.State */
var proto = Object.create(Phaser.State);
Story.prototype = proto;


Story.prototype.preload = function() {
	this.load.pack("start", "assets/assets-pack.json");
};

Story.prototype.create = function() {
	
	this.sprite = this.add.sprite(this.world.centerX, this.world.centerY,
			"s1540");
	this.music = this.add.sound("music") ;
    this.music.allowMultiple=true ;
    this.music.play() ;
	this.sprite.anchor.set(0.5, 0.5);
	
	this.time.events.add(10500,this.showS2,this);
	
	this.input.onDown.add(this.startGame,this);
};
Story.prototype.showS2 = function() {
	this.sprite.kill();
	this.sprite = this.add.sprite(this.world.centerX, this.world.centerY,
	"s2540");
    this.sprite.anchor.set(0.5, 0.5);	
    this.time.events.add(8000,this.showS3,this);
};

Story.prototype.showS3 = function() {
	this.sprite.kill();
	this.sprite = this.add.sprite(this.world.centerX, this.world.centerY,
	"s3540");
    this.sprite.anchor.set(0.5, 0.5);	
    this.time.events.add(8000,this.showS4,this);
};

Story.prototype.showS4 = function() {
	this.sprite.kill();
	this.sprite = this.add.sprite(this.world.centerX, this.world.centerY,
	"s4540");
    this.sprite.anchor.set(0.5, 0.5);	
    this.time.events.add(8000,this.showS5,this);
};

Story.prototype.showS5 = function() {
	this.sprite.kill();
	this.sprite = this.add.sprite(this.world.centerX, this.world.centerY,
	"s5540");
    this.sprite.anchor.set(0.5, 0.5);	
    this.time.events.add(8000,this.showS6,this);
};

Story.prototype.showS6 = function() {
	this.sprite.kill();
	this.sprite = this.add.sprite(this.world.centerX, this.world.centerY,
	"s6540");
    this.sprite.anchor.set(0.5, 0.5);	
    this.time.events.add(8000,this.showS7,this);
};

Story.prototype.showS7 = function() {
	this.sprite.kill();
	this.sprite = this.add.sprite(this.world.centerX, this.world.centerY,
	"s7540");
    this.sprite.anchor.set(0.5, 0.5);	
    this.time.events.add(8000,this.showS8,this);
};

Story.prototype.showS8 = function() {
	this.sprite.kill();
	this.sprite = this.add.sprite(this.world.centerX, this.world.centerY,
	"s8540");
    this.sprite.anchor.set(0.5, 0.5);	
    this.time.events.add(8000,this.showS9,this);
};

Story.prototype.showS9 = function() {
	this.sprite.kill();
	this.sprite = this.add.sprite(this.world.centerX, this.world.centerY,
	"s9540");
    this.sprite.anchor.set(0.5, 0.5);	
    this.time.events.add(8000,this.showS10,this);
};

Story.prototype.showS10 = function() {
	this.sprite.kill();
	this.sprite = this.add.sprite(this.world.centerX, this.world.centerY,
	"s10540");
    this.sprite.anchor.set(0.5, 0.5);	
    this.time.events.add(8000,this.showS11,this);
};

Story.prototype.showS11 = function() {
	this.sprite.kill();
	this.sprite = this.add.sprite(this.world.centerX, this.world.centerY,
	"s11540");
    this.sprite.anchor.set(0.5, 0.5);	
    this.time.events.add(8000,this.showS12,this);
};

Story.prototype.showS12 = function() {
	this.sprite.kill();
	this.sprite = this.add.sprite(this.world.centerX, this.world.centerY,
	"s12540");
    this.sprite.anchor.set(0.5, 0.5);	
    this.time.events.add(8000,this.startGame,this);
};

Story.prototype.startGame = function() {
	this.game.sound.stopAll();
	this.game.state.start("Menu");
};