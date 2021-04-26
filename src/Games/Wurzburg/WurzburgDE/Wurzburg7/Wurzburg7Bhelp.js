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
    ReactGA.pageview('/DE/wurzburg7BHelp');
}

class Wurzburg7Bhelp extends Component {

  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && <div>
          <Timeline timelineProgress="6" timelineReference="17.-18. Jh. n.Chr."/>
          <div className="clue-background">
            <div className="clue-background-title">Öffnungszeiten:</div>
            <div className="clue-background-div">Apr-Okt: 9-18 Uhr</div>
            <div className="clue-background-div">Nov-Mär: 10-16.30 Uhr</div>
            <div className="clue-background-div">
            Geschlossen am: 01.01., Faschingsdienstag, 24.12., 25.12., 31.12
            </div>

          <div className="corona clue-background-div"> 
            <b>Falls es wegen Corona geschlossen ist, überspringen Sie einfach diesen Hinweis!</b>
          </div>
            <iframe 
              className="clue-map"
              title="map"
              // frameborder="0" 
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed/v1/place?q=place_id:EilSZXNpZGVuenBsYXR6IDIsIDk3MDcwIFfDvHJ6YnVyZywgR2VybWFueSJQEk4KNAoyCX-8rcYtkKJHEbTU2CjpVwakGh4LEO7B7qEBGhQKEgmBQKOSF5GiRxEwPdAeLLcdHAwQAioUChIJ8aeSwS2QokcR9H0kmd9-fuw&key=AIzaSyDx8TjLXQy9CIDjVVVU2EH2LXibwQRNKxs" 
              // allowfullscreen 
            />
          </div>
          <div className="buttons-section">
            <Link to="/DE/wuerzburg/residenz/intro">
                <div className="gameNext-button-below">
                  Zurück
                </div>
            </Link>
            <Link to="/DE/wuerzburg/residenz/gate/intro">
                <div className="gameFeedback-button">Hinweis überspringen</div>
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
                  ReactGA.pageview('/DE/wurzburg7BHelp');
              }}
              >Diese Website verwendet Google Analytics-Cookies, um die Nutzererfahrung zu verbessern.
          </CookieConsent>
        </div>  
      );
  }
}

export default Wurzburg7Bhelp;