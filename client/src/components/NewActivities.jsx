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
      <div className="new-activities">
        <h2>NEWEST ACTIVITIES</h2>
        {this.state.activities.map(act =>
          <div className="act">
            {this.actType(act)}
            {act.created_at}
          </div>)}
      </div>
    )
  }
}
