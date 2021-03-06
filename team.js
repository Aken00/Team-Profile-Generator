
const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")

const teamArray = [];

const generateHTML = require("./generateHTMLpage")


// Adding user prompt to fill out Profile. 

    addManager = () => {
        inquirer
        .prompt([
            {
                type: "input",
                message: "What is your name?",
                name: "name"
            },
            {
                type: "input",
                message: "What is your id?",
                name: "id"
            },
            {
                type: "input",
                message: "What is your email?",
                name: "email"
            },
            {
                type: "input",
                message: "What is your office number?",
                name: "officeNumber"
            }
        ])
        .then(answers => {
            const manager = new Manager (answers.name, answers.id, answers.email, answers.officeNumber);
            teamArray.push(manager);
            addEmployee();
        });
    }


    addEngineer = () => {
        inquirer
        .prompt([
            {
                type: "input",
                message: "What is your name?",
                name: "name"
            },
            {
                type: "input",
                message: "What is your id?",
                name: "id"
            },
            {
                type: "input",
                message: "What is your email?",
                name: "email"
            },
            {
                type: "input",
                message: "What is your github?",
                name: "github"
            }
        ])
        .then(answers => {
            const engineer = new Engineer (answers.name, answers.id, answers.email, answers.github);
            teamArray.push(engineer);
            addEmployee();
            });
    }

    addIntern = () => {
            inquirer
            .prompt([
                {
                    type: "input",
                    message: "What is your name?",
                    name: "name"
                },
                {
                    type: "input",
                    message: "What is your id?",
                    name: "id"
                },
                {
                    type: "input",
                    message: "What is your email?",
                    name: "email"
                },
                {
                    type: "input",
                    message: "What is your school?",
                    name: "school"
                }
            ])
            .then(answers => {
                const intern = new Intern (answers.name, answers.id, answers.email, answers.school);
                teamArray.push(intern);
                addEmployee();
                });
            };



    addEmployee = () => {
        return inquirer
            .prompt({
                type: 'list',
                name: 'newEmployee',
                message: 'Do you want to add another Employee?',
                choices: ['Engineer', 'Intern', 'Complete Team Profile']
            })
            .then(answers => {
                switch (answers.newEmployee) {
                    case 'Engineer':
                        addEngineer();
                        break;
                    case 'Intern':
                        addIntern();
                        break;
                    case 'Complete Team Profile':
                        makeProfile();
                        break;
                }
            });
    };

    makeProfile = () => {
        fileName = fs.writeFile("./index.html", generateHTML(teamArray), (err => {
            if (err) {
                console.log('Error: ' + err);
            } else {
                console.log('Team Profile created in: /index.html!');
            }
        }));
    };



    // start application
    function start() {
        addManager(); 
    }

    start();

