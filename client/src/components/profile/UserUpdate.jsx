import React from 'react';
import {
  getProfile,
  updateProfile
} from '../../services/api';

export default class UserUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: "",
      formData: {
        username: "",
        name: "",
        email: "",
        dob: "",
        password: ""
      }
    }
  }

  componentDidMount = async () => {
    if (this.props.profileUser) {
      const user_id = parseInt(this.props.profileUser);
      const user_data = await getProfile(user_id);
      this.setState({
        user_id: user_id,
        formData: {
          username: user_data.username,
          name: user_data.name,
          email: user_data.email,
          dob: user_data.dob,
          password: ""
        }
      })
    }
  }

  handleChange = (ev) => {
    const { name, value } = ev.target;
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [name]: value
      }
    }))
  }

  handleUserUpdate = async (ev) => {
    ev.preventDefault();
    await updateProfile(this.state.user_id, this.state.formData);
    if (this.props.profileUser) {
      const user_id = parseInt(this.props.profileUser);
      const user_data = await getProfile(user_id);
      this.setState({
        user_id: user_id,
        formData: {
          username: user_data.username,
          name: user_data.name,
          email: user_data.email,
          dob: user_data.dob,
          password: ""
        }
      })
    }
  }

  render() {
    return (
      <>
        <h1>UPDATE FORM</h1>
        <div className="profile-update">
          <h2>Update Profile Info</h2>
          <form onSubmit={this.handleUserUpdate} >
            <input name="username" type="hidden"
              value={this.state.formData.username}
              onChange={this.handleChange} />
            <label htmlFor="name">Name</label>
            <input name="name" type="text"
              value={this.state.formData.name}
              onChange={this.handleChange} />
            <input name="email" type="hidden"
              value={this.state.formData.email}
              onChange={this.handleChange} />
            <label htmlFor="dob">DOB</label>
            <input name="dob" type="text"
              value={this.state.formData.dob}
              onChange={this.handleChange}
              placeholder="YYYY-MM-DD" />
            <label htmlFor="password">Password</label>
            <input name="password" type="password"
              value={this.state.formData.password}
              onChange={this.handleChange} />
            <button>Update</button>
          </form>
        </div>

      </>
    )
  }
}