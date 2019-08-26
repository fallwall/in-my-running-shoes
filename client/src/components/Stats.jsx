import React, { Component } from 'react';
import {
  fetchStats
} from '../services/api';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import Jump from 'react-reveal/Jump';

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
      usersNumber: "",
      raceSNumber: "",
      notesNumber: ""
    }
  }

  componentDidMount = async () => {
    const stats = await fetchStats();
    const usersNumber = stats.users;
    const racesNumber = stats.races;
    const notesNumber = stats.notes;
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    this.setState({
      quote: quote,
      usersNumber: usersNumber,
      racesNumber: racesNumber,
      notesNumber: notesNumber
    })
  }


  render() {
    return (
      <ParallaxProvider>
        <div className="site-stats">

          <Parallax
          // y={[20, -25]}
          >
            <div className="stats-main">
              <Jump><h2>SITE STATS</h2></Jump>

              <div className="stat">
                <p><Jump>{this.state.racesNumber}</Jump> Races</p>
                <p><Jump>{this.state.notesNumber}</Jump> Notes</p>
                <p><Jump>{this.state.usersNumber}</Jump> Members and Counting</p>
              </div>
              <div className="quote">
                {this.state.quote}
                <p>(~Steve Prefontaine)</p>
              </div>
            </div>
          </Parallax>
          <Parallax
            x={[13, -13]}
          // y={[50, -50]}
          >
            <div className="stats-back">
            </div>
          </Parallax>
        </div>
      </ParallaxProvider >
    )
  }
}

