import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../Components/GameMenu';
import destination5 from '../WurzburgImages/destination5.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/wurzburg5A');
}

class Wurzburg5A extends Component {

  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && <div> 
          <Timeline timelineProgress="5" timelineReference="16th A.D."/>
          <div className="clue-background">
            <div className="clue-background-title">Julius Echter</div>
            <div className="clue-background-div">Let's go meeting the bishop Julius Echter Von Mespelbrunn.</div>
            <div><img src={destination5} className="destination2" alt="destination5" /></div>
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
          <CookieConsent 
              enableDeclineButton 
              buttonStyle={{ background: "#00695c", color: "white", fontWeight: "bold" }}
              onAccept={() => {
                  ReactGA.initialize('UA-192893120-1');
                  ReactGA.pageview('/wurzburg5A');
              }}
              >This website uses Google Analytics cookies to enhance the user experience.
          </CookieConsent>
        </div>  
      );
  }
}

export default Wurzburg5A;