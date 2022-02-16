const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
inquirer.prompt([

    {
        type: 'input',
        name: 'title',
        message: 'Lets work on the description! What is the title of your README?',
    },
    {
        type: 'input',
        name: 'description',
        message: ' What was your motivation for this project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Why did you build this project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What problem does it solve?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What did you learn from this project?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Now lets about the installation! What are the steps required to install your project?'
    },
])
    .then(function (answers) { console.log(answers) })

//((answers) => {


//});


// TODO: Create a function to write README file
//function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
//function init() { }

// Function call to initialize app
//init();