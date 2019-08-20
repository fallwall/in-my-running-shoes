import React from 'react';

export default function NoteUpdate(props) {
  return (
    <div className="note-update">
      <form onSubmit={props.updateNote}>
        <label htmlFor="message">Message</label>
        <input type="text"
          name="message"
          value={props.noteForm.message}
          onChange={props.handleNoteFormChange}
          required/>
        <label htmlFor="finish_time">Finish Time</label>
        <input type="text"
          name="finish_time"
          value={props.noteForm.finish_time}
          onChange={props.handleNoteFormChange} />
        <label htmlFor="bib_number">Bib Number</label>
        <input type="text"
          name="bib_number"
          value={props.noteForm.bib_number}
          onChange={props.handleNoteFormChange} />
        <button>Submit</button>
      </form>
    </div>
  )
}
