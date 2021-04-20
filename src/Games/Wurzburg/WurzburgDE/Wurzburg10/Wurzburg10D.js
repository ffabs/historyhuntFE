import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../../Components/ComponentsDE/GameMenu';
import warriors from '../../WurzburgImages/warriors.png';
import crosses from '../../WurzburgImages/crosses.png';
import planewar from '../../WurzburgImages/planewar.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/DE/wurzburg10D');
}

class Wurzburg10D extends Component {

  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && <div>
          <Timeline timelineProgress="9" timelineReference="20. Jh. n.Chr."/>
          <div className="clue-background">
            <div className="clue-background-title">Gut gemacht!</div>
            <div className="war-memorial">
              <img src={warriors} className="warriors" alt="warriors" />
              <img src={crosses} className="crosses" alt="crosses" />
            </div>
            <div className="clue-background-divs">
              <div className="clue-background-div">Heute ist dies noch ein Denkmal für die gefallenen Soldaten, aber es gilt als Denkmal für den Frieden und nicht für den Krieg.</div>
            </div>         
            <img src={planewar} className="oegg" alt="planewar" />
            <div className="clue-background-divs">
              <div className="clue-background-div question-section">Bist du bereit, in die aktuelle Zeit zurückzukehren?</div>
            </div>
          </div>
          <div className="buttons-section">
            <Link to="/DE/wuerzburg/currenttimes/intro">
                <div className="gameNext-button">
                    Ja
                </div>
            </Link>
            <Link to="/DE/wuerzburg/worldwar/intro/clue">
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
                  ReactGA.pageview('/DE/wurzburg10D');
              }}
              >Diese Website verwendet Google Analytics-Cookies, um die Nutzererfahrung zu verbessern.
          </CookieConsent>
        </div>  
      );
  }
}

export default Wurzburg10D;