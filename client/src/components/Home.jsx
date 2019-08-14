import React from 'react'
import NewestRaces from './NewestRaces';
import NewActivities from './NewActivities';

export default function Home() {
  return (
    <div>
      <div className="race-and-act">
        <NewestRaces />
        <NewActivities />
      </div>
    </div>
  )
}
