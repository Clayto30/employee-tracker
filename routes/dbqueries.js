const db = require("../db/connection");

const getAllDept = `SELECT * FROM department`;

// db.query(getAllDept, (err, rows) => {
//     if (err) {
//         console.log("Sorry, it didn't work.")
//         return;
//     }
//     console.log(rows)
// })

const getAllRoles = `SELECT * FROM roles`;