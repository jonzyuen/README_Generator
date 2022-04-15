const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

const questions = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'userName',
      message: 'Enter your GitHub username:',
      validate: userNameInput => {
        if (userNameInput) {
          return true;
        } else {
          console.log('Username is required.')
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email:',
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('Email is required.')
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'projectName',
      message: 'Enter the name of your project:',
      validate: projectNameInput => {
        if (projectNameInput) {
          return true;
        } else {
          console.log('Project name is required.');
          return false;
        };
      }
    },
    {
      type: 'input',
      name: 'repositoryName',
      message: 'Enter the name of your project repository:',
      validate: repositoryNameInput => {
        if (repositoryNameInput) {
          return true;
        } else {
          console.log('Project repository name is required.');
          return false;
        };
      }
    },
    {
      type: 'input',
      name: 'link',
      message: 'Enter the repository link:',
      validate: linkInput => {
        if (linkInput) {
          return true;
        } else {
          console.log('Project repository link is required.');
          return false;
        };
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter the project description:',
      validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('Project description is required.');
          return false;
        };
      }
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter the installation information:'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter the usage information:'
    },
    {
      type: 'input',
      name: 'credits',
      message: 'Enter the credits for this project:'
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Enter the contribution information:'
    },
    {
      type: 'confirm',
      name: 'confirmLicense',
      message: 'Is this project under a license?',
      default: true
    },
    {
      type: 'list',
      name: 'license',
      message: 'Select the license your project is under:',
      choices: ['MIT', 'ISC License', 'GNU GPLv3', 'The Unlicense', 'Mozilla Public 2.0', 'Apache 2.0'],
      when: ({confirmLicense}) => {
        if (confirmLicense) {
          return true;
        } else {
          return false;
        }
      }
    }
  ]);
};

function mkdir() {
  fs.mkdir('./dist', function(){
  });
};

function writeToFile(answers, data) {
  fs.writeFile(answers, data, function(err) {
    if (err) {
      return console.log(err);
    }
  });
};

function init() {
  mkdir();
  questions()
    .then(function(answers) {
      writeToFile(`./dist/README ${Date.now()}.md`, generateMarkdown(answers));
    });
};

init();