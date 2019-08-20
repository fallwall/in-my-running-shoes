import React from 'react';

export default function NoteForm(props) {
  return (
    <div className="note-form" >
      <form onSubmit={props.newNote}>
        <label htmlFor="message"> Message </label>
        <input type="text"
          name="message"
          value={props.noteForm.message}
          onChange={props.handleNoteFormChange}
          required/>
        <label htmlFor="finish_time"> Finish Time </label>
        <input type="text"
          name="finish_time"
          value={props.noteForm.finish_time}
          onChange={props.handleNoteFormChange} />
        <label htmlFor="bib_number"> Bib Number </label>
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
          value={props.user_id}
          onChange={props.handleNoteFormChange} />
        <button>Submit</button>

      </form>
    </div>
  )
}
