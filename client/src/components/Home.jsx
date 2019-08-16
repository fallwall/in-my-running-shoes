import React from 'react'
import NewestRaces from './NewestRaces';
import NewActivities from './NewActivities';
import NewUsers from './NewUsers';
import Stats from './Stats';

export default function Home() {
  return (
    <div>
      <Stats />
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
