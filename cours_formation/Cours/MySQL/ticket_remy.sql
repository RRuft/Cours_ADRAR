CREATE DATABASE Ticket;
USE Ticket;

CREATE TABLE articles (
	id_article INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nom_produit VARCHAR(200) UNIQUE NOT NULL,
    prix_article DECIMAL(15,2)
)ENGINE = innoDB;

CREATE TABLE apparaitre (
	id_article INT,
    id_ticket INT,
    quantite INT
)ENGINE = innoDB;

CREATE TABLE ticket (
	id_ticket INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    date_ticket DATETIME NOT NULL,
    id_vendeur INT
)ENGINE = innoDB;

CREATE TABLE vendeur (
	id_vendeur INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nom_vendeur VARCHAR(200) NOT NULL,
    prenom_vendeur VARCHAR(200) NOT NULL
)ENGINE = innoDB;

ALTER TABLE apparaitre ADD CONSTRAINT FOREIGN KEY (id_article) REFERENCES articles(id_article);
ALTER TABLE apparaitre ADD CONSTRAINT FOREIGN KEY (id_ticket) REFERENCES ticket(id_ticket);
ALTER TABLE ticket ADD CONSTRAINT FOREIGN KEY (id_vendeur) REFERENCES vendeur(id_vendeur);
ALTER TABLE apparaitre ADD COLUMN id_apparaitre INT;
ALTER TABLE apparaitre ADD PRIMARY KEY (id_apparaitre);
ALTER TABLE vendeur ADD COLUMN age_vendeur INT;

CREATE TABLE utilisateur(
	id_user INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    login_user VARCHAR(50) UNIQUE NOT NULL
)ENGINE = innoDB;

CREATE TABLE `role`(
	id_role INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    role VARCHAR(150) NOT NULL
)ENGINE = innoDB;

ALTER TABLE utilisateur ADD COLUMN id_role INT;
ALTER TABLE utilisateur ADD CONSTRAINT FOREIGN KEY (id_role) REFERENCES `role`(id_role);
ALTER TABLE apparaitre MODIFY COLUMN id_apparaitre INT AUTO_INCREMENT NOT NULL;



