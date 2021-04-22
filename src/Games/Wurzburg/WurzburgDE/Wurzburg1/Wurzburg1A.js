import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../../Components/ComponentsDE/GameMenu';
import annouce from '../../WurzburgImages/annouce.png';
import destination1 from '../../WurzburgImages/destination1.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/DE/wurzburg1A');
}

class Wurzburg1A extends Component {
    
  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && 
          <div> 
          <Timeline timelineProgress="0" timelineReference="10. Jh. v.Chr."/>
          <div className="clue-background">
            <div className="clue-background-title">Würzburg vor Würzburg</div>
            <div className="clue-background-divs">
              <div className="clue-background-div">Archäologische Funde haben bewiesen, dass dort 1000 v. Chr. Kelten lebten, wo sich jetzt die Festung befindet. Nachdem es eine römische Festung geworden war, wurde dieses Gebiet von den Alemannen und schließlich im 6. Jahrhundert von den Franken besiedelt.</div>
              <img src={annouce} className="memorial-image" alt="annouce" />
              <div className="clue-background-div">Trotz dieser ursprünglichen Siedlungen, hatte die offizielle Geschichte Würzburgs noch nicht begonnen. Kommen Sie zur alten Brücke und entdecken Sie, wie es angefangen hat!</div>
              <img src={destination1} className="destination1" alt="destination1" />
            <iframe 
              className="clue-map"
              title="map"
              // frameborder="0" 
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJm8AYjzaQokcRtSwOtsofR5w&key=AIzaSyDx8TjLXQy9CIDjVVVU2EH2LXibwQRNKxs" 
              // allowfullscreen 
            />
          {/* </div>
          <div className="question-section"> */}
            <div className="clue-background-div question-section">Sind Sie da?</div>
            </div>
          </div>
          <div className="buttons-section">
            <Link to="/DE/wuerzburg/bridge">
              <div className="gameNext-button">
                Ja bin ich
              </div>
            </Link>
            <Link to="/DE/wuerzburg">
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
                  ReactGA.pageview('/DE/wurzburg1A');
              }}
              >Diese Website verwendet Google Analytics-Cookies, um die Nutzererfahrung zu verbessern.
          </CookieConsent>   
        </div>  
      );
    }
}

export default Wurzburg1A;
