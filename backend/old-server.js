const express = require("express");
const db = require("./database");

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello World!");
})



// Sending...
// { "name": "StudyFlow", "status": "running"}

app.get('/api', (req, res) => {
    res.json({
        "name": "StudyFlow",
        "status": "running"
    })
})

app.post("/api/sessions", (req, res) => {

    if (req.body.duration <= 0) {
        res.status(400).json({"error": "Invalid duration"});
    } else {

        const statement = db.prepare(`
            INSERT INTO sessions (subject, duration)
            VALUES (?, ?)
        `);

        statement.run(req.body.subject, req.body.duration);

        console.log(req.body);
        res.json(req.body);
        console.log("200 OK");
    }

})

app.get("/api/sessions", (req, res) => {

    const sessions = db.prepare("SELECT * FROM sessions").all();

    res.json(sessions);

})

// Route parameter: A dynamic value in a URL used to identify a specific resource, e.g. /api/sessions/:id.
app.get('/api/sessions/:id', (req, res) => {
    let found = false;
    for (let i = 0; i < sessions.length; i++) {
        if (sessions[i].id === Number(req.params.id)) {
            res.json(sessions[i]);
            found = true;
        }
    };
    if (!found) {
        res.status(404).json({"error": "Session not found"})
    }
})

app.put("/api/sessions/:id", (req, res) => {
    let found = false;
    for (let i = 0; i < sessions.length; i++) {
        if (sessions[i].id === Number(req.params.id)) {
            if (req.body.duration <= 0) {
                res.status(400).json({"error": "Invalid duration time for session!"})
            } else {
                let temp = {
                    "id": sessions[i].id,
                    "subject": req.body.subject,
                    "duration": req.body.duration
                };
                sessions[i] = temp;
                res.json(temp);
                found = true;
            }
        }
    };
    if (!found) {
        res.status(404).json({"error": "Session not found"})
    }
})

app.delete("/api/sessions/:id", (req, res) => {

    let id = req.params.id;
    let reference = -1;

    for (let i = 0; i < sessions.length; i++) {

        if (sessions[i].id === Number(id)) {
            reference = i;
            break;
        }
    }

    if (reference === -1) {
        res.status(404).json({ "error": "Session not found" });
    } else {
        sessions.splice(reference, 1);
        res.status(204).send();
    }

})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
