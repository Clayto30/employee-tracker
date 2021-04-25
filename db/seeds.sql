INSERT INTO department (name)
VALUES
    ('Pitching'),
    ('Infield'), 
    ('Outfield'), 
    ('Coaching');

INSERT INTO roles (title, salary, departmen_id)
VALUES
    ('First base', 3,500,000, 2),
    ('Third base', 3,000,000, 2),
    ('Pitcher', 3,000,000, 1),
    ('Right Field', 3,000,000, 3),
    ('Shortstop', 1,000,000, 2),
    ('Manager', 80,100, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Matt', 'Olson', 1, 5),
    ('Matt', 'Chapman', 2, 1),
    ('Stephen', 'Piscotty', 4, 1),
    ('Elvis', 'Andrus', 5, 2),
    ('Sean', 'Manaea', 3, 7),
    ('Mike', 'Fiers', 3, 7)
    ('Bob', 'Melvin', 6, null);
    