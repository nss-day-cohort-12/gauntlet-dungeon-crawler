/*
  TODO: Modularize this code with IIFE or Browserify
 */
var Gauntlet = Gauntlet || {};
Gauntlet.GuildHall = {};

/*
  Base function for a player, or enemy, class (profession)
 */
Gauntlet.GuildHall.PlayerClass = function() {
  this.name = "Beggar";
  this.healthBonus = 0;
  this.strengthBonus = 0;
  this.intelligenceBonus = 0;
  this.magical = false;
  this.evasionBonus = 0;
  this.toString = function() {
    return this.name;
  }
};

/*
    FIGHTER CLASSES
      - Warrior
      - Valkyrie
      - Berserker
      - Monk
 */
Gauntlet.GuildHall.Fighter = function() {
  this.healthBonus = 20;
  this.strengthBonus = 10;
  this.evasionBonus = 5;
  this.image = null;
};
Gauntlet.GuildHall.Fighter.prototype = new Gauntlet.GuildHall.PlayerClass();


Gauntlet.GuildHall.Warrior = function() {
  this.name = "Warrior";
  this.healthBonus = this.healthBonus + 25;
  this.strengthBonus = this.strengthBonus + 30;
  this.evasionBonus= this.evasionBonus + 0;
  this.image = `<img src= "http://vignette3.wikia.nocookie.net/gauntlet/images/3/3f/Warrior_NES.png/revision/latest?cb=20120202192857">`;

};
Gauntlet.GuildHall.Warrior.prototype = new Gauntlet.GuildHall.Fighter();


Gauntlet.GuildHall.Valkyrie = function() {
  this.name = "Valkyrie";
  this.healthBonus = this.healthBonus + 20;
  this.strengthBonus = this.strengthBonus + 10;
  this.evasionBonus= this.evasionBonus + 0;
  this.image = `<img src= "http://vignette3.wikia.nocookie.net/gauntlet/images/3/3f/Warrior_NES.png/revision/latest?cb=20120202192857">`;

};
Gauntlet.GuildHall.Valkyrie.prototype = new Gauntlet.GuildHall.Fighter();


Gauntlet.GuildHall.Berserker = function() {
  this.name = "Berserker";
  this.healthBonus = this.healthBonus + 35;
  this.strengthBonus = this.strengthBonus + 20;
  this.evasionBonus= this.evasionBonus + 0;
  this.image = `<img src= "http://vignette3.wikia.nocookie.net/gauntlet/images/3/3f/Warrior_NES.png/revision/latest?cb=20120202192857">`;

};
Gauntlet.GuildHall.Berserker.prototype = new Gauntlet.GuildHall.Fighter();


Gauntlet.GuildHall.Monk = function() {
  this.name = "Monk";
  this.healthBonus = this.healthBonus + 10;
  this.strengthBonus = this.strengthBonus + 40;
  this.evasionBonus= this.evasionBonus + 0;
this.image = `<img src= "http://1.bp.blogspot.com/-oxXi8zTCVTY/VmeohS69ZFI/AAAAAAAABQQ/feSUCw3I1r0/s1600/Screen%2BShot%2B2015-12-09%2Bat%2B1.01.34%2BPM.png">`;


};
Gauntlet.GuildHall.Monk.prototype = new Gauntlet.GuildHall.Fighter();


/*
    MAGICAL CLASSES
      - Shaman
      - Wizard
      - Conujurer
      - Sorcerer
 */
Gauntlet.GuildHall.Mage = function() {
  this.name = "Mage";
  this.magical = true;
  this.healthBonus =  - 10;
  this.strengthBonus =  - 20;
  this.intelligenceBonus =   20;
  this.evasionBonus = 10;
  this.image = null;

};
Gauntlet.GuildHall.Mage.prototype = new Gauntlet.GuildHall.PlayerClass();


Gauntlet.GuildHall.Shaman = function() {
  this.name = "Shaman";
  this.healthBonus = this.healthBonus + 5;
  this.strengthBonus = this.strengthBonus - 10;
  this.intelligenceBonus = this.intelligenceBonus + 20;
  this.evasionBonus= this.evasionBonus + 0;
  this.image = `<img src="https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/s320x320/e15/12353372_530589097097726_1988786379_n.jpg">`;
};
Gauntlet.GuildHall.Shaman.prototype = new Gauntlet.GuildHall.Mage();


