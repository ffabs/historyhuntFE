import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../../Components/ComponentsDE/GameMenu';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/DE/wurzburg11A');
}

class Wurzburg11A extends Component {

  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && <div>
          <Timeline timelineProgress="10" timelineReference="20.-21. Jh. n.Chr." animate="yes"/>
          <div className="clue-background">
            <div className="clue-background-title">Aktuelle Zeiten</div>
            <div className="clue-background-div">Just move to the fontain</div>
            <div className="clue-background-div">(QWWJ+V8 Würzburg), </div>
            <iframe 
              className="clue-map"
              title="map"
              // frameborder="0" 
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJIXAT0C2QokcRP7mt9f4E7NA&key=AIzaSyDx8TjLXQy9CIDjVVVU2EH2LXibwQRNKxs" 
              // allowfullscreen 
            />
          </div>
          <div className="question-section">
            <div className="clue-background-div">...arrived?</div>
          </div>
          <div className="buttons-section">
            <Link to="/wuerzburg/currenttimes/intro">
                <div className="gameNext-button">
                    Yes
                </div>
            </Link>
            <Link to="/DE/wuerzburg/worldwar/intro/clueAnswer">
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
                  ReactGA.pageview('/DE/wurzburg11A');
              }}
              >Diese Website verwendet Google Analytics-Cookies, um die Nutzererfahrung zu verbessern.
          </CookieConsent>
        </div>  
      );
  }
}

export default Wurzburg11A;