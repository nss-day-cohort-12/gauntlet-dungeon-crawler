'use strict';

/*
  TODO: Modularize this code with IIFE or Browserify
 */
var Gauntlet = Gauntlet || {};
Gauntlet.Combatants = {};

/*
  Define the base object for any player of Gauntlet,
  whether a human player or a monster.
 */
Gauntlet.Combatants.Player = function(name) {
  this.species = null;
  this.class = null;
  this.weapon = null;
  this.image = null;
  this.playerName = name || "unknown adventurer";
  this.health = Math.floor(Math.random() * 40 + 50);
  this.limbs = ["head", "neck", "arm", "leg", "torso"];
  this.skinColor = "gray";
  this.skinColors = [this.skinColor];
  this.strength = 90;
  this.intelligence = 90;
  this.evade = 90;

  this.toString = function() {

    var outputMessage = `${this.playerName} a ${this.skinColor} ${this.species} ${this.class.name} with a health of ${this.health} used ${this.weapon.toString()}`;
  // console.log("outputMessage", outputMessage);
    return outputMessage;
  };
};
Gauntlet.Combatants.Player.prototype.setImage = function(newImage) {
  this.image = newImage;
}

Gauntlet.Combatants.Player.prototype.setWeapon = function(newWeapon) {
  this.weapon = newWeapon;
}

Gauntlet.Combatants.Player.prototype.generateClass = function() {
  // Get a random index from the allowed classes array
  var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

  // Get the string at the index
  var randomClass = this.allowedClasses[random];

  // Composes the corresponding player class into the player object
  this.class = new Gauntlet.GuildHall[randomClass]();

  // Add the health bonus
  this.health += this.class.healthBonus;
  return this.class;
};

/*
  Define the base properties for a human in a 
  constructor function.
 */
Gauntlet.Combatants.Human = function() {
  var randomSkin;

  this.species = "Human";
  this.intelligence = this.intelligence + 20;
  this.evade = this.evade + 10;
  this.skinColors.push("brown", "red", "white", "disease");
  randomSkin = Math.round(Math.random() * (this.skinColors.length-1));
  this.skinColor = this.skinColors[randomSkin];
  this.allowedClasses = ["Warrior", "Berserker", "Valkyrie", "Monk"];
};
Gauntlet.Combatants.Human.prototype = new Gauntlet.Combatants.Player();


/*
  Define the base properties for a monster in a 
  constructor function.
 */
Gauntlet.Combatants.Monster = function() {
  let randomSkin;

  this.species = "Monster";
  this.health = this.health - 30;
  this.intelligence = this.intelligence -20;
  this.strength = this.strength + 30;
  this.evade = this.evade -10;
  

  
  this.skinColors.push("green", "orange", "blue");
  randomSkin = Math.round(Math.random() * (this.skinColors.length-1));
  this.skinColor = this.skinColor[randomSkin];

  this.allowedClasses = ["Wizard", "Ninja", "Assassin"];

};

Gauntlet.Combatants.Monster.prototype = new Gauntlet.Combatants.Player();

