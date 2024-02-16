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
        err ? console.log(err) : console.log('READ.ME Generated!')
    );
}

// function to initialize program
function init() {
    inquirer
        .prompt([
            {
                type: "input",
                message: questions[0],
                name: "username"
            },
            {
                type: "input",
                message: questions[1],
                name: "email"
            },
            {
                type: "input",
                message: questions[2],
                name: "title"
            },
            {
                type: "input",
                message: questions[3],
                name: "description"
            },
            {
                type: "input",
                message: questions[4],
                name: "installation"
            },
            {
                type: "input",
                message: questions[5],
                name: "usage"
            },
            {
                type: "input",
                message: questions[6],
                name: "contribution"
            },
            {
                type: "input",
                message: questions[7],
                name: "test"
            },
            {
                type: "list",
                message: questions[8],
                name: "license",
                choices: ["MIT", "GNU GPLv3", "Apache 2.0", "ISC"]
            }
        ])
        .then((data) => {
            const filename = `README.md`;
            writeToFile(filename, generateMarkdown(data))
        });
}

// function call to initialize program
init();
