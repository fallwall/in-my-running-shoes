import React from 'react'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import Shoe from '../assets/cortez.jpeg';
import Shoe2 from '../assets/cortezp.png';

export default function Headerr() {
  return (
    <ParallaxProvider>
      <div className="shoe-container">
        <Parallax
          x={[-140, 20]}
          y={[20, -50]}
        >
          <img
            className="shoe-left"
            src={Shoe}
            alt="nike cortez"
          />
        </Parallax>
        <Parallax
          x={[140, -20]}
          y={[20, -50]}
        >
          <img
            className="shoe-right"
            src={Shoe2}
            alt="nike cortez"
          />
        </Parallax>
      </div>
    </ParallaxProvider>
  )
}
