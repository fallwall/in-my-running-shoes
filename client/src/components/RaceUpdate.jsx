import React from 'react'

export default function RaceUpdate(props) {
  return (
    <div className="race-update">
      <form onSubmit={props.handleUpdateSubmit}>
        <p>Race name:</p>
        <input
          type="text"
          name="name"
          value={props.raceUpdateForm.name}
          onChange={props.handleUpdateChange} />
        <p>Race date:</p>
        <input
          type="text"
          name="date"
          placeholder="yyyy-mm-dd"
          value={props.raceUpdateForm.date}
          onChange={props.handleUpdateChange} />
        <p>Decription:</p>
        <input
          type="text"
          name="description"
          value={props.raceUpdateForm.description}
          onChange={props.handleUpdateChange} />
        <p>City:</p>
        <input
          type="text"
          name="city"
          value={props.raceUpdateForm.city}
          onChange={props.handleUpdateChange} />
        <p>State:</p>
        <input
          type="text"
          name="state"
          value={props.raceUpdateForm.state}
          onChange={props.handleUpdateChange} />
        <p>Country:</p>
        <input
          type="text"
          name="country"
          value={props.raceUpdateForm.country}
          onChange={props.handleUpdateChange} />
        <p>Organization:</p>
        <input
          type="text"
          name="organization"
          value={props.raceUpdateForm.organization}
          onChange={props.handleUpdateChange} />
        <p>Distance:</p>
        <input
          type="text"
          name="distance"
          value={props.raceUpdateForm.distance}
          onChange={props.handleUpdateChange} />
        <p>Website:</p>
        <input
          type="text"
          name="website"
          value={props.raceUpdateForm.website}
          onChange={props.handleUpdateChange} />
        <input
          type="hidden"
          name="user_id"
          value={props.raceUpdateForm.user_id}
          onChange={props.handleUpdateChange} />
        <button>Submit</button>
      </form>
    </div>
  )
}
