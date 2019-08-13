import React from 'react';

export default function Notes(props) {
  return (
    <div>
      {props.notes.map(note => <div key={note.id}>{note.message}</div>)}
    </div>
  )
}
