import React from 'react';
import { Link } from 'react-router-dom';

export default function Login(props) {
  return (
    <div className={(props.isLogin && !props.isReg) ? "pop-up login-popup" : "hidden"}>
      <h2>login</h2>
      <form
        onSubmit={props.handleLogin} >
        <p>Username:</p>
        <input
          name="username"
          type="text"
          value={props.formData.username}
          onChange={props.handleChange} />
        <p>Password:</p>
        <input
          name="password"
          type="password"
          value={props.formData.password}
          onChange={props.handleChange} />
        <button>Login</button>
        <button onClick={props.handleRegButton}>Register</button>
      </form>
    </div>
  )
}
