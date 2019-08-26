import React, { Component } from 'react';
import Login from './Login';
import Register from './Register';
import Wobble from 'react-reveal/Wobble';
import Jump from 'react-reveal/Jump';
import Arrow from '../../assets/arrow2.png';

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
            <div
              onClick={this.props.sidebar}
              className="nav-arrow"
            >
              <img src={Arrow} alt="point to nav" />
              <img src={Arrow} alt="point to nav" />
              <img src={Arrow} alt="point to nav" />
            </div>
            {this.props.currentUser
              ?
              <>
                <Jump><p className="corner-username">{this.props.currentUser.username}</p></Jump>
                <Wobble><button className="login-reg" onClick={this.props.handleLogout}>LOGOUT</button></Wobble>
              </>
              :
              <Wobble><button className="login-reg" onClick={this.handleLoginButton}>LOGIN/REG</button></Wobble>
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
