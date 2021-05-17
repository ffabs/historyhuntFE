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
import bishop from '../../WurzburgImages/bishop.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/DE/wurzburg1D');
}

class Wurzburg1D extends Component {
  render() {
    return ( 
      <div>
        {this.props.gamemenu !== true && 
        <div> 
        <Timeline timelineProgress="2.5" timelineReference="8. Jh. n.Chr." animate="yes"/>
        <div className="clue-background">
          <div className="clue-background-title">Gut gemacht!</div>
          <div>
              <img src={kilianus} className="solution-image" alt="kilianus" />
              <img src={totnam} className="solution-image" alt="totnam" />
              <img src={kolonatus} className="solution-image" alt="kolonatus" />
            </div>
          <div className="clue-background-divs">
            <div className="clue-background-div">Die drei werden auch als fränkische Apostel bezeichnet und ihre anschließende Verehrung führte zur raschen Entwicklung der Stadt.</div>
            <div className="clue-background-div">So wurde zu Beginn des 8. Jahrhunderts das Bistum von Würzburg gegründet. Im selben Jahrhundert wurde in der Stadt erstmals Wein angebaut und die erste Kathedrale gebaut: Dom St. Kilian.</div>
            <img src={bishop} className="memorial-image" alt="bishop" />
          </div>
        </div>
        <div className="buttons-section">
          <Link to="/DE/wuerzburg/kilianus/dom">
            <div className="gameNext-button">
              Nächster Hinweis
            </div>
          </Link>
          <Link to="/DE/wuerzburg/bridge/clue">
              <div className="gameNext-button-below">
                Zurück
              </div>
          </Link>
          <a href="https://us1.list-manage.com/survey?u=27bed50594116df471c55e108&id=7d82dcd485" target="_blank" rel="noopener noreferrer">
              <div className="gameFeedback-button">Feedback geben</div>
          </a>
        </div>
        </div>
        }
        <GameMenu {...this.props}/> 
        <CookieConsent 
            buttonText="Ich akzeptiere"
            declineButtonText="Ich lehne ab"
            enableDeclineButton 
            buttonStyle={{ background: "#00695c", color: "white", fontWeight: "bold" }}
            onAccept={() => {
                ReactGA.initialize('UA-192893120-1');
                ReactGA.pageview('/DE/wurzburg1D');
            }}
            >Diese Website verwendet Google Analytics-Cookies, um die Nutzererfahrung zu verbessern.
        </CookieConsent>  
      </div>  
    );
  }
}

export default Wurzburg1D;
