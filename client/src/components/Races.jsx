import React from 'react';
import { Link } from 'react-router-dom';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

export default function Races(props) {
  return (
    <ParallaxProvider>
      <div>
        {props.races.map((race, i) =>
          <Parallax
            x={i % 2 === 0 ? [0, -20] : [0, 20]}>
            <div key={race.id} className="race"><h2>{race.name}</h2>
              <Link to={`/races/${race.id}`}>See details</Link>
            </div>
          </Parallax>)}

      </div>
    </ParallaxProvider>
  )
}
