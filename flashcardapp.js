// Inquirer module
var inquirer = require('inquirer');

// Basic card constructor file
var basicCard = require('./flashcards.js');

// Questions file
var questions = require('./questions.js').questions;

// Array that holds the questions
var askedQuestions = [];

// // attempt to randomize questions but don't working.
// var questions = function getRandomItem() {
//     var rand = Math.floor(Math.random() * question.length);
//     return new question[rand]();
// };


// Loops through and provides new variable for questions
for (var i = 0; i < questions.length; i++) {
    var q = new basicCard.ClozeCard(questions[i].full, questions[i].cloze);
    askedQuestions.push(q);
}

// Variables for several counts: current questions asked, correct answers, wrong answers
var currentQuestion = 0;
var correctAnswer = 0;
var wrongAnswer = 0;

// function for questions
function runQuestions() {
    inquirer.prompt([
        {
            type: 'input',
            message: askedQuestions[currentQuestion].partial + '\nAnswer: ',
            name: 'userGuess'
        }
    ]).then(function (answers) {
        console.log('\n');

        // If statement determines if answer was correct or not
        if (answers.userGuess.toLowerCase() === askedQuestions[currentQuestion].cloze.toLowerCase()) {
            console.log('WOO-HOO!');
            correctAnswer++;
        } else {
            console.log("D'OH");
            wrongAnswer++;
        }

        // Displays completed quiz results
        console.log(askedQuestions[currentQuestion].full);
        console.log('\n');

        // Proceeds to next question
        if (currentQuestion < askedQuestions.length - 1) {
            currentQuestion++;
            runQuestions();
        } 

        // If user has more than 5 questions correct, display this...
        else if (correctAnswer >= 5){

            console.log("You are so smart! You are so smart! S-M-R-T ... I mean, S-M-A-R-T!");
            console.log("Correct Answers: " + correctAnswer);
            console.log("Wrong Answers: " + wrongAnswer);

            console.log('\n');
        }

        // If user has less than 5 questions correct, display this...
        else {
            console.log("You tried your best and failed miserably. The lesson is never try!");
            console.log("Correct Answers: " + correctAnswer);
            console.log("Wrong Answers: " + wrongAnswer);

            console.log('\n');
        }
    });
}

// Starts App
runQuestions();