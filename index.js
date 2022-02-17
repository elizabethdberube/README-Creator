const inquirer = require('inquirer');
const fs = require('fs');


const askUser = () => {
    return inquirer.prompt([

        {
            type: 'input',
            message: 'Lets work on the description! What is the title of your README?',
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
            message: 'Now lets talk about the installation! What are the steps required to install your project?',
            name: 'installation',
        },
    ]);
};
const writeREADME = ({ title, description, description1, description2, description3, installation }) =>
    `#${title}

##Description
A little bit about the motivation behind this project and why it was built. What it helped solve and what was learned from it.
- ${description}
- ${description1}
- ${description2}
- ${description3}

##Table of content

- [Description](#description)

- [Installation](#installation)

- [Usage](#usage)

- [License](#license)

- [Contributing](#contributing)

- [Tests](#tests)

- [Questions](#questions)

##Installation

######Now let's talk about the installation process!
${installation}


`;

const init = () => {
    askUser()
        .then((answers) => fs.writeFile('README.md', writeREADME(answers), (err) =>
            err ? console.error(err) : console.log("Your README has been created!")
        ));

};


init();