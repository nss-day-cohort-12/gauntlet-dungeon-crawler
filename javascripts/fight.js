'use strict'

function fight(character){
	let enemy = new Gauntlet.Combatants.Orc();
	enemy.class = enemy.generateClass();	
	console.log("enemy", enemy);
	makeBattleground(character);
};

function makeBattleground (character){
	let BattlegroundEl = $("#battleground");
	var player1html = `<h1>${character.playerName}</h1>` +
          `<div class="progress"> ` +
            `<div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: ${character.health}%;"> Health
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

}