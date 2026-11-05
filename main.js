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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let roundsPlayed = 0;

    let humanSelection;
    let computerSelection;

    const result = document.getElementById("result");
    const humanScoreDisplay = document.getElementById("humanScore");
    const computerScoreDisplay = document.getElementById("playerScore");
    const final = document.getElementById("final");


    function playRound(humanChoice) {
        let computerChoice = getComputerChoice();

        if (humanChoice === computerChoice) {
            result.textContent = `You tied. You both chose ${humanChoice}.`;

        } else if (humanChoice === "Rock" && computerChoice === "Scissors" ||
                humanChoice === "Paper" && computerChoice === "Rock" ||
                humanChoice === "Scissors" && computerChoice === "Paper") {

            result.textContent = `You won. ${humanChoice} beats ${computerChoice}.`;
            humanScore++;

        } else {
            result.textContent = `You lost. ${humanChoice} is beaten by ${computerChoice}.`;
            computerScore++;
        }
        
        humanScoreDisplay.textContent = `You: ${humanScore}`;
        computerScoreDisplay.textContent = `Computer: ${computerScore}`;

        roundsPlayed++;
    }

    if (roundsPlayed === 5) {
        if (humanScore === computerScore) {
            final.textContent = "After five rounds, you tied with the computer.";
        } else if(humanScore > computerScore) {
            final.textContent = "After five rounds, you beat the computer.";
        } else {
            final.textContent = "After five rounds, you lost to the computer.";
        }
    }
}
   
const btnRock = document.getElementById("rock");
const btnPaper = document.getElementById("paper");
const btnScissors = document.getElementById("scissors");

btnRock.addEventListener("click", playRound("Rock"));
btnPaper.addEventListener("click", playRound("Paper"));
btnScissors.addEventListener("click", playRound("Scissors"));

