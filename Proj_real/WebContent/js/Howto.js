function Howto() {
	Phaser.State.call(this);
}

/** @type Phaser.State */
var proto = Object.create(Phaser.State);
Howto.prototype = proto;


Howto.prototype.preload = function() {
	this.load.pack("start", "assets/assets-pack.json");
};

Howto.prototype.create = function() {
	
	this.sprite = this.add.sprite(this.world.centerX, this.world.centerY,
			"game");
	this.sprite.anchor.set(0.5, 0.5);
	
	var menu_re = this.add.sprite(480, 270,"menu");
	menu_re.scale.set(0.80);
	
	menu_re.inputEnabled = true;
	
	menu_re.events.onInputDown.add(this.backMenu, this);
};

Howto.prototype.backMenu = function(){
	this.game.state.start("Menu");
};