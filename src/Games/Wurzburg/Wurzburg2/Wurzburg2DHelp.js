import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../Components/GameMenu';
import lorenz from '../WurzburgImages/lorenz.png';

class Wurzburg2DHelp extends Component {
    
  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && 
          <div> 
          <Timeline timelineProgress="2" timelineReference="8th A.D."/>
            <div className="clue-background">
            <div className="clue-background-title">Clue Help</div>
            <div className="clue-background-div">All bishops' statues have emblems around them.</div>
            <div>
              <img src={lorenz} className="lorenz-image" alt="lorenz" />
            </div>
          </div>
        <div className="buttons-section">
            <Link to="/wuerzburg/kilianus/dom/inside/clue">
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

export default Wurzburg2DHelp;