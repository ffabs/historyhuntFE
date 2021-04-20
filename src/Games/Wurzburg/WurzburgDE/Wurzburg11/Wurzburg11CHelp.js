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
    ReactGA.pageview('/DE/wurzburg11CHelp');
}

class Wurzburg11CHelp extends Component {
    
  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && 
          <div>
        <Timeline timelineProgress="10" timelineReference="20.-21. Jh. n.Chr."/>
            <div className="clue-background">
            <div className="clue-background-title">Hinweis Hilfe</div>
            <div className="clue-background-div">Offiziell beginnt die Geschichte der Stadt zu Beginn des 8. Jahrhunderts, als die Stadt erstmals als solche dokumentiert wurde. Dies war genau zwischen dem berühmten Martyrium und der Gründung des Bistums.</div>
            <div>
                <img src={kilianus} className="solution-image" alt="kilianus" />
                <img src={totnam} className="solution-image" alt="totnam" />
                <img src={kolonatus} className="solution-image" alt="kolonatus" />
            </div>
          </div>
        <div className="buttons-section">
            <Link to="/DE/wuerzburg/currenttimes/intro/clue">
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
                  ReactGA.pageview('/DE/wurzburg11CHelp');
              }}
              >Diese Website verwendet Google Analytics-Cookies, um die Nutzererfahrung zu verbessern.
          </CookieConsent>
        </div>  
      );
  }
}

export default Wurzburg11CHelp;