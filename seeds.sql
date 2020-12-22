USE quantumbits_tracker;
INSERT INTO
  department (id, name)
VALUES
  (1, "Software Development");
INSERT INTO
  department (id, name)
VALUES
  (2, "Corporate");
INSERT INTO
  department (id, name)
VALUES
  (3, "Human Resources");
INSERT INTO
  department (id, name)
VALUES
  (4, "Information Technology");
INSERT INTO
  role (id, title, salary, department_id)
VALUES
  (1, "Assistant", 51000, 1);
INSERT INTO
  role (id, title, salary, department_id)
VALUES
  (2, "Product Manager", 72000, 1);
INSERT INTO
  role (id, title, salary, department_id)
VALUES
  (3, "Department Manager", 95000, 2);
INSERT INTO
  role (id, title, salary, department_id)
VALUES
  (4, "Division Manager", 100000, 2);
INSERT INTO
  role (id, title, salary, department_id)
VALUES
  (5, "Business Partner", 200000, 3);
INSERT INTO
  role (id, title, salary, department_id)
VALUES
  (6, "Human Resource Director", 98000, 3);
INSERT INTO
  role (id, title, salary, department_id)
VALUES
  (7, "IT Support", 79000, 4);
INSERT INTO
  role (id, title, salary, department_id)
VALUES
  (8, "IT Coordinator", 60000, 4);
INSERT INTO
  role (id, title, salary, department_id)
VALUES
  (9, "IT Manager", 104000);
INSERT INTO
  employees (id, first_name, last_name, role_id, manager_id)
VALUES
  (10, "Gil", "Orcilla", 9, null);
INSERT INTO
  employees (id, first_name, last_name, role_id, manager_id)
VALUES
  (9, "Bob", "Villa", 8, 10);
INSERT INTO
  employees (id, first_name, last_name, roles_id, manager_id)
VALUES
  (8, "Wil", "Choi", 7, 10);
INSERT INTO
  employees (id, first_name, last_name, roles_id, manager_id)
VALUES
  (7, "Dan", "Bios", 6, null);
INSERT INTO
  employees (id, first_name, last_name, roles_id, manager_id)
VALUES
  (6, " Jeff ", " Nguyen ", 1, 7);
INSERT INTO
  employees (id, first_name, last_name, roles_id, manager_id)
VALUES
  (5, " Vic ", " Morris ", 4, null);
INSERT INTO
  employees (id, first_name, last_name, roles_id, manager_id)
VALUES
  (4, " Rachel ", " Brown ", 1, null);
INSERT INTO
  employees (id, first_name, last_name, roles_id, manager_id)
VALUES
  (3, " Taylor ", " McDonald ", 2, 4);
INSERT INTO
  employees (id, first_name, last_name, rolesid, manager_id)
VALUES
  (2, " Sina ", " Zumsayed ", 1, 3);
INSERT INTO
  employees (id, first_name, last_name, roles_id, manager_id)
VALUES
  (1, " Jessica ", " Newsome ", 1, 3);