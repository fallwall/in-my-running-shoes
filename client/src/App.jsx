import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import decode from 'jwt-decode';
import Login from './components/Login';
import Register from './components/Register';

import './App.css';

import { loginUser, registerUser } from './services/api';

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
        password: ""
      }
    }
  }

  componentDidMount = () => {
    const checkUser = localStorage.getItem("jwt");
    if (checkUser) {
      const user = decode(checkUser);
      this.setState({
        currentUser: user
      })
    }

  }

  // -------------- BELOW IS AUTH ------------------

  handleLoginButton = () => {
    this.props.history.push("/login")
  }

  handleLogin = async () => {
    const userData = await loginUser(this.state.authFormData);
    this.setState({
      currentUser: decode(userData.token)
    })
    localStorage.setItem("jwt", userData.token)
  }

  handleRegister = async (e) => {
    e.preventDefault();
    await registerUser(this.state.authFormData);
    this.handleLogin();
  }

  handleLogout = () => {
    localStorage.removeItem("jwt");
    this.setState({
      currentUser: null
    })
  }

  authHandleChange = (e) => {
    const { name, value } = e.target;
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
      </div>
    );
  }
}

export default withRouter(App);
