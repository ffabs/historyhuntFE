import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../../Components/ComponentsDE/GameMenu';
import destination4 from '../../WurzburgImages/destination4.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/DE/wurzburg4A');
}

class Wurzburg4A extends Component {

  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && <div> 
          <Timeline timelineProgress="5" timelineReference="16. Jh. n.Chr." animate="yes"/>
          <div className="clue-background">
            <div className="clue-background-title">Der Bauernkrieg</div>
            <div className="clue-background-div">Gehen Sie in Richtung Schloss und halten Sie auf halber Strecke in der Nähe eines Denkmals und eines Panoramapunkts.</div>
            <div><img src={destination4} className="destination1" alt="destination4" /></div>
            <iframe 
              className="clue-map"
              title="map"
              // frameborder="0" 
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJfd-bJDaQokcRmZGR0uCd7b0&key=AIzaSyDx8TjLXQy9CIDjVVVU2EH2LXibwQRNKxs" 
              // allowfullscreen 
            />
          </div>
          <div className="question-section">
            <div className="clue-background-div">...brauchen Sie weitere Anweisungen?</div>
          </div>
          
            <div className="buttons-section">
              <Link to="/DE/wuerzburg/peasants/directions">
                  <div className="gameNext-button">
                    Ja bitte!
                  </div>
              </Link>
              <Link to="/DE/wuerzburg/peasants/memorial">
                  <div className="gameNext-button-below">
                    Nein
                  </div>
              </Link>
              <Link to="/DE/wuerzburg/citycouncil/sundial/clueAnswer">
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
                  ReactGA.pageview('/DE/wurzburg4A');
              }}
              >Diese Website verwendet Google Analytics-Cookies, um die Nutzererfahrung zu verbessern.
            </CookieConsent>
          </div>
      );
  }
}

export default Wurzburg4A;
