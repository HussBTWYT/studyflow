import React from 'react'
import Dashboard from "./Dashboard";

export default function Home(props) {
  const {sessions, setSessions} = props;
  return (
    <div>
      <Dashboard sessions={sessions} setSessions={setSessions} />
    </div>
  )
}
