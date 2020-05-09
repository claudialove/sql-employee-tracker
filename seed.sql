DROP DATABASE IF EXISTS employee_tracker_db;
CREATE DATABASE employee_tracker_db;

USE employee_tracker_db;

CREATE TABLE employee(
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  title VARCHAR(30),
  department VARCHAR(30),
  salary DECIMAL,
  manager VARCHAR(30)
);


insert into employee(first_name, last_name, title, department, salary, manager)
values 
("Edward", "Allen",  "Salesperson", "Sales", 80000.00, "Jennifer Joker"),
("Ashley", "Rivers",  "Developer", "Engineering", 150000.00, "Terrance Tyranny"),
("Carson", "Ellison",  "Accountant", "Finance", 120000.00, "Diane Fullofherself");

select * from employee;

