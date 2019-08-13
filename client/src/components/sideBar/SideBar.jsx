import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SideBar extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  
  render() {
    return (
      <div className="side-bar">
        <div className="user-name">
        </div>
        <button>Profile</button>
        <Link to="/new/race">Add A Race</Link>
        <div>
            {this.props.currentUser
              ?
              <>
                <p>{this.props.currentUser.username}</p>
                <button onClick={this.props.handleLogout}>LOGOUT</button>
              </>
              :
              <button onClick={this.props.handleLoginButton}>LOGIN/REG</button>
            }
          </div>
      </div>
    )
  }
}
