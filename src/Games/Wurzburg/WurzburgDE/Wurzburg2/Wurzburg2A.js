import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../../Components/ComponentsDE/GameMenu';
import destination2 from '../../WurzburgImages/destination2.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/DE/wurzburg2A');
}

class Wurzburg2A extends Component {
    
  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && 
          <div> 
          <Timeline timelineProgress="2" timelineReference="8. Jh. n.Chr."/>
          <div className="clue-background">
            <div className="clue-background-title">Dom St. Kilian</div>
            <div className="clue-background-divs">
            <div className="clue-background-div">Dom St. Kilian ist so alt, dass er zur Zeit des fränkischen Königs Karl dem Großen geweiht wurde und überliefert noch heute Jahrhunderte der Stadt-, Religions- und Kunstgeschichte.</div>
            <div><img src={destination2} className="destination1" alt="destination2" /></div>
            <iframe 
              className="clue-map"
              title="map"
              // frameborder="0" 
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed/v1/place?q=place_id:GhIJBoGVQ4vlSEARN4lBYOXcI0A&key=AIzaSyDx8TjLXQy9CIDjVVVU2EH2LXibwQRNKxs" 
              // allowfullscreen 
            />
          
          {/* <div className="question-section"> */}
            <div className="clue-background-div question-section">Lassen Sie uns dorthin gehen!</div>
          {/* </div> */}
            </div>
          </div>
          <div className="buttons-section">
            <Link to="/DE/wuerzburg/kilianus/dom/openings">
                <div className="gameNext-button">
                  Ich bin angekommen
                </div>
            </Link>
            <Link to="/DE/wuerzburg/kilianus">
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
                  ReactGA.pageview('/DE/wurzburg2A');
              }}
              >Diese Website verwendet Google Analytics-Cookies, um die Nutzererfahrung zu verbessern.
          </CookieConsent>  
        </div>  
      );
    }
}

export default Wurzburg2A;
