import React, { Component } from 'react';
import { searchByTag } from '../services/api';
import { Link, withRouter } from 'react-router-dom';



class Tag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      races: []
    }
  }

  componentDidMount = async () => {
    const races = await searchByTag(this.props.name);
    this.setState({
      races: races
    })
  }

  render() {
    return (
      <div>

        <h2>single tag stuff here</h2>


        {this.state.races.map(race =>
          <div className="tag-race" key={race.id}>
            <Link to={`/races/${race.id}`}>{race.name}</Link>
          </div>)}
      </div>
    )
  }
}

export default withRouter(Tag);
