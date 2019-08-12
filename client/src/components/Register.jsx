import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';

export default function Register(props) {
  return (
    <div>
      <h2>Register</h2>
      <hr />
      <form onSubmit={props.handleRegister} >
        <p>Username:</p>
        <input name="username" type="text"
          value={props.formData.username}
          onChange={props.handleChange} />
        <p>Name:</p>
        <input name="name" type="text"
          value={props.formData.name}
          onChange={props.handleChange} />
        <p>Email:</p>
        <input name="email" type="text"
          value={props.formData.email}
          onChange={props.handleChange} />
        <p>DOB:</p>
        <input name="dob" type="date"
          value={props.formData.password}
          onChange={props.handleChange} />
        <p>Password:</p>
        <input name="password" type="password"
          value={props.formData.password}
          onChange={props.handleChange} />
        <hr />
        <button>Register</button>
      </form>
    </div>
  )
}
