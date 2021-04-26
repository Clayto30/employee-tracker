const inquirer = require('inquirer');
const db = require('./db/connection');
// let choices = []
// const makeArray = function () {
//     db.query(`SELECT * FROM department`, (err, rows) => {
//         if (err) {
//             console.log("Sorry, it didn't work.")
//             return;
//         }
//         // console.log(rows);
//         choices = rows;
//         // console.log(choices);
//         for (i = 0; i < rows.length; i++) {
//             // console.log(choices[i].name);
//         }
//     })
// };
console.log('Welcome to Employee Tracker!');
appInit = function () {
    inquirer
        .prompt([
            {

                type: 'list',
                name: 'request',
                message: "What would you like to do?",
                choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role"]
            }
        ])
        .then(answers => {
            if (answers.request === "View all departments") {
                db.query(`SELECT * FROM department`, (err, rows) => {
                    if (err) {
                        console.log("Sorry, it didn't work.")
                        return;
                    }
                    console.table(rows);
                    appInit();
                })
            } else if (answers.request === "View all roles") {
                db.query(`SELECT title, roles.id, department.name
                    AS dept_name,
                    salary
                    FROM roles
                    LEFT JOIN department
                    ON roles.department_id = department.id`, 
                    (err, rows) => {
                    if (err) {
                        console.log("Sorry, it didn't work.")
                        return;
                    }
                    console.table(rows);
                    appInit();
                })
            } else if (answers.request === "View all employees") {
                db.query(`SELECT employee.id, first_name, last_name, roles.title, department.name AS "Department", roles.salary
                        FROM employee
                        LEFT JOIN roles
                        ON employee.roles_id = roles.id
                        LEFT JOIN department
                        ON roles.department_id = department.id`, 
                        (err, rows) => {
                    if (err) {
                        console.log("Sorry, it didn't work.")
                        return;
                    }
                    console.table(rows);
                    appInit();
                })
            } else if (answers.request == "Add a role") {
                return inquirer
                    .prompt([
                        {
                            type: "input",
                            name: "jobtitle",
                            message: "What is the job title?"
                        },
                        // {
                        //     type: "input",
                        //     name: "roleid",
                        //     message: "What is the role ID?"
                        // },
                        {
                            type: "input",
                            name: "roledept",
                            message: "What department does this role belong to?",
                        },
                        {
                            type: "input",
                            name: "salary",
                            message: "What is the salary for this role?"
                        }
                    ])
                    .then(answers => {
                        db.query(`INSERT INTO roles (title, salary, department_id) VALUES ("${answers.jobtitle}", ${answers.salary}, ${answers.roledept})`, (err, result) => {
                            if (err) {
                                console.log("Please input valid entries!");
                            } else {
                                console.log("Role created!");
                                appInit();
                            }
                        })
                    })
            } else if (answers.request == "Add a department") {
                return inquirer
                    .prompt([
                        {
                            type: "input",
                            name: "newdept",
                            message: "What is the name of the department?"
                        }
                    ])
                    .then(answers => {
                        console.log(answers.newdept)
                        db.query(`INSERT INTO department (name) VALUES ("${answers.newdept}");`, (err) => {
                            if (err) {
                                console.log("Sorry, it didn't work.")
                                return;
                            }
                            console.log("The new department was added!");
                            appInit();
                        })
                    })
            } else if (answers.request == "Add an employee") {
                return inquirer
                    .prompt([
                        {
                            type: "input",
                            name: "firstName",
                            message: "What is the employee's first name?"
                        },
                        {
                            type: "input",
                            name: "lastName",
                            message: "What is the employee's last name?"
                        },
                        {
                            type: "input",
                            name: "empRole",
                            message: "What is the employee's role?",
                        },
                        {
                            type: "input",
                            name: "empManager",
                            message: "Who is this employee's manager?",
                        }

                    ])
                    .then(answers => {
                        db.query(`INSERT INTO employee (first_name, last_name, roles_id, manager_id) VALUES ("${answers.firstName}", "${answers.lastName}", ${answers.empRole}, ${answers.empManager})`, (err, result) => {
                            if (err) {
                                console.log("Sorry, it didn't work.")
                                return;
                            }
                            console.log("Employee Added!");
                            appInit();
                        })
                    })
            } else if (answers.request == "Update an employee role") {
                return inquirer
                    .prompt([
                        {
                            type: "input",
                            name: "upEmp",
                            message: "Which employee would you like to update?"
                        },
                        {
                            type: "input",
                            name: "upRole",
                            message: "What is this employee's new role?"
                        }
                    ])
                    .then(answers => {
                        db.query(`UPDATE employee SET roles_id = ${answers.upRole} WHERE id = ${answers.upEmp}`, (err, result) => {
                            if (err) {
                                console.log("Please input a valide Employee number and role number")
                                return;
                            }
                            console.log("Employee Updated!");
                            appInit();
                        })
                    })
            }
        })
        .catch(error => {
            if (error.isTtyError) {

            } else {

            }
        });
}

appInit();
