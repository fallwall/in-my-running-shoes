import React from 'react';
import Shake from 'react-reveal/Shake';

export default function RacePageHeader(props) {
  return (
    <div className="race-page-race-name">
      <Shake>
        {props.race}
      </Shake>
    </div>
  )
}
