import React from 'react'

export default function RaceUpdate(props) {
  return (
    <div className="race-update">
        <form onSubmit={props.handleUpdateSubmit}>
        <p>Race name:</p>
        <input
          type="text"
          name="name"
          value={props.raceForm.name}
          onChange={props.handleChange} />
        <p>Race date:</p>
        <input
          type="text"
          name="date"
          placeholder="yyyy-mm-dd"
          value={props.raceForm.date}
          onChange={props.handleChange} />
        <p>Decription:</p>
        <input
          type="text"
          name="description"
          value={props.raceForm.description}
          onChange={props.handleChange} />
        <p>City:</p>
        <input
          type="text"
          name="city"
          value={props.raceForm.city}
          onChange={props.handleChange} />
        <p>State:</p>
        <input
          type="text"
          name="state"
          value={props.raceForm.state}
          onChange={props.handleChange} />
        <p>Country:</p>
        <input
          type="text"
          name="country"
          value={props.raceForm.country}
          onChange={props.handleChange} />
        <p>Organization:</p>
        <input
          type="text"
          name="organization"
          value={props.raceForm.organization}
          onChange={props.handleChange} />
        <p>Distance:</p>
        <input
          type="text"
          name="distance"
          value={props.raceForm.distance}
          onChange={props.handleChange} />
        <p>Website:</p>
        <input
          type="text"
          name="website"
          value={props.raceForm.website}
          onChange={props.handleChange} />
        <input
          type="hidden"
          name="user_id"
          value={props.raceForm.user_id}
          onChange={props.handleChange} />
        <button>Submit</button>
      </form>
    </div>
  )
}
