import React from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

export default function NotePageHeader() {
  return (
    <div>
 <div className="race-page">
      <ParallaxProvider>
        <div>
          <Parallax x={[-5, 5]}>
            Note
          </Parallax>
        </div>
      </ParallaxProvider>
    </div>
    </div>
  )
}
