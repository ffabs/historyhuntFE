import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../../Components/ComponentsDE/GameMenu';
import kirche from '../../WurzburgImages/kirche.jpeg';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/DE/wurzburg7D');
}

class Wurzburg7D extends Component {

  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && <div>
          <Timeline timelineProgress="6" timelineReference="17.-18. Jh. n.Chr."/>
          <div className="clue-background">
            <div className="clue-background-title">Gut gemacht!</div>
            <div>
              <img src={kirche} className="memorial-image" alt="kirche" />
            </div>
            <div className="clue-background-divs">
              <div className="clue-background-div">Die Residenz wurde gebaut, als Würzburg noch eine befestigte Stadt war. Daher musste auch der Garten innerhalb der Befestigungsanlagen geplant werden.</div>
              <div className="clue-background-div">Lassen Sie uns es durchgehen, um den nächsten Hinweis zu erreichen!</div>
            </div>
          </div>
          {/* <iframe 
              className="clue-map"
              title="map"
              // frameborder="0" 
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed/v1/place?q=place_id:GhIJZmZmZmblSEARXI_C9SjgI0A&key=AIzaSyDx8TjLXQy9CIDjVVVU2EH2LXibwQRNKxs" 
              // allowfullscreen 
          /> */}
          <div className="question-section">
            <div className="clue-background-div">...kannst du in den Garten kommen?</div>
          </div>
          <div className="buttons-section">
            <Link to="/DE/wuerzburg/residenz/gate/intro">
                <div className="gameNext-button">
                    Ja
                </div>
            </Link>
            <Link to="/DE/wuerzburg/residenz/gate/intro">
                <div className="gameNext-button-below">
                    Nein
                </div>
            </Link>
            <Link to="/DE/wuerzburg/residenz/garden/timings">
                <div className="gameNext-button-below">
                  Wann ist er geöffnet?
                </div>
            </Link>
            <Link to="/DE/wuerzburg/residenz/intro/clue">
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
                  ReactGA.pageview('/DE/wurzburg7D');
              }}
              >Diese Website verwendet Google Analytics-Cookies, um die Nutzererfahrung zu verbessern.
          </CookieConsent>
        </div>  
      );
  }
}

export default Wurzburg7D;