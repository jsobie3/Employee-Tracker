-- Active: 1664495632835@@127.0.0.1@3306@employee_db
INSERT INTO department (name)
VALUES ("Networking"), ("Systems"), ("Technicians"), ("Interns");

INSERT INTO roles (title, salary, department_id)
VALUE ("Network Admin", 80000, 1), ("Systems Admin", 70000, 2), ("Technician", 55000, 3), ("Intern", 0 , 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUE ("SteveJobs", "One", 1 , 1), ("SteveJobs", "Two", 1 , 1), ("SteveJobs", "Three", 1 , 1), ("SteveJobs", "Four", 1 , 1);