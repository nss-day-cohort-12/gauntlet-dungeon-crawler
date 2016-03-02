'use strict'
/*
  Test code to generate a human player and an orc player
 */
// var warrior = new Gauntlet.Combatants.Human();
// warrior.setWeapon(new WarAxe());
// warrior.generateClass();  // This will be used for "Surprise me" option
// console.log(warrior.toString());

// var orc = new Gauntlet.Combatants.Orc();
// orc.generateClass();
// orc.setWeapon(new BroadSword());
// console.log(orc.toString());

// /*
//   Test code to generate a spell
//  */
// var spell = new Gauntlet.SpellBook.Sphere();
// console.log("spell: ", spell.toString());
let character;

$(document).ready(function() {
  /*
    Show the initial view that accepts player name
   */
  $("#player-setup").show();


  var selectedPlayerProfession;
  var selectedPlayerWeapon;
  let magic;

  let professionSelectorEl = $("#profession-selector");
  professionSelectorEl.on("click", ".card__button", function(event){
    event.preventDefault();
    magic = false;
    // console.log("event.currentTarget", event.currentTarget);
    selectedPlayerProfession = $(event.currentTarget).find('.btn__text').html();
    // console.log("selectedPlayerProfession", selectedPlayerProfession);
    if (selectedPlayerProfession === "Wizard" || selectedPlayerProfession === "Sorcerer" || selectedPlayerProfession === "Conjurer"){
      magic = true;
    }

    //if selected profession is magic type, show spells instead of normal weapons on weapon card
    if (magic){
      $('#weapons').hide();
      $('#spells').show();
    } else {
      $('#weapons').show();
      $('#spells').hide();
    }
    //add styling to selected profession
    addBtnChosen(professionSelectorEl, $(event.currentTarget));
  })

  let weaponSelectorEl = $("#weapon-selector");
  weaponSelectorEl.on("click", ".card__button", function(event){
    event.preventDefault();
    // console.log("weapon selected", event.currentTarget);
    selectedPlayerWeapon = $(event.currentTarget).find('.btn__text').html();
    console.log("selectedPlayerWeapon", selectedPlayerWeapon);

    //add styling to selected weapon
    addBtnChosen(weaponSelectorEl, $(event.currentTarget));
  })


  function addBtnChosen ($group, $btn) {
    //get previously chosen card in group if it exist and remove the chosen class
    let prevSelectedCard = $group.find('.btn--chosen');

    if (prevSelectedCard) {
      prevSelectedCard.removeClass('btn--chosen')
    }

    //add chosen class to anchor tag of btn passed into function
    $btn.children('a').addClass('btn--chosen')
  }

  /*
    When any button with card__link class is clicked,
    move on to the next view.
   */
  $(".card__link").click(function(e) {
    var nextCard = $(this).attr("next");
    var moveAlong = false;

    switch (nextCard) {
      case "card--class":
        //before moving to profession card, make sure player name is input
        moveAlong = ($("#player-name").val() !== "");
        break;
      case "card--weapon":
        //before moving to weapon card, make sure player name and profession are chosen
        moveAlong = ($("#player-name").val() !== "")&&(selectedPlayerProfession);
        break;
      case "card--battleground":
        //before moving to battleground card, make sure player name, profession, and weapon are chosen
        moveAlong = ($("#player-name").val() !== "")&&(selectedPlayerProfession)&&(selectedPlayerWeapon);
        if (moveAlong){
          createCharacter();
        }
    }

    if (moveAlong) {
      $(".card").hide();
      $("." + nextCard).show();
    }
  });

  /*
    When the back button clicked, move back a view
   */
  $(".card__back").click(function(e) {
    var previousCard = $(this).attr("previous");
    $(".card").hide();
    $("." + previousCard).show();
  });

  function createCharacter(){
    let playerName = $("#player-name").val();
    // console.log("playerName", playerName);
    // console.log("selectedPlayerWeapon", selectedPlayerWeapon);
    // console.log("selectedPlayerProfession", selectedPlayerProfession);
    let characterProfession = new Gauntlet.GuildHall[selectedPlayerProfession]();
    let characterWeapon;
    if (magic){
      characterWeapon = new Gauntlet.SpellBook[selectedPlayerWeapon]();
    } else {
      characterWeapon = new Gauntlet.Armory[selectedPlayerWeapon]();
    }
      // console.log("characterProfession", characterProfession);
     console.log("characterWeapon", characterWeapon);

    character = new Gauntlet.Combatants.Human();
    character.playerName= playerName;
    character.setWeapon(characterWeapon);
    character.class = characterProfession;
    console.log("character", character);

    fight(character);  
  }

$("#attackButton").click(function()
{
  attack(character);
}
  );



});
