// Import Dependencies
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const Engineer = require("../lib/engineer.js");
const Manager = require("../lib/manager.js");
const Intern = require("../lib/intern.js");
const generateHTML = require("./generate.js");

class teamBuilder {
    constructor() {
        this.teamMembers = [];
    }

    buildTeam() {
        this.managerDetails();
    }

    managerDetails() {
        inquirer.prompt([
            {
                type: "input",
                message: "Please enter the name of the team manager.",
                name: "name"
            },
            {
                type: "input",
                message: "Please enter the Employee ID.",
                name: "id"
            },
            {
                type: "input",
                message: "Please enter this Employee's email address.",
                name: "email"
            },
            {
                type: "input",
                message: "Please enter this Manager's office number.",
                name: "officeNumber"
            }
        ])
            .then(details => {
                const { name, id, email, officeNumber } = details
                this.teamMembers.push(new Manager(name, id, email, officeNumber))
                this.addEmployee();
            })
    }


    addEmployee() {
        inquirer.prompt([
            {
                type: "confirm",
                message: "Do you wish to add another employee?",
                name: "choice"
            }
        ]).then(val => {
            if (val.choice) {
                this.chooseEmployee()
            } else {
                this.createHTMLFile()
            }
        })

    }

    chooseEmployee() {
        inquirer.prompt([
            {
                type: "list",
                message: "What employee role do you wish to add?",
                name: "employeeType",
                choices: ["Intern", "Engineer"]

            }
        ])
            .then(val => {
                const { employeeType } = val
                switch (employeeType) {
                    case "Intern":
                        this.internDetails()
                        break;

                    case "Engineer":
                        this.engineerDetails()
                        break;

                    default:
                        this.createHTMLFile();
                }

            })
    }

    internDetails() {
        inquirer.prompt([
            {
                type: "input",
                message: "Please enter the name of this intern.",
                name: "name"
            },
            {
                type: "input",
                message: "Please enter the intern's employee ID.",
                name: "id"
            },
            {
                type: "input",
                message: "Please enter this intern's email address.",
                name: "email"
            },
            {
                type: "input",
                message: "Please enter this intern's school.",
                name: "school"
            }
        ])
            .then(details => {
                const { name, id, email, school } = details
                this.teamMembers.push(new Intern(name, id, email, school));
                this.addEmployee();
            })
    }
