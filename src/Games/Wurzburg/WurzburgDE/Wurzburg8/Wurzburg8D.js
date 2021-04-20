import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../../Components/ComponentsDE/GameMenu';
import ring from '../../WurzburgImages/ring.png';
import ringparkfinal from '../../WurzburgImages/ringparkfinal.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/DE/wurzburg8D');
}

class Wurzburg8D extends Component {

  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && <div>
          <Timeline timelineProgress="7" timelineReference="19. Jh. n.Chr."/>
          <div className="clue-background">
            <div className="clue-background-title">Gut gemacht!</div>
            <div>
              <img src={ring} className="memorial-image" alt="ring" />
            </div>
            <div className="clue-background-divs">
            <div className="clue-background-div">Diese Antwort erklärt auch, warum der Park "Ring" heißt und rund um die Stadt eine runde Form hat, wie es die Stadtmauern früher getan haben!</div>
            <div>
              <img src={ringparkfinal} className="memorial-image" alt="ring park" />
            </div>
          {/* <div className="question-section"> */}
            <div className="clue-background-div question-section">Lassen Sie uns einige seiner anderen Geheimnisse herausfinden...</div>
          {/* </div> */}
          </div>
          </div>
          <div className="buttons-section">
            <Link to="/DE/wuerzburg/xrays">
                <div className="gameNext-button">
                  Nächster Hinweis
                </div>
            </Link>
            <Link to="/DE/wuerzburg/ringpark/intro/clue">
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
                  ReactGA.pageview('/DE/wurzburg8D');
              }}
              >Diese Website verwendet Google Analytics-Cookies, um die Nutzererfahrung zu verbessern.
          </CookieConsent>
        </div>  
      );
  }
}

export default Wurzburg8D;