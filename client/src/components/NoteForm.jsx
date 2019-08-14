import React from 'react';

export default function NoteForm(props) {
  return (
    <div className="note-form">
      <form onSubmit={props.newNote}>
        <label for="message"> Message </label>
        <input type="text"
          name="message"
          value={props.noteForm.message}
          onChange={props.handleNoteFormChange} />
        <label for="finish_time"> Finish Time </label>
        <input type="text"
          name="finish_time"
          value={props.noteForm.finish_time}
          onChange={props.handleNoteFormChange} />
        <label for="bib_number"> Bib Number </label>
        <input type="text"
          name="bib_number"
          value={props.noteForm.bib_number}
          onChange={props.handleNoteFormChange} />
        <input type="hidden"
          name="race_id"
          value={props.noteForm.race_id}
          onChange={props.handleNoteFormChange} />
        <input type="hidden"
          name="user_id"
          value={props.currentUser.id}
          onChange={props.handleNoteFormChange} />
        <button>Submit</button>
        <button onClick={props.cancelAddingNote}>Cancel</button>
      </form>
    </div>
  )
}
