import { useState, useEffect } from "react";
import { Routes, Route } from "react-router";
import Landing from "./components/Landing.jsx";
import Home from "./components/Home.jsx";
import Session from "./components/Session.jsx";

function App() {
  // Local Storage implementation with sessions state
  const [sessions, setSessions] = useState(() => {
    const savedSessions = localStorage.getItem("sessions");

    return savedSessions ? JSON.parse(savedSessions) : [];
  });

  useEffect(() => {
    localStorage.setItem("sessions", JSON.stringify(sessions));
  }, [sessions]);

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
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
        element={
          <Session
            sessions={sessions}
            setSessions={setSessions}
          />
        }
      />

      <Route
        path="/session/:id"
        element={
          <Session
            sessions={sessions}
            setSessions={setSessions}
          />
        }
      />
    </Routes>
  );
}

export default App;