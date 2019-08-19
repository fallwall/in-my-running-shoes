import React from 'react'

export default function RaceUpdate(props) {
  return (
    <div className="race-update">
      <form onSubmit={props.handleUpdateSubmit}>
        <label htmlFor="name">Race name</label>
        <input
          type="text"
          name="name"
          value={props.raceUpdateForm.name}
          onChange={props.handleUpdateChange} />
        <label htmlFor="date">Race date</label>
        <input
          type="text"
          name="date"
          placeholder="yyyy-mm-dd"
          value={props.raceUpdateForm.date}
          onChange={props.handleUpdateChange} />
        <label htmlFor="description">Decription</label>
        <input
          type="text"
          name="description"
          value={props.raceUpdateForm.description}
          onChange={props.handleUpdateChange} />
        <label htmlFor="city">City</label>
        <input
          type="text"
          name="city"
          value={props.raceUpdateForm.city}
          onChange={props.handleUpdateChange} />
        <label htmlFor="state">State</label>
        <input
          type="text"
          name="state"
          value={props.raceUpdateForm.state}
          onChange={props.handleUpdateChange} />
        <label htmlFor="country">Country</label>
        <input
          type="text"
          name="country"
          value={props.raceUpdateForm.country}
          onChange={props.handleUpdateChange} />
        <label htmlFor="organization">Organization:</label>
        <input
          type="text"
          name="organization"
          value={props.raceUpdateForm.organization}
          onChange={props.handleUpdateChange} />
        <label htmlFor="distance">Distance:</label>
        <input
          type="text"
          name="distance"
          value={props.raceUpdateForm.distance}
          onChange={props.handleUpdateChange} />
        <label htmlFor="website">Website:</label>
        <input
          type="text"
          name="website"
          value={props.raceUpdateForm.website}
          onChange={props.handleUpdateChange} />
        <label htmlFor="all_tags">Tags</label>
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
          value={props.raceUpdateForm.user_id}
          onChange={props.handleUpdateChange} />
        <button>Submit</button>
      </form>
    </div>
  )
}
