import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router";

function getCurrentDate() {
    const date = new Date();
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });

    let suffix = "th";

    if (day === 1 || day === 21 || day === 31) {
        suffix = "st";
    } else if (day === 2 || day === 22) {
        suffix = "nd";
    } else if (day === 3 || day === 23) {
        suffix = "rd";
    }

    return `${day}${suffix} ${month}`;
}

function formatDuration(elapsedTime) {
    const totalSeconds = Math.floor(elapsedTime / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    if (hours > 0 && minutes > 0 && seconds > 0) {
        return `${hours} hour${hours !== 1 ? "s" : ""} and ${minutes} minute${minutes !== 1 ? "s" : ""} and ${seconds} second${seconds !== 1 ? "s" : ""}`;
    }

    if (hours > 0 && minutes > 0) {
        return `${hours} hour${hours !== 1 ? "s" : ""} and ${minutes} minute${minutes !== 1 ? "s" : ""}`;
    }

    if (hours > 0) {
        return `${hours} hour${hours !== 1 ? "s" : ""}`;
    }

    if (minutes > 0 && seconds > 0) {
        return `${minutes} minute${minutes !== 1 ? "s" : ""} and ${seconds} second${seconds !== 1 ? "s" : ""}`;
    }

    if (minutes > 0) {
        return `${minutes} minute${minutes !== 1 ? "s" : ""}`;
    }

    return `${seconds} second${seconds !== 1 ? "s" : ""}`;
}

function Stopwatch({ elapsedTime, setElapsedTime }) {
    const [isRunning, setIsRunning] = useState(false);

    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if (isRunning) {
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10);
        }

        return () => {
            clearInterval(intervalIdRef.current);
        };
    }, [isRunning, setElapsedTime]);

    function start() {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }

    function stop() {
        setIsRunning(false);
    }

    function formatTime() {
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
        let seconds = Math.floor((elapsedTime / 1000) % 60);
        let milliseconds = Math.floor((elapsedTime % 1000) / 10);

        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        milliseconds = String(milliseconds).padStart(2, "0");

        return `${hours}:${minutes}:${seconds}:${milliseconds}`;
    }

    return (
        <div className="stopwatch">
            <div className="display">
                {formatTime()}
            </div>

            <div className="controls">
                <button
                    onClick={start}
                    className="start-button"
                    disabled={isRunning}
                >
                    Start Session
                </button>

                <button
                    onClick={stop}
                    className="stop-button"
                    disabled={!isRunning}
                >
                    Pause Session
                </button>
            </div>
        </div>
    );
}

export default function Session({ setSessions }) {
    const [input, setInput] = useState("");
    const [subject, setSubject] = useState("");
    const [elapsedTime, setElapsedTime] = useState(0);
    const [existingSession, setExistingSession] = useState(null);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const { id } = useParams();

    const date = getCurrentDate();

    // VIEW EXISTING SESSION
    useEffect(() => {
        if (!id) return;

        fetch(`https://studyflow-api-0pjw.onrender.com/api/sessions/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Session not found");
                }

                return response.json();
            })
            .then(data => {
                setExistingSession(data);
            })
            .catch(() => {
                setExistingSession(null);
            });
    }, [id]);

    if (id) {
        if (!existingSession) {
            return (
                <div className="timer">
                    <h1 className="header-text">
                        Session not found.
                    </h1>

                    <button
                        className="submit-time-btn"
                        onClick={() => navigate("/home")}
                    >
                        Back
                    </button>
                </div>
            );
        }

        return (
            <div className="timer">
                <h1 className="header-text">
                    {existingSession.subject}
                </h1>

                <p>
                    Studied on {existingSession.date}
                </p>

                <p>
                    Duration: {formatDuration(existingSession.duration)}
                </p>

                <button
                    className="submit-time-btn"
                    onClick={() => navigate("/home")}
                >
                    Back
                </button>
            </div>
        );
    }

    async function endSession() {
        if (elapsedTime <= 0) {
            alert("You need to study for at least a second before ending the session.");
            return;
        }

        setLoading(true);

        const newSession = {
            subject: subject.trim(),
            duration: elapsedTime,
            date: date
        };

        try {
            const response = await fetch(
                "https://studyflow-api-0pjw.onrender.com/api/sessions",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(newSession)
                }
            );

            if (!response.ok) {
                throw new Error("Failed to save session");
            }

            const savedSession = await response.json();

            setSessions(prevSessions => [
                savedSession,
                ...prevSessions
            ]);

            navigate("/home");
        } catch (error) {
            console.error(error);
            alert("Could not save the session. Make sure the backend server is running.");
        } finally {
            setLoading(false);
        }
    }

    // CREATE NEW SESSION
    if (subject === "") {
        return (
            <div>
                <div className="subject">
                    <h1 className="header-text">
                        What subject will you be studying?
                    </h1>

                    <input
                        value={input}
                        onChange={(e) => {
                            setInput(e.target.value);
                        }}
                        placeholder="Enter subject..."
                    />

                    <button
                        onClick={() => {
                            if (input.trim() !== "") {
                                setSubject(input.trim());
                            }
                        }}
                        className="submit-subject"
                    >
                        Submit Subject
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="timer">
            <h1 className="header-text">
                {subject}
            </h1>

            <Stopwatch
                elapsedTime={elapsedTime}
                setElapsedTime={setElapsedTime}
            />

            <button
                onClick={endSession}
                className="submit-time-btn"
                disabled={loading}
            >
                {loading ? "Saving..." : "End Session"}
            </button>
        </div>
    );
}