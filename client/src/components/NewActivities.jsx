import React, { Component } from 'react';
import { fetchActivities } from '../services/api';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { Link } from 'react-router-dom';
import Jump from 'react-reveal/Jump';

export default class NewActivities extends Component {
  constructor() {
    super();
    this.state = {
      activities: []
    }
  }

  componentDidMount = async () => {
    const activities = await fetchActivities();
    this.setState({
      activities: activities
    })
  }



  render() {
    return (
      <ParallaxProvider>
        <div className="new-activities">
          <Parallax
            y={[20, -25]}
          >
            <div className="new-act-main">
              <Jump><h2>NEWEST ACTIVITIES</h2></Jump>
              {this.state.activities.map(act =>
                <div className="act" key={act.id}>
                  {act.owner &&
                    < Link to={`/profile/${act.owner.id}`}>{act.owner.username}</Link>}
                  {act.key.split(".")[1] + " "}
                  a
                  {act.trackable_type.toLowerCase()}
                  @ {Date(act.updated_at).slice(3, 24)}.
                  {/* {act.created_at} */}
                </div>)}
            </div>
          </Parallax>
          <Parallax
            x={[-13, 13]}
            y={[50, -50]}
          >
            <div className="new-act-back">
            </div>
          </Parallax>
        </div>
      </ParallaxProvider>
    )
  }
}
