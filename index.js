const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    "What is your GitHub username?",
    "What is your email?",
    "What is the title of your project?",
    "What is the description of your project?",
    "What are the installation instructions?",
    "What is the usage information?",
    "What are the contribution guidelines?",
    "What are the test instructions?",
    "What license would you like to use?"
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Read me Generated!')
    );
}

// function to initialize program
function init() {

}

// function call to initialize program
init();


// inquirer
//   .prompt([
//     {
//       type: 'input',
//       name: 'name',
//       message: 'What is your name?',
//     },
//     {
//       type: 'checkbox',
//       message: 'What languages do you know?',
//       name: 'stack',
//       choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
//     },
//     {
//       type: 'list',
//       message: 'What is your preferred method of communication?',
//       name: 'contact',
//       choices: ['email', 'phone', 'telekinesis'],
//     },
//   ])
//   .then((data) => {
//     const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

//     fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
//       err ? console.log(err) : console.log('Success!')
//     );
//   });