function gover2() {
	Phaser.State.call(this);
}

/** @type Phaser.State */
var proto = Object.create(Phaser.State);
gover2.prototype = proto;


gover2.prototype.preload = function() {
	this.load.pack("start", "assets/assets-pack.json");
};


gover2.prototype.create = function() {
	this.bg = this.game.add.sprite(0, 0, "bggg540");
	
	this.sprite = this.add.sprite(280,300,"g_over");
	this.sprite.anchor.set(0.5, 0.5);
	
	
	var twn = this.add.tween(this.sprite);
	twn.to({y:160}, 1000, "Power0", true,0);
	
	var menu_re = this.add.sprite(240, 300,"menu");
	
	menu_re.inputEnabled = true;
	
	menu_re.events.onInputDown.add(this.backMenu, this);
	
	var twn = this.add.tween(menu_re);
	twn.to({y:200}, 1000, "Power0", true,0);
	
	var re_re = this.add.sprite(300, 300,"re");
	
	re_re.inputEnabled = true;
	
	re_re.events.onInputDown.add(this.backLevel, this);
	
	var twn = this.add.tween(re_re);
	twn.to({y:205}, 1000, "Power0", true,0);
	
	this.g_over = this.add.sound("gameover");
    this.g_over.play() ;
};

gover2.prototype.backMenu = function(){
	this.game.sound.stopAll();
	this.game.state.start("Menu2");
};

gover2.prototype.backLevel = function(){
	this.game.sound.stopAll();
	this.game.state.start("Level2");
};



