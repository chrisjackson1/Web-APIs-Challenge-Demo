var timerElement = document.querySelector(".timer-count");

var highScores = [];

var time = 10;
var score = 0;

var quizContainer = document.getElementById('quiz');
var results = document.getElementById('results');
var startButton = document.querySelector(".startBtn");


//reset button

var resetButton = document.querySelector(".reset-button");



var questionsArray = [
  {
    question:
      "String values must be enclosed within__ when being assigned to variables",
    answer: [
      "A) <Commas> ",
      "B) <Curly Brackets> ",
      "C) <quotes> ",
      "D) <parenthesis> ",
    ],
    correctAnswer: 1,
  },

  {
    question: "Arrays in JavaScript can be used to store___",
    answer: [
      "A) <Numbers and Strings> ",
      "B) <other Arrays>",
      "C) <booleans>",
      "D) <All the Above> ",
    ],
    correctAnswer: 3,
  },

  {
    question: "Commonly used data types DO Not Include",
    answer: [
      "A) <Strings> ",
      "B) <Booleans>",
      "C) <Alerts>",
      "D) <Numbers> ",
    ],
    correctAnswer: 1,
  },

  {
    question: "A Very useful tool used during development and debugging for printing content to the debugger is: ",
    answer: [
      "A) <JavaScript> ",
      "B) <terminal/bash>",
      "C) <for loops>",
      "D) <console.log> ",
    ],
    correctAnswer: 2,
  },
];

function startGame() {
console.log('working')
}

startButton.addEventListener('click', startGame)



