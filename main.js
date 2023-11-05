"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
console.log("Lets get a number b/w 1 to 10 in 03 tries");
var actualAnswer = Math.floor(Math.random() * 10);
var guessNumber = 7;
var numTries = 3;
var answer = await inquirer_1.default.prompt({
    type: "number",
    name: "userGuess",
    message: "Enter your Guess Number"
});
if (answer.userGuess == actualAnswer) {
    console.log("You guessed the right answer");
    console.log("You have ".concat(numTries - 1, " left"));
}
else {
    console.log("You are Wrong");
    numTries--;
}
