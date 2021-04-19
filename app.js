const inquirer = require('inquirer');
console.log('It is workin');
inquirer
    .prompt(
        {

            type: 'list',
            name: 'request',
            message: "What would you like to do?",
            choices: ["View all departments", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role"]
        }
    )
