const inquirer = require('inquirer');
// Import and require mysql2
const mysql = require('mysql2');


const questions = require('./questions');

// Express middleware


// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: 'root',
    database: 'business'
  },
  console.log(`Connected to the business database.`)
);

inquirer.prompt(questions)
    .then((response) => {
        console.log(response);
        if (response.choice === 'View All Departments') {
            console.log('Viewing all departments');
            db.query('SELECT * FROM department', function (err, results) {
              console.log(results);
            });
            
        }
        else if (response.choice === 'View All Roles') {
            console.log('Viewing all roles');
            db.query('SELECT * FROM role', function (err, results) {
              console.log(results);
            });
        }
        else if (response.choice === 'View All Employees') {
            console.log('Viewing all employees');
            db.query('SELECT * FROM employee', function (err, results) {
              console.log(results);
            });
        }
        else if (response.choice === 'Add a Department') {
            console.log('Adding a department');
        }
        else if (response.choice === 'Add a Role') {
            console.log('Adding a role');
        }
        else if (response.choice === 'Add an Employee') {
            console.log('Adding an employee');
        }
        else if (response.choice === 'Update an Employee Role') {
            console.log('Updating an employee role');
        }
        else if (response.choice === 'Exit') {
            console.log('Exiting');
        }

        
    })
    .catch((err) => {
        console.log(err);
    });
// Query database

// Default response for any other request (Not Found)
