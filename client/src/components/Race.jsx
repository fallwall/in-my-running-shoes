import React from 'react';
import { OneRace } from '../services/api';

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
      }
    }
  }

  componentDidMount = async () => {
    const race = await OneRace(this.props.id);
    this.setState(prevState => ({
      race: race,
      raceUpdateForm: {
        ...prevState.raceUpdateForm,
        user_id: this.props.user_id
      }
    }))
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
        </div>
        <button>Update</button>
        <button>Delete</button>
      </div>
    )
  }
}
