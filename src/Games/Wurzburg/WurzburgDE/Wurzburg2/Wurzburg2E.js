import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../../Components/ComponentsDE/GameMenu';
import gothic from '../../WurzburgImages/gothic.png';
import renaissance from '../../WurzburgImages/renaissance.png';
import king from '../../WurzburgImages/king.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/DE/wurzburg2E');
}

class Wurzburg2E extends Component {

  render() {

    return ( 
        <div>
          {this.props.gamemenu !== true && 
          <div> 
          <Timeline timelineProgress="3" timelineReference="12. Jh. n.Chr." animate="yes"/>
          <div className="clue-background">
            <div className="clue-background-title">Gut gemacht!</div>
            <div className="center">
              <img src={gothic} className="imgclue2" alt="gothic" />
              <img src={renaissance} className="imgclue2" alt="renaissance" />
            </div>
            <div className="clue-background-divs">
            <div className="clue-background-div">Seit der Gründung des Bischofs und der Kathedrale sind die Bischöfe immer mächtiger geworden. 1168 wurde der Bischof von Würzburg sogar vom Kaiser Barbarossa zum Herzog ernannt, womit die Zeit der Fürstbischöfe von Würzburg begann, die bis 1803 andauerte.</div>
            <img src={king} className="memorial-image" alt="king" />
            <div className="clue-background-div">Nicht jeder war immer glücklich mit den mächtigen Bischöfen...</div>
            </div>
          </div>
          <div className="buttons-section">
            <Link to="/DE/wuerzburg/domAnswer/citizens">
              <div className="gameNext-button">
                Nächster Hinweis
              </div>
            </Link>
            <Link to="/DE/wuerzburg/kilianus/dom/inside/clue">
                <div className="gameNext-button-below">
                  Zurück
                </div>
            </Link>
            <a href="https://us1.list-manage.com/survey?u=27bed50594116df471c55e108&id=7d82dcd485" target="_blank" rel="noopener noreferrer">
                <div className="gameFeedback-button">Feedback geben</div>
            </a>
          </div>
          </div>}<GameMenu {...this.props}/> 
          <CookieConsent 
              buttonText="Ich akzeptiere"
              declineButtonText="Ich lehne ab"
              enableDeclineButton 
              buttonStyle={{ background: "#00695c", color: "white", fontWeight: "bold" }}
              onAccept={() => {
                  ReactGA.initialize('UA-192893120-1');
                  ReactGA.pageview('/DE/wurzburg2E');
              }}
              >Diese Website verwendet Google Analytics-Cookies, um die Nutzererfahrung zu verbessern.
          </CookieConsent> 
        </div>  
      );
  }
}

export default Wurzburg2E;