import React, { Component } from 'react';
import { fetchActivities } from '../services/api';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

export default class NewActivities extends Component {
  constructor() {
    super();
    this.state = {
      activities: []
    }
  }

  componentDidMount = async () => {
    const resp = await fetchActivities();
    const activities = Object.assign(resp.notes, resp.races).sort((a, b) => (b.created_at > a.created_at) ? 1 : -1).slice(0, 5);
    this.setState({
      activities: activities
    })
    console.log(activities);
  }

  actType = (item) => {
    return item.message ? <div>{item.message}</div> : <div>{item.name}</div>;
  }

  render() {
    return (
      <ParallaxProvider>
        <div className="new-activities">
          <Parallax
            y={[20, -25]}
          >
            <div className="new-act-main">
              <h2>NEWEST ACTIVITIES</h2>
              {this.state.activities.map((act, i) =>
                <div className="act" key={i}>
                  {this.actType(act)}
                  {act.created_at}
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
