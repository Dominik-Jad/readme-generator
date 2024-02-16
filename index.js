const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "username"
        },
        {
            type: "input",
            message: "What is your email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is the title of your project?",
            name: "title"
        },
        {
            type: "input",
            message:  "What is the description of your project?",
            name: "description"
        },
        {
            type: "input",
            message: "What are the installation instructions?",
            name: "installation",
            default: "npm i",
        },
        {
            type: "input",
            message: "What is the usage information?",
            name: "usage"
        },
        {
            type: "input",
            message: "What are the contribution guidelines?",
            name: "contribution"
        },
        {
            type: "input",
            message: "What are the test instructions?",
            name: "test",
            default: "npm test"
        },
        {
            type: "list",
            message: "What license would you like to use?",
            name: "license",
            choices: ["MIT", "GNU GPLv3", "Apache 2.0", "ISC"]
        }
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
        .prompt(questions)
        .then((data) => {
            const filename = `README.md`;
            writeToFile(filename, generateMarkdown(data))
        });
}

// function call to initialize program
init();
