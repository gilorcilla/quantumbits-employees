const connection = require("./Assets/database.js");
const inquirer = require("inquirer");
const consTable = require("console.table");
const mysql = require("mysql");

const askQuestion = function () {
  inquirer
    .prompt({
      type: "list",
      name: "beginQuestion",
      message: "Please use the arrow keys to select an option",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add employees",
        "Add departments",
        "Add roles",
        "Remove employees",
        "Update employee roles",
        "Exit App",
      ],
    })
    .then(function (answer) {
      console.log(answer);
      switch (answer.beginQuestion) {
        case "View all departments":
          viewalldepartments();
          break;

        case "View all roles":
          viewallroles();
          break;

        case "View all employees":
          viewallemployees();
          break;

        case "Add employees":
          addemployees();
          break;

        case "Add departments":
          adddepartments();
          break;

        case "Add roles":
          addroles();
          break;

        case "Remove employees":
          removeemployees();
          break;

        case "Update employee roles":
          updateemployeeroles();
          break;
        default:
          connection.end();
          process.exit(0);
      }
    });
};

askQuestion();

function viewalldepartments() {
  connection.query("SELECT * FROM department", function (err, res) {
    if (err) throw err;
    console.log("\n Departments Retrieved from Database\n");

    console.table(res);
    askQuestion();
  });
}
function viewallroles() {
  connection.query("SELECT * FROM role", function (err, res) {
    console.log("\n Roles Retrieved from Database \n");
    console.table(res);
    askQuestion();
  });
}
function viewallemployees() {
  const fancyQuery =
    "SELECT employees.id, employees.first_name, employees.last_name, role.title, department.name AS department, role.salary FROM employees LEFT JOIN role ON employees.role_id = role.id LEFT JOIN department on role.department_id = department.id;";
  connection.query(fancyQuery, function (err, res) {
    console.log("\n Employees retrieved from Database\n");
    console.table(res);
    console.log("Employees Retrieved from Database");
    askQuestion();
  });
}
function addemployees() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Please enter employee first name",
        name: "firstname",
      },
      {
        type: "input",
        message: "Please enter employee last name",
        name: "lastname",
      },
    ])
    .then(function (res) {
      connection.query(
        "INSERT INTO employees SET ?",
        {
          first_name: answer.firstname,
          last_name: answer.lastname,
          role_id: null,
          manager_id: null,
        },
        function (err, res) {
          if (err) {
            throw err;
          }
          console.table(res);
        }
      );
      askQuestion();
    });
}

function updateEmployeeRoles() {
  let allemp = [];
  connection.query("SELECT * FROM employee", function (err, answer) {
    for (let i = 0; i < answer.length; i++) {
      let employeeString =
        answer[i].id + " " + answer[i].first_name + " " + answer[i].last_name;
      allemployees.push(employeeString);
    }
    inquirer
      .prompt([
        {
          type: "list",
          name: "updateEmployeeRoles",
          message: "Select employee to update role",
          choices: allemployees,
        },
        {
          type: "list",
          message: "Select new roles",
          choices: ["Manager", "Employee"],
          name: "newroles",
        },
      ])
      .then(function (res) {
        console.log("about to update", res);
        const idToUpdate = {};
        idToUpdate.employeesID = parseInt(
          res.updateEmployeeRoles.split(" ")[0]
        );
        if (res.newRoles === "manager") {
          idToUpdate.role_id = 1;
        } else if (res.newRoles === "employees") {
          idToUpdate.role_id = 2;
        }
      });
  });
}

function adddepartments() {
  inquirer
    .prompt({
      type: "input",
      message: "Enter new department name",
      name: "dept",
    })
    .then(function (answer) {
      connection.query(
        "INSERT INTO department SET ?",
        {
          name: answer.dept,
        },
        function (err, resp) {
          if (err) {
            throw err;
          }
          console.table(resp);
          askQuestion();
        }
      );
    });
}
function addRoles() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter employee title",
        name: "addtitle",
      },
      {
        type: "input",
        message: "Enter employee salary",
        name: "addsalary",
      },
      {
        type: "input",
        message: "Enter employee department id",
        name: "addDepID",
      },
    ])
    .then(function (answer) {
      connection.query(
        "INSERT INTO role SET ?",
        {
          title: answer.addtitle,
          salary: answer.addsalary,
          department_id: answer.addDEpID,
        },
        function (err, resp) {
          if (err) {
            throw err;
          }
          console.table(res);
        }
      );
      askQuestion();
    });
}
