/**
 * Unit 3 - Conditionals and Loops
 * ICS3 - Mr. Brash 🐿️
 * 
 * For this unit, Mr. Brash is trying something different. Each lesson will
 * be in this one repository, separated in the Lessons folder.
 * 
 * If you run into Git or Github issues, call Mr. Brash over.
 **/ 


'use strict';

/*** Event Listeners ***/
document.getElementById("game_start").addEventListener("click", spooky_game)


/*** Functions ***/

// A very accurate rounding function
function round(value, decimals) {
    let multiplier = 10**decimals;
    return Math.round((value + Number.EPSILON) * multiplier) / multiplier;
}

// Get a random number from min to max
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function spooky_game() {
    
    let name = prompt("As you are trick or treating you stumble upon a especially spooky house. A ghost opens the door and asks for your name 👻👻👻")

    alert(`Welcome to my haunted house ${name}.`)

    let room_choice = prompt("He invites you inside, as you walk in he suddenly dissapears as the door locks behind you. Do you (1) Go upstairs or (2) Go to the basement.")

    if (room_choice == 1) {

        upstairs()
        
        if (upstairs_choice == 1) {

        }

        else if (upstairs_choice == 2) {

            
        }

        else {
            snoozefest()
        }
    }

    else if (room_choice == 2) {
        downstairs()
        
    }

    else {
        snoozefest()
    }
}

function upstairs() {

    let upstairs_choice = prompt("you walk upstairs and notice 2 rooms with the door shut but they have labels. Do you go into (1) bedroom or (2) bathroom")
}

function downstairs() {

    let upstairs_choice = prompt("you walk downstairs and the ghost hears you going down the stairs and starts coming to the basement do you (1) hide under the stairs or (2) hide in a room")
}

function snoozefest() {
    alert("you waited around for too long and the haunted house trapped you forever")

}
