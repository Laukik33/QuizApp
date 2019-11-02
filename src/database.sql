show databases;

CREATE database quiz_db;
use quiz_db;
CREATE TABLE QuizUsers(
userID int NOT NULL PRIMARY KEY ,
firstName VARCHAR(50),
lastName VARCHAR(50),
email VARCHAR(50),
score VARCHAR(30),
timeSpent int
);