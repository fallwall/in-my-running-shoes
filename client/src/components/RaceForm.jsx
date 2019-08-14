import React from 'react';
import { withRouter } from 'react-router-dom';

function RaceForm(props) {
  return (
    <div className="race-form">
      <h2>Create a new race</h2>
      <form onSubmit={props.newRace}>
        <label for="name">Race name</label>
        <input
          type="text"
          name="name"
          value={props.raceForm.name}
          onChange={props.handleRaceFormChange}
        />
        <label for="date">Date</label>
        <input
          type="text"
          name="date"
          placeholder="yyyy-mm-dd"
          value={props.raceForm.date}
          onChange={props.handleRaceFormChange}
        />
        <label for="description">Description</label>
        <input
          type="text"
          name="description"
          value={props.raceForm.description}
          onChange={props.handleRaceFormChange}
        />
        <label for="city">City</label>
        <input
          type="text"
          name="city"
          value={props.raceForm.city}
          onChange={props.handleRaceFormChange}
        />
        <label for="state">State</label>
        <input
          type="text"
          name="state"
          value={props.raceForm.state}
          onChange={props.handleRaceFormChange}
        />
        <label for="country">Country</label>
        <input
          type="text"
          name="country"
          value={props.raceForm.country}
          onChange={props.handleRaceFormChange}
        />
        <label for="organization">Organizer</label>
        <input
          type="text"
          name="organization"
          value={props.raceForm.organization}
          onChange={props.handleRaceFormChange}
        />
        <label for="distance">Distance (mile)</label>
        <input
          type="text"
          name="distance"
          value={props.raceForm.distance}
          onChange={props.handleRaceFormChange}
        />
        <label for="website">Website</label>
        <input
          type="text"
          name="website"
          value={props.raceForm.website}
          onChange={props.handleRaceFormChange}
          placeholder="http://..."
        />
        <input
          type="hidden"
          name="user_id"
          value={props.raceForm.user_id}
          onChange={props.handleRaceFormChange} />
        <button>Submit</button>
        <button onClick={props.addRace}>Cancel/Go Back</button>
      </form>
    </div >
  )
}

export default withRouter(RaceForm);