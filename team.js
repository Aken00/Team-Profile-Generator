
const Employee = require("./Employee");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const inquirer = require('inquirer');
const fs = require('fs');

// A class that haddles the application process
class Team {
    constructor() {

        this.employee = [];
        this.employeePromt = [
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

            this.managerPrompt = this.employeePrompt.concat([
                {
                    type: "input",
                    message: "What is your office number?",
                    name: "officeN"
                }
        ]);

            this.engineerPrompt = this.employeePrompt.concat([
                {
                    type: "input",
                    message: "What is your github?",
                    name: "github"
                }
        ]);

            this.internPrompt = this.employeePrompt.concat([
                {
                    type: "input",
                    message: "What is your school?",
                    name: "school"
                }
        ]);
        
    }

    // start application
    start() {
        this.Employee();
    }

    // end application
    end() {
        console.log("Team Profile has been made!")
    }


    
}