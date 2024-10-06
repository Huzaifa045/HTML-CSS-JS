// Dice Roll Simulator by Huzaifa Asim

// Declare Variables
let diceNum = document.getElementById("placeholder");
let rollBtn = document.getElementById("button");
let Result = document.getElementById("resultStatement");
let oneCounter = document.getElementById("1");
let twoCounter = document.getElementById("2");
let threeCounter = document.getElementById("3");
let fourCounter = document.getElementById("4");
let fiveCounter = document.getElementById("5");
let sixCounter = document.getElementById("6");

// Initialize Roll Counters i.e global variables
let oneCounterr = 0;
let twoCounterr = 0;
let threeCounterr = 0;
let fourCounterr = 0;
let fiveCounterr = 0;
let sixCounterr = 0;

// Add Event Listener to Button
rollBtn.addEventListener("click", rollDice);

// Event Function
function rollDice() {
    let randomNumber = Math.random() * 6;
    console.log(randomNumber);
    if (randomNumber <= 1) {
        diceNum.src = "Dice Faces/1.png";
        oneCounterr++;
        oneCounter.innerHTML = oneCounterr;
        Result.innerHTML = "You Rolled a 1!";
    } else if (randomNumber <= 2) {
        diceNum.src = "Dice Faces/2.png";
        twoCounterr++;
        twoCounter.innerHTML = twoCounterr;
        Result.innerHTML = "You Rolled a 2!"
    } else if (randomNumber <= 3) {
        diceNum.src = "Dice Faces/3.png";
        threeCounterr++;
        threeCounter.innerHTML = threeCounterr;
        Result.innerHTML = "You Rolled a 3!"
    } else if (randomNumber <= 4) {
        diceNum.src = "Dice Faces/4.png";
        fourCounterr++;
        fourCounter.innerHTML = fourCounterr;
        Result.innerHTML = "You Rolled a 4!"
    } else if (randomNumber <= 5) {
        diceNum.src = "Dice Faces/5.png";
        fiveCounterr++;
        fiveCounter.innerHTML = fiveCounterr;
        Result.innerHTML = "You Rolled a 5!"
    } else {
        diceNum.src = "Dice Faces/6.png"
        sixCounterr++;
        sixCounter.innerHTML = sixCounterr;
        Result.innerHTML = "You Rolled a 6!"
    }
}