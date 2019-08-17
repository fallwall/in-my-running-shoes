import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../assets/sneaker-icon.png';
import Music from '../../assets/music.png';
import Github from '../../assets/sidebar-github.png';
import Runner from '../../assets/sidebar-runner.png';
import Copyright from '../../assets/sidebar-copyright.png';
import Bounce from 'react-reveal/Bounce';
import Jump from 'react-reveal/Jump';

export default class SideBar extends Component {
  render() {
    return (
      <div className={this.props.sidebar ? "side-bar" : "hidden"}>
        <div className="sidebar-login">
          {this.props.currentUser &&
            (<div className="sidebar-icon-name">
              <img src={Icon} className="sidebar-icon" alt="profile" />
              <div className="sidebar-name"><Jump>{this.props.currentUser.username}</Jump></div>
            </div>)
          }
        </div>
        <div className="sidebar-nav">
          {this.props.currentUser &&
            <Link to={{ pathname: `/profile/${this.props.currentUser.id}`, state: "refreshProfile" }}>  <Bounce>Profile</Bounce> </Link>}
          <Link to="/">  <Bounce>Home</Bounce> </Link>
          <Link to="/about"> <Bounce>About</Bounce> </Link>
          <Link to="/races"> <Bounce>All Races</Bounce> </Link>
          {this.props.currentUser &&
            <button onClick={this.props.addRace}> <Bounce>Add a Race</Bounce> </button>}
        </div>
        <div className="social">
          <a href="https://sherunsfreely.com"><Jump><img src={Copyright} alt="link to author" /></Jump></a>
          <a href="https://github.com/fallwall/in-my-running-shoes"><Jump><img src={Github} alt="link to github" /></Jump></a>
          <a href="https://www.strava.com/athletes/18133452"><Jump><img src={Runner} alt="link to strava lol" /></Jump></a>
          <a href="https://music.apple.com/us/playlist/coding-crushing-it/pl.u-76oNNrBC42qobo"><Jump><img src={Music} alt="link to playlist" /></Jump></a>
        </div>
      </div>
    )
  }
}
