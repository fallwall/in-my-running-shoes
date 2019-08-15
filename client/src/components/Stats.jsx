import React, { Component } from 'react';
import { fetchNewUsers } from '../services/api';
import { userInfo } from 'os';

export default class Stats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      usersNumber: ""
    }
  }

  componentDidMount = async () => {
    const users = await fetchNewUsers();
    const usersNumber = users.length;
    this.setState({
      users: users,
      usersNumber: usersNumber
    })
  }

  render() {
    return (
      <div className="site-stats">
        <div className="stat1">
          {this.state.usersNumber} Members
        </div>
      </div>
    )
  }
}

