import React, { Component } from 'react';

export default class Search extends Component {

  render() {
    return (
      <div>
        <form>
          <label htmlFor="search-bar">Search Bar</label>
          <input type="text" name="search-bar" placeholder="Search for a race..." />
          <button>Submit</button>
        </form>
        
      </div>
    )
  }
}


