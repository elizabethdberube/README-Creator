const inquirer = require('inquirer');
const fs = require('fs');

// array for badge links
const badgeArray = [{

    badge: 'MIT',
    theLink: 'https://img.shields.io/badge/License-MIT-blue',
},
{
    badge: 'Apache 2.0',
    theLink: 'https://img.shields.io/badge/License-Apache%20License%202.0-lightgrey',
},
{
    badge: 'GNU General Public v3.0',
    theLink: 'https://img.shields.io/badge/License-MIT-blue',
},
{
    badge: 'BSD 2-Clause "Simplified"',
    theLink: 'https://img.shields.io/badge/License-BSD%202--Clause%20%22Simplified%22%20-yellow',
},
{
    badge: 'Boost Software 1.0',
    theLink: 'https://img.shields.io/badge/License-Boost%20Software%201.0%20-red',
},
{
    badge: 'Creative Commons Zero v1.0 Universal',
    theLink: 'https://img.shields.io/badge/License-Creative%20Commons%20Zero%20v1.0%20Universal-green',
},
{
    badge: 'Eclipse Public License 2.0',
    theLink: 'https://img.shields.io/badge/License-Eclipse%20Public%20License%202.0-yellowgreen',
},
{
    badge: 'Mozilla Public 2.0',
    theLink: 'https://img.shields.io/badge/License-Mozilla%20Public%202.0-blue',
},
{
    badge: 'The Unlicense',
    theLink: 'https://img.shields.io/badge/License-The%20Unlicense-red',
},

];
//function for what the user will be asked
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
            choices: ['MIT', 'Apache 2.0', 'GNU General Public v3.0', 'BSD 2-Clause "Simplified"', 'Boost Software 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'Mozilla Public 2.0', 'The Unlicense', 'None'],
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

//function for how the README will written. Including forEach loop for adding selected badge. 
const writeREADME = (response) => {
    let { title, description, description1, description2, description3, installation, license, usage, contribute, GitHub, test, email } = response;
    let badgeLink;

    badgeArray.forEach((currentBadge) => {
        let { badge, theLink } = currentBadge;

        if (license == badge) {

            badgeLink = theLink;
        }
    });

    //layout of README
    let output = `## ${title}`;
    if (badgeLink) {
        output = output + `
![Image](${badgeLink})`;
    }
    output = output + `

 ---  
 
## Description
A little bit about the motivation behind this project and why it was built. Also what it helped solve and what was learned from it.
1. ${description}
2. ${description1}
3. ${description2}
4. ${description3}

---

## Table of content

* [Description](#description)

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [How to Contribute](#how-to-contribute)

* [Tests](#tests)

* [Questions](#questions)

---

# Installation 

You will need to run the following command or commands:

${installation}


## Usage


${usage}

## License

License for this project is set to ${license}.

   
## How to Contribute

${contribute}

## Tests

${test}

## Questions

If you have nay questions about this project then you can contact me directly at 

${email}

----
To see more of my work check out my GitHub

 [GitHub](https://www.github.com/${GitHub}) 

----

To see a video of this being demonstrated follow this link:

[Screencastify](https://drive.google.com/drive/folders/111q4XMAyx5iarrUBsHIsW_93NX63eOHe?usp=sharing) 

----



![image](screenshot.png)

 
`;
    return output;
};


//function to write data to a file and what to do if there is an error
const init = () => {
    askUser()
        .then((answers) => fs.writeFile('README.md', writeREADME(answers), (err) =>
            err ? console.error(err) : console.log("Your README has been created!")
        ));

};

init();