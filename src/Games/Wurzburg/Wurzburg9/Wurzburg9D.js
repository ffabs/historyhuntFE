import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import lab from '../WurzburgImages/lab.jpg';
import '../Wurzburg.css';
import GameMenu from '../../../Components/GameMenu';

class Wurzburg9D extends Component {

  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && <div>
          <Timeline timelineProgress="8" timelineReference="19-20th A.D."/>
          <div className="clue-background">
            <div className="clue-background-title">Well done!</div>
            <img src={lab} className="gameIntro-image" alt="lab" />
            <div className="clue-background-divs">
            <div className="clue-background-div">
              If you are interested, you can even visit his lab at the other side of the town for free! For more info check the following link:
            </div>
            <div className="clue-background-div">
              <a href="http://wilhelmconradroentgen.de/en/home" target="_blank" rel="noopener noreferrer">
                http://wilhelmconradroentgen.de/en/home
              </a>
            </div>
            
          {/* <div className="question-section"> */}
            <div className="clue-background-div question-section">What happened next?</div>
          {/* </div> */}
          </div>
          </div>
          <div className="buttons-section">
            <Link to="/wuerzburg/worldwar">
                <div className="gameNext-button">
                    Yes
                </div>
            </Link>
            <Link to="/wuerzburg/xrays/intro/clue">
                <div className="gameNext-button-below">
                    Back
                </div>
            </Link>
            <a href="https://us1.list-manage.com/survey?u=27bed50594116df471c55e108&id=e11c3c40f6" target="_blank" rel="noopener noreferrer">
              <div className="gameFeedback-button">Give Feedback</div>
            </a>
          </div>
          </div>}<GameMenu {...this.props}/> 
        </div>  
      );
  }
}

export default Wurzburg9D;