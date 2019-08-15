import React from 'react';
import RaceUpdate from './RaceUpdate';
import Notes from './Notes';
import NoteForm from './NoteForm';
import RacePageHeader from './RacePageHeader';

import {
  oneRace,
  deleteRace,
  updateRace,
  fetchNotes,
  createNote
} from '../services/api';

export default class Race extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      race: [],
      notes: [],
      raceUpdateForm: {
        name: "",
        date: "",
        description: "",
        city: "",
        state: "",
        country: "",
        organization: "",
        distance: "",
        website: "",
        user_id: ""
      },
      isEditing: false,
      noteForm: {
        messgae: "",
        finish_time: "",
        bib_number: "",
        race_id: "",
        user_id: ""
      }
    }
  }

  componentDidMount = async () => {
    const race = await oneRace(this.props.id);
    const notes = await fetchNotes(this.props.id);
    // this.props.currentUser &&
    this.setState(prevState => ({
      race: race,
      notes: notes,
      raceUpdateForm: {
        ...prevState.raceUpdateForm,
        user_id: this.props.user_id
      },
      noteForm: {
        ...prevState.noteForm,
        race_id: this.props.id,
        user_id: this.props.currentUser.id
      }
    }))
  }

  handleUpdate = () => {
    this.setState(prevState => ({
      isEditing: !prevState.isEditing,
      raceUpdateForm: {
        ...prevState.raceUpdateForm,
        name: this.state.race.name,
        date: this.state.race.date,
        description: this.state.race.description,
        city: this.state.race.city,
        state: this.state.race.state,
        country: this.state.race.country,
        organization: this.state.race.organization,
        distance: this.state.race.distance,
        website: this.state.race.website
      }
    }))
  }

  handleUpdateChange = (ev) => {
    const { name, value } = ev.target;
    this.setState(prevState => ({
      raceUpdateForm: {
        ...prevState.raceUpdateForm,
        [name]: value
      }
    }))
  }

  handleUpdateSubmit = async (ev) => {
    const race = await updateRace(this.props.id, this.state.raceUpdateForm);
    this.setState(prevState => ({
      race: race,
      raceUpdateForm: {
        ...prevState.raceUpdateForm,
        name: "",
        date: "",
        description: "",
        city: "",
        state: "",
        country: "",
        organization: "",
        distance: "",
        website: ""
      },
      isAddingNewNote: false
    }))
  }

  removeRace = async (id) => {
    await deleteRace(id);
    this.props.history.push('/races');
  }

  addNote = (id) => {
    this.setState(prevState => ({
      isAddingNewNote: !prevState.isAddingNewNote
    })
    );
  }

  // -------------- CREATE NOTE ------------------
  newNote = async (ev) => {
    ev.preventDefault();
    const note = await createNote(this.props.id, this.state.noteForm);
    this.setState(prevState => ({
      notes: [...prevState.notes, note],
      noteForm: {
        ...prevState.noteForm,
        message: "",
        finish_time: "",
        bib_number: ""
      },
      isAddingNewNote: false
    }))
  }

  handleNoteFormChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      noteForm: {
        ...prevState.noteForm,
        [name]: value
      }
    }))
  }

  cancelAddingNote = () => {
    this.setState(prevState => ({
      noteForm: {
        ...prevState.noteForm,
        message: "",
        finish_time: "",
        bib_number: ""
      },
      isAddingNewNote: false
    }))
  }


  render() {
    return (
      <div>
        <div className="race-info">
          {this.state.race && <RacePageHeader race={this.state.race.name} />}
          <p><span>Description:</span> {this.state.race.description}</p>
          <p><span>Location:</span> {this.state.race.city}, {this.state.race.state}, {this.state.race.country}</p>
          <p><span>Organizer:</span> {this.state.race.organization}</p>
          <p><span>Distance: </span>(in Mile): {this.state.race.distance}</p>
          <p><span>Website: </span><a href={this.state.race.website}>{this.state.race.website}</a></p>
          <button onClick={() => this.handleUpdate()}>{this.state.isEditing ? "Cancel Update" : "Update"}</button>
          <button onClick={() => this.removeRace(this.props.id)}>Delete</button>
          <button onClick={() => this.addNote(this.props.id)}>Add A Note</button>
        </div>
        {this.state.isEditing &&
          <RaceUpdate id={this.props.id}
            raceUpdateForm={this.state.raceUpdateForm}
            handleUpdateChange={this.handleUpdateChange}
            handleUpdateSubmit={this.handleUpdateSubmit}
          />

        }
        {this.state.isAddingNewNote &&
          <NoteForm
            handleNoteFormChange={this.handleNoteFormChange}
            noteForm={this.state.noteForm}
            newNote={this.newNote}
            currentUser={this.props.currentUser}
            cancelAddingNote={this.cancelAddingNote}
          />}

        <Notes race_id={this.props.id} notes={this.state.notes} />


      </div>

    )
  }
}
