import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../Components/GameMenu';
import kilianus from '../WurzburgImages/kilianus.png';
import totnam from '../WurzburgImages/totnam.png';
import kolonatus from '../WurzburgImages/kolonatus.png';

class Wurzburg1D extends Component {
  render() {
    return ( 
      <div>
        {this.props.gamemenu !== true && 
        <div> 
        <Timeline timelineProgress="2" timelineReference="8th A.D."/>
        <div className="clue-background">
          <div className="clue-background-title">Well done!</div>
          <div>
              <img src={kilianus} className="solution-image" alt="kilianus" />
              <img src={totnam} className="solution-image" alt="totnam" />
              <img src={kolonatus} className="solution-image" alt="kolonatus" />
            </div>
          <div className="clue-background-divs">
            <div className="clue-background-div">The three are also called apostles of Franconia and their subsequent veneration leaded to the quick development of the city.</div>
            <div className="clue-background-div">So, at the beginning of the 8th century, the bishop of Würzburg was founded. In the same century, the first mention of wine got cultivated in the town and the first cathedral was build: Dom St. Kilian.</div>
          </div>
        </div>
        <div className="buttons-section">
          <Link to="/wuerzburg/kilianus/dom">
            <div className="gameNext-button">
                Next Clue
            </div>
          </Link>
          <Link to="/wuerzburg/bridge/clue">
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

export default Wurzburg1D;
