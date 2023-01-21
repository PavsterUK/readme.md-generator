const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const questions = require("./utils/questions.js").questions;
let currentQuestion = 0;
let data = [];

function prompt(resultName, question) {
  return inquirer.prompt([
    {
      name: resultName,
      message: question,
    },
  ]);
}

function initQuestions() {
  if (currentQuestion < questions.length) {
    let title = Object.keys(questions[currentQuestion])[0];
    let question = questions[currentQuestion][title];
    prompt(title, question).then((result) => {
      data.push(result);
      currentQuestion++;
      initQuestions()
    });
  }
}

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {
  initQuestions();
}

// function call to initialize program
init();
