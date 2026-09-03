import React from 'react'
import Sessions from "./Sessions"
import Stats from "./Stats"
import { NavLink } from 'react-router'
import { useEffect } from 'react';

export default function Dashboard(props) {
    const {sessions, setSessions} = props;

    return (
        <>
            <div className='dashboard-options'>
                <div>
                    <p className="dashboard-label">YOUR DASHBOARD</p>
                    <h1 className='dashboard-title'>Recent Sessions</h1>
                </div>

                <NavLink to="/session" end>
                    <button className="new-session-btn">
                        <span>+</span> New Session
                    </button>
                </NavLink>
            </div>

            <Stats sessions={sessions} />

            <Sessions sessions={sessions} setSessions={setSessions} />
        </>
    )
}