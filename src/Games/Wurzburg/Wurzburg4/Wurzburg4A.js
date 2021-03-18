import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../Components/GameMenu';

class Wurzburg4A extends Component {

  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && <div> 
          <Timeline timelineProgress="5" timelineReference="16th A.D."/>
          <div className="clue-background">
            <div className="clue-background-title">The Peasants’ War</div>
            <div className="clue-background-div">Go up towards the castle and stop half way in a panorama point.</div>
            <iframe 
              className="clue-map"
              title="map"
              // frameborder="0" 
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJfd-bJDaQokcRmZGR0uCd7b0&key=AIzaSyDx8TjLXQy9CIDjVVVU2EH2LXibwQRNKxs" 
              // allowfullscreen 
            />
          </div>
          <div className="question-section">
            <div className="clue-background-div">...arrived?</div>
          </div>
          
            <div className="buttons-section">
              <Link to="/wuerzburg/peasants/memorial">
                  <div className="gameNext-button">
                      Yes
                  </div>
                  
              </Link>
              <Link to="/wuerzburg/citycouncil/sundial/clueAnswer">
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

export default Wurzburg4A;
