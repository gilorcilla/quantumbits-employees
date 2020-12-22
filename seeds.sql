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