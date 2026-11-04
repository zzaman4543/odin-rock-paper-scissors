function getComputerChoice() {
    let generatedNumber = Math.floor(Math.random() * 3) + 1;

    if (generatedNumber === 1) {
        return "Rock";
    } else if (generatedNumber === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice() {
    let userChoice = prompt("Please enter your choice");
    return userChoice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    let humanSelection;
    let computerSelection;

    function playRound(humanChoice, computerChoice) {
        let capitalHumanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.substring(1).toLowerCase();
        let capitalComputerChoice = computerChoice;

        if (capitalHumanChoice === capitalComputerChoice) {
            console.log(`You tied. You both chose ${capitalHumanChoice}.`);

        } else if (capitalHumanChoice === "Rock" && capitalComputerChoice === "Scissors" ||
                capitalHumanChoice === "Paper" && capitalComputerChoice === "Rock" ||
                capitalHumanChoice === "Scissors" && capitalComputerChoice === "Paper") {

            console.log(`You won. ${capitalHumanChoice} beats ${capitalComputerChoice}.`);
            humanScore++;

        } else {
            console.log(`You lost. ${capitalComputerChoice} beats ${capitalHumanChoice}.`);
            computerScore++;
        }
        
        console.log(`You: ${humanScore}`);
        console.log(`Computer: ${computerScore}`);
    }
}
   
const btnRock = document.getElementById("rock");
const btnPaper = document.getElementById("paper");
const btnScissors = document.getElementById("scissors");

btnRock.addEventListener("click", playRound("Rock"));
btnPaper.addEventListener("click", playRound("Paper"));
btnScissors.addEventListener("click", playRound("Scissors"));

