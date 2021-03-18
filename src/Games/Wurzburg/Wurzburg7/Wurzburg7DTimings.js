import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../Components/GameMenu';

class Wurzburg7DTimings extends Component {

  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && <div>
          <Timeline timelineProgress="6" timelineReference="17-18th A.D."/>
          <div className="clue-background">
            <div className="clue-background-title">Residence Garden opening times:</div>
            <div className="clue-background-div">April-October: 9am-6pm</div>
            <div className="clue-background-div">November-March: 10am-4.30pm</div>
            <div className="clue-background-div">
              Closed on: 01.01., Shrove Tuesday, 24.12., 25.12., 31.12.
            </div>
          </div>
          <div className="buttons-section">
            <Link to="/wuerzburg/residenz/garden/clue">
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

export default Wurzburg7DTimings;