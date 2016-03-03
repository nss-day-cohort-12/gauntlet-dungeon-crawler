'use strict'

describe('when the gauntlet game runs it', function() {

	it('should have a Stealth based class', function() {
		expect(Gauntlet.GuildHall.Stealth).toBeDefined();
	});

	it('should have a Thief class', function() {
		expect(Gauntlet.GuildHall.Thief).toBeDefined();
	});
	it('should have a Ninja class', function() {
		expect(Gauntlet.GuildHall.Ninja).toBeDefined();
	});
	
	it('should have a Assassin class', function() {
		expect(Gauntlet.GuildHall.Assassin).toBeDefined();
	});
	//set weapon function
	it('should have a set weapon function', function() {
		expect(Gauntlet.Combatants.Player.prototype.setWeapon).toBeDefined();
	});

	it('should have a SpellBook, Armory, GuildHall, and Combatants', function() {
		expect(Gauntlet.SpellBook).toBeDefined();
		expect(Gauntlet.Armory).toBeDefined();
		expect(Gauntlet.GuildHall).toBeDefined();
		expect(Gauntlet.Combatants).toBeDefined();
	});

	//generate class function
	it('should have a generate class function', function() {
		expect(Gauntlet.Combatants.Player.prototype.generateClass).toBeDefined();
	});


	it('should have a player class with name, healthbonus, strngthBonus, intelligenceBonus, magicalValue', function() {
		let myPlayer = new Gauntlet.GuildHall.PlayerClass();
		expect(myPlayer.name).toBeDefined();
		expect(myPlayer.healthBonus).toBeDefined();
		expect(myPlayer.strengthBonus).toBeDefined();
		expect(myPlayer.intelligenceBonus).toBeDefined();
		expect(myPlayer.magical).toBeDefined();
		// expect(myPlayer.evasionBonus).toBeDefined();
	});

	it('should have Fighter class', function() {
		expect(Gauntlet.GuildHall.Fighter).toBeDefined();
	});

	it('should have Mage class', function() {
		expect(Gauntlet.GuildHall.Mage).toBeDefined();
	});
	

	it('should have Player', function() {
		let newPlayer = new Gauntlet.Combatants.Player
		expect(newPlayer.species).toBeDefined();
		expect(newPlayer.class).toBeDefined();
		expect(newPlayer.weapon).toBeDefined();
	});

	it('should have Human', function() {
		expect(Gauntlet.Combatants.Human).toBeDefined();
	});

	it('should have Monster', function() {
		expect(Gauntlet.Combatants.Monster).toBeDefined();
	});

	it('should have Orc', function() {
		expect(Gauntlet.Combatants.Orc).toBeDefined();
	});

	it('should have a generate weapon and class functions for Orcs', function() {
		let newOrc = new Gauntlet.Combatants.Orc(); 
		expect(newOrc.generateClass).toBeDefined();
		expect(newOrc.generateWeapon).toBeDefined();
	});

	it('should have a fighting function', function() {
		expect(fight).toBeDefined();
		// let newPlayer = new Gauntlet.Combatants.Human();
		// let playerWeapon = new Dagger();
		// newPlayer.setWeapon(playerWeapon);
		// fight(newPlayer);
	})

	it('should have an attack function', function() {
		expect(attack).toBeDefined();
	});

	it('should have an updateHealthBars function', function() {
		expect(updateHealthBars).toBeDefined();
	});


});

