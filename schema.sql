DROP DATABASE IF EXISTS movies_db;
CREATE DATABASE movies_db;
USE movies_db;

CREATE TABLE movies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE reviews(
    id INT AUTO_INCREMENT PRIMARY KEY,
    movie_id INT NOT NULL,
    review TEXT,
    FOREIGN KEY (movie_id)
    REFERENCES movies(id)
);