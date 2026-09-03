import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Sessions({ sessions, setSessions }) {
    const [sessionToDelete, setSessionToDelete] = useState(null);
    const navigate = useNavigate();

    function formatTime(elapsedTime) {
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

    async function deleteSession() {
        try {
            const response = await fetch(
                `http://localhost:3000/api/sessions/${sessionToDelete}`,
                {
                    method: "DELETE"
                }
            );

            if (!response.ok) {
                throw new Error("Failed to delete session");
            }

            setSessions(
                sessions =>
                    sessions.filter(
                        session => session.id !== sessionToDelete
                    )
            );

            setSessionToDelete(null);
        } catch (error) {
            console.error(error);
            alert("Could not delete the session.");
        }
    }

    if (sessions.length === 0) {
        return (
            <div className="sessions">
                <h1 className="hero-text">
                    No sessions found.
                </h1>

                <p>
                    Try adding a new session.
                </p>
            </div>
        );
    }

    return (
        <>
            <div className="sessions-list">
                {sessions.map((session) => (
                    <div
                        key={session.id}
                        className="session-container"
                    >
                        <div className="session-main-info">
                            <p className="session-label">
                                STUDY SESSION
                            </p>

                            <h1>
                                {session.subject}
                            </h1>

                            <p className="session-date">
                                <i className="fa-regular fa-calendar"></i>
                                Studied on the {session.date}
                            </p>
                        </div>

                        <div className="session-duration">
                            <span>Duration</span>

                            <strong>
                                {formatTime(session.duration)}
                            </strong>
                        </div>

                        <div className="session-actions">
                            <button
                                className="view-session-btn"
                                onClick={() =>
                                    navigate(`/session/${session.id}`)
                                }
                            >
                                <i className="fa-solid fa-arrow-right-long"></i>
                            </button>

                            <button
                                className="delete-session-btn"
                                onClick={() =>
                                    setSessionToDelete(session.id)
                                }
                            >
                                <i className="fa-solid fa-trash"></i>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {sessionToDelete && (
                <div className="modal-overlay">
                    <div className="delete-modal">
                        <h2>
                            Delete Session?
                        </h2>

                        <p>
                            Are you sure you want to delete this session?
                            This action cannot be undone.
                        </p>

                        <div className="modal-buttons">
                            <button
                                className="cancel-delete"
                                onClick={() =>
                                    setSessionToDelete(null)
                                }
                            >
                                Cancel
                            </button>

                            <button
                                className="confirm-delete"
                                onClick={deleteSession}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}