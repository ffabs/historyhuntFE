import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../Components/GameMenu';
import street0 from '../WurzburgImages/street0.png';
import street1 from '../WurzburgImages/street1.png';
import street2 from '../WurzburgImages/street2.png';
import destination4 from '../WurzburgImages/destination4.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/wurzburg4AHelp');
}

class Wurzburg4AHelp extends Component {

  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && <div> 
          <Timeline timelineProgress="5" timelineReference="16th A.D."/>
          <div className="clue-background">
            <div className="clue-background-title">Directions</div>
            <div className="clue-background-div">1. Cross the bridge and the main street...</div>
            <div><img src={street0} className="destination1" alt="street0" /></div>
            <div className="clue-background-div">2. Look for the following tiny street:</div>
            <div><img src={street1} className="destination1" alt="street1" /></div>
            <div className="clue-background-div">3. Keep following the street and then the stairs:</div>
            <div><img src={street2} className="destination1" alt="street2" /></div>
            <div className="clue-background-div">4. Your destination is just at the end of the stairs!</div>
            <div><img src={destination4} className="destination1" alt="destination4" /></div>
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
              <Link to="/wuerzburg/peasants">
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
                  ReactGA.pageview('/wurzburg4AHelp');
              }}
              >This website uses Google Analytics cookies to enhance the user experience.
            </CookieConsent>
          </div>
      );
  }
}

export default Wurzburg4AHelp;
