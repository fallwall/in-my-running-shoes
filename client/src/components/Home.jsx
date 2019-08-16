import React from 'react'
import NewestRaces from './NewestRaces';
import NewActivities from './NewActivities';
import NewUsers from './NewUsers';
import Stats from './Stats';

export default function Home() {
  return (
    <div>
      <div className="race-and-act">
        <div className="race-and-act-right">
          <Stats />
          <NewestRaces />
        </div>
        <div className="race-and-act-left">
          <NewActivities />
          <NewUsers />
        </div>
      </div>
    </div>
  )
}
