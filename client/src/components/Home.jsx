import React from 'react'
import NewestRaces from './NewestRaces';
import NewActivities from './NewActivities';
import NewUsers from './NewUsers';

export default function Home() {
  return (
    <div>
      <div className="race-and-act">
        <NewestRaces />
        <div className="race-and-act-left">
          <NewActivities />
          <NewUsers />
        </div>
      </div>
    </div>
  )
}
