import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../../Components/ComponentsDE/GameMenu';
import destination3 from '../../WurzburgImages/destination3.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/DE/wurzburg3A');
}

class Wurzburg3A extends Component {

  render() {
    return ( 
      <div>
        {this.props.gamemenu !== true && 
        <div> 
        <Timeline timelineProgress="4" timelineReference="12.-14. Jh. n.Chr." animate="yes"/>
        <div className="clue-background">
          <div className="clue-background-title">Das Rathaus</div>
          <div className="clue-background-div">Kommen Sie zurück zur Brücke und stoppen Sie diesmal am Gebäude mit dem Glockenturm.</div>
          <div><img src={destination3} className="destination1" alt="destination3" /></div>
          <iframe 
            className="clue-map"
            title="map"
            // frameborder="0" 
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJAQO13xyRokcRt0VftfVsiVk&key=AIzaSyDx8TjLXQy9CIDjVVVU2EH2LXibwQRNKxs" 
            // allowfullscreen 
          />
        </div>
        <div className="question-section">
          <div className="clue-background-div">...sind Sie da?</div>
        </div>
        <div className="buttons-section">
          <Link to="/DE/wuerzburg/citycouncil">
              <div className="gameNext-button">
                  Ja
              </div>
          </Link>
          <Link to="/DE/wuerzburg/domAnswer">
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
                ReactGA.pageview('/DE/wurzburg3A');
            }}
            >Diese Website verwendet Google Analytics-Cookies, um die Nutzererfahrung zu verbessern.
        </CookieConsent> 
      </div>  
    );
  }
}

export default Wurzburg3A;
