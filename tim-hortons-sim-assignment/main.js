// Tim Hortons Sim
"use strict";

// Global Variables
let numPlayAgain = 0;
let numFreeCoffee = 0;
let numFreeDonut = 0;
let numGrandPrize = 0;


let resultsEl = document.getElementById("results");

// Event Listeners
document.getElementById("mainImg").addEventListener("click", runSim);
document.getElementById("plus5").addEventListener("click", plus5);
document.getElementById("untilGrandPrize").addEventListener("click", untilGrandPrize);
document.getElementById("until500Donuts").addEventListener("click", until500Donuts);

// Event Function
function runSim() {

    let input = document.getElementById("input").value;
    input = input.toLowerCase(); 

  // Generate a random number
    let randNum = Math.random(); // Random decimal from 0 up to 1

  // Simulate results
    if (input == "british columbia") {
    // Selected Province = B.C

        if (randNum < 0.7) {
            numPlayAgain++;
            document.getElementById("playAgain").innerHTML = numPlayAgain;
            resultsEl.innerHTML += '<img src="images/TryAgain.png">';
        } else if (randNum < 0.8) {
            numFreeCoffee++;
            document.getElementById("freeCoffee").innerHTML = numFreeCoffee;
            resultsEl.innerHTML += '<img src="images/FreeCoffee.png">';
        } else if (randNum < 0.9) {
            numFreeDonut++;
            document.getElementById("freeDonut").innerHTML = numFreeDonut;
            resultsEl.innerHTML += '<img src="images/donut.png">';
        } else {
            numGrandPrize++;
            document.getElementById("grandPrize").innerHTML = numGrandPrize;
            resultsEl.innerHTML += '<img src="images/GrandPrize.jpg">';
        }    
    } else if (input == "alberta") {
    // Selected Province = ALBERTA

        if (randNum < 0.4) {
            numFreeCoffee++;
            document.getElementById("freeCoffee").innerHTML = numFreeCoffee;
            resultsEl.innerHTML += '<img src="images/FreeCoffee.png">';
        } else if (randNum < 0.8) {
            numFreeDonut++;
            document.getElementById("freeDonut").innerHTML = numFreeDonut;
            resultsEl.innerHTML += '<img src="images/donut.png">';
        } else if (randNum < 0.95) {
            numPlayAgain++;
            document.getElementById("playAgain").innerHTML = numPlayAgain;
            resultsEl.innerHTML += '<img src="images/TryAgain.png">';
        } else {
            numGrandPrize++;
            document.getElementById("grandPrize").innerHTML = numGrandPrize;
            resultsEl.innerHTML += '<img src="images/GrandPrize.jpg">';
        }
    } else {
    // Selected Province = SASKATCHEWAN

        if (randNum < 0.7) {
            numPlayAgain++;
            document.getElementById("playAgain").innerHTML = numPlayAgain;
            resultsEl.innerHTML += '<img src="images/TryAgain.png">';
        } else if (randNum < 0.98) {
            numGrandPrize++;
            document.getElementById("grandPrize").innerHTML = numGrandPrize;
            resultsEl.innerHTML += '<img src="images/GrandPrize.jpg">';
        } else if (randNum < 0.99) {
            numFreeCoffee++;
            document.getElementById("freeCoffee").innerHTML = numFreeCoffee;
            resultsEl.innerHTML += '<img src="images/FreeCoffee.png">';
        } else {
            numFreeDonut++;
            document.getElementById("freeDonut").innerHTML = numFreeDonut;
            resultsEl.innerHTML += '<img src="images/donut.png">';
        }
    }
}
function plus5() {
  for (let n = 0; n < 5; n++) {
    runSim();
  }
}

function untilGrandPrize() {
    let count = 0;
    while (numGrandPrize < 1) {
        runSim();
        count++;
  }
    console.log('Count: ' + count);
}

function until500Donuts() {
    let count = 0;
    while (numFreeDonut < 500) {
        runSim();
        count++;
    }
    console.log('Count: ' + count);
}