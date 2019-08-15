import React, { Component } from 'react';
import Login from './Login';
import Register from './Register';
import Wobble from 'react-reveal/Wobble';

export default class CornerLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false
    };
  }

  handleLoginButton = (ev) => {
    ev.preventDefault();
    this.setState({
      isLogin: true
    })
  }
  handleRegButton = (ev) => {
    ev.preventDefault();
    this.setState({
      isReg: true
    })
  }

  handleLogin2 = (ev) => {
    ev.preventDefault();
    this.props.handleLogin();
    this.setState({
      isLogin: false,
      isReg: false
    })
  }

  handleRegister2 = (ev) => {
    ev.preventDefault();
    this.props.handleRegister();
    this.setState({
      isLogin: false,
      isReg: false
    })
  }

  cancelLogout = () => {
    this.setState({
      isLogin: false,
      isReg: false
    })
  }

  render() {
    return (
      <>
        <div className="login-buttons-wrapper">
          <div className="login-buttons">
            <p onClick={this.props.sidebar}>X</p>
            {this.props.currentUser
              ?
              <>
                <p>{this.props.currentUser.username}</p>
                <Wobble><button onClick={this.props.handleLogout}>LOGOUT</button></Wobble>
              </>
              :
              <Wobble><button onClick={this.handleLoginButton}>LOGIN/REG</button></Wobble>
            }
          </div>
        </div>

        <Login
          isLogin={this.state.isLogin}
          isReg={this.state.isReg}
          handleLogin={this.handleLogin2}
          handleChange={this.props.handleChange}
          handleRegButton={this.handleRegButton}
          formData={this.props.formData}
          cancelLogout={this.cancelLogout}
        />
        <Register
          isReg={this.state.isReg}
          handleRegister={this.handleRegister2}
          handleChange={this.props.handleChange}
          formData={this.props.formData}
          cancelLogout={this.cancelLogout}
        />
      </>
    )
  }
}
