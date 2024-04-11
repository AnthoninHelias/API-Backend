-- Adminer 4.8.1 PostgreSQL 16.0 (Debian 16.0-1.pgdg120+1) dump

DROP TABLE IF EXISTS "users";
DROP SEQUENCE IF EXISTS users_id_seq;
CREATE SEQUENCE users_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "test_db"."users" (
                                   "id" integer DEFAULT nextval('users_id_seq') NOT NULL,
                                   "username" character varying(100) NOT NULL,
                                   "password" character varying(100) NOT NULL,
                                   "first_name" character varying(100) NOT NULL,
                                   "last_name" character varying(100) NOT NULL,
                                   "email" character varying(100) NOT NULL,
                                   "age" integer DEFAULT '0',
                                   CONSTRAINT "users_email_key" UNIQUE ("email"),
                                   CONSTRAINT "users_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "users" ("id", "username", "password", "first_name", "last_name", "email", "age") VALUES
                                                                                                  (2,	'utilisateur2',	'motdepasse2',	'Prénom2',	'Nom2',	'utilisateur2@email.com',	30),
                                                                                                  (3,	'utilisateur3',	'motdepasse3',	'Prénom3',	'Nom3',	'utilisateur3@email.com',	35),
                                                                                                  (1,	'bonjour',	'hotel',	'Prénom1',	'Nom1',	'utilisateur1@email.com',	25);

DROP TABLE IF EXISTS "vehicules";
DROP SEQUENCE IF EXISTS vehicules_id_seq;
CREATE SEQUENCE vehicules_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "test_db"."vehicules" (
                                       "id" integer DEFAULT nextval('vehicules_id_seq') NOT NULL,
                                       "marque" character varying(100) NOT NULL,
                                       "modele" character varying(100) NOT NULL,
                                       "annee" integer,
                                       "couleur" character varying(50),
                                       "immatriculation" character varying(20),
                                       CONSTRAINT "vehicules_immatriculation_key" UNIQUE ("immatriculation"),
                                       CONSTRAINT "vehicules_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "vehicules" ("id", "marque", "modele", "annee", "couleur", "immatriculation") VALUES
                                                                                              (1,	'Marque1',	'Modele1',	2020,	'Rouge',	'ABC123'),
                                                                                              (2,	'Marque2',	'Modele2',	2018,	'Bleu',	'XYZ789'),
                                                                                              (3,	'Marque3',	'Modele3',	2022,	'Vert',	'123XYZ');

-- 2024-04-11 09:02:27.981864+00








INSERT INTO users (username, password, first_name, last_name, email, age)
VALUES ('utilisateur1', 'motdepasse1', 'Prénom1', 'Nom1', 'utilisateur1@email.com', 25),
       ('utilisateur2', 'motdepasse2', 'Prénom2', 'Nom2', 'utilisateur2@email.com', 30),
       ('utilisateur3', 'motdepasse3', 'Prénom3', 'Nom3', 'utilisateur3@email.com', 35);

INSERT INTO vehicules (marque, modele, annee, couleur, immatriculation)
VALUES ('Marque1', 'Modele1', 2020, 'Rouge', 'ABC123'),
       ('Marque2', 'Modele2', 2018, 'Bleu', 'XYZ789'),
       ('Marque3', 'Modele3', 2022, 'Vert', '123XYZ');