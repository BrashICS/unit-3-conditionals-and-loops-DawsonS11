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

// halloween adventure game code
function spooky_game() {
    
    let name = prompt("As you are trick or treating you stumble upon a especially spooky house. A ghost opens the door and asks for your name 👻👻👻")

    alert(`Welcome to my haunted house ${name}.`)

    let room_choice = prompt("He invites you inside, as you walk in he suddenly dissapears as the door locks behind you. Do you (1) Go upstairs or (2) Go to the basement.")

    if (room_choice == 1) {

        upstairs()
        }

        else if (upstairs_choice == 2) {
            bathroom()
        }

        else {
            snoozefest()
        }

    

    if (room_choice == 2) {
        downstairs()
    }

    else {
        snoozefest()
    }
}

function upstairs() {

    let upstairs_choice = prompt("you walk upstairs and notice 2 rooms with the door shut but they have labels. Do you go into (1) bedroom or (2) bathroom")      

        if (upstairs_choice == 1) {
            bedroom()
            }   

        else {
            snoozefest()
        }
}

function bathroom() {
    alert("The ghost walks into the bathroom and you had nowhere to hide. you died... Better luck next time!")
}

function bedroom() {
    let bedroom_hide = prompt("Not long after you enter you hear the ghost coming towards the bedroom, you should hide... but where? (1) under the bed (2) in the closet")

    if (bedroom_hide == 1) {
        under_bed()
    }

    else if (bedroom_hide == 2) {
        closet()
    }

    else {
        snoozefest()
    }
}

function under_bed() {
    alert("The ghost chcked the bed it is a little bit obvious... Better luck next time!")
}

function closet() {
    alert("while in the closet you realise an attic entrance, you peek through and see the ghost searching around the room")
    let closet_choice = prompt("The ghost is still in the room do you (1) go into the attic or (2) wait for the ghost to leave")

    if (closet_choice == 1) {
        alert("The ghost heard you and caught you. you died.")
    }

    if (closet_choice == 2) {
        let closet_choice2 = prompt("the ghost leaves the room do you (1) leave the closet or (2) climb into the attic")

        if (closet_choice2 == 1) {
            alert("the ghost was waiting for you outside and you he kills you")
        }
    }
}

function downstairs() {

    let upstairs_choice = prompt("you walk downstairs and the ghost hears you going down the stairs and starts coming to the basement do you (1) hide under the stairs or (2) hide in a room")
}

function snoozefest() {
    alert("you waited around for too long and the haunted house trapped you forever")

}


// else if 