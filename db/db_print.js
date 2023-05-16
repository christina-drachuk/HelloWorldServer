const db = require("./db_connection");

const select_subjects_sql = "SELECT * FROM subjects";

db.execute(select_subjects_sql, 
    (error, results) => {
        if (error) 
            throw error;
        console.log("Table 'subjects' contents:")
        console.log(results);}
);

const select_item_sql = `
    SELECT *
    FROM item
    JOIN subjects
        ON item.subjectId = subjects.subjectId
    ORDER BY item.itemId`;

db.execute(select_item_sql,
    (error, results) => {
        if (error) 
            throw error;

        console.log("Table 'assignments' contents:")
        console.log(results);
    }
);

db.end();