//Initialise variable for human score with value of 0
let humanScore = 0;
//Initialise variable for computer score with value of 0
let computerScore = 0;

//Create a function called getComputerChoice
function getComputerChoice() {

    //Initialise a variable with a randomly generated number between 1 and 3
    let generatedNumber = Math.floor(Math.random() * 3) + 1;

    //If number is 1, return rock
    if (generatedNumber === 1) {
        return "rock";

    //If number is 2, return paper
    } else if (generatedNumber === 2) {
        return "paper";

    //If number is 3, return scissors
    } else {
        return "scissors";
    }
}

//Create a function called getHumanChoice
function getHumanChoice() {

    //Initialise variable with user choice
    let userChoice = prompt("Please enter your choice");

    //Return user choice
    return userChoice;
}

//Create a function named playRound with humanChoice and computerChoice parameters
function playRound(humanChoice, computerChoice) {

    //Initialise variable with capitalised humanChoice
    let capitalHumanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.substring(1).toLowerCase();
    //Initialise variable with capitalised computerChoice
    let capitalComputerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.substring(1).toLowerCase();

    //If choices are the same
    if (capitalHumanChoice === capitalComputerChoice) {
        //Output tie message with choices
        console.log(`You tied. You both chose ${capitalHumanChoice}.`);

    /*Otherwise if humanChoice is Rock AND computerChoice is Scissors OR 
    humanChoice is Paper AND computerChoice is Rock OR 
    humanChoice is Scissors AND computerChoice is Paper*/
    } else if (capitalHumanChoice === "Rock" && capitalComputerChoice === "Scissors" ||
               capitalHumanChoice === "Paper" && capitalComputerChoice === "Rock" ||
               capitalHumanChoice === "Scissors" && capitalComputerChoice === "Paper") {
        //Output winner message with choices
        console.log(`You won. ${capitalHumanChoice} beats ${capitalComputerChoice}.`);
        //Increment human score
        humanScore++;
    
    //Otherwise
    } else {
        //Output loser message with choices
        console.log(`You lost. ${capitalComputerChoice} beats ${capitalHumanChoice}.`);
        //Increment computer score
        computerScore++;
    }
}


