
function Menu2() {
	Phaser.State.call(this);
}

/** @type Phaser.State */
var proto = Object.create(Phaser.State);
Menu2.prototype = proto;

Menu2.prototype.preload = function() {
	this.load.pack("start", "assets/assets-pack.json");
};

Menu2.prototype.create = function() {
	this.bg = this.game.add.sprite(0, 0, "menu540");
	
	this.music = this.add.sound("music_menu") ;
	this.music.loop =  true;
    this.music.allowMultiple=true ;
    this.music.play() ;
	
	
	
    this.input.onDown.add(this.startMenu,this);

};

Menu2.prototype.startMenu = function(){
	this.game.sound.stopAll();
	this.game.state.start("Menu");
};