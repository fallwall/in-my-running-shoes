import React, { Component } from 'react';
import ProfileInfo from './ProfileInfo';
import { fetchUserProfile } from '../../services/api';

export default class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      profile_id: "",
      profile_username: "",
      profile_name: "",
      profile_races: [],
      profile_notes: []
    }
  }

  componentDidMount = async () => {
    const resp = await fetchUserProfile(this.props.id);
    const profile_id = resp.id;
    const profile_username = resp.username;
    const profile_name = resp.name;
    const profile_races = resp.races;
    const profile_notes = resp.notes;
    this.setState({
      profile_id: profile_id,
      profile_username: profile_username,
      profile_name: profile_name,
      profile_races: profile_races,
      profile_notes: profile_notes
    })
  }

  render() {
    return (
      <div className="profile-page">
        <ProfileInfo
          profile_id={this.state.profile_id}
          profile_username={this.state.profile_username}
          profile_name={this.state.profile_id.name}
          profile_races={this.state.profile_races}
          profile_notes={this.state.profile_notes}
          currentUser={this.props.currentUser}
        />
      </div>
    )
  }
}
