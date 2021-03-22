import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../Components/GameMenu';
import memorialbuilding from '../WurzburgImages/memorialbuilding.png';
import memorialtext from '../WurzburgImages/memorialtext.jpeg';

class Wurzburg4CHelp extends Component {
    
  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && 
          <div> 
          <Timeline timelineProgress="5" timelineReference="16th A.D."/>
            <div className="clue-background">
            <div className="clue-background-title">Clue Help</div>
            <div className="clue-background-div">Next to this memorial, you can find a sign about the battle that happened in the spring 1525:</div>
            <div>
              <img src={memorialbuilding} className="memorial-image" alt="memorialbuilding" />
              <img src={memorialtext} className="memorial-image" alt="memorialtext" />
            </div>
          </div>
        <div className="buttons-section">
            <Link to="/wuerzburg/peasants/memorial/clue">
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

export default Wurzburg4CHelp;