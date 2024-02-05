"use strict";

window.addEventListener("DOMContentLoaded", start)
let currentGuess;
let min = 1;
let max = 100;

function start(){
    console.log("js running")
    console.log(min);
    console.log(max);
    currentGuess =  generateGuess(min, max);
    console.log(currentGuess);
    const list = document.getElementById("guess-text")
    const html = `<li> My first guess is ${currentGuess}!`
    list.insertAdjacentHTML("beforeend", html);


    document.getElementById("button-group").addEventListener("click", evaluateGuess)

}

function generateGuess(minimum, maximum){
    return Math.floor((min + max) / 2)  // har kun ændret denne linje for at implementere binary search

}


function evaluateGuess(event){
    const buttonId = event.target.id
    if(buttonId === 'btn-high'){
        tooHigh();

    } else if (buttonId === 'btn-low') {
        tooLow();

    } else if (buttonId === 'btn-correct'){
        correct();

    }


}

function tooHigh(){
    const list = document.getElementById("guess-text")
    max = currentGuess - 1;
    console.log("guess was too high");
    console.log("this is new maximum " + max);
    console.log("Guess before button " + currentGuess)
    let oldGuess = currentGuess;
    currentGuess = generateGuess(min, max);
    console.log("this is the new guess " + currentGuess);
    const html = `<li> if ${oldGuess} is too high, then i guess ${currentGuess}!`
    list.insertAdjacentHTML("beforeend", html);

}
function tooLow(){
    const list = document.getElementById("guess-text")
    min = currentGuess + 1;
    console.log("guess was too low");
    console.log("this is new minimum " + min);
    console.log("Guess before button " + currentGuess)
    let oldGuess = currentGuess;
    currentGuess = generateGuess(min, max);
    console.log("this is the new guess " + currentGuess);
    const html = `<li> if ${oldGuess} is too low, then i guess ${currentGuess}!`
    list.insertAdjacentHTML("beforeend", html);


}
function correct(){
    console.log("guess was correct");
    document.getElementById("button-group").classList.add("hidden");
    const list = document.getElementById("guess-text")
    const html = `<li> ${currentGuess} is correct, you WIN!!!`
    list.insertAdjacentHTML("beforeend", html);


}