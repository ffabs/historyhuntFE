import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import residenz from '../../WurzburgImages/residenz-in-const.png';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../../Components/ComponentsDE/GameMenu';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/DE/wurzburg7B');
}

class Wurzburg7B extends Component {

  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && <div>
          <Timeline timelineProgress="6" timelineReference="17.-18. Jh. n.Chr."/>
          <div className="clue-background">
            <div className="clue-background-title">Die Residenz</div>
            {/* <div className="clue-background-div">After the Swedish war and occupation, within a space of 100 years a bishop’s palace was built, the Residenz and the bishops moved from the fortress to the Residenz.</div> */}
            <div className="clue-background-div">Der Bischof Johann Philipp Franz von Schönborn wollte als Monarch seiner Zeit auftreten und lebte in einem Schloss, das mit dem von Versailles oder Schönbrunn vergleichbar war. Nachdem er in einem Gerichtsverfahren ein Vermögen gewonnen hatte, nutzte er es 1720, um dieses beeindruckende Bauprojekt durchzuführen.</div>
          </div>
            <div className="clue-background-div-i">Die Residenz im Bau 1731:</div>
            <div><img src={residenz} className="gameIntro-image" alt="residenz" /></div>
          <div className="question-section">
            <div className="clue-background-div">Kannst du in die Hofkapelle gehen?</div>
          </div>
          <div className="buttons-section">
            <Link to="/DE/wuerzburg/residenz/intro/clue">
                <div className="gameNext-button">
                    Ja
                </div>
            </Link>
            <Link to="/DE/wuerzburg/residenz/intro/help">
                <div className="gameNext-button-below">
                    Nein
                </div>
            </Link>
            <Link to="/DE/wuerzburg/residenz">
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
                  ReactGA.pageview('/DE/wurzburg7B');
              }}
              >Diese Website verwendet Google Analytics-Cookies, um die Nutzererfahrung zu verbessern.
          </CookieConsent> 
        </div>  
      );
  }
}

export default Wurzburg7B;