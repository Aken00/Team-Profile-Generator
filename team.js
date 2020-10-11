
const Employee = require("./Employee");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const inquirer = require('inquirer');
const fs = require('fs');

// A class that haddles the application process
class Team {
    constructor() {

        this.employees = [];
        this.employeesPromt = [
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
            }
        ];

            this.managerPrompt = this.employeesPrompt.concat([
                {
                    type: "input",
                    message: "What is your office number?",
                    name: "officeNumber"
                }
        ]);

            this.engineerPrompt = this.employeesPrompt.concat([
                {
                    type: "input",
                    message: "What is your github?",
                    name: "github"
                }
        ]);

            this.internPrompt = this.employeesPrompt.concat([
                {
                    type: "input",
                    message: "What is your school?",
                    name: "school"
                }
        ]);
        
    }

    // start application
    start() {
        this.addEmployee();
    }

    // end application
    end() {
        console.log("Team Profile has been made!")
    }

    // addEmployee() {
    //     this.promptRole().then((role) => {
    //         if (role === "Exit") {
    //             this.renderHTML();
    //             this.end();
    //         }
    //     }
    // )};

    addEmployee = () => {
        return inquirer
        .prompt(employeesPrompt,employees)
        .then(answers => {
            const employees = new employees (answers.name, answers.id, answers.email, answers.role);
            employees.push(employees);
            addEmployee();
        )};



    const addManager

    const addEngineer 

    const addIntern


    const makeProfile = (fileName) => {
        fileName = fs.writeFile("./index.html", generateHTML(this.employee), (err => {
            if (err) {
                console.log('Error: ' + err);
            } else {
                console.log('Team Profile created in: /index.html!');
            }
        }));
    };

    const addEmployee = () => {
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

};

