import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../TimelineMunich';
import {Link} from 'react-router-dom';
import '../Munich.css';
import GameMenu from '../../../../Components/ComponentsEN/GameMenu';
import munichemblemhelp from '../../MunichImages/munichemblemhelp.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/munich1BHelp');
}

class Munich1CHelp extends Component {
    
  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && 
          <div> 
          <Timeline timelineProgress="1" timelineReference="8-12th A.D."/>
            <div className="clue-background">
            <div className="clue-background-title">Clue Help</div>
            <div className="clue-background-div">Look for the following coat of arms:</div>
            <div>
              <img src={munichemblemhelp} className="lorenz-image" alt="munichemblemhelp" />
            </div>
          </div>
        <div className="buttons-section">
            <Link to="/munich/cityhall">
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
                  ReactGA.pageview('/munich1BHelp');
              }}
              >This website uses Google Analytics cookies to enhance the user experience.
          </CookieConsent>  
        </div>  
      );
  }
}

export default Munich1CHelp;