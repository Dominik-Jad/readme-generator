const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    // inquirer prompt to ask user for their GitHub username, email, project title, description, 
    // installation instructions, usage information, contribution guidelines, test instructions, and license
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
    // write the file to the current working directory
    fs.writeFile(fileName, data, (err) =>
    // if there is an error, log the error, else log that the file was generated
        err ? console.log(err) : console.log('READ.ME Generated!')
    );
}

// function to initialize program
function init() {
    inquirer
    // use inquirer to prompt the user with the questions array
        .prompt(questions)
        // then use the data from the user to generate the markdown
        .then((data) => {
            // use path to get the current working directory and join it with the file name
            const filename = path.join(process.cwd(), "README2.md");
            // call the writeToFile function with the filename and the generated markdown
            writeToFile(filename, generateMarkdown(data))
        });
}

// function call to initialize program
init();
