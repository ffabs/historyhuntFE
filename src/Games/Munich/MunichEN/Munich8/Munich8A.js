import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../TimelineMunich';
import {Link} from 'react-router-dom';
import '../Munich.css';
import GameMenu from '../../../../Components/ComponentsEN/GameMenu';
import destination1 from '../../MunichImages/destination1.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/munich8A');
}

class Munich8A extends Component {
    
  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && 
          <div> 
          <Timeline timelineProgress="6" timelineReference="16th A.D."/>
          <div className="clue-background">
            <div className="clue-background-title">The Hofbräuhaus</div>
            <div className="clue-background-divs">
              <div className="clue-background-div">Let's go to the famous Hofbräuhaus beer hall!</div>
              <img src={destination1} className="destination1" alt="destination1" />
            <iframe 
              className="clue-map"
              title="map"
              // frameborder="0" 
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJxfxSz4t1nkcRLxq9ze1wwak&key=AIzaSyDx8TjLXQy9CIDjVVVU2EH2LXibwQRNKxs" 
              // allowfullscreen 
            />
          {/* </div>
          <div className="question-section"> */}
          <div className="clue-background-div question-section">Arrived?</div>
            </div>
          </div>
          <div className="buttons-section">
            <Link to="/munich/william/clueintro">
              <div className="gameNext-button">
                  Yes
              </div>
            </Link>
            <Link to="/munich/william/clueAnswer">
              <div className="gameNext-button-below">
                  Back
              </div>
            </Link>
          </div>
          </div>
          }
          <GameMenu {...this.props}/>      
          <CookieConsent 
              enableDeclineButton 
              buttonStyle={{ background: "#00695c", color: "white", fontWeight: "bold" }}
              onAccept={() => {
                  ReactGA.initialize('UA-192893120-1');
                  ReactGA.pageview('/munich8A');
              }}
              >This website uses Google Analytics cookies to enhance the user experience.
          </CookieConsent>   
        </div>  
      );
    }
}

export default Munich8A;
