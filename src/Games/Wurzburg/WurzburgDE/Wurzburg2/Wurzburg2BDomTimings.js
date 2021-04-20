import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../../Components/ComponentsDE/GameMenu';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/DE/wurzburg2BDomTimings');
}

class Wurzburg2BDomTimings extends Component {
    
  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && 
          <div> 
          <Timeline timelineProgress="2" timelineReference="8. Jh. n.Chr."/>
          <div className="clue-background">
            <div className="clue-background-title">Öffnungszeiten:</div>
            <div className="clue-background-div">Mo-Sa: 10-17 Uhr</div>
            <div className="clue-background-div">So: 13-18 Uhr</div>
          </div>
        <div className="buttons-section">
            <Link to="/DE/wuerzburg/kilianus/dom/openings">
                <div className="gameNext-button">
                  Zurück
                </div>
            </Link>
            <Link to="/DE/wuerzburg/domAnswer/citizens">
                <div className="gameFeedback-button">Hinweis überspringen</div>
            </Link>
          </div>
          </div>}<GameMenu {...this.props}/> 
          <CookieConsent 
              buttonText="Ich akzeptiere"
              declineButtonText="Ich lehne ab"
              enableDeclineButton 
              buttonStyle={{ background: "#00695c", color: "white", fontWeight: "bold" }}
              onAccept={() => {
                  ReactGA.initialize('UA-192893120-1');
                  ReactGA.pageview('/DE/wurzburg2BDomTimings');
              }}
              >Diese Website verwendet Google Analytics-Cookies, um die Nutzererfahrung zu verbessern.
          </CookieConsent> 
        </div>  
      );
  }
}

export default Wurzburg2BDomTimings;