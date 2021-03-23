import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../Components/GameMenu';
import handrays from '../WurzburgImages/handrays.png';

class Wurzburg9CHelp extends Component {
    
  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && 
          <div> 
          <Timeline timelineProgress="8" timelineReference="19-20th A.D."/>
            <div className="clue-background">
            <div className="clue-background-title">Clue Help</div>
            <div className="clue-background-div">In 1896, he took a x-rays picture of a hand:</div>
            <div>
              <img src={handrays} className="memorial-image" alt="handrays" />
            </div>
          </div>
        <div className="buttons-section">
            <Link to="/wuerzburg/xrays/intro/clue">
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

export default Wurzburg9CHelp;