import React from 'react';
import {
  oneNote,
  updateNote,
  deleteNote
} from '../services/api';
import { withRouter, Link } from 'react-router-dom';
import NoteUpdate from './NoteUpdate';
import NotePageHeader from './NotePageHeader';

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: [],
      isUpdating: false,
      noteUpdateForm: {
        message: "",
        finish_time: "",
        bib_number: "",
        race_id: "",
        user_id: ""
      }
    }
  }

  componentDidMount = async () => {
    const race_id = parseInt(this.props.race_id);
    const id = parseInt(this.props.id);
    const note = await oneNote(race_id, id);
    this.setState(prevState => ({
      note: note,
      noteUpdateForm: {
        ...prevState.noteUpdateForm,
        race_id: race_id
      }
    }))
  }

  handleUpdate = async () => {
    this.setState(prevState => ({
      isUpdating: !prevState.isUpdating,
      noteUpdateForm: {
        ...prevState.noteUpdateForm,
        message: this.state.note.message,
        finish_time: this.state.note.finish_time,
        bib_number: this.state.note.bib_number
      }
    }))
  }

  handleNoteFormChange = (ev) => {
    const { name, value } = ev.target;
    this.setState(prevState => ({
      noteUpdateForm: {
        ...prevState.noteUpdateForm,
        [name]: value
      }
    }))
  }

  updateSubmit = async (ev) => {
    const race_id = parseInt(this.props.race_id);
    const id = parseInt(this.props.id);
    const note = await updateNote(race_id, id, this.state.noteUpdateForm);
    this.setState({
      note: note
    })
    this.props.history.push(`/races/${race_id}/notes/${id}`);
  }

  removeNote = async () => {
    await deleteNote(this.props.race_id, this.props.id);
    this.props.history.push(`/races/${this.props.race_id}`);
  }


  render() {
    return (
      <div>
        <NotePageHeader />
        <h2>{this.state.note.message}</h2>
        <p>{this.state.note.finish_time}</p>
        <p>{this.state.note.bib_number}</p>
        {this.props.currentUser &&
          this.props.id === this.props.currentUser.id &&
          <>
            <button onClick={this.handleUpdate}>{this.state.isUpdating ? "Cancel Updating" : "Update"}</button>}
          <button onClick={() => this.removeNote()}>Delete</button>
          </>}
        {this.state.isUpdating &&
          <NoteUpdate
            noteForm={this.state.noteUpdateForm}
            handleNoteFormChange={this.handleNoteFormChange}
            updateNote={this.updateSubmit}
          />}
        <Link to={`/races/${this.state.note.race_id}`}>Return to Race</Link>
      </div>
    )
  }
}


export default withRouter(Note);
