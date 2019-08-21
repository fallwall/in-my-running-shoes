import React from 'react';
import { Link } from 'react-router-dom';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { SSL_OP_CRYPTOPRO_TLSEXT_BUG } from 'constants';

export default function RaceResult(props) {
  return (
    <ParallaxProvider>
      <div>

        {props.races &&
          <>
            {props.races.map((race, i) =>
              <Parallax
                x={i % 2 === 0 ? [0, -20] : [0, 20]}>
                <div key={race.id} className="race"><h2>{race.name}</h2>
                  <Link className="detail-link" to={`/races/${race.id}`}>See details</Link>
                </div>
              </Parallax>
            )}
            <Link to="/races">Return to All Races</Link>
          </>

        }
      </div>
    </ParallaxProvider>
  )
}