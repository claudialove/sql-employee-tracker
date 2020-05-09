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
    inquirer.prompt({
        name: "activities",
        type: "list",
        message: "What would you like to do next?",
        choices: ["VIEW", "ADD", "DELETE"]
      })
      .then(function(answer) {
        // based on their answer, call one of 3 functions (add employee, view employee, delete employee)
        if (answer.activities === "VIEW") {
            console.log("ok, let's view the employee table");
          viewEmployee();
        }
        else if(answer.activities === "ADD") {
            console.log("ok, let's add a new employee");
          addEmployee();
        }
        else if(answer.activities === "DELETE") {
            console.log("ok, let's delete a row from out table... note the index for the row you would like to delete");
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
// prompt for info about the item being put up for auction
function addEmployee() {
    inquirer.prompt([
        {
            type: "input",
            name: "first_name",
          message: "enter employee's first name?"
        },
        {
            type: "input",
            name: "last_name",
            message: "enter employee's last name?"
          },
          {
            type: "input",
            name: "department",
            message: "enter department "
          },
          {
            type: "input",
            name: "title",
            message: "select job title"
          },
          {
            type: "input",
            name: "salary",
            message: "enter employee's salary"
          },
          {
            type: "input",
            name: "manager",
            message: "enter manager for current employee entry"
          }
      ]) .then(response => {
        // answers from prompts are used to update tables in the database
        const query = connection.query(
          "INSERT INTO employee SET ?",
          {
            first_name: response.first_name,
            last_name: response.last_name,
            title: response.title, 
            department: response.department,
            salary: response.salary,
                manager: response.manager
            },
            function (err, res) {
                if (err) throw err;
                console.table("Your new employee record was created successfully!");
                // re-prompt the user for next activities
                start();
            }
        );
      });
}
function deleteProduct() {
    const res = connection.query(
      "DELETE FROM employee WHERE ?",
      {
        index: res.index
      },
      function(err, res) {
        if (err) throw err;
        console.log(res.affectedRows + " products deleted!\n");
        // Call readProducts AFTER the DELETE completes
        start();
      }
    );
  }
    



