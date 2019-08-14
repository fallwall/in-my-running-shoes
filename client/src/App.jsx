import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import decode from 'jwt-decode';
import RaceForm from './components/RaceForm';
import Races from './components/Races';
import Race from './components/Race';
import Note from './components/Note';
import SideBar from './components/sideBar/SideBar';
import Headerr from './components/Headerr';
import CornerLogin from './components/sideBar/CornerLogin';
import RunningPic from './assets/running.png';


import './App.css';

import {
  loginUser,
  registerUser,
  verifyUser,
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
        password: ""
      },
      raceForm: {
        name: "",
        date: "",
        description: "",
        city: "",
        state: "",
        country: "",
        organization: "",
        distance: "",
        website: "",
        user_id: ""
      },
      sidebar: false
    }
  }

  componentDidMount = async () => {
    this.getRaces();
    const user = await verifyUser();
    if (user) {
      console.log(user);
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
        city: "",
        state: "",
        country: "",
        organization: "",
        distance: "",
        website: "",
      }
    }))
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

  // -------------- BELOW IS AUTH ------------------



  handleLogin = async (ev) => {
    ev.preventDefault();
    const userData = await loginUser(this.state.authFormData);
    this.setState({
      currentUser: decode(userData)
    })
    localStorage.setItem("jwt", userData);
  }

  handleRegister = async (ev) => {
    ev.preventDefault();
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
          <h1 className="main-title">IN MY RUNNING SHOES</h1>
          <Headerr />

        </header>
        <SideBar
          sidebar={this.state.sidebar}
          currentUser={this.state.currentUser}
          handleLogout={this.handleLogout}
          handleLoginButton={this.handleLoginButton}
        />

        {/* <Route exact path="/login" render={() => (
          <Login
            handleLogin={this.handleLogin}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData} />)} />
        <Route exact path="/register" render={() => (
          <Register
            handleRegister={this.handleRegister}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData} />)} /> */}
        <Route exact path="/races" render={() => (
          <Races
            races={this.state.races} />)} />
        <Route
          exact
          path="/races/:id"
          render={(props) => (
            <Race
              id={props.match.params.id}
              user_id={this.state.raceForm.user_id}
            />
          )} />
        <Route
          exact
          path="/new/race"
          render={() => (
            <RaceForm
              handleRaceFormChange={this.handleRaceFormChange}
              raceForm={this.state.raceForm}
              newRace={this.newRace} />
          )} />
        <Route
          exact
          path="/races/:race_id/notes/:id"
          render={(props) => (
            <Note
              race_id={props.match.params.race_id}
              id={props.match.params.id}
            />
          )} />

        <footer>
          <img
            className="footer-img"
            src={RunningPic}
            alt="image in the bottom" />
        </footer>
      </div>
    );
  }
}

export default withRouter(App);
