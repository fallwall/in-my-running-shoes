import React from 'react';
import RaceUpdate from './RaceUpdate';
import Notes from './Notes';
import NoteForm from './NoteForm';
import RacePageHeader from './RacePageHeader';
import Jump from 'react-reveal/Jump';
import { withRouter } from 'react-router-dom';

import {
  oneRace,
  deleteRace,
  updateRace,
  fetchNotes,
  createNote
} from '../services/api';

class Race extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      race: [],
      notes: [],
      raceUpdateForm: {
        name: "",
        date: "",
        description: "",
        location: "",
        organization: "",
        distance: "",
        website: "",
        user_id: "",
        all_tags: ""
      },
      isEditing: false,
      noteForm: {
        messgae: "",
        finish_time: "",
        bib_number: "",
        race_id: "",
        user_id: ""
      },
      isAddingNewNote: false
    }
  }

  componentDidMount = async () => {
    const race = await oneRace(this.props.id);
    const notes = await fetchNotes(this.props.id);

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
        user_id: this.props.currentUser
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
        location: this.state.race.location,
        organization: this.state.race.organization,
        distance: this.state.race.distance,
        website: this.state.race.website,
        all_tags: this.state.race.all_tags
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
        location: "",
        organization: "",
        distance: "",
        website: "",
        all_tags: ""
      }
    }))
  }

  removeRace = async (id) => {
    await deleteRace(id);
    this.props.history.push('/races');
  }

  addNote = (ev) => {
    ev.preventDefault();
    this.setState(prevState => ({
      isAddingNewNote: !prevState.isAddingNewNote,
      noteForm: {
        ...prevState.noteForm,
        message: "",
        finish_time: "",
        bib_number: "",
        user_id: this.props.currentUser.id
      }
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

  render() {
    return (
      <div>
        <div className="race-info">
          {this.state.race && <RacePageHeader race={this.state.race.name} />}
          <p><span>Description:</span> {this.state.race.description}</p>
          <p><span>Location:</span> {this.state.race.location}</p>
          <p><span>Organizer:</span> {this.state.race.organization}</p>
          <p><span>Distance: </span>{this.state.race.distance} Miles</p>
          <p><span>Website: </span><a href={this.state.race.website}>{this.state.race.website}</a></p>
          <p><span>Race Date: </span>{Date(this.state.race.date).toString().split(" ").slice(0, 4).join(" ")}</p>
          <p><span>Tags: </span>{this.state.race.all_tags}</p>
          {this.props.currentUser &&
            (<>
              {this.props.currentUser.id === this.state.race.user_id &&
                (<><Jump><button onClick={() => this.handleUpdate()}>{this.state.isEditing ? "Cancel Update" : "Update"}</button></Jump>
                  <Jump><button onClick={(ev) => { ev.preventDefault(); this.removeRace(this.props.id) }}>Delete</button></Jump></>)}
              <Jump><button onClick={this.addNote}>{this.state.isAddingNewNote ? "Cancel Adding Note" : "Add A Note"}</button></Jump>

              {!this.props.currentUser && <div className="prompt">LOGIN TO LEAVE A COMMENT</div>}</>)}
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
            user_id={this.props.currentUser.id}
          />}
        {this.props.currentUser &&
          <Notes race_id={this.props.id}
            notes={this.state.notes}
            user_id={this.props.currentUser.id} />}

      </div>

    )
  }
}

export default withRouter(Race);