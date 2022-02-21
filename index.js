const inquirer = require('inquirer');
const fs = require('fs');

//function for what the user will be prompted with
const askUser = () => {
    return inquirer.prompt([

        {
            type: 'input',
            message: 'What is the title of your README?',
            name: 'title',
        },
        {
            type: 'input',
            message: ' What was your motivation for this project?',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Why did you build this project?',
            name: 'description1',
        },
        {
            type: 'input',
            message: 'What problem does it solve?',
            name: 'description2',
        },
        {
            type: 'input',
            message: 'What did you learn from this project?',
            name: 'description3',
        },
        {
            type: 'input',
            message: 'Now lets talk about the installation! What command would I need to install the necessary dependencies?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'How can this project be used?',
            name: 'usage',
        },
        {
            type: 'list',
            message: 'What kind of license should your project have?',
            choices: ['MIT', 'Apache License 2.0', 'GNU General Public License v3.0', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'Mozilla Public License 2.0', 'The Unlicense', 'There is no license for this project'],
            name: 'license',
        },
        {
            type: 'input',
            message: 'How can a user contribute to this project?',
            name: 'contribute',
        },
        {
            type: 'input',
            message: 'What command can be run to test this project?',
            name: 'test',
        },

        {
            type: 'input',
            message: 'What email address can you be contacted at?',
            name: 'email',
        },

        {
            type: 'input',
            message: 'What is your GitHub user name?',
            name: 'GitHub',
        },

    ]);
};

// function for writing layout of README
const writeREADME = ({ title, description, description1, description2, description3, installation, usage, license, contribute, GitHub, test, email }) =>

    `##${title}

 ---  
 
## Description
A little bit about the motivation behind this project and why it was built. Also what it helped solve and what was learned from it.
1. ${description}
2. ${description1}
3. ${description2}
4. ${description3}

---

##Table of content

* [Description](#description)

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [How to Contribute](#how-to-contribute)

* [Tests](#tests)

* [Questions](#questions)

---

# Installation -

Use the following package manager

${installation}


## Usage-


${usage}

## License-

This project is licensed by ${license}.

   
## How to Contribute-

${contribute}

## Tests-

A user can run the following command to test this project 

${test}

## Questions-

If you have nay questions about this project then you can contact me directly at 

${email}
----
To see more of my work check out my GitHub-

 [GitHub](https://www.github.com/${GitHub}) 
`;


//function to write data to a file and what to do if there is an error
const init = () => {
    askUser()
        .then((answers) => fs.writeFile('README.md', writeREADME(answers), (err) =>
            err ? console.error(err) : console.log("Your README has been created!")
        ));

};

init();