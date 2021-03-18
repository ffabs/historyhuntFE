import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../Components/GameMenu';

class Wurzburg5A extends Component {

  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && <div> 
          <Timeline timelineProgress="5" timelineReference="16th A.D."/>
          <div className="clue-background">
            <div className="clue-background-title">Julius Echter</div>
            <div className="clue-background-div">Let's go meeting the bishop Julius Echter Von Mespelbrunn.</div>
            <iframe 
              className="clue-map"
              title="map"
              // frameborder="0" 
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJOZAkOzOQokcRlMHDK2aTkRE&key=AIzaSyDx8TjLXQy9CIDjVVVU2EH2LXibwQRNKxs" 
              // allowfullscreen 
            />
          </div>
          <div className="question-section">
            <div className="clue-background-div">...arrived?</div>
          </div>
          <div className="buttons-section">
            <Link to="/wuerzburg/julius/statue">
                <div className="gameNext-button">
                    Yes
                </div>
            </Link>
            <Link to="/wuerzburg/peasants/memorial/clueAnswer">
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

export default Wurzburg5A;