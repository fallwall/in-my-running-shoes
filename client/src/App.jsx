import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import LightSpeed from 'react-reveal/LightSpeed';
import RaceForm from './components/RaceForm';
import Races from './components/Races';
import Race from './components/Race';
import Note from './components/Note';
import Home from './components/Home';
import Tags from './components/Tags';
import Tag from './components/Tag';
import About from './components/story/About';
import SideBar from './components/sideBar/SideBar';
import Headerr from './components/Headerr';
import CornerLogin from './components/sideBar/CornerLogin';
import Profile from './components/profile/Profile';
import RunningPic from './assets/running.png';

import './App.css';

import {
  loginUser,
  registerUser,
  verifyToken,
  fetchRaces,
  createRace
} from './services/api';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
      races: [],
      authFormData: {
        username: "",
        name: "",
        email: "",
        dob: "",
        password: "",
      },
      raceForm: {
        name: "",
        date: "",
        description: "",
        location: "",
        organization: "",
        distance: "",
        website: "",
        user_id: "",
        all_tags: ""
      },
      sidebar: false,
      addRace: false
    }
  }

  componentDidMount = async () => {
    this.getRaces();
    const user = await verifyToken();
    if (user) {
      this.setState(prevState => ({
        currentUser: user,
        raceForm: {
          ...prevState.raceForm,
          user_id: user.id
        }
      }))
    }
  }

  getRaces = async () => {
    const races = await fetchRaces();
    console.log(races);
    this.setState({
      races
    })
  }

  newRace = async (ev) => {
    ev.preventDefault();
    const race = await createRace(this.state.raceForm);
    this.setState(prevState => ({
      races: [...prevState.races, race],
      raceForm: {
        ...prevState.raceForm,
        name: "",
        date: "",
        description: "",
        location: "",
        organization: "",
        distance: "",
        website: "",
        all_tags: ""
      },
      addRace: false
    }))
    this.props.history.push('/races');
  }

  handleRaceFormChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      raceForm: {
        ...prevState.raceForm,
        [name]: value
      }
    }))
  }

  sideBar = (ev) => {
    ev.preventDefault();
    this.setState(prevState => ({
      sidebar: !prevState.sidebar
    }))
  }

  addRace = (ev) => {
    ev.preventDefault();
    this.setState(prevState => ({
      addRace: !prevState.addRace
    }))
  }

  // -------------- BELOW IS AUTH ------------------

  handleLogin = async (ev) => {

    const loginData = {
      username: this.state.authFormData.username,
      password: this.state.authFormData.password
    }
    const user = await loginUser(loginData);
    console.log(user);
    this.setState({
      currentUser: user
    })
    // this.props.history.push('/');
  }

  handleRegister = async (ev) => {
    await registerUser(this.state.authFormData);
    this.handleLogin();
  }

  handleLogout = () => {
    localStorage.removeItem("jwt");
    this.setState({
      currentUser: null
    })
  }

  authHandleChange = (ev) => {
    const { name, value } = ev.target;
    this.setState(prevState => ({
      authFormData: {
        ...prevState.authFormData,
        [name]: value
      }
    }));
  }

  // -------------- ABOVE IS AUTH ------------------

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CornerLogin
            sidebar={this.sideBar}
            handleLogin={this.handleLogin}
            currentUser={this.state.currentUser}
            handleLogout={this.handleLogout}
            handleRegister={this.handleRegister}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData}
          />
          <LightSpeed left>
            <h1 className="main-title">IN MY RUNNING SHOES</h1>
          </LightSpeed>

          <Headerr />

        </header>
        <SideBar
          sidebar={this.state.sidebar}
          currentUser={this.state.currentUser}
          handleLogout={this.handleLogout}
          handleLoginButton={this.handleLoginButton}
          addRace={this.addRace}
        />

        <Route exact path="/races" render={() => (
          <Races
            races={this.state.races} />)} />
        <Route exact path="/" render={() => (
          <Home />)} />
        <Route exact path="/tags" render={() => (
          <Tags />)} />
        <Route exact path="/tags/:name" render={(props) => (
          <Tag
            name={props.match.params.name}
          />)} />
        <Route exact path="/about" render={() => (
          <About />)} />
        <Route
          exact
          path="/races/:id"
          render={(props) => (
            <Race
              id={props.match.params.id}
              // user_id={this.state.raceForm.user_id}
              currentUser={this.state.currentUser}
            />
          )} />
        {this.state.addRace &&
          <RaceForm
            handleRaceFormChange={this.handleRaceFormChange}
            raceForm={this.state.raceForm}
            addRace={this.addRace}
            newRace={this.newRace} />
        }
        <Route
          exact
          path="/races/:race_id/notes/:id"
          render={(props) => (
            <Note
              race_id={props.match.params.race_id}
              id={props.match.params.id}
              currentUser={this.state.currentUser}
            />
          )} />
        <Route
          exact
          path="/profile/:id"
          render={(props) => (
            <Profile
              id={props.match.params.id}
              currentUser={this.state.currentUser}
            />
          )} />
        <footer>
          <img
            className="footer-img"
            src={RunningPic}
            alt="decorative in the bottom" />
        </footer>
      </div>
    );
  }
}

export default withRouter(App);
