import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../Components/GameMenu';

class Wurzburg7Bhelp extends Component {

  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && <div>
          <Timeline timelineProgress="6" timelineReference="17-18th A.D."/>
          <div className="clue-background">
            <div className="clue-background-title">Court Chapel opening times:</div>
            <div className="clue-background-div">April-October: 9am-6pm</div>
            <div className="clue-background-div">November-March: 10am-4.30pm</div>
            <div className="clue-background-div">
              Closed on: 01.01., Shrove Tuesday, 24.12., 25.12., 31.12.
            </div>
            <iframe 
              className="clue-map"
              title="map"
              // frameborder="0" 
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed/v1/place?q=place_id:EilSZXNpZGVuenBsYXR6IDIsIDk3MDcwIFfDvHJ6YnVyZywgR2VybWFueSJQEk4KNAoyCX-8rcYtkKJHEbTU2CjpVwakGh4LEO7B7qEBGhQKEgmBQKOSF5GiRxEwPdAeLLcdHAwQAioUChIJ8aeSwS2QokcR9H0kmd9-fuw&key=AIzaSyDx8TjLXQy9CIDjVVVU2EH2LXibwQRNKxs" 
              // allowfullscreen 
            />
          </div>
          <div className="buttons-section">
            <Link to="/wuerzburg/residenz/intro">
                <div className="gameNext-button-below">
                    Back
                </div>
            </Link>
            <Link to="/wuerzburg/residenz/gate/intro">
                <div className="gameFeedback-button">Skip Clue</div>
            </Link>
          </div>
          </div>}<GameMenu {...this.props}/> 
        </div>  
      );
  }
}

export default Wurzburg7Bhelp;