import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../TimelineMunich';
import {Link} from 'react-router-dom';
import '../Munich.css';
import GameMenu from '../../../../Components/ComponentsEN/GameMenu';
import munich_clue9help from '../../MunichImages/munichhelp9new.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/munich9CHelp');
}

class Munich9CHelp extends Component {
    
  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && 
          <div> 
          <Timeline timelineProgress="7" timelineReference="17th A.D."/>
            <div className="clue-background">
            <div className="clue-background-title">Clue Help</div>
            <div className="clue-background-div">Look for following statue, above and a bit further with respect to the lions:</div>
            <div>
              <img src={munich_clue9help} className="destination1" alt="munich_clue9help" />
            </div>
          </div>
        <div className="buttons-section">
            <Link to="/munich/max/clue">
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
                  ReactGA.pageview('/munich9CHelp');
              }}
              >This website uses Google Analytics cookies to enhance the user experience.
          </CookieConsent>  
        </div>  
      );
  }
}

export default Munich9CHelp;