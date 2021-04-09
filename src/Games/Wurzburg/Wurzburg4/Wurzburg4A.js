import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../Components/GameMenu';
import destination4 from '../WurzburgImages/destination4.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/wurzburg4A');
}

class Wurzburg4A extends Component {

  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && <div> 
          <Timeline timelineProgress="5" timelineReference="16th A.D." animate="yes"/>
          <div className="clue-background">
            <div className="clue-background-title">The Peasants’ Revolt</div>
            <div className="clue-background-div">Go up towards the castle and stop half way near a memorial and a panorama point.</div>
            <div><img src={destination4} className="destination1" alt="destination4" /></div>
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
            <div className="clue-background-div">...do you need further directions?</div>
          </div>
          
            <div className="buttons-section">
              <Link to="/wuerzburg/peasants/help">
                  <div className="gameNext-button">
                      Yes, please!
                  </div>
              </Link>
              <Link to="/wuerzburg/peasants/memorial">
                  <div className="gameNext-button-below">
                      No, I found it!
                  </div>
              </Link>
              <Link to="/wuerzburg/citycouncil/sundial/clueAnswer">
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
                  ReactGA.pageview('/wurzburg4A');
              }}
              >This website uses Google Analytics cookies to enhance the user experience.
            </CookieConsent>
          </div>
      );
  }
}

export default Wurzburg4A;
