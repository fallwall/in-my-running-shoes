import React, { Component } from 'react';
import ProfileInfo from './ProfileInfo';

export default class Profile extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return (
      <div className="profile-page">
        <ProfileInfo />

      </div>
    )
  }
}
