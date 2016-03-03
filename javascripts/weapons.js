var Gauntlet = Gauntlet || {};
Gauntlet.Armory = {};

var Weapon = function() {
  this.name = "Bare hands";
  this.damage = 1;
  this.hands = 2;

  this.toString = function() {
    return this.name;
  }
};


Gauntlet.Armory.Dagger = function() {
  this.name = "Dagger";
  this.damage = 4;
  this.hands = 1;
};
Gauntlet.Armory.Dagger.prototype = new Weapon();

Gauntlet.Armory.Sword = function() {
  this.name = "Broad sword";
  this.damage = 14;
  this.hands = 2;
};
Gauntlet.Armory.Sword.prototype = new Weapon();

Gauntlet.Armory.Axe = function() {
  this.name = "War axe";
  this.damage = 18;
  this.hands = 2;
};
Gauntlet.Armory.Axe.prototype = new Weapon();

Gauntlet.Armory.Chicken = function() {
  this.name = "Chicken";
  this.damage = 22;
  this.hands = 1; 
};

Gauntlet.Armory.Chicken.prototype = new Weapon();


Gauntlet.Armory.Paper = function() {
  this.name = "Paper";
  this.damage = 5;
  this.hands = 1
};

Gauntlet.Armory.Paper.prototype = new Weapon();


Gauntlet.Armory.Rock = function() {
  this.name = "Rock";
  this.damage = 15;
  this.hands = 1;
};

Gauntlet.Armory.Rock.prototype = new Weapon();


Gauntlet.Armory.Scissors = function() {
  this.name = "Scissors";
  this.damage = 7;
  this.hands = 2;
};

Gauntlet.Armory.Scissors.prototype = new Weapon();
