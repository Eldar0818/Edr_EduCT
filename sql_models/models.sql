CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userId VARCHAR(150),
    username VARCHAR(150),
    phone VARCHAR(50),
    email VARCHAR(150),
    password VARCHAR(150)
);

CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(150),
    lastname VARCHAR(150),
    course VARCHAR(150),
    startingDate VARCHAR(150),
    email VARCHAR(150),
    phone VARCHAR(50)
);

CREATE TABLE teachers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(150),
    lastname VARCHAR(150),
    course VARCHAR(150),
    email VARCHAR(150),
    phone VARCHAR(50),
    salary DECIMAL(7, 2)
);