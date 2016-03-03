'use strict'
let enemy;

function fight(character){
	enemy = new Gauntlet.Combatants.Orc();
  //give enemy random class from allowed classes
	enemy.generateClass();
  //give enemy random weapon from allowed weapons
	enemy.generateWeapon();	
	console.log("enemy", enemy);

  //set up the battleground for our character and the enemy that was just created
	makeBattleground(character, enemy);
};

function makeBattleground (character, enemy){

	var player1html = `<div><h1>${character.playerName}</h1>
        ${character.class.image}
        <div>Class: ${character.class.name}</div>
        <div>Weapon: ${character.weapon.name}</div>

        <div class="progress"> 
          <div class="progress-bar" id="characterHealthBar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: ${character.health}%;"> Health
              <span class="sr-only"></span>
          </div>
        </div>
     
        <div>Strength: ${character.strength}</div>
        <div>Intelligence: ${character.intelligence}</div>
        <div>Evade: ${character.evade}</div>
      </div>`;

  // console.log("player1html");
  
  //set html for player
  $("#playerOutput").html(player1html); 
	

	var enemyHTML = `<div><h1>Evil the Cat</h1>
        <img src= "https://i.ytimg.com/vi/vZ0SzJ0Bi2I/maxresdefault.jpg">
        <div>Class: ${enemy.class.name}</div>
        <div>Weapon: ${enemy.weapon.name}
        </div>

        <div class="progress"> 
          <div class="progress-bar" id="enemyHealthBar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: ${enemy.health}%;"> Health
              <span class="sr-only"></span>
          </div>
        </div>
     
        <div>Strength: ${enemy.strength}</div>
        <div>Intelligence: ${enemy.intelligence}</div>
        <div>Evade: ${enemy.evade}</div>
      </div>`;


  // console.log("enemyHTML");

  //set html for enemy
  $("#enemyOutput").html(enemyHTML); 
}

function attack(character) {
	// enemy.health -= character.weapon.damage;
	
	if (character.evade >= (Math.floor(Math.random() * 100 + 80))){
	 alert("ENEMY MISSED")
	} else {
    character.health -=  enemy.weapon.damage + (enemy.strength/10);
  }	

	if (enemy.evade >=(Math.floor(Math.random() * 100 + 100))){	
	 alert("YOU MISSED")
	} else {	
    //handle whether character is magic to use intelligence or use strength otherwise
  	if (character.class === "Wizard" || character.class === "Sorcerer" || character.class === "Conjurer") {
  		enemy.health -=character.weapon.damage +(character.intelligence/10)
  	} else {
        enemy.health -= character.weapon.damage + (character.strength/10)
    }
	};

  updateHealthBars(character.health, enemy.health);


	if (character.health <= 0){
    alert("You were murdered");
    gameOver("The Enemy");
    return;
  }
  
  if (enemy.health <= 0) {
    alert("You straight up murdered a guy");
    gameOver(character.playerName);
    $("section:last").addClass("victoryScreen")
    return;
  }
	
	console.log("character.health", character.health);
	console.log("enemy.health", enemy.health);

  $('#fightText').html(`${character.toString()}`); 
}

function gameOver(winnerName) {
  //disable attack button
  $("#attackButton").attr('disabled', 'disabled');
  
  //update fight text
  $('#fightText').html(`<h2>Game Over<h2><h4>${winnerName} Won!</h4>`);

  $('#playAgainButton').removeClass('hidden');

}


function updateHealthBars (characterHealth, enemyHealth) {
  let $enemyHealthEl = $('#enemyHealthBar');
  let $characterHealthEl = $('#characterHealthBar');

  $characterHealthEl.css("width", `${characterHealth}%`);
  $enemyHealthEl.css("width", `${enemyHealth}%`);
}
