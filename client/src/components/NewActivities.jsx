import React, { Component } from 'react';
import { fetchActivities } from '../services/api';

export default class NewActivities extends Component {
  constructor() {
    super();
    this.state = {
      activities: []
    }
  }

  componentDidMount = async () => {
    const resp = await fetchActivities();
    const activities = Object.assign(resp.notes, resp.races).sort((a, b) => (b.created_at > a.created_at) ? 1 : -1);
    this.setState({
      activities: activities
    })
    console.log(activities);
  }

  render() {
    return (
      <div className="new-activities">
        <h2>NEWEST ACTIVITIES</h2>
        {this.state.activities.map(act =>
          <div className="act">
            {act.created_at}
          </div>)}
      </div>
    )
  }
}
