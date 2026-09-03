const express = require("express");
const db = require("./database");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/api", (req, res) => {
    res.json({
        name: "StudyFlow",
        status: "running"
    });
});

// CREATE SESSION
app.post("/api/sessions", (req, res) => {
    const { subject, duration, date } = req.body;

    if (!subject || subject.trim() === "") {
        return res.status(400).json({
            error: "Subject is required"
        });
    }

    if (!duration || duration <= 0) {
        return res.status(400).json({
            error: "Invalid duration"
        });
    }

    if (!date) {
        return res.status(400).json({
            error: "Date is required"
        });
    }

    const statement = db.prepare(`
        INSERT INTO sessions (subject, duration, date)
        VALUES (?, ?, ?)
    `);

    const result = statement.run(
        subject.trim(),
        duration,
        date
    );

    const session = db.prepare(
        "SELECT * FROM sessions WHERE id = ?"
    ).get(result.lastInsertRowid);

    res.status(201).json(session);
});

// GET ALL SESSIONS
app.get("/api/sessions", (req, res) => {
    const sessions = db.prepare(
        "SELECT * FROM sessions ORDER BY id DESC"
    ).all();

    res.json(sessions);
});

// GET ONE SESSION
app.get("/api/sessions/:id", (req, res) => {
    const session = db.prepare(
        "SELECT * FROM sessions WHERE id = ?"
    ).get(req.params.id);

    if (!session) {
        return res.status(404).json({
            error: "Session not found"
        });
    }

    res.json(session);
});

// UPDATE SESSION
app.put("/api/sessions/:id", (req, res) => {
    const { subject, duration, date } = req.body;

    if (!subject || subject.trim() === "") {
        return res.status(400).json({
            error: "Subject is required"
        });
    }

    if (!duration || duration <= 0) {
        return res.status(400).json({
            error: "Invalid duration"
        });
    }

    if (!date) {
        return res.status(400).json({
            error: "Date is required"
        });
    }

    const result = db.prepare(`
        UPDATE sessions
        SET subject = ?, duration = ?, date = ?
        WHERE id = ?
    `).run(
        subject.trim(),
        duration,
        date,
        req.params.id
    );

    if (result.changes === 0) {
        return res.status(404).json({
            error: "Session not found"
        });
    }

    const session = db.prepare(
        "SELECT * FROM sessions WHERE id = ?"
    ).get(req.params.id);

    res.json(session);
});

// DELETE SESSION
app.delete("/api/sessions/:id", (req, res) => {
    const result = db.prepare(
        "DELETE FROM sessions WHERE id = ?"
    ).run(req.params.id);

    if (result.changes === 0) {
        return res.status(404).json({
            error: "Session not found"
        });
    }

    res.status(204).send();
});

app.get("/api/stats", (req, res) => {
    let sessionCount = db.prepare("SELECT COUNT(id) AS countId FROM sessions;").get();
    let totalStudyTime = db.prepare("SELECT SUM(duration) AS totalTime FROM sessions;").get();
    let mostStudiedSubject = db.prepare(`
    SELECT subject, COUNT(id) AS countId
    FROM sessions
    GROUP BY subject
    ORDER BY countId DESC
    LIMIT 1;     
    `).get();
    
    
    
    let stats = {
        "sessionCount": sessionCount,
        "totalStudyTime": totalStudyTime,
        "mostStudiedSubject": mostStudiedSubject
    }
    res.json(stats)
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});