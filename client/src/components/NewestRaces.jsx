import React, { Component } from 'react';
import { fetchNewRaces } from '../services/api';
import { Link } from 'react-router-dom';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import Jump from 'react-reveal/Jump';

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
      races: races.slice(0,6)
    })
    console.log(races);
  }

  render() {
    return (
      <ParallaxProvider>
        <div className="new-races">
          <Parallax
            y={[20, -25]}
          >
            <div className="new-race-main">
              <Jump><h2>NEWEST RACE</h2></Jump>
              {this.state.races.map(race =>
                <div key={race.id} className="race-new">
                  <h2>{race.name}</h2>
                  <p>Creted by {race.user.username}</p>
                  <p>@ {race.user.created_at}</p>
                  <Link className="detail-link" to={`/races/${race.id}`}>See details</Link>
                </div>
              )}
            </div>
          </Parallax>
          <Parallax
            x={[15, -15]}
            y={[50, -50]}
          >
            <div className="new-race-back">
            </div>
          </Parallax>
        </div>
      </ParallaxProvider>
    )
  }
}
