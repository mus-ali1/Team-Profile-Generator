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