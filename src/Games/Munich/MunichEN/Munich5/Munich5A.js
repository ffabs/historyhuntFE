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
    ReactGA.pageview('/munich5A');
}

class Munich5A extends Component {
    
  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && 
          <div> 
          <Timeline timelineProgress="4" timelineReference="14th A.D."/>
          <div className="clue-background">
            <div className="clue-background-title">City Walls</div>
            <div className="clue-background-divs">
              <div className="clue-background-div">Let's go to Isartor to discover the history of the city walls!</div>
              <img src={destination1} className="destination1" alt="destination1" />
            <iframe 
              className="clue-map"
              title="map"
              // frameborder="0" 
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJg-Bu7Il1nkcR1XYh_kKr8pE&key=AIzaSyDx8TjLXQy9CIDjVVVU2EH2LXibwQRNKxs" 
              // allowfullscreen 
            />
          {/* </div>
          <div className="question-section"> */}
          <div className="clue-background-div question-section">Arrived?</div>
            </div>
          </div>
          <div className="buttons-section">
            <Link to="/munich/walls/clueintro">
              <div className="gameNext-button">
                  Yes
              </div>
            </Link>
            <Link to="/munich/bavarian/clueAnswer">
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
                  ReactGA.pageview('/munich5A');
              }}
              >This website uses Google Analytics cookies to enhance the user experience.
          </CookieConsent>   
        </div>  
      );
    }
}

export default Munich5A;
