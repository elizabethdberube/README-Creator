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
            message: 'Now lets about the installation! What are the steps required to install your project?',
            name: 'installation',
        },
    ]);
};
const writeREADME = ({ title, description, description1, description2, description3, installation }) =>
    `#${title}
#Table of content
${description}
${description1}
${description2}
${description3}
${installation}
`;

const init = () => {
    askUser()
        .then((answers) => fs.writeFileSync('README.md', writeREADME(answers)))

};


init();