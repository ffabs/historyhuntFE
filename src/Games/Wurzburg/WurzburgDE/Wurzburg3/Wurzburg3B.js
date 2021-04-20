import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../../Components/ComponentsDE/GameMenu';
import castle from '../../WurzburgImages/castle.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/DE/wurzburg3B');
}

class Wurzburg3B extends Component {

  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && 
          <div> 
          <Timeline timelineProgress="4" timelineReference="12.-14. Jh. n.Chr."/>
          <div className="clue-background">
            <div className="clue-background-title">Das Rathaus</div>
            <div className="clue-background-divs">
            <div className="clue-background-div">Im 12. Jahrhundert gründeten die Würzburger eine Gesellschaft, um den steigenden Forderungen der Fürstbischöfe entgegenzuwirken. In der Folge verließ der Bischof im 13. Jahrhundert die Stadt, um geschützt in der Burg zu leben, und verbot den Stadtrat.</div>
            <img src={castle} className="memorial-image" alt="castle" />
            <div className="clue-background-div">Dennoch beschaffte der Stadtrat zu Beginn des 14. Jahrhunderts dieses Turmgebäude, das seitdem als Rathaus oder Rathaus dient.</div>
            </div>
          </div>
          <div className="question-section">
            <div className="clue-background-div">Warum befindet sich auf dem Gebäude ein Baumgemälde?</div>
          </div>
          <div className="buttons-section">
            <Link to="/DE/wuerzburg/citycouncil/sundial">
                <div className="gameNext-button">
                  Mal sehen!
                </div>
            </Link>
            <Link to="/DE/wuerzburg/citycouncil/sundial/clue">
                <div className="gameNext-button-below">
                  Überspringe diesen Teil
                </div>
            </Link>
            <Link to="/DE/wuerzburg/domAnswer/citizens">
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
                ReactGA.pageview('/DE/wurzburg3B');
            }}
            >Diese Website verwendet Google Analytics-Cookies, um die Nutzererfahrung zu verbessern.
          </CookieConsent> 
        </div>  
      );
  }
}

export default Wurzburg3B;
