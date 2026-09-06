//Create a function called getComputerChoice
function getComputerChoice() {

    //Initialise a variable with a randomly generated number between 1 and 3
    let generatedNumber = Math.floor(Math.random() * 3) + 1;

    //If number is 1, return rock
    if (generatedNumber === 1) {
        return "Rock";

    //If number is 2, return paper
    } else if (generatedNumber === 2) {
        return "Paper";

    //If number is 3, return scissors
    } else {
        return "Scissors";
    }
}

//Create a function called getHumanChoice
function getHumanChoice() {

    //Initialise variable with user choice
    let userChoice = prompt("Please enter your choice");

    //Return user choice
    return userChoice;
}


//Create a function named playGame with playRound function and score variables (outside playRound) inside
function playGame() {
    //Initialise variable for human score with value of 0
    let humanScore = 0;
    //Initialise variable for computer score with value of 0
    let computerScore = 0;

    //Create a variable for human selection
    let humanSelection;
    //Create a variable for computer selection
    let computerSelection;


    //Create a function named playRound with humanChoice and computerChoice parameters
    function playRound(humanChoice, computerChoice) {

        //Initialise variable with capitalised humanChoice
        let capitalHumanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.substring(1).toLowerCase();
        //Initialise variable with already capitalised computerChoice
        let capitalComputerChoice = computerChoice;

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

    //For five times
    for (let i = 0; i < 5; i++) {
        //Assign humanSelection a value by calling getHumanChoice
        humanSelection = getHumanChoice();

        //Assign computerSelection a value by calling getComputerChoice
        computerSelection = getComputerChoice();
        
        //Call playRound function with humanSelection and computerSection as arguments
        playRound(humanSelection, computerSelection)
    }
    
    //If humanScore is the same as computerScore
    if (humanScore === computerScore) {
        //Output tie message with final scores
        console.log(`You tied. You and Computer both scored ${humanScore} points.`);

    //Otherwise if humanScore is greater than computerScore
    } else if (humanScore > computerScore) { 
        //Output human winner message with final scores
        console.log(`You win. You scored ${humanScore} points. Computer scored ${computerScore} points.`);
    
    //Otherwise
    } else {
        //Output computer winner message with final scores
        console.log(`Computer wins. Computer scored ${computerScore} points. You scored ${humanScore} points.`);
    }
}
   

