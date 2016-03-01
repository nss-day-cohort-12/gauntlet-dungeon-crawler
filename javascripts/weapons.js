var Gauntlet = Gauntlet || {};
Gauntlet.Armory = {};

var Weapon = function() {
  this.name = "bare hands";
  this.damage = 1;
  this.hands = 2;

  this.toString = function() {
    return this.name;
  }
};

Gauntlet.Armory.Dagger = function() {
  this.name = "dagger";
  this.damage = 4;
  this.hands = 1;
};
Gauntlet.Armory.Dagger.prototype = new Weapon();

Gauntlet.Armory.BroadSword = function() {
  this.name = "broad sword";
  this.damage = 14;
  this.hands = 2;
};
Gauntlet.Armory.BroadSword.prototype = new Weapon();

Gauntlet.Armory.WarAxe = function() {
  this.name = "war axe";
  this.damage = 18;
  this.hands = 2;
};
Gauntlet.Armory.WarAxe.prototype = new Weapon();

Gauntlet.Armory.Chicken = function() {
  this.name = "chicken";
  this.damage = 22;
  this.hands = 1; 
};

Gauntlet.Armory.Chicken.prototype = new Weapon();


Gauntlet.Armory.Paper = function() {
  this.name = "paper";
  this.damage = 5;
  this.hands = 1
};

Gauntlet.Armory.Paper.prototype = new Weapon();


Gauntlet.Armory.Rock = function() {
  this.name = "rock";
  this.damage = 15;
  this.hands = 1;
};

Gauntlet.Armory.Rock.prototype = new Weapon();


Gauntlet.Armory.Scissors = function() {
  this.name = "scissors";
  this.damage = 7;
  this.hands = 2;
};

Gauntlet.Armory.Scissors.prototype = new Weapon();




