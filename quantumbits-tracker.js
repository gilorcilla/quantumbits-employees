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
                "Remove employee",
                "Update employee roles"
            ]
        })
}