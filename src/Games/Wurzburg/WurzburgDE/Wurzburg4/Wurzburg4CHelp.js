import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../../Components/ComponentsDE/GameMenu';
// import memorialbuilding from '../WurzburgImages/memorialbuilding.png';
import memorialtext from '../../WurzburgImages/memorialtext.jpeg';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/DE/wurzburg4CHelp');
}

class Wurzburg4CHelp extends Component {
    
  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && 
          <div> 
          <Timeline timelineProgress="5" timelineReference="16. Jh. n.Chr."/>
            <div className="clue-background">
            <div className="clue-background-title">Hinweis Hilfe</div>
            <div className="clue-background-div">Neben dem Denkmal befindet sich ein Schild über die Schlacht, die in...</div>
            <div>
              {/* <img src={memorialbuilding} className="memorial-image" alt="memorialbuilding" /> */}
              <img src={memorialtext} className="memorial-image" alt="memorialtext" />
            </div>
          </div>
        <div className="buttons-section">
            <Link to="/DE/wuerzburg/peasants/memorial/clue">
                <div className="gameNext-button">
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
                  ReactGA.pageview('/DE/wurzburg4CHelp');
              }}
              >Diese Website verwendet Google Analytics-Cookies, um die Nutzererfahrung zu verbessern.
          </CookieConsent>
        </div>  
      );
  }
}

export default Wurzburg4CHelp;