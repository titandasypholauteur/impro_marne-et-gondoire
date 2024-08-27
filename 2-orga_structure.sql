CREATE DATABASE utilisateurs_db;
USE utilisateurs_db;

CREATE TABLE utilisateurs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    prenom VARCHAR(50),
    nom VARCHAR(50),
    email VARCHAR(50),
    telephone VARCHAR(20),
    message TEXT
);
