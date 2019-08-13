import React from 'react';

export default function NoteForm(props) {
  return (
    <div className="note-form">
      <form onSubmit={props.newNote}>
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
        <input type="hidden"
          name="race_id"
          value={props.noteForm.race_id}
          onChange={props.handleNoteFormChange} />
        <button>Submit</button>
      </form>
    </div>
  )
}
