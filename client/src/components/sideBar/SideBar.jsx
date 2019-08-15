import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className={this.props.sidebar ? "side-bar" : "hidden"}>
        <div className="user-name">
        </div>
        <button>Profile</button>

        <div className="login">
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
        <div className="regular-nav-link">
          <Link to="/about"> About </Link>
          <Link to="/races"> All Races </Link>
          <button onClick={this.props.addRace}>Add a Race</button>
        </div>


        <div className="social">

        </div>
      </div>

    )
  }
}
