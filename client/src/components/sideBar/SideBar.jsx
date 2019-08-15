import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../assets/sneaker-icon.png';

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
        

        <div className="login">
          {this.props.currentUser
            ?
            <div className="sidebar-icon-name">
              <img src={Icon} className="sidebar-icon" alt="profile" />
              <div className="sidebar-name">{this.props.currentUser.username}</div>
              <button onClick={this.props.handleLogout}>LOGOUT</button>
            </div>
            :
            <div className="sidebar-icon-name">
              <button onClick={this.props.handleLoginButton}>LOGIN/REG</button>
            </div>
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
