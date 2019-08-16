import React, { Component } from 'react';
import ProfileInfo from './ProfileInfo';
import UserUpdate from './UserUpdate';
import {
  fetchUserProfile
} from '../../services/api';

export default class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      profile_id: "",
      profile_username: "",
      profile_name: "",
      profile_races: [],
      profile_notes: [],
      currentUser_id: ""
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
    this.setCurrentUser();
  }

  setCurrentUser = () => {
    if (this.props.currentUser) {
      this.setState({
        currentUser_id: this.props.currentUser.id
      });  
    }
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
        {
          parseInt(this.state.currentUser_id) === parseInt(this.props.id) &&
          <UserUpdate
            profileUser={this.props.id}
          />}
      
      </div>
    )
  }
}
