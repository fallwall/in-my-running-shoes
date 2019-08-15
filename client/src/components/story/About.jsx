import React from 'react';
import { Waypoint } from 'react-waypoint';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { Fade } from 'react-reveal';
import Swing from 'react-reveal/Swing';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';
import Music from '../../assets/music.png';
import Sneaker1 from '../../assets/sneaker1.jpg';
import Sneaker2 from '../../assets/sneaker2.jpg';
import Sneaker3 from '../../assets/sneaker3.jpg';
import Sneaker4 from '../../assets/sneaker4.jpg';

export default class About extends React.Component {
  constructor() {
    super();
    this.state = {
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      showDemo: false,
    };
  }

  // DRY THIS LATER (YEAH RIGHT)
  // also i just realized you dont need prevState to flip state

  handle1 = () => {
    this.setState({ show1: !this.state.show1 });
  }

  handle2 = () => {
    this.setState({ show2: !this.state.show2 });
  }

  handle3 = () => {
    this.setState({ show3: !this.state.show3 });
  }

  handle4 = () => {
    this.setState({ show4: !this.state.show4 });
  }

  showDemo = () => {
    this.setState({ showDemo: true });
  }

  hideDemo = () => {
    this.setState({ showDemo: false });
  }

  render() {
    return (
      <ParallaxProvider>
        <div className="about-container">
          <div className='space-0' />
          <ScrollableAnchor id={'gsh'} >
            <div className='space-1' />
          </ScrollableAnchor>
          <Fade clear opposite when={this.state.show1}>
            <div className="story" id="story-1">
              <Waypoint onEnter={this.handle1} onLeave={this.handle1} />
              <Parallax offsetYMax='45' offsetYMin='-45' slowerScrollRate >
                <img src={Sneaker1} className='story-img' alt='Gil Scott Heron' />
              </Parallax>
              <Parallax offsetYMax='-45' offsetYMin='45' slowerScrollRate >
                <div className='story-body'>
                  <div className='story-head' onMouseEnter={this.showDemo} onMouseLeave={this.hideDemo}>
                    <h1>
                      <a href='https://youtu.be/aKYwv0PAZTA'>Gil Scott-Heron</a>
                    </h1>
                    <Swing><img src={Music} className="music-icon" alt="decorative" /></Swing>
                    <div className='demo'>
                      <Fade right when={this.state.showDemo}>Running</Fade>
                    </div>
                  </div>
                  <p>Because I always feel like running<br />
                    Not away, because there is no such place<br />
                    Because, if there was I would have found it by now<br />
                    Because it's easier to run<br />
                    Easier than staying and finding out you're the only one<br />
                    Who didn't run<br />
                    Because running will be the way your life and mine<br />
                    Will be described<br />
                    As in "the long run"<br />
                    Or as in having given someone a "run for his money"<br />
                    Or as in "running out of time"<br />
                    Because running makes me look like everyone else<br />
                    Though I hope there will ever be cause for that<br />
                    Because I will be running in the other direction<br />
                    Not running for cover<br />
                    Because if I knew where cover was<br />
                    I would stay there and never have to run for it<br />
                    Not running for my life<br />
                    Because I have to be running for something of more value<br />
                    To be running and not in fear<br />
                    Because the thing I fear cannot be escaped<br />
                    Eluded, avoided, hidden from, protected from, gotten away from<br />
                    Not without showing the fear as I see it now<br />
                    Because closer, clearer, no sir, nearer<br />
                    Because you of you and because of that nice<br />
                    That you quietly, quickly be causing<br />
                    And because you're going to see me run soon<br />
                    And because you're going to know why I'm running then<br />
                    You'll know then<br />
                    Because I'm not going to tell you now<br />
                  </p>
                </div>
              </Parallax>
            </div>
          </Fade>

          <Fade clear opposite when={this.state.show2}>
            <div className="story" id="story-2">
              <Waypoint onEnter={this.handle2} onLeave={this.handle2} />
              <Parallax offsetYMax='45' offsetYMin='-45' slowerScrollRate >
                <img src={Sneaker2} className='story-img' alt='florence and the machine' />
              </Parallax>
              <Parallax offsetYMax='-45' offsetYMin='45' slowerScrollRate >
                <ScrollableAnchor id={'ftm'} >
                  <div className='story-body'>
                    <div className='story-head' onMouseEnter={this.showDemo} onMouseLeave={this.hideDemo}>
                      <h1>
                        <a href="https://youtu.be/iWOyfLBYtuU">Florence + The Machine</a>
                      </h1>
                      <Swing><img src={Music} className="music-icon" alt="decorative" /></Swing>
                      <div className='demo'>
                        <Fade right when={this.state.showDemo}>Dog Days Are Over</Fade>
                      </div>
                    </div>
                    <p>Happiness, hit her like a train on a track<br />
                      Coming towards her, stuck still no turning back<br />
                      She hid around corners and she hid under beds<br />
                      She killed it with kisses and from it she fled<br />
                      With every bubble she sank with a drink<br />
                      And washed it away down the kitchen sink<br />
                      The dog days are over<br />
                      The dog days are done<br />
                      The horses are coming so you better run<br />
                      Run fast for your mother run fast for your father<br />
                      Run for your children for your sisters and brothers<br />
                      Leave all your love and your longing behind you<br />
                      Can't carry it with you if you want to survive<br />
                      The dog days are over<br />
                      The dog days are done<br />
                      Run fast for your mother and fast for your father<br />
                      Run for your children for your sisters and brothers<br />
                      Leave all your love and your loving behind you<br />
                      Can't carry it with you if you want to survive<br />
                      The dog days are done<br />
                      The horses are coming<br />
                      So you better run<br />
                    </p>
                  </div>
                </ScrollableAnchor>
              </Parallax>
            </div>
          </Fade>

          <Fade clear opposite when={this.state.show3}>
            <div className="story" id="story-3">
              <Waypoint onEnter={this.handle3} onLeave={this.handle3} />
              <Parallax offsetYMax='45' offsetYMin='-45' slowerScrollRate >
                <img src={Sneaker3} className='story-img' alt='sbtrkt ezra koenig' />
              </Parallax>
              <Parallax offsetYMax='-45' offsetYMin='45' slowerScrollRate >
                <ScrollableAnchor id={'sek'} >
                  <div className='story-body'>
                    <div className='story-head' onMouseEnter={this.showDemo} onMouseLeave={this.hideDemo}>
                      <h1>
                        <a href='https://youtu.be/gs0xe9DQEPc' target="_blank" rel="noopener noreferrer">Sbtrkt + Ezra Koenig</a>
                      </h1>
                      <Swing><img src={Music} className="music-icon" alt="decorative" /></Swing>
                      <div className='demo'>
                        <Fade right when={this.state.showDemo}>New Drop. New York.</Fade>
                      </div>
                    </div>
                    <p>My girl's got a minimum<br />
                      Keep it stuck right there 'til the lumber comes<br />
                      Leave a smooth operator lookin' like a bum<br />
                      My girl's got a city to run<br />
                      Got the key to the kingdom where the money's from<br />
                      Never seen calienda, never seen the sun<br />
                      (And he thinks I'm the negative one)<br />
                      Flag flappin' in Manhattan<br />
                      New Dorp New York<br />
                      Gargoyles gargling oil<br />
                      Peak of the empire, top of the rock<br />
                      Flag flappin' in Manhattan<br />
                      New Dorp New York<br />
                      Gargoyles gargling oil<br />
                      Peak of the empire, top of the rock<br />
                      My girl's got a little schtick<br />
                      Keep your coat up in the kitchen while you feed the kids<br />
                      Keep your waitin' in the winter while the tension ticks<br />
                      My girl got a limousine<br />
                      Got a full time job just to keep it clean<br />
                      Got a speaker in the trunk; you know where it's done<br />
                      (You think I'm the negative one)<br />
                      Flag flappin' in Manhattan<br />
                      New Dorp New York<br />
                    </p>
                  </div>
                </ScrollableAnchor>
              </Parallax>
            </div>
          </Fade>

          <Fade clear opposite when={this.state.show4}>
            <div className="story" id="story-4">
              <Waypoint onEnter={this.handle4} onLeave={this.handle4} />
              <Parallax offsetYMax='45' offsetYMin='-45' slowerScrollRate >
                <img src={Sneaker4} className='story-img' alt="Julian Plenti" />
              </Parallax>
              <Parallax offsetYMax='-45' offsetYMin='45' slowerScrollRate >
                <ScrollableAnchor id={'jp'}>
                  <div className='story-body'>
                    <div className='story-head' onMouseEnter={this.showDemo} onMouseLeave={this.hideDemo}>
                      <h1>
                        <a href="https://youtu.be/_Lm1fVRAyH8" target="_blank" rel="noopener noreferrer">Julian Plenti</a>
                      </h1>
                      <Swing><img src={Music} className="music-icon" alt="decorative" /></Swing>
                      <div className='demo'>
                        <Fade right when={this.state.showDemo}> Only If You Run </Fade>
                      </div>
                    </div>
                    <p>I've had my frustrations about the pains of daily life<br />
                      I've tasted degradation and found the lace and candle light<br />
                      But we have the weights, we have the measures of our days and nights<br />
                      I've had my frustrations, but now, I've found my place<br />
                      And you will make it<br />
                      But only if you run<br />
                      These lonely dedications I've found, they bring me peace and light<br />
                      When three-fold applications of doubt surround my fate, you might say<br />
                      We have the weights, we have to wage an assault on what it is<br />
                      'Cause harmless medications abound, and you're not sick<br />
                      You will make it<br />
                      But only if you run<br />
                      Surprise<br />
                      Surprise<br />
                      Surprise<br />
                      Surprise<br />
                      You will make it<br />
                      But only if you run<br />
                    </p>
                  </div>
                </ScrollableAnchor>
              </Parallax>
            </div>
          </Fade>

        </div>
      </ParallaxProvider>
    )
  }
}
