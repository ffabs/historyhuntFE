import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../../Components/ComponentsDE/GameMenu';
import xraysdesign from '../../WurzburgImages/xraysdesign.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/DE/wurzburg9B');
}

class Wurzburg9B extends Component {

  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && <div>
          <Timeline timelineProgress="8" timelineReference="19.-20. Jh. n.Chr."/>
          <div className="clue-background">
            <div className="clue-background-title">Xrays</div>
            <div className="clue-background-divs">
              <div className="clue-background-div">Ende des 19. Jahrhunderts stolperte der Physikprofessor Wilhelm Röntgen über Röntgenstrahlen und begann, sie zu studieren.</div>
            <div className="clue-background-div">Als er das erste Papier einreichte, das jemals auf Xrays geschrieben wurde, bezeichnete er die Strahlung als "X", um anzuzeigen, dass es sich um einen unbekannten Typ handelte. Der Name ist bis heute geblieben!</div>
          </div>
          <img src={xraysdesign} className="memorial-image" alt="xraysdesign"/>
          </div>
          <div className="question-section">
            <div className="clue-background-div">Bist du bereit, ihn in diesem Teil des Parks zu suchen?</div>
          </div>
          <div className="buttons-section">
            <Link to="/DE/wuerzburg/xrays/intro/clue">
                <div className="gameNext-button">
                    Ja
                </div>
            </Link>
            <Link to="/DE/wuerzburg/xrays">
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
                  ReactGA.pageview('/DE/wurzburg9B');
              }}
              >Diese Website verwendet Google Analytics-Cookies, um die Nutzererfahrung zu verbessern.
          </CookieConsent>
        </div>  
      );
  }
}

export default Wurzburg9B;