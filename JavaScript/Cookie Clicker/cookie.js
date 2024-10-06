// Cookie Clicker Game

// Declare Variables
let cookieBtn = document.getElementById("cookie");
let numCookies = document.getElementById("result");

// Global Variable
let cookieCounter = 0;

// Add Event Listener to Cookie Button
cookieBtn.addEventListener("click" , generate);

// Event Funtion
function generate() {
    cookieCounter++;
    numCookies.innerHTML = cookieCounter;


    if (cookieCounter >= 25) {
        cookieCounter += 10;
        numCookies.innerHTML = cookieCounter;
    }
    if (cookieCounter >= 300) {
        cookieCounter += 100;
        numCookies.innerHTML = cookieCounter;
    }
    if (cookieCounter >= 10000) {
        cookieCounter += 1000;
        numCookies.innerHTML = cookieCounter;
    }
    if (cookieCounter >= 100000) {
        cookieCounter += 10000;
        numCookies.innerHTML = cookieCounter;
    }
    if (cookieCounter >= 1000000) {
        cookieCounter += 100000;
        numCookies.innerHTML = cookieCounter;
    }
    if (cookieCounter >= 10000000) {
        cookieCounter += 1000000;
        numCookies.innerHTML = cookieCounter;
    }
}
