import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../TimelineMunich';
import {Link} from 'react-router-dom';
import '../Munich.css';
import GameMenu from '../../../../Components/ComponentsEN/GameMenu';
import munich2_oldcityhall from '../../MunichImages/munich2_oldcityhall.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/munich2CHelp');
}

class Munich2CHelp extends Component {
    
  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && 
          <div> 
          <Timeline timelineProgress="2" timelineReference="12th A.D."/>
            <div className="clue-background">
            <div className="clue-background-title">Clue Help</div>
            <div className="clue-background-div">The street you are looking for ends at the Old Town Hall and has only 3 letters:</div>
            <div>
              <img src={munich2_oldcityhall} className="solution-image" alt="oldcityhall" />
            </div>
          </div>
        <div className="buttons-section">
            <Link to="/munich/marktplatz/clue">
                <div className="gameNext-button">
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
                  ReactGA.pageview('/munich2CHelp');
              }}
              >This website uses Google Analytics cookies to enhance the user experience.
          </CookieConsent>  
        </div>  
      );
  }
}

export default Munich2CHelp;