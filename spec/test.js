'use strict'

describe('when the gauntlet game is coded', function() {

	it('should have a stealth based class', function() {
		expect(Gauntlet.GuildHall.Stealth).toBeDefined();
	});

	it('should have a thief class', function() {
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

	it('should have fighter class', function() {
		expect(Gauntlet.GuildHall.Fighter).toBeDefined();
	});
	it('should have mage class', function() {
		expect(Gauntlet.GuildHall.Mage).toBeDefined();
	});
	
	it('should have human', function() {
		expect(Gauntlet.Combatants.Human).toBeDefined();
	});
	it('should have monster', function() {
		expect(Gauntlet.Combatants.Monster).toBeDefined();
	});


	it('should have player', function() {
		let newPlayer = new Gauntlet.Combatants.Player
		expect(newPlayer.species).toBeDefined();
		expect(newPlayer.class).toBeDefined();
		expect(newPlayer.weapon).toBeDefined();
		// expect().toBeDefined();
		// expect().toBeDefined();
	});

});

