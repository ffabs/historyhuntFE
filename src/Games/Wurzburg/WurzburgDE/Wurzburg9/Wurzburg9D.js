import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import lab from '../../WurzburgImages/lab.jpg';
import '../Wurzburg.css';
import GameMenu from '../../../../Components/ComponentsDE/GameMenu';
import handrays from '../../WurzburgImages/handrays.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/DE/wurzburg9D');
}

class Wurzburg9D extends Component {

  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && <div>
          <Timeline timelineProgress="8" timelineReference="19.-20. Jh. n.Chr."/>
          <div className="clue-background">
            <div className="clue-background-title">Gut gemacht!</div>
            <div>
              <img src={handrays} className="memorial-image" alt="handrays" />
            </div>
            <div className="clue-background-divs">
            <div className="clue-background-div">
            Wenn Sie interessiert sind, können Sie sogar kostenlos sein Labor auf der anderen Seite der Stadt besuchen! Weitere Informationen finden Sie unter folgendem Link: <a href="http://wilhelmconradroentgen.de/en/home" target="_blank" rel="noopener noreferrer">
                wilhelmconradroentgen.de
              </a>
            </div>
            <img src={lab} className="gameIntro-image" alt="lab" />
            
          {/* <div className="question-section"> */}
            <div className="clue-background-div question-section">Bist du bereit für das, was als nächstes geschah?</div>
          {/* </div> */}
          </div>
          </div>
          <div className="buttons-section">
            <Link to="/DE/wuerzburg/worldwar">
                <div className="gameNext-button">
                    Ja
                </div>
            </Link>
            <Link to="/DE/wuerzburg/xrays/intro/clue">
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
                  ReactGA.pageview('/DE/wurzburg9D');
              }}
              >Diese Website verwendet Google Analytics-Cookies, um die Nutzererfahrung zu verbessern.
          </CookieConsent>
        </div>  
      );
  }
}

export default Wurzburg9D;