import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../../Components/ComponentsDE/GameMenu';
import oegg from '../../WurzburgImages/oegg.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/DE/wurzburg7G');
}

class Wurzburg7G extends Component {

  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && <div>
          <Timeline timelineProgress="7" timelineReference="19. Jh. n.Chr." animate="yes"/>
          <div className="clue-background">
            <div className="clue-background-title">Gut gemacht!</div>
            <div>
              <img src={oegg} className="destination1" alt="oegg" />
            </div>
            <div className="clue-background-divs">
            <div className="clue-background-div">Trotz des Wachstums der Stadt und der neuen Errungenschaften der Residenz ging das Zeitalter der Fürstbischöfe zu Ende.</div>
            <div className="clue-background-div">Die Säkularisierung trennte 1803 schließlich das Heilige und das Säkulare.</div>
    {/* <div>i bishops sono alla fine e (anche occupazione francese forse Napoleon)</div> */}
            </div>
          </div>
          <div className="buttons-section">
            <Link to="/DE/wuerzburg/ringpark">
                <div className="gameNext-button">
                  Nächster
                </div>
            </Link>
            <Link to="/DE/wuerzburg/residenz/garden/clueQuestion">
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
                  ReactGA.pageview('/DE/wurzburg7G');
              }}
              >Diese Website verwendet Google Analytics-Cookies, um die Nutzererfahrung zu verbessern.
          </CookieConsent>
        </div>  
      );
  }
}

export default Wurzburg7G;