Gauntlet.GuildHall.Wizard = function() {
  this.name = "Wizard";
  this.healthBonus = this.healthBonus - 15;
  this.strengthBonus = this.strengthBonus - 25;
  this.intelligenceBonus = this.intelligenceBonus + 40;
  this.evasionBonus= this.evasionBonus + 0;
  this.image = `<img src="http://vignette3.wikia.nocookie.net/gauntlet/images/5/53/Wizard_NES.png/revision/latest?cb=20120202193256">`;
  
};
Gauntlet.GuildHall.Wizard.prototype = new Gauntlet.GuildHall.Mage();


Gauntlet.GuildHall.Conjurer = function() {
  this.name = "Conjurer";
  this.strengthBonus = this.strengthBonus - 10;
  this.intelligenceBonus = this.intelligenceBonus + 10;
  this.evasionBonus= this.evasionBonus + 0;
this.image = `<img src="http://vignette3.wikia.nocookie.net/gauntlet/images/5/53/Wizard_NES.png/revision/latest?cb=20120202193256">`; 
};
Gauntlet.GuildHall.Conjurer.prototype = new Gauntlet.GuildHall.Mage();


Gauntlet.GuildHall.Sorcerer = function() {
  this.name = "Sorcerer";
  this.healthBonus = this.healthBonus - 5;
  this.strengthBonus = this.strengthBonus - 20;
  this.intelligenceBonus = this.intelligenceBonus + 30;
  this.evasionBonus= this.evasionBonus + 0;
this.image = `<img src="http://vignette3.wikia.nocookie.net/gauntlet/images/5/53/Wizard_NES.png/revision/latest?cb=20120202193256">`;  
};
Gauntlet.GuildHall.Sorcerer.prototype = new Gauntlet.GuildHall.Mage();


/*
    STEALTH CLASSES
      - Thief
      - Ninja
      - Assassin
 */
Gauntlet.GuildHall.Stealth = function() {
  this.name = "Stealth";
  this.magical = false;
  this.healthBonus =  - 10;
  this.strengthBonus =  10;
  this.intelligenceBonus =  10;
  this.evasionBonus =  20;
  this.image = null;
};

Gauntlet.GuildHall.Stealth.prototype = new Gauntlet.GuildHall.PlayerClass();

Gauntlet.GuildHall.Thief = function() {
  this.name = "Thief";
  this.healthBonus = this.healthBonus - 5;
  this.strengthBonus = this.strengthBonus - 10;
  this.intelligenceBonus = this.intelligenceBonus + 10;
  this.evasionBonus = this.evasionBonus +30;
  this.image = `<img src="http://vignette1.wikia.nocookie.net/gauntlet/images/d/dd/Elf_NES.png/revision/latest?cb=20120202193413">`;  
};
Gauntlet.GuildHall.Thief.prototype = new Gauntlet.GuildHall.Stealth();

Gauntlet.GuildHall.Ninja = function() {
  this.name = "Ninja";
  this.healthBonus = this.healthBonus - 10;
  this.strengthBonus = this.strengthBonus + 10;
  this.intelligenceBonus = this.intelligenceBonus + 10;
  this.evasionBonus = this.evasionBonus +20;
  this.image = `<img src="http://images.nintendolife.com/reviews/wiiu-eshop/ninja_gaiden_nes/large.jpg">`;

};
Gauntlet.GuildHall.Ninja.prototype = new Gauntlet.GuildHall.Stealth();

Gauntlet.GuildHall.Assassin = function() {
  this.name = "Assassin";
  this.healthBonus = this.healthBonus - 10;
  this.strengthBonus = this.strengthBonus +10;
  this.intelligenceBonus = this.intelligenceBonus - 10;
  this.evasionBonus = this.evasionBonus +30;
  this.image = `<img src="http://www.entertainmentbuddha.com/blog/wp-content/uploads/2012/08/406096_446585385362148_1142128945_n.jpg">`;  
};
Gauntlet.GuildHall.Assassin.prototype = new Gauntlet.GuildHall.Stealth();


