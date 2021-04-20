import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../../Components/ComponentsEN/GameMenu';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/wurzburg2BDomTimings');
}

class Wurzburg2BDomTimings extends Component {
    
  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && 
          <div> 
          <Timeline timelineProgress="2" timelineReference="8th A.D."/>
          <div className="clue-background">
            <div className="clue-background-title">Dom opening times:</div>
            <div className="clue-background-div">Mon-Sat: 10am-5pm</div>
            <div className="clue-background-div">Sun: 1pm-6pm</div>
          </div>
        <div className="buttons-section">
            <Link to="/wuerzburg/kilianus/dom/openings">
                <div className="gameNext-button">
                    Back
                </div>
            </Link>
            <Link to="/wuerzburg/domAnswer/citizens">
                <div className="gameFeedback-button">Skip Clue</div>
            </Link>
          </div>
          </div>}<GameMenu {...this.props}/> 
          <CookieConsent 
              enableDeclineButton 
              buttonStyle={{ background: "#00695c", color: "white", fontWeight: "bold" }}
              onAccept={() => {
                  ReactGA.initialize('UA-192893120-1');
                  ReactGA.pageview('/wurzburg2BDomTimings');
              }}
              >This website uses Google Analytics cookies to enhance the user experience.
          </CookieConsent> 
        </div>  
      );
  }
}

export default Wurzburg2BDomTimings;