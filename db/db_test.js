const db = require("./db_connection")

// query
db.execute('SELECT 1 + 1 AS solution', 
    (error, results) => {
        if (error)
            throw error;
        console.log(results);
    }
);

db.end()

// to run
// terminal > node db/db_test.js
// nothing bad should happen