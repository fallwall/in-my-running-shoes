import React, { Component } from 'react';
import { fetchNewRaces } from '../services/api';
import { Link } from 'react-router-dom';

export default class NewestRaces extends Component {
  constructor() {
    super();
    this.state = {
      races: []
    }
  }

  componentDidMount = async () => {
    const races = await fetchNewRaces();
    this.setState({
      races: races
    })
    console.log(races);
  }

  render() {
    return (
      <div className="new-races">
        {this.state.races.map(race =>
          <div key={race.id} className="race">
            <h2>{race.name}</h2>
            <Link className="detail-link" to={`/races/${race.id}`}>See details</Link>
          </div>
        )}
      </div>
    )
  }
}
