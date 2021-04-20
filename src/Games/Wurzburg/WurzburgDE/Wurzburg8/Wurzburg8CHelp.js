import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../../Components/ComponentsDE/GameMenu';
import ring from '../../WurzburgImages/ring.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/DE/wurzburg8CHelp');
}

class Wurzburg8CHelp extends Component {
    
  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && 
          <div> 
          <Timeline timelineProgress="7" timelineReference="19. Jh. n.Chr."/>
            <div className="clue-background">
            <div className="clue-background-title">Hinweis Hilfe</div>
            <div className="clue-background-div">Früher standen Befestigungen dort, wo sich jetzt der Ringpark befindet:</div>
            <div>
              <img src={ring} className="memorial-image" alt="ring" />
            </div>
          </div>
        <div className="buttons-section">
            <Link to="/DE/wuerzburg/ringpark/intro/clue">
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
                  ReactGA.pageview('/DE/wurzburg8CHelp');
              }}
              >Diese Website verwendet Google Analytics-Cookies, um die Nutzererfahrung zu verbessern.
          </CookieConsent>
        </div>  
      );
  }
}

export default Wurzburg8CHelp;