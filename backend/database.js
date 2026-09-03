const Database = require("better-sqlite3");

const db = new Database("studyflow.db");

db.exec(`
    CREATE TABLE IF NOT EXISTS sessions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        subject TEXT NOT NULL,
        duration INTEGER NOT NULL,
        date TEXT NOT NULL
    )
`);

module.exports = db;