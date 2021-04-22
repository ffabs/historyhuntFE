import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../../Components/ComponentsDE/GameMenu';
import statues from '../../WurzburgImages/statues.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/DE/wurzburg1B');
}

class Wurzburg1B extends Component {
    
  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && 
          <div> 
          <Timeline timelineProgress="1" timelineReference="7. Jh. n.Chr." animate="yes"/>
          <div className="clue-background">
            <div className="clue-background-title">Ein Martyrium, das die Geschichte verändert hat</div>
            <div className="clue-background-divs">
              <div className="clue-background-div">Ende des 7. Jahrhunderts brachten drei irische Missionare das Christentum in die Region. Obwohl sie dieser Mission gestorben sind, hatten sie schließlich Erfolg.</div>
              <div className="clue-background-div">An die drei Heiligen wird noch heute auf dieser Brücke erinnert. Jeder von ihnen hat eine eigene Statue unter den insgesamt 12.</div>
              <img src={statues} className="memorial-image" alt="statues" />
          {/* </div>
          <div className="question-section"> */}
              <div className="clue-background-div question-section">Sind Sie bereit, sie zu finden?</div>
            </div>
          </div>
          <div className="buttons-section">
              <Link to="/DE/wuerzburg/bridge/clue">
                  <div className="gameNext-button">
                      Ja
                  </div>
              </Link>
              <Link to="/DE/wuerzburg/start">
                <div className="gameNext-button-below">
                  Zurück
                </div>
              </Link>
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
                  ReactGA.pageview('/DE/wurzburg1B');
              }}
              >Diese Website verwendet Google Analytics-Cookies, um die Nutzererfahrung zu verbessern.
          </CookieConsent>   
        </div>  
      );
  }
}

export default Wurzburg1B;
