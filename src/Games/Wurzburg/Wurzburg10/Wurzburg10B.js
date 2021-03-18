import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../Components/GameMenu';

class Wurzburg10B extends Component {

  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && <div>
          <Timeline timelineProgress="9" timelineReference="20th A.D."/>
          <div className="clue-background">
            <div className="clue-background-title">World Wars</div>
            <div className="clue-background-divs">
            <div className="clue-background-div">
              Originally, this war memorial was made before the Second World War for the fallen soldiers of the First World War.
            </div>
            <div className="clue-background-div">
              At the time, even if the National Socialists rejected it initially, they then misused it as a “Hero's Memorial” for Nazi propaganda.
            </div>
          {/* <div className="question-section"> */}
            <div className="clue-background-div question-section">Are you ready for the clue?</div>
          {/* </div> */}
          </div>
          </div>
          <div className="buttons-section">
            <Link to="/wuerzburg/worldwar/intro/clue">
                <div className="gameNext-button">
                    Yes
                </div>
            </Link>
            <Link to="/wuerzburg/worldwar">
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

export default Wurzburg10B;