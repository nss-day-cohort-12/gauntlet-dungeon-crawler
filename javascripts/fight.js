'use strict'
let enemy;

function fight(character){
	enemy = new Gauntlet.Combatants.Orc();
  //give enemy random class from allowed classes
	enemy.generateClass();
  //give enemy random weapon from allowed weapons
	enemy.generateWeapon();	
	console.log("enemy", enemy);

	makeBattleground(character, enemy);
};

function makeBattleground (character, enemy){
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
	
	character.health -=  enemy.weapon.damage + (enemy.strength/10);

  //handle whether character is magic to use intelligence or use strength otherwise
	if (character.class === "Wizard" || character.class === "Sorcerer" || character.class === "Conjurer") {
		enemy.health -=character.weapon.damage +(character.intelligence/10)
	}
		else {enemy.health -= character.weapon.damage + (character.strength/10)};


  updateHealthBars(character.health, enemy.health);
  $('#fightText').html(`${character.toString()}`);

  if (character.health <= 0){
    alert("You were murdered");
    $("#attackButton").attr('disabled', 'disabled');
    return;
  }
  if (enemy.health <= 0) {
    alert("You straight up murdered a guy");
    $("#attackButton").attr('disabled', 'disabled');
    return;
  }
}


function updateHealthBars (characterHealth, enemyHealth) {
  let $enemyHealthEl = $('#enemyHealthBar');
  let $characterHealthEl = $('#characterHealthBar');

  $characterHealthEl.css("width", `${characterHealth}%`);
  $enemyHealthEl.css("width", `${enemyHealth}%`);
}






