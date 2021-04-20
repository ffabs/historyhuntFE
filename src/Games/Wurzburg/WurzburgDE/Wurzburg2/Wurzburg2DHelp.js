import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../../Components/ComponentsDE/GameMenu';
import gothic from '../../WurzburgImages/gothic.png';
import renaissance from '../../WurzburgImages/renaissance.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/DE/wurzburg2DHelp');
}

class Wurzburg2DHelp extends Component {
    
  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && 
          <div> 
          <Timeline timelineProgress="2" timelineReference="8. Jh. n.Chr."/>
            <div className="clue-background">
            <div className="clue-background-title">Hinweis Hilfe</div>
            <div className="clue-background-div">Alle Bischofsstatuen sind mit repräsentativen Symbolen versehen!</div>
            <div>
              <img src={gothic} className="lorenz-image" alt="gothic" />
            </div><div>
              <img src={renaissance} className="lorenz-image" alt="renaissance" />
            </div>
          </div>
        <div className="buttons-section">
            <Link to="/DE/wuerzburg/kilianus/dom/inside/clue">
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
                  ReactGA.pageview('/DE/wurzburg2DHelp');
              }}
              >Diese Website verwendet Google Analytics-Cookies, um die Nutzererfahrung zu verbessern.
          </CookieConsent> 
        </div>  
      );
  }
}

export default Wurzburg2DHelp;