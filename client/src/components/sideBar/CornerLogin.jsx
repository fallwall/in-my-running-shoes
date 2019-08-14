import React, { Component } from 'react';
import Login from '../Login';
import Register from '../Register';

export default class CornerLogin extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
    
  //   };
  // }


  render() {
    return (
      <>
      <div className="login-buttons-wrapper">
        <div className="login-buttons">
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
      </div>
        
          <Login
            handleLogin={this.props.handleLogin}
            handleChange={this.props.handleChange}
            formData={this.props.formData} /> 
      
          <Register
            handleRegister={this.props.handleRegister}
            handleChange={this.props.handleChange}
            formData={this.props.formData} />
        </>
    )
  }
}
