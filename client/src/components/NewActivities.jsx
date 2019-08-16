import React, { Component } from 'react';
import { fetchActivities } from '../services/api';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import Jump from 'react-reveal/Jump';

export default class NewActivities extends Component {
  constructor() {
    super();
    this.state = {
      activities: []
    }
  }

  componentDidMount = async () => {
    const resp = await fetchActivities();
    const newData = [...resp.notes, ...resp.races]
    if (newData) {
      const activities = newData.sort((a, b) => (Date.parse(a.created_at) < Date.parse(b.created_at)) ? 1 : -1).slice(0, 5);
      this.setState({
        activities: activities
      })
    }
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
              <Jump><h2>NEWEST ACTIVITIES</h2></Jump>
              {this.state.activities.map((act, i) =>
                <div className="act" key={i}>
                  {this.actType(act)}
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
