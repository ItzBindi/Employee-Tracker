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





    module.exports = questions;