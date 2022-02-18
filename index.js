const inquirer = require('inquirer');
const fs = require('fs');
const gitURL;
const gitUser = username;

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
            name: 'username',
        },

    ]);
};
const writeREADME = ({ title, description, description1, description2, description3, installation, usage, license, contribute, URL, test, email }) =>
    `#${title}
   
 
##Description
A little bit about the motivation behind this project and why it was built. What it helped solve and what was learned from it.
- ${description}
- ${description1}
- ${description2}
- ${description3}

##Table of content

- [Description](#Description)

- [Installation](#Installation)

- [Usage](#Usage)

- [License](#License)

- [Contributing](#Contributing)

- [Tests](#tests)

- [Questions](#Questions)

##Installation -

Use the following package manager

${installation}


#Usage-


${usage}

#License-

This project is licensed by ${license}.

   
#How to contribute-

${contribute}

#Tests-

A user can run the following command to test this project 

${test}

#Questions-

If you have nay questions about this project then you can contact me directly at 

${email}
----
To see more of my work check out my GitHub-

[]()

link:  ${URL}
`
    ;

const init = () => {
    askUser()
        .then((answers) => fs.writeFile('README.md', writeREADME(answers), (err) =>
            err ? console.error(err) : console.log("Your README has been created!")
        ));

};



init();