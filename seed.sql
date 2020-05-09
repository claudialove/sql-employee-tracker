DROP DATABASE IF EXISTS employee_tracker_db;
CREATE DATABASE employee_tracker_db;

USE employee_tracker_db;

CREATE TABLE department(
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  department_name VARCHAR(30)
);


CREATE TABLE role(
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INT
);


CREATE TABLE employee(
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  fname VARCHAR(30),
  lname VARCHAR(30),
  role_id INT,
  manager_id INT
);

insert into department (department_name)
values 
("engineering"),
("sales"),
("human resources");

insert into role (title, salary, department_id)
values 
("developer", "150000.00", "1"),
("intern", "75000.00", "1"),
("tech lead", "200000.00", "1"),
("sales engineer", "150000.00", "2"),
("sales intern", "75000.00", "2"),
("sales lead", "250000.00", "2"),
("hr specialist ", "150000.00", "3"),
("hr generalist", "100000.00", "3"),
("hr manager", "200000.00", "3");
