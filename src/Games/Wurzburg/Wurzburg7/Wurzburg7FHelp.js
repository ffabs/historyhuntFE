import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../Components/GameMenu';
import oegg from '../WurzburgImages/oegg.png';

class Wurzburg7FHelp extends Component {
    
  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && 
          <div> 
          <Timeline timelineProgress="5" timelineReference="16th A.D."/>
            <div className="clue-background">
            <div className="clue-background-title">Clue Help</div>
            <div className="clue-background-div">He is holding a paper:</div>
            <div>
              <img src={oegg} className="oegg" alt="oegg" />
            </div>
          </div>
        <div className="buttons-section">
            <Link to="/wuerzburg/residenz/garden/clueQuestion">
                <div className="gameNext-button">
                    Back
                </div>
            </Link>
          </div>
          </div>}<GameMenu {...this.props}/> 
        </div>  
      );
  }
}

export default Wurzburg7FHelp;