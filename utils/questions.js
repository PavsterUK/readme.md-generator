exports.questions = [
  { type: "input", name: "title", message: "What is a title of your project?" },
  {
    type: "input",
    name: "description",
    message: "Please give a brief description about your project.",
  },
  {
    type: "input",
    name: "installation",
    message: "Please describe how to install your project.",
  },
  {
    type: "input",
    name: "usage",
    message: "Please give explanations on how to use your project.",
  },
  {
    type: "input",
    name: "contributing",
    message: "Please tell how people can contribute to your project.",
  },
  { type: "input", name: "tests", message: "How to test your project?" },
  {
    type: "list",
    name: "license",
    message: "What licence would your project have?",
    choices: [
      "MIT License",
      "GNU General Public License (GPL)",
      "Apache License 2.0",
      "GNU Lesser General Public License (LGPL)",
      "BSD 2-Clause License",
      "Mozilla Public License 2.0",
      "The Unlicense",
    ],
  },
];
