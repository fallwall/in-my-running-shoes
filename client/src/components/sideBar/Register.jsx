import React from 'react';

export default function Register(props) {
  return (
    <div className={props.isReg ? "pop-up reg-popup" : "hidden"}>
      <div
        className="reg-close"
        onClick={() => props.cancelLogout()}>
        X
      </div>
      <div className="reg-content">
        <h2>Register</h2>
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
          <input name="dob" type="text"
            value={props.formData.dob}
            onChange={props.handleChange}
            placeholder="YYYY-MM-DD" />
          <p>Password:</p>
          <input name="password" type="password"
            value={props.formData.password}
            onChange={props.handleChange} />
          <button>Register</button>
        </form>
      </div>
    </div>
  )
}
