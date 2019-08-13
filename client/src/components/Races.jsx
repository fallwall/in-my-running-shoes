import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';

export default function Races(props) {
  return (
    <div>
      {props.races.map(race => <div className="race"><h2>{race.name}</h2>
      </div>)}
    </div>
      )
      }
