DROP DATABASE IF EXISTS quantumbits_tracker;
CREATE DATABASE quantumbits_tracker;
USE quantumbits_tracker;
CREATE TABLE department (
  id INT AUTO_INCREMENT,
  name VARCHAR (40),
  PRIMARY KEY (id)
);
CREATE TABLE roles (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR (40),
  salary DECIMAL (9, 2),
  department_id INT,
  PRIMARY KEY(id),
  FOREIGN KEY (department_id) REFERENCES department (id)
);
CREATE TABLE employees (
  id INT AUTO_INCREMENT,
  first_name VARCHAR (40),
  last_name VARCHAR (40),
  role_id INT NULL,
  manager_id INT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (roles_id) REFERENCES roles(id),
  FOREIGN KEY (manager_id) REFERENCES employees(id)
);