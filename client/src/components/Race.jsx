import React from 'react';
import RaceUpdate from './RaceUpdate';
import Notes from './Notes';

import {
  oneRace,
  deleteRace,
  updateRace,
  fetchNotes
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
      isEditing: false
    }
  }

  componentDidMount = async () => {
    const race = await oneRace(this.props.id);
    const notes = await fetchNotes(this.props.id);
    this.setState(prevState => ({
      race: race,
      notes, notes,
      raceUpdateForm: {
        ...prevState.raceUpdateForm,
        user_id: this.props.user_id
      }
    }))
  }

  handleUpdate = () => {
    this.setState(prevState => ({
      isEditing: !prevState.isEditing,
      raceUpdateForm: {
        name: this.state.race.name,
        date: this.state.race.date,
        description: this.state.race.description,
        city: this.state.race.city,
        state: this.state.race.state,
        country: this.state.race.country,
        organization: this.state.race.organization,
        distance: this.state.race.distance,
        website: this.state.race.website,
        user_id: this.props.user_id
      }
    }))
  }

  handleChange = (ev) => {
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
      }
    }))
  }

  removeRace = async (id) => {
    const resp = deleteRace(id);
    this.props.history.push('/races');
  }

  addNote = (id) => {
    this.props.history.push(`/races/${id}`);
  }

  render() {
    return (
      <div>
        <div className="race-info">
          <p>{this.state.race.name}</p>
          <p>Description: {this.state.race.description}</p>
          <p>Location: {this.state.race.city}, {this.state.race.state}, {this.state.race.country}</p>
          <p>Organizer: {this.state.race.organization}</p>
          <p>Distance (in Mile): {this.state.race.distance}</p>
          <p>Website: {this.state.race.website}</p>
          <button onClick={() => this.handleUpdate()}>{this.state.isEditing ? "Cancel Update" : "Update"}</button>
          <button onClick={() => this.removeRace(this.props.id)}>Delete</button>
          <button onClick={() => this.addNote(this.props.id)}>Add A Note</button>
        </div>
        {this.state.isEditing &&
          <RaceUpdate id={this.props.id}
            raceForm={this.state.raceUpdateForm}
            handleChange={this.handleChange}
            handleUpdateSubmit={this.handleUpdateSubmit}
          />

        }
        <Notes race_id={this.props.id} notes={this.state.notes}/>
      </div>

    )
  }
}
