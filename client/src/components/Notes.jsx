import React from 'react';
import { Link } from 'react-router-dom';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

export default function Notes(props) {
  return (
    <ParallaxProvider>
      <div>
        {props.notes.map((note, i) =>
          <Parallax
            x={i % 2 === 0 ? [0, 20] : [0, -20]}>
            <div key={note.id} className="note"><h2>{note.message}</h2>
              <Link to={`/races/${props.race_id}/notes/${note.id}`}>Note Details</Link>
            </div>
          </Parallax>)}

      </div>
      </ParallaxProvider>
      )
    }
