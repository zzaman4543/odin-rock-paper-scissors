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
    const btnRock = document.getElementById("rock");
    const btnPaper = document.getElementById("paper");
    const btnScissors = document.getElementById("scissors");

    btnRock.addEventListener("click", playRound("Rock"));
    btnPaper.addEventListener("click", playRound("Paper"));
    btnScissors.addEventListener("click", playRound("Scissors"));

    let humanScore = 0;
    let computerScore = 0;

    let humanSelection;
    let computerSelection;

    const result = document.getElementById("result");
    const humanScoreDisplay = document.getElementById("humanScore");
    const computerScoreDisplay = document.getElementById("playerScore");
    const winner = document.getElementById("winner");


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
    }

    if (humanScore === 5 || computerScore === 5) {
        if (humanScore > computerScore) {
            winner.textContent = "You reached 5 points. You beat the computer.";
        } else {
            winner.textContent = "The computer reached 5 points. You lost to the computer.";
        }
    }
}
   


