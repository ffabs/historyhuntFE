import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../../Components/ComponentsDE/GameMenu';
import peasant from '../../WurzburgImages/peasant.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/DE/wurzburg4B');
}

class Wurzburg4B extends Component {

  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && 
          <div> 
          <Timeline timelineProgress="5" timelineReference="16. Jh. n.Chr."/>
          <div className="clue-background">
            <div className="clue-background-title">Der Bauernkrieg</div>
            <div className="clue-background-divs">
            <div className="clue-background-div">Der Deutsche Bauernkrieg war Europas größter und am weitesten verbreiteter Volksaufstand vor der Französischen Revolution.</div>
            <img src={peasant} className="memorial-image" alt="peasant" />
          {/* </div>
          <div className="question-section"> */}
            {/* <div className="clue-background-div question-section">A tip for the next clue: remember to look around and that "bauernkrieg" means "peasants’ war" in German!</div> */}
            <div className="clue-background-div">Bereit für den nächsten Hinweis?</div>
          </div>
          </div>
          <div className="buttons-section">
            <Link to="/DE/wuerzburg/peasants/memorial/clue">
                <div className="gameNext-button">
                    Ja
                </div>
            </Link>
            <Link to="/DE/wuerzburg/peasants">
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
                  ReactGA.pageview('/DE/wurzburg4B');
              }}
              >Diese Website verwendet Google Analytics-Cookies, um die Nutzererfahrung zu verbessern.
          </CookieConsent>
        </div>  
      );
    }
}

export default Wurzburg4B;
