const db = require("./db_connection")

const delete_subjects_table_sql = "DELETE FROM subjects;"
db.execute(delete_subjects_table_sql);

const delete_item_table_sql = "DELETE FROM item;"
db.execute(delete_item_table_sql);

const insert_subject_sql = `
    INSERT INTO subjects
        (subjectId, subjectName)
    VALUES(?, ?);`

db.execute(insert_subject_sql, [1, 'Cleaning']);
db.execute(insert_subject_sql, [2, 'Errands']);
db.execute(insert_subject_sql, [3, 'Pet care']);

const insert_item_sql = `
    INSERT INTO item
        (title, priority, subjectId)
    VALUES
        (?, ?, ?);`

db.execute(insert_item_sql, ['Vacuuming', 1, 1]);
db.execute(insert_item_sql, ['Go grocery shopping', 2, 2]);
db.execute(insert_item_sql, ['Take dog to groomer', 3, 3]);

db.end();

