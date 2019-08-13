import React from 'react';
import { Link } from 'react-router-dom';

export default function Notes(props) {
  return (
    <div>
      {props.notes.map(note => <div key={note.id} className="note">
        <h2>{note.message}</h2>
        <Link to={`/races/${props.race_id}/notes/${note.id}`}>Note Details</Link>
      </div>)}
    </div>
  )
}
