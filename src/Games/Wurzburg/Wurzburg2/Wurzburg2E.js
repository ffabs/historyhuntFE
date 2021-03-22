import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../Components/GameMenu';
import lorenz from '../WurzburgImages/lorenz.png';

class Wurzburg2E extends Component {

  render() {

    return ( 
        <div>
          {this.props.gamemenu !== true && 
          <div> 
          <Timeline timelineProgress="3" timelineReference="12th A.D."/>
          <div className="clue-background">
            <div className="clue-background-title">Well done!</div>
            <div>
              <img src={lorenz} className="lorenz-image" alt="lorenz" />
            </div>
            <div className="clue-background-divs">
            <div className="clue-background-div">Since the foundation of the bishop and cathedral, the bishops have become increasingly more powerful. In 1168 the bishop of Würzburg was even made duke by the emperor Barbarossa, starting the period of the prince-bishops of Würzburg which lasted until 1803.</div>
            <div className="clue-background-div">Not everyone has always been happy with the powerful bishops though...</div>
            </div>
          </div>
          <div className="buttons-section">
            <Link to="/wuerzburg/domAnswer/citizens">
              <div className="gameNext-button">
                  Next Clue
              </div>
            </Link>
            <Link to="/wuerzburg/kilianus/dom/inside/clue">
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

export default Wurzburg2E;