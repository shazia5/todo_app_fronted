CREATE DATABASE mytodolist;

USE mytodolist;


USE user;
CREATE TABLE user (userId BIGINT(20) NOT NULL AUTO_INCREMENT, name VARCHAR(50), surname VARCHAR(50), PRIMARY KEY(userId));

INSERT INTO user (userId, name, surname) VALUES ("1", "Shazia", "Mumtaz");

INSERT INTO user (userId, name, surname) VALUES ("2", "Naveed", "Kirmani");
SELECT * FROM user;
+--------+--------+---------+
| userId | name   | surname |
+--------+--------+---------+
|      1 | Shazia | Mumtaz  |
|      2 | Naveed | Kirmani |
+--------+--------+---------+
2 rows in set (0.02 sec)

USE task;
CREATE TABLE task (id VARCHAR(50), taskDescription VARCHAR(100), completed VARCHAR(20), creationDate DATE, userId BIGINT(20), PRIMARY KEY (id));

ALTER TABLE task ADD FOREIGN KEY (userId) REFERENCES user(userId);
USE task
INSERT INTO task (id, taskDescription, completed, creationDate, userId) VALUES ("001", "Buy milk ", "false", "2019-11-16", "1");

INSERT INTO task (id, taskDescription, completed, creationDate, userId) VALUES ("002", "Iman's PTA @ 6 pm", "false", "2019-11-16", "1");

INSERT INTO task (id, taskDescription, completed, creationDate, userId) VALUES ("003", "Pickup prescription", "false", "2019-11-15", "1");

INSERT INTO task (id, taskDescription, completed, creationDate, userId) VALUES ("004", "Order Inhaler", "false", "2019-11-16", "2");

SELECT * FROM task;

+-----+--------------------+-----------+--------------+--------+
| id  | taskDescription    | completed | creationDate | userId |
+-----+--------------------+-----------+--------------+--------+
| 001 | Buy milk           | false     | 2019-11-16   |      1 |
| 002 | Buy bread          | false     | 2019-11-16   |      1 |
| 003 | Order Inhaler      | false     | 2019-11-15   |      1 |
| 004 | Arryans PTA @ 6PM  | false     | 2019-11-16   |      2 |
+-----+--------------------+-----------+--------------+--------+
4 rows in set (0.01 sec)
