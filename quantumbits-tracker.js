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
    connection.query
}