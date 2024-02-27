DROP SCHEMA IF EXISTS test_db CASCADE;
CREATE SCHEMA IF NOT EXISTS test_db;
SET search_path TO test_db;
DROP TABLE IF EXISTS "user" CASCADE;
CREATE TABLE "user" (

                        id SERIAL PRIMARY KEY,
                        username VARCHAR(100) NOT NULL,
                        password VARCHAR(100) NOT NULL,
                        first_name VARCHAR(100) NOT NULL,
                        last_name VARCHAR(100) NOT NULL,
                        email VARCHAR(100) UNIQUE NOT NULL,
                        age INT DEFAULT 0
);