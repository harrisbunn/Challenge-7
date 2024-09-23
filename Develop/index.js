// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
// TODO: Create an array of questions for user input
const questions = [
    "What is your project title?", 
    "What is your project description?", 
    "What is your installation instructions?", 
    "What is your usage information?", 
    "What is your contribution guidelines?", 
    "What is your test instructions?", 
    "What is your license?", 
    "What is your GitHub username?", 
    "What is your email address?"];

// TODO: Create a function to write README file
function writeToFile(fileName, {title, description, installInstructions, usageInformation, contributionGuidelines, testInstructions, license, githubUsername, email}) {
    fs.writeFile(fileName,`
# ${title}

## Description

${description}

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribute](#contribute)
- [tests](#tests)
- [Questions](#questions)

## Installation

${installInstructions}

## Usage

${usageInformation}

## License

${license}

## Contribute

${contributionGuidelines}

## Tests

${testInstructions}

## Questions

Github: ${githubUsername}
Email: ${email}    
`, 
(err) => err ? console.error(err) : console.log('Success!'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: questions[0],
            name: 'title',
        },
        {
            type: 'input',
            message: questions[1],
            name: 'description',
        },
        {
            type: 'input',
            message: questions[2],
            name: 'installInstructions',
        },
        {
            type: 'input',
            message: questions[3],
            name: 'usageInformation',
        },
        {
            type: 'input',
            message: questions[4],
            name: 'contributionGuidelines',
        },
        {
            type: 'input',
            message: questions[5],
            name: 'testInstructions',
        },
        {
            type: 'input',
            message: questions[6],
            name: 'license',
        },
        {
            type: 'input',
            message: questions[7],
            name: 'githubUsername',
        },
        {
            type: 'input',
            message: questions[8],
            name: 'email',
        }
    ])
    .then((response) =>
        writeToFile('README.md', response)
    );
}

// Function call to initialize app
init();
