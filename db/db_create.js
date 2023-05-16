const db = require("./db_connection")

const drop_subjects_table_sql = "DROP TABLE IF EXISTS subjects;"
db.execute(drop_subjects_table_sql)

const drop_item_table_sql = "DROP TABLE IF EXISTS item;"
db.execute(drop_item_table_sql)

const create_subjects_table_sql = `
    CREATE TABLE subjects (
        subjectId INT NOT NULL AUTO_INCREMENT,
        subjectName VARCHAR(45) NOT NULL,
        PRIMARY KEY (subjectId));`

db.execute(create_subjects_table_sql);

const create_item_table_sql = `
    CREATE TABLE item (
        itemId INT NOT NULL AUTO_INCREMENT,
        title VARCHAR(45) NOT NULL,
        priority INT NULL,
        subjectId INT NOT NULL,
        PRIMARY KEY (itemId),
        INDEX itemSubject_idx (subjectId ASC),
        CONSTRAINT itemSubject
            FOREIGN KEY (subjectId)
            REFERENCES subjects (subjectId)
            ON DELETE RESTRICT
            ON UPDATE CASCADE);`

db.execute(create_item_table_sql);

db.end();