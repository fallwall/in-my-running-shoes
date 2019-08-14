import React from 'react';

export default function Login(props) {
  return (
    <div className={(props.isLogin && !props.isReg) ? "pop-up login-popup" : "hidden"}>
      <div
        className="login-close"
        onClick={() => props.cancelLogout()}>
        X
      </div>
      <div className="login-content">
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
    </div >
  )
}
