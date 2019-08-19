import React from 'react';
import { withRouter } from 'react-router-dom';

function RaceForm(props) {
  return (
    <div className="race-form">
      <h2>CREATE A NEW RACE</h2>
      <form onSubmit={props.newRace}>
        <label htmlFor="name">Race Name</label>
        <input
          type="text"
          name="name"
          value={props.raceForm.name}
          onChange={props.handleRaceFormChange}
        />
        <label htmlFor="date">Date</label>
        <input
          type="text"
          name="date"
          placeholder="yyyy-mm-dd"
          value={props.raceForm.date}
          onChange={props.handleRaceFormChange}
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          value={props.raceForm.description}
          onChange={props.handleRaceFormChange}
        />
        <label htmlFor="city">City</label>
        <input
          type="text"
          name="city"
          value={props.raceForm.city}
          onChange={props.handleRaceFormChange}
        />
        <label htmlFor="state">State</label>
        <input
          type="text"
          name="state"
          value={props.raceForm.state}
          onChange={props.handleRaceFormChange}
        />
        <label htmlFor="country">Country</label>
        <input
          type="text"
          name="country"
          value={props.raceForm.country}
          onChange={props.handleRaceFormChange}
        />
        <label htmlFor="organization">Organizer</label>
        <input
          type="text"
          name="organization"
          value={props.raceForm.organization}
          onChange={props.handleRaceFormChange}
        />
        <label htmlFor="distance">Distance (mile)</label>
        <input
          type="text"
          name="distance"
          value={props.raceForm.distance}
          onChange={props.handleRaceFormChange}
        />
        <label htmlFor="website">Website</label>
        <input
          type="text"
          name="website"
          value={props.raceForm.website}
          onChange={props.handleRaceFormChange}
          placeholder="http://..."
        />
        <input
          type="text"
          name="all_tags"
          value={props.raceForm.all_tags}
          onChange={props.handleRaceFormChange}
          placeholder="trail, altitude, summer"
        />
        <input
          type="hidden"
          name="user_id"
          value={props.raceForm.user_id}
          onChange={props.handleRaceFormChange} />
        <button className="raceform-submit">Submit</button>
        <button className="raceform-cancel" onClick={props.addRace}>Cancel/Go Back</button>
      </form>
    </div >
  )
}

export default withRouter(RaceForm);