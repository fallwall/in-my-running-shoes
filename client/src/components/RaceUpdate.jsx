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
        <label htmlFor="location">Location</label>
        <input
          type="text"
          name="location"
          value={props.raceUpdateForm.location}
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
          value={props.raceUpdateForm.all_tags}
          onChange={props.handleUpdateChange}
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
