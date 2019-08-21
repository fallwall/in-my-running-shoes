import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { getTags } from '../services/api';

class Tags extends Component {
  constructor() {
    super();
    this.state = {
      tags: []
    }
  }

  componentDidMount = async () => {
    const tags = await getTags();
    this.setState({
      tags: tags
    })
  }


  render() {
    return (
      <div>
        {this.state.tags.map(tag =>
          <div className="tag"
            key={tag.id}>
            <Link to={`/tags/${tag.name}`}>{tag.name}</Link>
          </div>)}
      </div>
    )
  }
}

export default withRouter(Tags)
