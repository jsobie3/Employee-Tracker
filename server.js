const inquirer = require("inquirer");
// const mysql = require("mysql2");


// const connection = mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"Chibulls0307",
//     database:"employee_db"
// })

// connection.connect(function(err){
//     if (err) throw err;

//     startPage();
// })


console.log("hello")

function startPage (){
    inquirer
    .prompt({
        type: "list",
        choices: [
            "View all employees",
            "Add Employee",
            "Update Employee Role",
            "View All Roles",
            "add Role",
            "view all departments",
            "Add Department"
        ],
        message: "What would you like to do?",
        name: "startOptions"
    })

    switch (result.option) {
        case  "View all employees":
        viewAllEmployees();
        break;

        case  "Add Employee":
        addEmployee();
        break;

        case "Update Employee Role":
        updateEmployeeRole();
        break;

        case "View All Roles":
        viewAllRoles();
        break;

        case "add Role":
        addRole();
        break;

        case  "view all departments":
        viewAllDepartments();
        break;
        
        case "Add Department":
        addDepartment();
        break;

        default:
        exit();
    }

};

function addEmployee() {
    inquirer.prompt ({
        type: "input",
        message: "What is the name of the name of the employee?",
        name:"employeeName"
    })
    .then(function(answer){
        createConnection.query
    })
}

startPage();