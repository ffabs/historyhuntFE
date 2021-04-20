import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../../Components/ComponentsDE/GameMenu';
import warriors from '../../WurzburgImages/warriors.png';
import crosses from '../../WurzburgImages/crosses.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/DE/wurzburg10CHelp');
}

class Wurzburg10CHelp extends Component {
    
  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && 
          <div>
        <Timeline timelineProgress="9" timelineReference="20. Jh. n.Chr."/>
            <div className="clue-background">
            <div className="clue-background-title">Hinweis Hilfe</div>
            <div className="clue-background-div">Vergleichen Sie bei der ersten Frage Ihre Größe mit der der Soldaten!</div>
            <div className="clue-background-div">Überprüfen Sie für die zweite Frage die Daten an den Kreuzen und denken Sie daran, dass der Erste Weltkrieg 1918 endete!</div>
            <div className="war-memorial">
              <img src={warriors} className="warriors" alt="warriors" />
              <img src={crosses} className="crosses" alt="crosses" />
            </div>
          </div>
        <div className="buttons-section">
            <Link to="/DE/wuerzburg/worldwar/intro/clue">
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
                  ReactGA.pageview('/DE/wurzburg10CHelp');
              }}
              >Diese Website verwendet Google Analytics-Cookies, um die Nutzererfahrung zu verbessern.
          </CookieConsent>
        </div>  
      );
  }
}

export default Wurzburg10CHelp;