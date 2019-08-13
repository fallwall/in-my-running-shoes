import React from 'react';
import { oneNote, updateNote, deleteNote } from '../services/api';
import { withRouter } from 'react-router-dom';
import NoteUpdate from './NoteUpdate';

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
        race_id: ""
      }
    }
  }

  componentDidMount = async () => {
    const note = await oneNote(this.props.race_id, this.props.id);
    this.setState(prevState => ({
      note: note,
      noteUpdateForm: {
        ...prevState.noteUpdateForm,
        race_id: this.props.race_id
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

  updateSubmit = async () => {
    const note = await updateNote(this.props.race_id, this.props.id, this.state.noteUpdateForm);
    this.setState({
      note: note
    })
  }

  removeNote = async (race_id, id) => {
    await deleteNote(race_id, id);
    this.props.history.push(`/races/${this.props.race_id}`);
  }


  render() {
    return (
      <div>
        <h2>{this.state.note.message}</h2>
        <p>{this.state.note.finish_time}</p>
        <p>{this.state.note.bib_number}</p>
        <button onClick={this.handleUpdate}>{this.state.isUpdating ? "Cancel Updating" : "Update"}</button>
        <button onClick={() => this.removeNote(this.props.race_id, this.props.id)}>Delete</button>
        {this.state.isUpdating && <NoteUpdate
          noteForm={this.state.noteUpdateForm}
          handleNoteFormChange={this.handleNoteFormChange}
          updateNote={this.updateSubmit}
        />}
      </div>
    )
  }
}


export default withRouter(Note);
