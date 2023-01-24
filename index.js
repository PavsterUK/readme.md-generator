const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const questions = require("./utils/questions.js").questions;

function promptUser(question) {
  const { type } = question;
  const { name } = question;
  const { message } = question;
  const prompt = {
    type,
    name: name,
    message,
  };

  if (type === "list" || type === "checkbox") {
    prompt.choices = question.choices;
  }

  return inquirer.prompt([prompt]);
}

function initQuestions() {
  let data = {};
  let promise = Promise.resolve();
  questions.forEach((question) => {
    promise = promise.then(() =>
      promptUser(question).then((result) => {
        for (const name in result) {
          data[name] = result[name];
        }
      })
    );
  });

  promise.then(() => {
    const markdown = generateMarkdown(data);
    writeToFile("readme", markdown);
  });
}

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(`./${fileName}.md`, data, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log(`The file ${fileName} was saved in ./${fileName}.md !`);
  });
}

// function to initialize program
function init() {
  initQuestions();
}

// function call to initialize program
init();
