import React from 'react';
import { withRouter } from 'react-router-dom';

function RaceForm(props) {
  return (
    <div className="race-form">
      <h2>Create a new race</h2>
      <form onSubmit={props.newRace}>
        <p>Race name:</p>
        <input
          type="text"
          name="name"
          value={props.raceForm.name}
          onChange={props.handleRaceFormChange} />
        <p>Race date:</p>
        <input
          type="text"
          name="date"
          placeholder="yyyy-mm-dd"
          value={props.raceForm.date}
          onChange={props.handleRaceFormChange} />
        <p>Decription:</p>
        <input
          type="text"
          name="description"
          value={props.raceForm.description}
          onChange={props.handleRaceFormChange} />
        <p>City:</p>
        <input
          type="text"
          name="city"
          value={props.raceForm.city}
          onChange={props.handleRaceFormChange} />
        <p>State:</p>
        <input
          type="text"
          name="state"
          value={props.raceForm.state}
          onChange={props.handleRaceFormChange} />
        <p>Country:</p>
        <input
          type="text"
          name="country"
          value={props.raceForm.country}
          onChange={props.handleRaceFormChange} />
        <p>Organization:</p>
        <input
          type="text"
          name="organization"
          value={props.raceForm.organization}
          onChange={props.handleRaceFormChange} />
        <p>Distance:</p>
        <input
          type="text"
          name="distance"
          value={props.raceForm.distance}
          onChange={props.handleRaceFormChange} />
        <p>Website:</p>
        <input
          type="text"
          name="website"
          value={props.raceForm.website}
          onChange={props.handleRaceFormChange} />
        <input
          type="hidden"
          name="user_id"
          value={props.raceForm.user_id}
          onChange={props.handleRaceFormChange} />
        <button>Submit</button>
        <button onClick={props.newRace}>Cancel/Go Back</button>
      </form>
    </div >
  )
}

export default withRouter(RaceForm);