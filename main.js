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
document.getElementById("menu_button").addEventListener("click", menu)
document.getElementById("guess").addEventListener("click", guess_10);

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


// else if 
    // Setup the menu
    let message = `Hi! Please make a selection:
    1 - Play
    2 - Options
    3 - DLC
    4 - Check for Updates
    5 - Exit
    `
    let difficulty = `What difficulty would you like to play?
    1 - easy
    2 - medium
    3 - hard
    `
function menu() {
    // Prompt with the menu
let selection = Number(prompt(message));

    if (selection == 1) {
        alert("Let's play!")
        let difficulty_choice = +prompt (difficulty)

        if (difficulty_choice == 1) {
            alert("You selected the easy route.")
        }

        else if (difficulty_choice == 2) {
            alert("Most people select medium.")
        }

        else if (difficulty_choice == 3) {
            alert("I see you like a challenge!")
        }
    }

    else if (selection == 2) {
        alert("You selected Options.")
    }

    else if (selection == 3) {
        alert("No new DLC at this time.")
    }

    else if (selection == 4) {
        alert("Everything is up to date.")
    }

    else if (selection == 5) {
        alert("Bye!")
    }
}

// Else if Part 2

function greeting(hour) {
    if ((hour >= 0) && (hour <= 11)) {
        return "Good morning!"
    }

    else if ((hour >= 12) && (hour <= 17)) {
        return "Good afternoon!"
    }

    else if ((hour >=18) && (hour <= 23)) {
        return "Good evening!"
    }
}

// Unit 3.2 optional

function two_digit() {
    let random_2d = (randInt(10, 99))


}

// Unit 3.3 (else) Part 1

function is_number(num) {

    if (typeof num == "number") {
        return "true"
    }

    else {
        return "false"
    }
}

// Unit 3.3 Part 2

function which_day(n) {
    if (is_number(n) == "true") {

        if (n == 1) {
            return "Sunday"
        }
        else if (n == 2) {
            return "Monday"
        }
        else if (n == 3) {
            return "Tuesday"
        }
        else if (n == 4) {
            return "Wednesday"
        }
        else if (n == 5) {
            return "Thursday"
        }
        else if (n == 6) {
            return "Friday"
        }
        else if (n == 7) {
            return "Saturday"
        }

        else {
            return "Invalid type"
        }
    }

    else {
        return "Invalid type"
    }

}

// Unit 3.3 Part 3

function guess_10() {
    let secret_number = randInt(1,10)

    let user_guess = +prompt("select a number from 1 to 10")

    if (secret_number == user_guess) {
        alert("you guessed the hidden number correct")
    }
    else if ((user_guess > 10) || (user_guess < 1)) {
        alert(`your guess was not a number from 1-10, The secret number was ${secret_number}`)
    }

    else if (secret_number > user_guess) {
        alert(`your guess was lower than the secret number. The secret number was ${secret_number}`)
    }

    else if (secret_number < user_guess) {
        alert(`your guess was higher than the secret number. The secret number was ${secret_number}`)
    }
    else {
        alert(`ERROR`)
    }
}


// Unit 3.4 Part 1

function countdown(start,stop) {
    if (stop > start) {
        return -1
    }

    else {
        let count = true
        let amount = 0

        while (count) {            
            console.log(start)
            start--
            amount++

            if (start == stop) {
                count = false
                return amount
            }
        }
    }
}

// Unit 3.4 Part 2

function random_until(min, max, stop) {

    if ((stop > max) || (stop < min) || (min >= max)) {
        return -1
    }
    else {
        let ran_num = randInt(min, max)

        while (ran_num != stop) {
            console.log(ran_num)
            ran_num = randInt(min, max)
            amountofrolls++
        }
        return stop
    }
}

// Unit 3.4 Part 3

function average(n) {
    let avg = 0
    let count = 1

    while (count <= n) {
        avg += +prompt(`please enter value ${count}/${n}`)
        count++
    }

    avg = round(avg / n, 1)
    console.log(`The average is ${avg}`)
}

// Unit 3.5 Part 1

function print_reverse(str) {
    let current_letter = str.length - 1
    let reverse_word = ""
    while (current_letter >= 0) {
        reverse_word += (str[current_letter])
        current_letter--
    }

console.log(reverse_word)
}

// Unit 3.5 Part 2

function dragons_and_goblins(str) {
    let current_letter = 0
    let dragons = 0
    let goblins = 0

    while (current_letter < str.length) {
        let letter = (str[current_letter])

        if (letter == "d") {
            dragons++
        }

        else if (letter == "g") {
            goblins++
        }

        current_letter++
    }

    console.log(`Dragons: ${dragons} Goblins: ${goblins}`)
}

// Unit 3.5 Part 3

function add(str) {
    let current = 0
    let sum = 0

    while (current < str.length) {
        let number = +(str[current])

        sum += number

        current++
    }

    return sum
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