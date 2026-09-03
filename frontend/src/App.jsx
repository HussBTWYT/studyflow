import { useState, useEffect } from "react";
import { Routes, Route } from "react-router";

import Landing from "./components/Landing.jsx";
import Home from "./components/Home.jsx";
import Session from "./components/Session.jsx";

function App() {
    const [sessions, setSessions] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/api/sessions")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to fetch sessions");
                }

                return response.json();
            })
            .then(data => {
                setSessions(data);
            })
            .catch(error => {
                console.error("Could not load sessions:", error);
            });
    }, []);

    return (
        <Routes>
            <Route
                path="/"
                element={<Landing />}
            />

            <Route
                path="/home"
                element={
                    <Home
                        sessions={sessions}
                        setSessions={setSessions}
                    />
                }
            />

            <Route
                path="/session"
                element={<Session setSessions={setSessions} />}
            />

            <Route
                path="/session/:id"
                element={<Session />}
            />
        </Routes>
    );
}

export default App;