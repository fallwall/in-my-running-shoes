import React, { Component } from 'react';

export default class Search extends Component {

  render() {
    return (
      <div>
        <form onSubmit={this.props.searchClick}>
          <label htmlFor="search-bar">Search Bar</label>
          <input onChange={this.props.searchTermChange}type="text" name="search-bar" placeholder="Search for a race..." />
          <button>Submit</button>
        </form>
        
      </div>
    )
  }
}


