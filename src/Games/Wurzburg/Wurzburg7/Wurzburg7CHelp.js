import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../Components/GameMenu';
import kirche from '../WurzburgImages/kirche.jpeg';

class Wurzburg7CHelp extends Component {
    
  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && 
          <div> 
          <Timeline timelineProgress="6" timelineReference="17-18th A.D."/>
            <div className="clue-background">
            <div className="clue-background-title">Clue Help</div>
            <div className="clue-background-div">The architect decided to use mirrors in the side of the Church without windows:</div>
            <div>
              <img src={kirche} className="memorial-image" alt="kirche" />
            </div>
          </div>
        <div className="buttons-section">
            <Link to="/wuerzburg/residenz/intro/clue">
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

export default Wurzburg7CHelp;