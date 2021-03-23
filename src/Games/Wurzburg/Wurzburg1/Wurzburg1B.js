import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../Components/GameMenu';
import statues from '../WurzburgImages/statues.png';

class Wurzburg1B extends Component {
    
  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && 
          <div> 
          <Timeline timelineProgress="1" timelineReference="7th A.D."/>
          <div className="clue-background">
            <div className="clue-background-title">A martyrdom that changed history</div>
            <div className="clue-background-divs">
              <div className="clue-background-div">At the end of the 7th century, three Irish missionaries brought Christianity to the region. Even if this mission got them killed, they succeed eventually.</div>
              <div className="clue-background-div">The three saints are still commemorated on this very bridge today, each with a statue among the 12 present here.</div>
              <img src={statues} className="memorial-image" alt="statues" />
          {/* </div>
          <div className="question-section"> */}
              <div className="clue-background-div question-section">Are you ready to find them?</div>
            </div>
          </div>
          <div className="buttons-section">
              <Link to="/wuerzburg/bridge/clue">
                  <div className="gameNext-button">
                      Yes
                  </div>
              </Link>
              <Link to="/wuerzburg/start">
                <div className="gameNext-button-below">
                    Back
                </div>
              </Link>
          </div>
          </div>
          }
          <GameMenu {...this.props}/>  
        </div>  
      );
  }
}

export default Wurzburg1B;
