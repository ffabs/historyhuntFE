import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../../Components/ComponentsDE/GameMenu';
import soldierw2 from '../../WurzburgImages/soldierw2.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/DE/wurzburg10B');
}

class Wurzburg10B extends Component {

  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && <div>
          <Timeline timelineProgress="9" timelineReference="20. Jh. n.Chr."/>
          <div className="clue-background">
            <div className="clue-background-title">Weltkriege</div>
            <div className="clue-background-divs">
              <div className="clue-background-div">
              Ursprünglich wurde dieses Kriegsdenkmal vor dem Zweiten Weltkrieg für die gefallenen Soldaten des Ersten Weltkriegs errichtet.
              </div>
              <div className="clue-background-div">
              Zu dieser Zeit lehnten die Nationalsozialisten es ab, missbrauchten es dann aber als „Hero's Memorial“ für die Propaganda der Nazis.
              </div>
            </div>
            <img src={soldierw2} className="oegg" alt="soldierw2"/>
          </div>
            <div className="question-section">
              <div className="clue-background-div">Bist du bereit für den Hinweis?</div>
            </div>
          <div className="buttons-section">
            <Link to="/DE/wuerzburg/worldwar/intro/clue">
                <div className="gameNext-button">
                    Ja
                </div>
            </Link>
            <Link to="/DE/wuerzburg/worldwar">
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
                  ReactGA.pageview('/DE/wurzburg10B');
              }}
              >Diese Website verwendet Google Analytics-Cookies, um die Nutzererfahrung zu verbessern.
          </CookieConsent>
        </div>  
      );
  }
}

export default Wurzburg10B;