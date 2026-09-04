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
    //Initialise variable to store humanChoice with first letter capitalised
    //Initialise variable to store computerChoice with first letter capitalised

    //If choices are the same
        //Output tie message with choices

    /*Otherwise if humanChoice is rock AND computerChoice is scissors OR 
    humanChoice is paper AND computerChoice is rock OR 
    humanChoice is scissors AND computerChoice is paper*/
        //Output winner message with choices
        //Increment human score

    //Otherwise
        //Output loser message with choices
        //Increment computer score
