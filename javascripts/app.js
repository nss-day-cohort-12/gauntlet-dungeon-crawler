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
    magic = false;
    // console.log("event.currentTarget", event.currentTarget);
    selectedPlayerProfession = $(event.currentTarget).find('.btn__text').html();
    // console.log("selectedPlayerProfession", selectedPlayerProfession);
    if (selectedPlayerProfession === "Wizard" || selectedPlayerProfession === "Sorcerer" || selectedPlayerProfession === "Conjurer"){
      magic = true;
    }

    if (magic){
            $('#weapons').hide();
            $('#spells').show();
          } else {
            $('#weapons').show();
            $('#spells').hide();
          }
  })

  let weaponSelectorEl = $("#weapon-selector");
  weaponSelectorEl.on("click", ".card__button", function(event){
    console.log("weapon selected", event.currentTarget);
    selectedPlayerWeapon = $(event.currentTarget).find('.btn__text').html();
    console.log("selectedPlayerWeapon", selectedPlayerWeapon);
  })




  /*
    When any button with card__link class is clicked,
    move on to the next view.
   */
  $(".card__link").click(function(e) {
    var nextCard = $(this).attr("next");
    var moveAlong = false;

    switch (nextCard) {
      case "card--class":
        moveAlong = ($("#player-name").val() !== "");
        break;
      case "card--weapon":
        moveAlong = ($("#player-name").val() !== "")&&(selectedPlayerProfession);
        break;
      case "card--battleground":
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

    let character = new Gauntlet.Combatants.Human();
    character.playerName= playerName;
    character.setWeapon(characterWeapon);
    character.class = characterProfession;
    console.log("character", character);  
  }




});




