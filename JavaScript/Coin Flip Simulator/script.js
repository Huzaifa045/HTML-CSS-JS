// Coin Flip Simulator by Huzaifa Asim

// Declare Variables

let coinImg = document.getElementById("coin");
let loonieSelector = document.getElementById("loonie");
let toonieSelector = document.getElementById("toonie");
let quarterSelector = document.getElementById("quarter");
let nickelSelector = document.getElementById("nickel");
let output = document.getElementById("result");
let headCounter = document.getElementById("heads");
let tailCounter = document.getElementById("tails");

// Add Event Listeners to Buttons
loonieSelector.addEventListener("click" , loadLoonie);
toonieSelector.addEventListener("click" , loadToonie);
quarterSelector.addEventListener("click" , loadQuarter);
nickelSelector.addEventListener("click" , loadNickel);

// Global Variables
var headscounter = 0;
var tailscounter = 0;

// Event Functions
 
function loadLoonie() {
    let randNum = Math.random();
    if (randNum <= 0.5) {
        coinImg.src = "Coins/loonieHeads.png";
        output.innerHTML = "Its Heads!";
        headscounter++;
        headCounter.innerHTML = headscounter;
    } else {
        coinImg.src = "Coins/loonieTails.png";
        output.innerHTML = "Its Tails!";
        tailscounter++
        tailCounter.innerHTML = tailscounter;
    }
}

function loadToonie() {
    let randNum2 = Math.random();
    if (randNum2 <= 0.5) {
        coinImg.src = "Coins/toonieHeads.png";
        output.innerHTML = "Its Heads!";
        headscounter++;
        headCounter.innerHTML = headscounter;
    } else {
        coinImg.src = "Coins/toonieTails.png";
        output.innerHTML = "Its Tails!";
        tailscounter++
        tailCounter.innerHTML = tailscounter;
    }
}

function loadQuarter() {
    let randNum3 = Math.random();
    if (randNum3 <= 0.5) {
        coinImg.src = "Coins/quarterHeads.png";
        output.innerHTML = "Its Heads!";
        headscounter++;
        headCounter.innerHTML = headscounter;
    } else {
        coinImg.src = "Coins/quarterTails.png";
        output.innerHTML = "Its Tails!";
        tailscounter++
        tailCounter.innerHTML = tailscounter;
    }
}

function loadNickel() {
    let randNum4 = Math.random();
    if (randNum4 <= 0.5) {
        coinImg.src = "Coins/nickelHeads.png";
        output.innerHTML = "Its Heads!";
        headscounter++;
        headCounter.innerHTML = headscounter;
    } else {
        coinImg.src = "Coins/nickelTails.png";
        output.innerHTML = "Its Tails!";
        tailscounter++
        tailCounter.innerHTML = tailscounter;
    }
}

