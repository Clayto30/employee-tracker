const inquirer = require('inquirer');
const db = require('./db/connection');
console.log('It is workin');
inquirer
    .prompt([
        {

            type: 'list',
            name: 'request',
            message: "What would you like to do?",
            choices: ["View all departments", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role"]
        }
    ])
    .then(answers => {
        if (answers.request === "View all departments") {
            console.log("1");
        } else if (answers.request === "View all employees") {
            console.log("2");
        } else if (answers.request === "Add a department") {
            console.log("3");
        } else if (answers.request == "Add a role") {
            inquirer
                .prompt ([
                    {
                        type: "input",
                        name: "jobtitle",
                        message: "What is the job title?"
                    },
                    {
                        type: "input",
                        name: "roleid",
                        message: "What is the role ID?"
                    },
                    {
                        type: "input",
                        name: "roledept",
                        message: "What department does this role belong to?"
                    },
                    {
                        type: "input",
                        name: "salary",
                        message: "What is the salary for this role?"
                    }
                ])
        } else if (answers.request == "Add a department") {
            inquirer
                .prompt ([
                    {
                        type: "input",
                        name: "newdept",
                        message: "What is the name of the department?"
                    }
                ])
        } else {
            console.log("4")
        }
    })
    .catch(error => {
        if (error.isTtyError) {

        } else {

        }
    });

