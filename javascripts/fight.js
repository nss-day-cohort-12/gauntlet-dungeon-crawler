'use strict'
let enemy;

function fight(character){
	enemy = new Gauntlet.Combatants.Orc();
	enemy.class = enemy.generateClass();
	let enemyWeapon = new Gauntlet.Armory.Dagger();
	enemy.setWeapon(enemyWeapon);	
	console.log("enemy", enemy);
	makeBattleground(character, enemy);
};

function makeBattleground (character, enemy){
	let BattlegroundEl = $("#battleground");
	var player1html = `<h1>${character.playerName}</h1>` +
          `<div class="progress"> ` +
            `<div class="progress-bar" id="characterHealthBar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: ${character.health}%;"> Health
                <span class="sr-only"></span>
            </div>
          </div>` +
       
            `<div>Strength: ${character.strength}   
            </div>

            <div>Intelligence: ${character.intelligence} 
            </div>

            <div>Evade: ${character.evade}    
            </div>
          </div>`;
          console.log("player1html");
     $("#playerOutput").html(player1html); 
	



	var enemyHTML = `<h1>Evil the Cat</h1>` +
          `<div class="progress"> ` +
            `<div class="progress-bar" id="enemyHealthBar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: ${enemy.health}%;"> Health
                <span class="sr-only"></span>
            </div>
          </div>` +
       
            `<div>Strength: ${enemy.strength}   
            </div>

            <div>Intelligence: ${enemy.intelligence} 
            </div>

            <div>Evade: ${enemy.evade}    
            </div>
          </div>`;
          console.log("enemyHTML");
     $("#enemyOutput").html(enemyHTML); 
}

function attack(character) {
	// enemy.health -= character.weapon.damage + (character.strength/10);
	
	if (character.evade >= (Math.floor(Math.random() * 100 + 100)))
		{
			alert("ENEMY MISSED")
		}
	else {character.health -=  enemy.weapon.damage + (enemy.strength/10);}	

	if (enemy.evade >=(Math.floor(Math.random() * 100 + 100))) 
		{	
			alert("YOU MISSED")
		}
	else {	

  //handle whether character is magic to use intelligence or use strength otherwise

	if (character.class === "Wizard" || character.class === "Sorcerer" || character.class === "Conjurer") {
		enemy.health -=character.weapon.damage +(character.intelligence/10)
	}
		else {enemy.health -= character.weapon.damage + (character.strength/10)};
	};
		console.log("intelligence", character.intelligence);
	  updateHealthBars(character.health, enemy.health);
	  
	 if (character.health <= 0){
    alert("You were murdered");
    $("#attackButton").attr('disabled', 'disabled');
    $('#fightText').html("Game Over");
    return;
  }
  if (enemy.health <= 0) {
    alert("You straight up murdered a guy");
    $("#attackButton").attr('disabled', 'disabled');
    $('#fightText').html("Game Over");
    return;
  }
	
	console.log("character.health", character.health);
	console.log("enemy.health", enemy.health);




  $('#fightText').html(`${character.toString()}`);

 
}


function updateHealthBars (characterHealth, enemyHealth) {
  let $enemyHealthEl = $('#enemyHealthBar');
  let $characterHealthEl = $('#characterHealthBar');

  $characterHealthEl.css("width", `${characterHealth}%`);
  $enemyHealthEl.css("width", `${enemyHealth}%`);
}






