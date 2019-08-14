import React from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

export default function RacePageHeader(props) {
  return (
    <div className="race-page">
      <ParallaxProvider>
        <div>
          <Parallax x={[-5, 5]}>
            {props.race}
          </Parallax>
        </div>
      </ParallaxProvider>
    </div>
  )
}
