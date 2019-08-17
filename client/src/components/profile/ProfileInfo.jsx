import React from 'react';
import Slide from 'react-reveal/Slide';
import HeadShake from 'react-reveal/HeadShake';
import { Link } from 'react-router-dom';

export default function ProfileInfo(props) {
  return (
    <div className="profile-info-wrapper">


      <div>

        <Slide left><h2>{props.profile_name}</h2></Slide>
        <Slide right><h2>{props.profile_username}</h2></Slide>
        
        <div className="profile-content">
          <div className="profile-race-list">
            <HeadShake><h3>{props.profile_username} Added Races</h3></HeadShake>
            {props.profile_races.map(race =>
              <div key={race.id} className="profile-race detail-link">
                {race.name}
                <Link to={`/races/${race.id}`}>Details</Link>
              </div>)}
          </div>
          <div className="profile-note-list">
            <HeadShake><h3>{props.profile_username} Added Notes</h3></HeadShake>
            {props.profile_notes.map(note =>
              <div key={note.id} className="profile-note detail-link">
                {note.message}
                <Link to={`/races/${note.race_id}/notes/${note.id}`}>Details</Link>
              </div>)}
          </div>
        </div>
      </div>
    </div>
  )
}
