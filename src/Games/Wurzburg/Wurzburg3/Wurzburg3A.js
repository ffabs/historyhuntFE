import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../Components/GameMenu';

class Wurzburg3A extends Component {

  render() {
    return ( 
      <div>
        {this.props.gamemenu !== true && 
        <div> 
        <Timeline timelineProgress="4" timelineReference="12-14th A.D."/>
        <div className="clue-background">
          <div className="clue-background-title">The Town Hall</div>
          <div className="clue-background-div">Come back towards the bridge and this time stop at the building with the clock tower.</div>
          <iframe 
            className="clue-map"
            title="map"
            // frameborder="0" 
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJAQO13xyRokcRt0VftfVsiVk&key=AIzaSyDx8TjLXQy9CIDjVVVU2EH2LXibwQRNKxs" 
            // allowfullscreen 
          />
        </div>
        <div className="question-section">
          <div className="clue-background-div">...arrived?</div>
        </div>
        <div className="buttons-section">
          <Link to="/wuerzburg/citycouncil">
              <div className="gameNext-button">
                  Yes
              </div>
          </Link>
          <Link to="/wuerzburg/domAnswer">
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

export default Wurzburg3A;
