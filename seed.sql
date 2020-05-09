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
