const mysql = require("mysql");
const inquirer = require("inquirer");
const console = require('console');

// create the connection information for the sql database
const connection = mysql.createConnection({
  host: "localhost",
  // Your port; if not 3306
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "9Gjmrawt!",
  database: "employee_tracker_db"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("WELCOME!");
    start();
  });

  // start function which prompts the user for first employee tracker action
console.log("===========================");
console.log("  EMPLOYEE TRACKER SYSTEM  ");
console.log("===========================");

  function start() {
    inquirer
      .prompt({
        name: "activities",
        type: "list",
        message: "What would you like to do next?",
        choices: ["VIEW", "ADD", "DELETE"]
      })
      .then(function(answer) {
        // based on their answer, call one of 3 functions (add employee, view employee, delete employee)
        if (answer.activities === "VIEW") {
          viewEmployee();
        }
        else if(answer.activties === "ADD") {
          addEmployee();
        }
        else if(answer.activities === "DELETE") {
          deleteEmployee();
         } else {
          connection.end();
        }
      });
  }

  // VIEW: function to view new employee displays data employee table
  function viewEmployee() {
  connection.query("SELECT * FROM employee", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.table(res);
    start();
  });
}

//ADD:  function to add new rows to the employee table
function addEmployee() {
// prompt for info about the item being put up for auction
    inquirer
      .prompt([
        {
          name: "first_name",
          type: "input",
          message: "enter employee's first name?"
        },
        {
            name: "last_name",
            type: "input",
            message: "enter employee's last name?"
          },
          {
            name: "title",
            type: "input",
            message: "enter employee's job title"
          },
          {
            name: "department",
            type: "checkbox",
            message: "select department: "
            [
              "engineering", 
              "sales", 
              "finance"
            ]
          },
          {
            name: "salary",
            type: "input",
            message: "enter employee's salary"
          },
          {
            name: "manager",
            type: "input",
            message: "enter manager for current employee entry"
          }
      ])
      .then(function(answer) {
        // answers from prompts are used to update tables in the database
        connection.query(
          "INSERT INTO employee SET ?",
          {
            first_name: answer.first_name,
            last_name: answer.last_name,
            title: answer.title, 
            department: answer.department,
            salary: answer.salary,
            manager: answer.manager
          },
          function(err) {
            if (err) throw err;
            console.table("Your new employee record was created successfully!");
            // re-prompt the user for next activities
            start();
          }
        );
      });
  }



    