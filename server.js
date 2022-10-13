const inquirer = require("inquirer");
const mysql = require("mysql2");


const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Chibulls0307",
    database:"employee_db"
})

connection.connect(function(err){
    if (err) throw err;

    startPage();
})


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
            "Add Department",
            "Exit"
        ],
        message: "What would you like to do?",
        name: "startOptions"
    })
.then(function(result){


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
})
};

function addEmployee() {
    inquirer.prompt (
        {
        type: "input",
        message: "What is the first name of the name of the employee?",
        name:"firstName"
        },
        {
        type: "input",
        message: "What is the last name of the name of the employee?",
        name:"lastName"
        },
        {
        type: "input",
        message: "What is the employee ID number?",
        name:"roleID"
        },
        {
        type: "input",
        message: "What is their manager ID number?",
        name:"managerID"            },

    )
    .then(function(answer)
    {
        createConnection.query("INSERT INTO EMPLOYEE (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)",
        [answer.firstName,answer.lastName,answer.roleID,answer.managerID], function(err,res)
            {
                if (err) throw err;
                startPage();
        });
    })
}


function addRole() {
    inquirer.prompt (
    [
        {
        type: "input",
        message: "What is the role?",
        name:"roleName"
        },
        {
        type: "input",
        message: "What is the salary of the role?",
        name:"salary"
        },
        {
        type: "input",
        message: "What is the the dapartment ID number?",
        name:"deptID"            
        }
    ]


    )}

startPage();