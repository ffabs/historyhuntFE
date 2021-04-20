import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../../Components/ComponentsDE/GameMenu';
import kilianus from '../../WurzburgImages/kilianus.png';
import totnam from '../../WurzburgImages/totnam.png';
import kolonatus from '../../WurzburgImages/kolonatus.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/DE/wurzburg1CHelp');
}

class Wurzburg1CHelp extends Component {
    
  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && 
          <div> 
          <Timeline timelineProgress="1" timelineReference="7. Jh. n.Chr."/>
            <div className="clue-background">
            <div className="clue-background-title">Hinweis Hilfe</div>
            <div className="clue-background-div">Schreiben Sie die Namen so, wie sie auf die Statuen geschrieben sind:</div>
            <div>
              <img src={kilianus} className="solution-image" alt="kilianus" />
              <img src={totnam} className="solution-image" alt="totnam" />
              <img src={kolonatus} className="solution-image" alt="kolonatus" />
            </div>
          </div>
        <div className="buttons-section">
            <Link to="/DE/wuerzburg/bridge/clue">
                <div className="gameNext-button">
                  Zurück
                </div>
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
                  ReactGA.pageview('/DE/wurzburg1CHelp');
              }}
              >Diese Website verwendet Google Analytics-Cookies, um die Nutzererfahrung zu verbessern.
          </CookieConsent>  
        </div>  
      );
  }
}

export default Wurzburg1CHelp;