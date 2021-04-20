import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../../Components/ComponentsDE/GameMenu';
import street0 from '../../WurzburgImages/street0.png';
import street1 from '../../WurzburgImages/street1.png';
import street2 from '../../WurzburgImages/street2.png';
import destination4 from '../../WurzburgImages/destination4.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/DE/wurzburg4AHelp');
}

class Wurzburg4AHelp extends Component {

  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && <div> 
          <Timeline timelineProgress="5" timelineReference="16. Jh. n.Chr."/>
          <div className="clue-background">
            <div className="clue-background-title">Richtungen</div>
            <div className="clue-background-div">1. Überqueren Sie die Brücke und die Hauptstraße...</div>
            <div><img src={street0} className="destination1" alt="street0" /></div>
            <div className="clue-background-div">2. Suchen Sie nach der folgenden winzigen Straße:</div>
            <div><img src={street1} className="destination1" alt="street1" /></div>
            <div className="clue-background-div">3. Folgen Sie weiter der Straße und dann der Treppe:</div>
            <div><img src={street2} className="destination1" alt="street2" /></div>
            <div className="clue-background-div">4. Ihr Ziel ist gerade am Ende der Treppe!</div>
            <div><img src={destination4} className="destination1" alt="destination4" /></div>
          </div>
          <div className="question-section">
            <div className="clue-background-div">...ist eingetroffen?</div>
          </div>
          
            <div className="buttons-section">
              <Link to="/DE/wuerzburg/peasants/memorial">
                  <div className="gameNext-button">
                      Ja
                  </div>
              </Link>
              <Link to="/DE/wuerzburg/peasants">
                <div className="gameNext-button-below">
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
                  ReactGA.pageview('/DE/wurzburg4AHelp');
              }}
              >Diese Website verwendet Google Analytics-Cookies, um die Nutzererfahrung zu verbessern.
            </CookieConsent>
          </div>
      );
  }
}

export default Wurzburg4AHelp;
