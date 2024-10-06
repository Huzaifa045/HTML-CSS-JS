// Rock Paper Scissors App by Huzaifa Asim

// Decalre Variables

let playerScore = document.getElementById("playerScoreCounter");
let computerScore = document.getElementById("computerScoreCounter");
let rockBtn = document.getElementById("rock");
let paperBtn = document.getElementById("paper");
let scissorsBtn = document.getElementById("scissors");
let result = document.getElementById("winner");
// Initialize Scores to 0

playerScores = 0;
computerScores = 0;

// Add Event Listeners to Buttons

rockBtn.addEventListener("click", ifRock);
paperBtn.addEventListener("click", ifPaper);
scissorsBtn.addEventListener("click", ifScissors);

// Event Function for each button
function ifRock() {
    let randNumb = Math.random() * 3;
    if (randNumb <= 1) {
        playerScores++
        playerScore.innerHTML = playerScores;
        result.innerHTML = "You Won";

    } else if (randNumb <= 2) {
        computerScores++
        computerScore.innerHTML = computerScores
        result.innerHTML = "You Lose";
    } else {
        result.innerHTML = "Tie";
    }
}

function ifPaper() {
    let randNumb2 = Math.random() * 3;
    if (randNumb2 <= 1) {
        playerScores++;
        playerScore.innerHTML = playerScores;
        result.innerHTML = "You Won";
    } else if (randNumb2 <= 2) {
        computerScores++;
        computerScore.innerHTML = computerScores;
        result.innerHTML = "You Lose";
    } else {
        result.innerHTML = "Tie"
    }
}

function ifScissors() {
    let randNumb3 = Math.random() * 3;
    if (randNumb3 <= 1) {
        playerScores++;
        playerScore.innerHTML = playerScores;
        result.innerHTML = "You Won"
    } else if (randNumb3 <= 2) {
        computerScores++;
        computerScore.innerHTML = computerScores;
        result.innerHTML = "You Lose"
    } else {
        result.innerHTML = "Tie"
    }
}