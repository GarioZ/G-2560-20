/**
 * Menu state.
 */
function Menu() {
	Phaser.State.call(this);
}

/** @type Phaser.State */
var proto = Object.create(Phaser.State);
Menu.prototype = proto;

Menu.prototype.preload = function() {
	this.load.pack("start", "assets/assets-pack.json");
};

Menu.prototype.create = function() {
	this.bg = this.game.add.sprite(0, 0, "bgg540");
	
	this.music = this.add.sound("music_menu") ;
	this.music.loop =  true;
    this.music.allowMultiple=true ;
    this.music.play() ;
	
	var cx=this.world.centerX;
	var mstart = this.add.sprite(cx,180,"mstart");
	var mstory = this.add.sprite(cx,180+50,"mstory");
	var mgame = this.add.sprite(cx,180+50*2,"mgame");
	var mteam = this.add.sprite(cx,180+50*3,"mteam");

	mstart.scale.set(1);
	mstory.scale.set(1);
	mteam.scale.set(1.05);
	mgame.scale.set(1);
	
	mstart.anchor.set(0.5, 0.5);
	mstory.anchor.set(0.5, 0.5);
	mteam.anchor.set(0.5, 0.5);
	mgame.anchor.set(0.5, 0.5);
	
	mstart.inputEnabled = true;
	mstory.inputEnabled = true;
	mteam.inputEnabled = true;
	mgame.inputEnabled = true;
	
	mstart.events.onInputDown.add(this.startLevel, this);
    mstory.events.onInputDown.add(this.startStory, this);
    mteam.events.onInputDown.add(this.startTeam, this); 
    mgame.events.onInputDown.add(this.startHowto, this);
};

Menu.prototype.startLevel = function(){
	this.game.sound.stopAll();
	this.game.state.start("Level");
};
Menu.prototype.startStory = function(){
	this.game.sound.stopAll();
	this.game.state.start("Story");
};
Menu.prototype.startTeam = function(){
	this.game.sound.stopAll();
	this.game.state.start("Team");
};

Menu.prototype.startHowto = function(){
	this.game.sound.stopAll();
	this.game.state.start("Howto");
};
