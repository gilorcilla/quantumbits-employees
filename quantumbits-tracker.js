const connection = require(".Assets/db.js");
const inquirer = require("inquirer");
const consTable = require("console.table");
const mysql = require ("mysql");

const askQuestion = funtion () {
    inquirer
        .prompt({
            type:"list",
            name: "beginQuestion",
            message: "Please use the arrow keys to select an option",
            choices:[
                "View all departments",
                "Vieww all roles",
                "View all employees",
                "Add employees",
                "Add departments",
                "Add roles",
                "Remove employees",
                "Update employee roles"
            ]
        })
        .then(function (answer){
            console.log(answer);
            switch(answer.beginQuestion){
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
            }

        });
};

askQuestion();

function viewalldepartments() {
    connection.query("SELECT * FROM departments", function (err, res){
        console.log("\n Departments Retrieved from Database\n");
        console.table(res);
    });
    askQuestion();

}
function viewallroles(){
    connection.query("SELECT * FROM roles", function (err, res){
        console.log("\n Roles Retrieved from Database \n");
        console.table(res);
    });
    askQuestion();
}
function viewallemployees(){
    connection.query(fancyQuery, function (err, res){
        console.log("\n Employees retrieved from Database\n");
        console.table(res)
        console.log("Employees Retrieved from Database");
        const fancyQuery = "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department on role.department_id = department.id;";

    });
    askQuestion();

}
function addemployees(){
    inquirer
        .prompt([
            {
                type: "input",
                message: "Please enter employee first name",
                name: "firstname"
            },
            {
                type: "input",
                message: "Please enter employee last name",
                name: "lastname"
            }
        ])
        .then(function (res){
            connection.query(
                "INSERT INTO employees SET ?",
                {
                    first_name: answer.firstname,
                    last_name: answer.lastname,
                    role_id: null,
                    manager_id: null
                },
                function (err, res) {
                    if (err){
                        throw err;
                    }
                    console.table(res);
                }
            );
            askQuestion();
        });
        