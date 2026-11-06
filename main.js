playGame();

function getComputerChoice() {
    const generatedNumber = Math.floor(Math.random() * 3);

    switch (generatedNumber) {
        case 0:
            return "Rock";
            break; 
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
    }
}

function playGame() {
    const btnRock = document.getElementById("rock");
    const btnPaper = document.getElementById("paper");
    const btnScissors = document.getElementById("scissors");

    btnRock.addEventListener("click", playRound);
    btnPaper.addEventListener("click", playRound);
    btnScissors.addEventListener("click", playRound);

    let humanScore = 0;
    let computerScore = 0;

    const result = document.getElementById("result");
    const humanScoreDisplay = document.getElementById("humanScore");
    const computerScoreDisplay = document.getElementById("computerScore");
    const winner = document.getElementById("winner");

    function playRound(event) {
        let humanChoice;

        if (event.target.id === "rock") {
            humanChoice = "Rock";
        } else if (event.target.id === "paper") {
            humanChoice = "Paper";
        } else {
            humanChoice = "Scissors";
        }

        const computerChoice = getComputerChoice();

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

        if (humanScore === 5 || computerScore === 5) {
            if (humanScore > computerScore) {
                winner.textContent = "You reached 5 points. You beat the computer.";
            } else {
                winner.textContent = "The computer reached 5 points. You lost to the computer.";
            }
        }
    }
}

