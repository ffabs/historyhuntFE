import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../Components/GameMenu';
import annouce from '../WurzburgImages/annouce.png';

class Wurzburg1A extends Component {
    
  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && 
          <div> 
          <Timeline timelineProgress="0" timelineReference="10th B.C."/>
          <div className="clue-background">
            <div className="clue-background-title">Würzburg before Würzburg</div>
            <div className="clue-background-divs">
              <div className="clue-background-div">Archeological finds have proven that since 1000 B.C. Celtics have been where the fortress is now. After becoming a Roman fort, this area was settled by the Alemanni and finally, in the 6th century, by the Franks.</div>
              <img src={annouce} className="memorial-image" alt="annouce" />
              <div className="clue-background-div">Despite these original settlements, the official history of Würzburg still had to begin. Come to the old bridge to discover how it started!</div>
            <iframe 
              className="clue-map"
              title="map"
              // frameborder="0" 
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJm8AYjzaQokcRtSwOtsofR5w&key=AIzaSyDx8TjLXQy9CIDjVVVU2EH2LXibwQRNKxs" 
              // allowfullscreen 
            />
          {/* </div>
          <div className="question-section"> */}
            <div className="clue-background-div question-section">Are you there?</div>
            </div>
          </div>
          <div className="buttons-section">
            <Link to="/wuerzburg/bridge">
              <div className="gameNext-button">
                  Yes, I am at old bridge
              </div>
            </Link>
            <Link to="/wuerzburg">
              <div className="gameNext-button-below">
                  Back
              </div>
            </Link>
          </div>
          </div>
          }
          <GameMenu {...this.props}/>      
        </div>  
      );
    }
}

export default Wurzburg1A;
