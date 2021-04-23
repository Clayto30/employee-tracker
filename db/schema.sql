CREATE TABLE departments (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL
);

CREATE TABLE roles (
    job_title VARCHAR(30) NOT NULL,
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  CONSTRAINT fk_dept FOREIGN KEY (departments_name) REFERENCES departments(name),
  salary INTEGER(30) NOT NULL
);

CREATE TABLE employees (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  CONSTRAINT fk_roles FOREIGN KEY (roles_job_title) REFERENCES roles(job_title),
  managers VARCHAR(30) NOT NULL
);


--   CONSTRAINT uc_voter UNIQUE (voter_id),
--   CONSTRAINT fk_voter FOREIGN KEY (voter_id) REFERENCES voters(id) ON DELETE CASCADE,
--   CONSTRAINT fk_candidate FOREIGN KEY (candidate_id) REFERENCES candidates(id) ON DELETE CASCADE