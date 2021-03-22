import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../Components/GameMenu';
import memorialbuilding from '../WurzburgImages/memorialbuilding.png';
import memorialtext from '../WurzburgImages/memorialtext.jpeg';

class Wurzburg4D extends Component {

  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && 
          <div> 
          <Timeline timelineProgress="5" timelineReference="16th A.D."/>
          <div className="clue-background">
            <div className="clue-background-title">Well done!</div>
            <div>
              <img src={memorialbuilding} className="memorial-image" alt="memorialbuilding" />
              <img src={memorialtext} className="memorial-image" alt="memorialtext" />
            </div>
            <div className="clue-background-divs">
              <div className="clue-background-div">Interestingly, Martin Luther's revolution happened in roughtly the same years. However, even if Luther's thoughts may have added intensity to the uprising movements, it did not create them and he even opposed the revolts. Actually, Martin Luther was even received by the bishop Lorenz Von Bibra (earlier met in the Dom) and they got along very well.</div>
              <div className="clue-background-div">Not long after however, a new bishop was not as friendly with Luther's ideas...</div>
            </div>
          </div>
          <div className="buttons-section">
            <Link to="/wuerzburg/julius">
                <div className="gameNext-button">
                Next Clue
                </div>
            </Link>
            <Link to="/wuerzburg/peasants/memorial/clue">
                <div className="gameNext-button-below">
                    Back
                </div>
            </Link>
          </div>
          </div>}<GameMenu {...this.props}/> 
        </div>  
      );
    }
}

export default Wurzburg4D;
