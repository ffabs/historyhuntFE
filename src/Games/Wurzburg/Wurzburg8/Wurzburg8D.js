import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../Components/GameMenu';

class Wurzburg8D extends Component {

  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && <div>
          <Timeline timelineProgress="7" timelineReference="19th A.D."/>
          <div className="clue-background">
            <div className="clue-background-title">Well done!</div>
            <div className="clue-background-divs">
            <div className="clue-background-div">This answer also explains why the park is called "Ring", having a round shape all around the city, like the city walls used to!</div>
          
          {/* <div className="question-section"> */}
            <div className="clue-background-div question-section">Let's find out some of its other secrets...</div>
          {/* </div> */}
          </div>
          </div>
          <div className="buttons-section">
            <Link to="/wuerzburg/xrays">
                <div className="gameNext-button">
                    Next
                </div>
            </Link>
            <Link to="/wuerzburg/ringpark/intro/clue">
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

export default Wurzburg8D;