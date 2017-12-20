/**
 * StoryEnd state.
 */
function StoryEnd() {
	Phaser.State.call(this);
}

/** @type Phaser.State */
var proto = Object.create(Phaser.State);
StoryEnd.prototype = proto;


StoryEnd.prototype.preload = function() {
	this.load.pack("start", "assets/assets-pack.json");
};

StoryEnd.prototype.create = function() {
	this.sprite = this.add.sprite(270, 180,
			"N1");
	this.music = this.add.sound("end") ;
    this.music.allowMultiple=true ;
    this.music.play() ;
	this.sprite.anchor.set(0.5, 0.5);
	
	this.time.events.add(8000,this.showS2,this);
	
	this.input.onDown.add(this.startGame,this);
};
StoryEnd.prototype.showS2 = function() {
	this.sprite.kill();
	this.sprite = this.add.sprite(270, 180,
	"N2");
    this.sprite.anchor.set(0.5, 0.5);	
    this.time.events.add(8000,this.showS3,this);
};

StoryEnd.prototype.showS3 = function() {
	this.sprite.kill();
	this.sprite = this.add.sprite(270, 180,
	"N3");
    this.sprite.anchor.set(0.5, 0.5);	
    this.time.events.add(8000,this.showS4,this);
};

StoryEnd.prototype.showS4 = function() {
	this.sprite.kill();
	this.sprite = this.add.sprite(270, 180,
	"N4");
    this.sprite.anchor.set(0.5, 0.5);	
    this.time.events.add(8000,this.showS5,this);
};

StoryEnd.prototype.showS5 = function() {
	this.sprite.kill();
	this.sprite = this.add.sprite(270, 180,
	"N5");
    this.sprite.anchor.set(0.5, 0.5);	
    this.time.events.add(8000,this.showS6,this);
};

StoryEnd.prototype.showS6 = function() {
	this.sprite.kill();
	this.sprite = this.add.sprite(270, 180,
	"N6");
    this.sprite.anchor.set(0.5, 0.5);	
    this.time.events.add(8000,this.showS7,this);
};

StoryEnd.prototype.showS7 = function() {
	this.sprite.kill();
	this.sprite = this.add.sprite(270, 180,
	"N7");
    this.sprite.anchor.set(0.5, 0.5);	
    this.time.events.add(10000,this.startGame,this);
};


StoryEnd.prototype.startGame = function() {
	this.game.sound.stopAll();
	this.game.state.start("Menu");
};