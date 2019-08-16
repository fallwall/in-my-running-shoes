import React, { Component } from 'react';
import {
  fetchNewUsers,
  fetchActivities
} from '../services/api';

const quotes = [
  "Some people create with words, or with music, or with a brush and paints. I like to make something beautiful when I run. I like to make people stop and say, 'I've never seen anyone run like that before.' It's more than just a race, it's style. It's doing something better than everyone else. It's being creative.",
  "A race is a work of art that people can look at and be affected in as many ways as they're capable of understanding.",
  "No one will ever win a 5,000-meter by running an easy two miles. Not against me.",
  "There are big odds against me. Nobody under 25 has ever won the Olympic five. But if everything goes right, whoever wins will know he has been in one helluva race.",
  "A lot of people run a race to see who is the fastest. I run to see who has the most guts, who can punish himself into exhausting pace, and then at the end, punish himself even more.",
  "It really gets grim until the competition begins. You have to wonder at times what you're doing out there. Over the years, I've given myself a thousand reasons to keep running, but it always comes back to where it started. It comes down to self-satisfaction and a sense of achievement.",
  "I'll tell you one thing. I love every one of them. I've thought about the Olympic Games every day of my life since 1968, but there is a breaking point in each race when you wonder if all the sacrifice is really worth it. You think 'why should I do this? I don't have to run this hard.' But that's when I think about them. They keep me going.",
  "Somebody may beat me, but they are going to have to bleed to do it.",
]

export default class Stats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      users: [],
      usersNumber: "",
      raceSNumber: "",
      notesNumber: ""
    }
  }

  componentDidMount = async () => {
    const users = await fetchNewUsers();
    const act = await fetchActivities();
    const usersNumber = users.length;
    const racesNumber = act.races.length;
    const notesNumber = act.notes.length;
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    this.setState({
      quote: quote,
      users: users,
      usersNumber: usersNumber,
      racesNumber: racesNumber,
      notesNumber: notesNumber
    })
  }


  render() {
    return (
      <div className="site-stats">
        <div className="stats-main">
          <div className="quote">
            {this.state.quote}
            <p>(~Steve Prefontaine)</p>
          </div>
          <div className="stat">
            <p>{this.state.racesNumber} Races</p>
            <p>{this.state.notesNumber} Notes</p>
            <p>{this.state.usersNumber} Members and Counting</p>
          </div>
          <div className="stats-back">
          </div>
        </div>
      </div>
    )
  }
}

