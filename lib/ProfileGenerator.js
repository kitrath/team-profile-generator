const inquirer = require("inquirer");
const validator = require("email-validator");

const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

class ProfileGenerator {
    constructor(templateFunction) {

        this.generateHMTL = templateFunction;
        // stores object for each team member
        this.team = [];
        this.teamMember = {
            type: 'Manager',
        };
    }

    askEmployeeInfo(type) {
        const role = type.toLowerCase();
        inquirer
            .prompt([
                {
                    type: "input",
                    name: 'employeeId',
                    message: `Please enter your ${role}'s employee id number:`,
                    validate: id => !isNaN(id) && parseInt(id, 10) > 0,
                },
                {
                    type: "input",
                    name: "employeeName",
                    message: `Please enter your ${type}'s name:`,
                    validate: name => this._isValidString(name),
                },
                {
                    type: "input",
                    name: "email",
                    message: `Please enter your ${type}'s email address:`,
                    validate: email => validator.validate(email),
                },
            ])
            .then(answer => {
                const employeeId = parseInt(answer.employeeId, 10);
                this.teamMember.id = employeeId;
                this.teamMember.name = answer.name.trim();
                this.teamMember.email = answer.email;
                this.getFinalQuestion(role);
            });
    }

    getFinalQuestion(type) {
        let finalQuestion;
        switch(type) {
            case 'manager':
                finalQuestion = this.addManager;
                break;
            case 'intern':
                finalQuestion = this.addIntern;
                break;
            default:
                finalQuestion = this.addEngineer;
        }
        finalQuestion();
    }

    // addManager() {
    //     inquirer
    //         .prompt([
    //             {
    //                 type: "input",
    //                 name: "officeNumber",
    //                 message: "Please enter your manager's office number:",
    //                 validate: officeNum => this._isValidString(officeNum),
    //             }
    //         ])
    //         .then(answer => {
    //             this.teamMember.officeNumber = answer.officeNumber.trim();
    //             this.team.push(new Manager(
    //                 this.teamMember.employeeId,
    //                 this.teamMember.name,
    //                 this.teamMember.email,
    //                 this.teamMember.officeNumber
    //             ));
    //             this.optionsMenu();
    //         });
    // }

    // addIntern() {
    //     inquirer
    //         .prompt([
    //             {
    //                 type: "input",
    //                 name: "school",
    //                 message: "Please enter your intern's current school:",
    //                 validate: school => this._isValidString(school),
    //             }
    //         ])
    //         .then(answer => {
    //             this.teamMember.school = answer.school.trim();
    //             this.team.push(new Intern(
    //                 this.teamMember.employeeId,
    //                 this.teamMember.name,
    //                 this.teamMember.email,
    //                 this.teamMember.school
    //             ));
    //             this.optionsMenu();
    //         });
    // }
    
    // addEngineer() {
    //     inquirer
    //         .prompt([
    //             {
    //                 type: "input",
    //                 name: "github",
    //                 message: "Please enter your engineer's GitHub username:",
    //                 validate: github => this._isValidString(github),
    //             }
    //         ])
    //         .then(answer => {
    //             this.teamMember.github = answer.github.trim();
    //             this.team.push(new Engineer(
    //                 this.teamMember.employeeId,
    //                 this.teamMember.name,
    //                 this.teamMember.email,
    //                 this.teamMember.github
    //             ));
    //             this.optionsMenu();
    //         })
    // }

    addEmployee(subClass, questionName, messageString) {
        inquirer
            .prompt([
                {
                    type: "input",
                    name: questionName,
                    message: `Please enter your ${messageString}.`,
                    validate: val => this_isValidString(val),
                }
            ])
            .then(answer => {
                this.teamMember[questionName] = answer[questionName].trim();
                this.team.push(new subClass(
                    this.teamMember.employeeId,
                    this.teamMember.name,
                    this.teamMember.email,
                    this.teamMember[questionName]
                ));
                console.log("FROM .addEmployee(), this.team: ", this.team);
                this.optionsMenu();
            });
    }

    addManager() {
        this.addEmployee(Manager, "officeNumber", "manager's office number");
    }

    addEngineer() {
        this.addEmployee(Engineer, "github", "engineer's github username");
    }

    addIntern() {
        this.addEmployee(Intern, "school", "intern's current school");
    }

    optionsMenu() {
        let choices = ["Add Engineer", "Add Intern"];
        if (this.team.length > 1) {
            choices.push("Generate Team Profile");
        }
        inquirer
            .prompt([
                {
                    type: "list",
                    name: "options",
                    message: "What would you like to do now?",
                    choices: choices,
                }
            ])
            .then(answer => {
                if (answer.options === "Add Engineer") {
                    this.initNextTeamMember('Engineer');
                }
                if (answer.options === "Add Intern") {
                    this.initNextTeamMember('Intern');
                }
                if (answer.options === "Generate Team Profile") {
                    // Generate HTML for Team Profile
                    this.templateFunction(this.team);
                    return 
                }
            })
    }


    initNextTeamMember(type) {
        // reset teamMember property
        this.teamMember = { type: type };
        // begin questions
        this.askEmployeeInfo(type);
    }

    _isValidString(str) {
        return typeof str === "string" && str.trim().length;
    }

    init() {
        this.askEmployeeInfo('Manager');
    }
}