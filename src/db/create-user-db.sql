CREATE SCHEMA IF NOT EXISTS test_db;
SET search_path TO test_db;
DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
                        id SERIAL PRIMARY KEY,
                        username VARCHAR(100) NOT NULL,
                        password VARCHAR(100) NOT NULL,
                        first_name VARCHAR(100) NOT NULL,
                        last_name VARCHAR(100) NOT NULL,
                        email VARCHAR(100) UNIQUE NOT NULL,
                        age INT DEFAULT 0
);
DROP TABLE IF EXISTS vehicules CASCADE;
CREATE TABLE vehicules (
                        id SERIAL PRIMARY KEY,
                        marque VARCHAR(100) NOT NULL,
                        modele VARCHAR(100) NOT NULL,
                        annee INT,
                        couleur VARCHAR(50),
                        immatriculation VARCHAR(20) UNIQUE
);
