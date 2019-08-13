import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import decode from 'jwt-decode';
import Login from './components/Login';
import Register from './components/Register';
import RaceForm from './components/RaceForm';
import Races from './components/Races';
import Race from './components/Race';

import './App.css';

import {
  loginUser,
  registerUser,
  verifyUser,
  fetchRaces,
  createRace,
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

  // -------------- BELOW IS AUTH ------------------

  handleLoginButton = () => {
    this.props.history.push("/login");
  }

  handleLogin = async () => {
    const userData = await loginUser(this.state.authFormData);
    console.log(userData);
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
          <h1>IN MY RUNNING SHOES</h1>
          <div>
            {this.state.currentUser
              ?
              <>
                <p>{this.state.currentUser.username}</p>
                <button onClick={this.handleLogout}>LOGOUT</button>
              </>
              :
              <button onClick={this.handleLoginButton}>LOGIN/REG</button>
            }
          </div>
        </header>

        <Route exact path="/login" render={() => (
          <Login
            handleLogin={this.handleLogin}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData} />)} />
        <Route exact path="/register" render={() => (
          <Register
            handleRegister={this.handleRegister}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData} />)} />
        <Route exact path="/races" render={() => (
          <Races
            races={this.state.races} />)} />
        <Route
          path="/races/:id"
          render={(props) => (
            <Race id={props.match.params.id}
              user_id={this.state.raceForm.user_id}
            />
          )} />
        <Route
          path="/new/race"
          render={() => (
            <RaceForm
              handleRaceFormChange={this.handleRaceFormChange}
              raceForm={this.state.raceForm}
              newRace={this.newRace} />
          )} />

      </div>
    );
  }
}

export default withRouter(App);
