
//Welcome message

// Declaring the choices
var choice = ["R", "P", "S"];

//User(self) and opponent(computer)

//Initialise the starting score as 0
var userScore = 0;
var compScore = 0;

var playGame = confirm("Would you like to play Rock, Paper, Scissors game?");

while (playGame) {

    //Total 10 rounds
    for (let i = 0; i < 10; i++) {
        alert("This is round " + (i + 1));

        //Prompt box to signify the choice in R, P or S.
        var userSelect = prompt("Please chose R, P or S!");
        userSelect = userSelect.toUpperCase();

        // Computer randomly chooses R, P or S and hides the choice, using the Math.random function and Math.floor to select the lower round up
        var compSelect = choice[Math.floor(Math.random() * 3)];

        if (userSelect === "R" || "P" || "S" || "r" || "p" || "s") {

            alert("You selected - " + userSelect + "\nComputer selected - " + compSelect);
        }

        if (userSelect === compSelect) {
            alert("It is a tie");
            let playAgain = confirm("Would you like to play again?");

            if (!playAgain) {
                break;
            }

            else {

                i = -1;
            }
        }

        else if ((userSelect === 'P' && compSelect === 'R') ||
            (userSelect === 'R' && compSelect === 'S') ||
            (userSelect === 'S' && compSelect === 'P')) {
            alert("You win");
            userScore++;
        }

        else {
            alert('You lose');
            compScore++;
        }
    }

    console.log("Your score is " + userScore);
    console.log("Computer score is " + compScore);

    if (userScore > compScore) {
        alert("You are the champion");
    }
    else if (userScore < compScore) {
        alert("Computer is the champion");
    }
    else {
        alert("You both lose");
    }

    playGame = confirm("Would you like to play again?")
}

// else {
//     alert("bye")
// }

alert("Thank you! See you next time.")



//Prompt to play again whether win or lose.






