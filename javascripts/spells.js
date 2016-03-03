/*
  TODO: Modularize this code with IIFE or Browserify
 */
var Gauntlet = Gauntlet || {};
Gauntlet.SpellBook = {};


/*
  Base spell function that defines name, damage, damage type
 */
Gauntlet.SpellBook.Spell = function() {
  this.name = "";
  this.damage = 0;

  this.damageTypes = ["lightning", "fire", "water", "earth", "mysticism"];
  this.type = "";

  this.toString = function() {
    return this.name + " of " + this.type + " for " + this.damage + " damage!";
  }
};

/*
  An elemental sphere that can be cast by a magical class
 */
Gauntlet.SpellBook.Sphere = function() {
  this.name = "Sphere spell";
  this.damage = Math.floor(Math.random() * 10 + 10);

  var random = Math.round(Math.random() * (this.damageTypes.length - 1));
  this.type = this.damageTypes[random];
};
Gauntlet.SpellBook.Sphere.prototype = new Gauntlet.SpellBook.Spell();

/*
  An elemental bolt that can be cast by a magical class
 */
Gauntlet.SpellBook.Bolt = function() {
  this.name = "Bolt spell";
  this.damage = Math.floor(Math.random() * 8 + 12);

  var random = Math.round(Math.random() * (this.damageTypes.length - 1));
  this.type = this.damageTypes[random];
};
Gauntlet.SpellBook.Bolt.prototype = new Gauntlet.SpellBook.Spell();

/*
  An elemental wand for use by a magical class
 */
Gauntlet.SpellBook.Wand = function() {
  this.name = "Wand spell";
  this.damage = Math.floor(Math.random() * 6 + 18);

  var random = Math.round(Math.random() * (this.damageTypes.length - 1));
  this.type = this.damageTypes[random];
};
Gauntlet.SpellBook.Wand.prototype = new Gauntlet.SpellBook.Spell();

