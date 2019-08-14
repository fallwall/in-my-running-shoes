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
        <Link to="/new/race">Add A Race</Link>
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
          <Link to="/races"> All Races </Link>
          <Link to="/new/race"> Add a Race </Link>
        </div>


        <div className="social">

        </div>
      </div>

    )
  }
}
