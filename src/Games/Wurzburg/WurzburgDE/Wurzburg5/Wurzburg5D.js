import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../../Components/ComponentsDE/GameMenu';
import juliushelp from '../../WurzburgImages/juliushelp.png';
import castle from '../../WurzburgImages/castle.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/DE/wurzburg5D');
}

class Wurzburg5D extends Component {

  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && <div> 
          <Timeline timelineProgress="5" timelineReference="16. Jh. n.Chr."/>
          <div className="clue-background">
            <div className="clue-background-title">Gut gemacht!</div>
            <div>
              <img src={juliushelp} className="memorial-image" alt="juliushelp" />
              {/* <img src={juliusbar} className="memorial-image" alt="juliusbar" /> */}
            </div>
            <div className="clue-background-divs">
              <div className="clue-background-div">Neben dem Juliusspital errichtete er die alte Universität sowie mehrere Kirchen und Schulen.</div>
              
              <img src={castle} className="memorial-image" alt="castle" />
              <div className="clue-background-div">Schließlich erweiterte er auch die Festung, renovierte und verbesserte sie, nachdem ein Feuer sie beschädigt hatte. Wahrscheinlich hatte er nicht erwartet, dass seine Nachfolger in den folgenden Jahrhunderten aufgehört hätten, dort zu leben...</div>
            </div>
            
          </div>
          <div className="buttons-section">
            <Link to="/DE/wuerzburg/residenz">
                <div className="gameNext-button">
                  Nächster Hinweis
                </div>
            </Link>
            <Link to="/DE/wuerzburg/julius/statue/clue">
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
                  ReactGA.pageview('/DE/wurzburg5D');
              }}
              >Diese Website verwendet Google Analytics-Cookies, um die Nutzererfahrung zu verbessern.
          </CookieConsent>  
        </div>  
      );
  }
}

export default Wurzburg5D;