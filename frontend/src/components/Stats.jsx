import {useState, useEffect} from "react";

export default function Stats(props) {
    const [stats, setStats] = useState({});
    const {sessions} = props;
    
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

    useEffect(() => {
        // Fetch data from your Node.js server
        fetch('http://localhost:3000/api/stats') // Use the correct URL for your server
        .then(response => response.json())
        .then(data => {
            setStats(data);
            console.log(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

        
    }, [sessions]); 

    let timesStudied = stats.mostStudiedSubject?.countId;
    return (
        <>
            <div className="stats">
                <div className="stats-container">
                    <h1>Total Sessions</h1>
                    <p className="stats-p">{stats.sessionCount?.countId}</p>
                </div>
                <div className="stats-container">
                    <h1>Study Time</h1>
                    <p className="stats-p">{formatDuration(stats.totalStudyTime?.totalTime)}</p>
                </div>
                <div className="stats-container">
                    <h1>Top Subject</h1>
                    <p className="stats-p">{stats.mostStudiedSubject?.subject}</p>
                    
                </div>
            </div>
        </>
    )
}