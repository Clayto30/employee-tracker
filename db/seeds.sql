INSERT INTO department (name)
VALUES
    ('Pitching'),
    ('Infield'), 
    ('Outfield'), 
    ('Coaching');

INSERT INTO roles (title, salary, department_id)
VALUES
    ('First base', 3500000, 2),
    ('Third base', 3000000, 2),
    ('Pitcher', 3000000, 1),
    ('Right Field', 3000000, 3),
    ('Shortstop', 1000000, 2),
    ('Manager', 80100, 4);

INSERT INTO employee (first_name, last_name, roles_id, manager_id)
VALUES
    ('Bob', 'Melvin', 6, NULL),
    ('Matt', 'Olson', 1, 1),
    ('Matt', 'Chapman', 2, 2),
    ('Stephen', 'Piscotty', 4, 3),
    ('Elvis', 'Andrus', 5, 2),
    ('Sean', 'Manaea', 3, 2),
    ('Mike', 'Fiers', 3, 3);
     