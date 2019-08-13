import React from 'react';

export default function NoteUpdate(props) {
  return (
    <div className="note-update">
    <form onSubmit={props.updateNote}>
      <input type="text"
        name="message"
        value={props.noteForm.message}
        onChange={props.handleNoteFormChange} />
      <input type="text"
        name="finish_time"
        value={props.noteForm.finish_time}
        onChange={props.handleNoteFormChange} />
      <input type="text"
        name="bib_number"
        value={props.noteForm.bib_number}
        onChange={props.handleNoteFormChange} />
      <button>Submit</button>
    </form>
  </div>
  )
}
