CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
  id Int( 11 ) AUTO_INCREMENT,
  burger_name VARCHAR( 255) NOT NULL,
  devoured BOOLEAN NOT NULL,
  createdAt TIMESTAMP NOT NULL,
  PRIMARY KEY ( id ) 
);