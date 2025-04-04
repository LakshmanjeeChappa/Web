mysql> CREATE DATABASE NoteTakingApp;
Query OK, 1 row affected (0.02 sec)

mysql> USE NoteTakingApp;
Database changed
mysql> CREATE TABLE USER (
    ->     USERID INT PRIMARY KEY AUTO_INCREMENT,
    ->     FullName VARCHAR(255),
    ->     FirstName VARCHAR(255),
    ->     LastName VARCHAR(255),
    ->     Email VARCHAR(255) UNIQUE NOT NULL,
    ->     Password VARCHAR(255) NOT NULL
    -> );
Query OK, 0 rows affected (0.13 sec)

mysql> CREATE TABLE SECTION (
    ->     SECTIONID INT PRIMARY KEY AUTO_INCREMENT,
    ->     SectionName VARCHAR(255),
    ->     Description TEXT,
    ->     SectionType VARCHAR(100),
    ->     TimeCreated TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ->     TimeUpdated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    ->     USERID INT,
    ->     FOREIGN KEY (USERID) REFERENCES USER(USERID) ON DELETE CASCADE
    -> );
Query OK, 0 rows affected (0.10 sec)

mysql> CREATE TABLE NOTE (
    ->     NOTEID INT PRIMARY KEY AUTO_INCREMENT,
    ->     Title VARCHAR(255),
    ->     Content TEXT,
    ->     TimeCreated TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ->     TimeUpdated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    ->     USERID INT,
    ->     SECTIONID INT,
    ->     FOREIGN KEY (USERID) REFERENCES USER(USERID) ON DELETE CASCADE,
    ->     FOREIGN KEY (SECTIONID) REFERENCES SECTION(SECTIONID) ON DELETE SET NULL
    -> );
Query OK, 0 rows affected (0.12 sec)

mysql> CREATE TABLE TAG (
    ->     TAGID INT PRIMARY KEY AUTO_INCREMENT,
    ->     Identifier VARCHAR(255) UNIQUE,
    ->     TimeCreated TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ->     TimeUpdated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    ->     USERID INT,
    ->     FOREIGN KEY (USERID) REFERENCES USER(USERID) ON DELETE CASCADE
    -> );
Query OK, 0 rows affected (0.17 sec)

mysql> CREATE TABLE NOTE_TAG (
    ->     NOTEID INT,
    ->     TAGID INT,
    ->     PRIMARY KEY (NOTEID, TAGID),
    ->     FOREIGN KEY (NOTEID) REFERENCES NOTE(NOTEID) ON DELETE CASCADE,
    ->     FOREIGN KEY (TAGID) REFERENCES TAG(TAGID) ON DELETE CASCADE
    -> );
Query OK, 0 rows affected (0.10 sec)

mysql> SHOW TABLES;
+-------------------------+
| Tables_in_notetakingapp |
+-------------------------+
| note                    |
| note_tag                |
| section                 |
| tag                     |
| user                    |
+-------------------------+
5 rows in set (0.01 sec)