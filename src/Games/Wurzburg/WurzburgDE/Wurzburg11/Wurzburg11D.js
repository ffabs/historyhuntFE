import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import kilianifest from '../../WurzburgImages/kilianifest.png';
import '../Wurzburg.css';
import GameMenu from '../../../../Components/ComponentsDE/GameMenu';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/DE/wurzburg11D');
}

class Wurzburg11D extends Component {

  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && <div>
          <Timeline timelineProgress="11" timelineReference="21. Jh. n.Chr." animate="yes"/>
          <div className="clue-background">
            <div className="clue-background-title">Herzlichen Glückwunsch zum Erreichen des Endes!</div>
            <div className="clue-background-div">Dies ist das Ende der Reise. Hoffentlich hat es Ihnen Spaß gemacht, die Geschichte dieser großartigen Stadt zu entdecken!</div>
            <img src={kilianifest} className="gameIntro-image" alt="kilianifest" />
            <div className="clue-background-div">Erinnerst du dich übrigens, wie die Reise begann? Noch heute spielt Kilian eine wichtige Rolle für die Stadt, er ist der Schutzpatron von Würzburg und jedes Jahr im Juli gibt es eine große Messe mit Feuerwerk namens "Kiliani"!</div>
          </div>
          {/* <div className="question-section"> */}
          {/* </div> */}
          <div className="buttons-section">
            <Link to="/DE/support-us">
              <div className="gameNext-button-below">
                Unterstütze uns!
              </div>
            </Link>
            <Link to="/DE">
              <div className="gameNext-button-below">
                Startseite
              </div>
            </Link>
            <Link to="/DE/wuerzburg/currenttimes/intro/clue">
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
                ReactGA.pageview('/DE/wurzburg11D');
            }}
            >Diese Website verwendet Google Analytics-Cookies, um die Nutzererfahrung zu verbessern.
        </CookieConsent>
        </div>  
      );
  }
}

export default Wurzburg11D;