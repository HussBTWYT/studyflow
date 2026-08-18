import React, { useState, useRef, useEffect } from 'react';
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

function Stopwatch(props) {
    const [isRunning, setIsRunning] = useState(false);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    const { elapsedTime, setElapsedTime } = props;

    useEffect(() => {
        if (isRunning) {
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10);
        }

        return () => {
            clearInterval(intervalIdRef.current);
        }
    }, [isRunning]);

    function start() {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }

    function stop() {
        setIsRunning(false);
    }

    function formatTime() {
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime / 1000 % 60);
        let milliseconds = Math.floor((elapsedTime % 1000) / 10);

        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        milliseconds = String(milliseconds).padStart(2, "0");

        return `${minutes}:${seconds}:${milliseconds}`;
    }

    return (
        <div className="stopwatch">
            <div className="display">{formatTime()}</div>

            <div className="controls">
                <button onClick={start} className="start-button">
                    Start Session
                </button>

                <button onClick={stop} className="stop-button">
                    Pause Session
                </button>
            </div>
        </div>
    );
}

export default function Session(props) {
    const [input, setInput] = useState("");
    const [subject, setSubject] = useState("");
    const date = getCurrentDate();
    const [sessionTime, setSessionTime] = useState("");
    const navigate = useNavigate();
    const [elapsedTime, setElapsedTime] = useState(0);

    const { sessions, setSessions } = props;

    const { id } = useParams();

    const existingSession = sessions.find(session => session.id === id);

    // VIEW EXISTING SESSION
    if (id) {
        if (!existingSession) {
            return (
                <div className="timer">
                    <h1 className="header-text">Session not found.</h1>
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
                    Duration: {formatDuration(existingSession.elapsedTime)}
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

    function endSession() {
        setSessionTime(sessionTime => elapsedTime);

        setSessions([...sessions, {
            id: crypto.randomUUID(),
            date,
            subject,
            elapsedTime
        }]);

        navigate("/home");
    }

    // CREATE NEW SESSION
    if (subject === "") {
        return (
            <div>
                <div className='subject'>
                    <h1 className='header-text'>
                        What subject will you be studying?
                    </h1>

                    <input
                        value={input}
                        onChange={(e) => {
                            setInput(e.target.value);
                        }}
                        placeholder='Enter subject...'
                    />

                    <button
                        onClick={() => {
                            setSubject(input);
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
        <div className='timer'>
            <h1 className='header-text'>{subject}</h1>

            <Stopwatch
                elapsedTime={elapsedTime}
                setElapsedTime={setElapsedTime}
            />

            <button
                onClick={endSession}
                className='submit-time-btn'
            >
                End Session
            </button>
        </div>
    );
}