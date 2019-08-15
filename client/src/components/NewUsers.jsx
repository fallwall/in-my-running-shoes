import React, { Component } from 'react';
import { fetchNewUsers } from '../services/api';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

export default class NewUsers extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
  }

  componentDidMount = async () => {
    const users = await fetchNewUsers();
    this.setState({
      users: users
    })
  }
  render() {
    return (
      <ParallaxProvider>
        <div className="newuser">
          <Parallax
            y={[20, -25]}
          >
            <div className="newuser-main">
              <h2>NEW MEMBERS</h2>
              {this.state.users.map(user =>
                <div className="newuser-user">
                  {user.username} ( {user.name} )
          </div>)}
            </div>
          </Parallax>
          <Parallax
            x={[13, -13]}
            y={[50, -50]}
          >
            <div className="newuser-back">
            </div>
          </Parallax>
        </div>
      </ParallaxProvider>
    )
  }
}
