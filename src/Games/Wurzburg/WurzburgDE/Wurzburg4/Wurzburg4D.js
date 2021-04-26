import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../../Components/ComponentsDE/GameMenu';
// import memorialbuilding from '../WurzburgImages/memorialbuilding.png';
import memorialtext from '../../WurzburgImages/memorialtext.jpeg';
import guard from '../../WurzburgImages/guard.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/DE/wurzburg4D');
}

class Wurzburg4D extends Component {

  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && 
          <div> 
          <Timeline timelineProgress="5" timelineReference="16. Jh. n.Chr."/>
          <div className="clue-background">
            <div className="clue-background-title">Gut gemacht!</div>
            <div 
            // className="peasant-memorials"
            >
              {/* <img src={memorialbuilding} className="memorial50" alt="memorialbuilding" /> */}
              <img src={memorialtext} className="memorial-image" alt="memorialtext" />
            </div>
            <div className="clue-background-divs">
              <div className="clue-background-div">Interessanterweise fand die Revolution von Martin Luther in ungefähr denselben Jahren statt. Auch wenn Luthers Gedanken den Aufstandsbewegungen mehr Intensität verliehen haben mögen, haben sie sie nicht geschaffen, und er hat sich sogar den Aufständen widersetzt. Eigentlich wurde Martin Luther sogar vom Bischof Lorenz Von Bibra (wir haben ihn vorhin schon im Dom getroffen) empfangen und sie verstanden sich sehr gut.</div>
              <img src={guard} className="memorial-image" alt="guard" />
              <div className="clue-background-div">Nicht lange danach gab es einen neuen Bischof, der Luthers Ideen nicht unterstützte...</div>
            </div>
          </div>
          <div className="buttons-section">
            <Link to="/DE/wuerzburg/julius">
                <div className="gameNext-button">
                  Nächster Hinweis
                </div>
            </Link>
            <Link to="/DE/wuerzburg/peasants/memorial/clue">
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
                  ReactGA.pageview('/DE/wurzburg4D');
              }}
              >Diese Website verwendet Google Analytics-Cookies, um die Nutzererfahrung zu verbessern.
          </CookieConsent>
        </div>  
      );
    }
}

export default Wurzburg4D;
