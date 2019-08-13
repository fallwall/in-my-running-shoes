import React from 'react';
import { Link, withRouter } from 'react-router-dom';

export default function Races(props) {
  return (
    <div>
      {props.races.map(race => <div key={race.id} className="race"><h2>{race.name}</h2>
        <Link to={`/races/${race.id}`}>See details</Link>
      </div>)}
    </div>
      )
      }
