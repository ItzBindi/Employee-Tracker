const inquirer = require("inquirer");

const fs = require("fs");   






const questions = [
    {
        type: 'list',
        message: 'What would you like to do? (Use arrow keys)',
        choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role', 'Exit'],
        name: 'choice',
    }
]



inquirer.prompt(questions)
    .then((response) => {
        console.log(response);
        if (response.choice === 'View All Departments') {
            console.log('Viewing all departments');
            
        }
        else if (response.choice === 'View All Roles') {
            console.log('Viewing all roles');
        }
        else if (response.choice === 'View All Employees') {
            console.log('Viewing all employees');
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

    module.exports = questions;