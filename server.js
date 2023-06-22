const inquirer = require('inquirer');
// Import and require mysql2
const mysql = require('mysql2');


const questions = require('./questions');
const { up } = require('inquirer/lib/utils/readline');

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
function options() {
inquirer.prompt(questions)
    .then((response) => {
        console.log(response);
        if (response.choice === 'View All Departments') {
            console.log('Viewing all departments');
            db.query('SELECT * FROM department', function (err, results) {
              console.table(results);
            });
            
        }
        else if (response.choice === 'View All Roles') {
            console.log('Viewing all roles');
            db.query('SELECT * FROM role', function (err, results) {
              console.table(results);
            });
        }
        else if (response.choice === 'View All Employees') {
            console.log('Viewing all employees');
            db.query('SELECT * FROM employee', function (err, results) {
              console.table(results);
            });
        }
        else if (response.choice === 'Add a Department') {
            console.log('Adding a department');
            addDepartment();
        }
        else if (response.choice === 'Add a Role') {
            console.log('Adding a role');
            addRole();
        }
        else if (response.choice === 'Add an Employee') {
            console.log('Adding an employee');
            addEmployee();
        }
        else if (response.choice === 'Update an Employee Role') {
            console.log('Updating an employee role');
            updateEmployeeRole();

        }
        else if (response.choice === 'Exit') {
        process.exit();
        }

        
    })
    .catch((err) => {
        console.log(err);
    });
  }
options();
function addDepartment() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the department?',
            name: 'departmentName',
        }
    ])
    .then((response) => {
        console.log(response);
        db.query('INSERT INTO department (name) VALUES (?)',[response.departmentName], function (err, results) {
          db.query('SELECT * FROM department', function (err, results) {
            console.table(results);
            options();
          });
        });
    })
    .catch((err) => {
        console.log(err);
    });
}

function addRole() {
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'What is the name of the role?',
        name: 'roleName',
      },
      {
        type: 'input',
        message: 'What is the salary of the role?',
        name: 'roleSalary',
      },
      {
        type: 'input',
        message: 'What is the department ID of the role?',
        name: 'roleDepartmentID',
      },
    ])
    .then((response) => {
      console.log(response);
      db.query(
        'INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)',[response.roleName, response.roleSalary, response.roleDepartmentID],function (err, results) {
          db.query('SELECT * FROM role', function (err, results) {
            console.table(results);
            options();
          });
          if (err) {
            console.log(err);
          } else {
            console.log('Role added successfully.');
            console.table(results);
            options();
          }
        }
      );
    })
    .catch((err) => {
      console.log(err);
    });
}

function addEmployee() {
  inquirer
    .prompt([
      {
        type: 'input',
        message: "What is the employee's first name?",
        name: 'employeeFirstName',
      },
      {
        type: 'input',
        message: "What is the employee's last name?",
        name: 'employeeLastName',
      },
      {
        type: 'input',
        message: "What is the employee's role ID?",
        name: 'employeeRoleID',
      },
      {
        type: 'input',
        message: "What is the employee's manager ID?",
        name: 'employeeManagerID',
      },
    ])
    .then((response) => {
      console.log(response);
      db.query(
        'INSERT INTO employee (first_name, last_name, roles_id, manager_id) VALUES (?, ?, ?, ?)',[response.employeeFirstName, response.employeeLastName, response.employeeRoleID, response.employeeManagerID,],function (err, results) {
          db.query('SELECT * FROM employee', function (err, results) {
            console.table(results);
            options();  
          });
          if (err) {
            console.log(err);
          } else {
            console.log('Employee added successfully.');
            console.table(results);
            options();
          }
        }
      );
    })
    .catch((err) => {
      console.log(err);
    });
}

    
  function updateEmployeeRole() {
    let employeeChoices = [];
    db.query('SELECT * FROM employee', function (err, results) {
      // console.table(results);
      employeeChoices = results.map((employee) => `${employee.first_name} ${employee.last_name}`);
      // console.log(employeeChoices);

    inquirer
      .prompt([
        {
          type: 'list',
          message: 'Which employees role would you like to update?',
          choices:employeeChoices,
          name:'employee'

        },
        {
          type: 'input',
          message: 'What is the new role',
          choices:'roleChoices',
          name:'newrole'
        }
      ])
      .then((response) => {
        db.query( 'UPDATE employee SET role_id = ? WHERE first_name = ? AND last_name = ?',[response.newrole, response.employee],function (err, results) {
          db.query('SELECT * FROM employee', function (err, results) {
            console.table(results);
            options();  
          });

      });
    });
  });
  };
    

















    // Query database

// Default response for any other request (Not Found)
