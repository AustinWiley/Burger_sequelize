CREATE DATABASE burger_sequalize_d;
USE burger_sequalize_d;

CREATE TABLE burgers (
  id Int( 11 ) AUTO_INCREMENT,
  burger_name VARCHAR( 255) NOT NULL,
  devoured BOOLEAN NOT NULL,
  createdAt TIMESTAMP NOT NULL,
  PRIMARY KEY ( id ) 
);