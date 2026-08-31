//Create a function called getComputerChoice
function getComputerChoice() {

//Initialise a variable with a randomly generated number between 1 and 3
generatedNumber = Math.floor(Math.random() * 3) + 1;

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

