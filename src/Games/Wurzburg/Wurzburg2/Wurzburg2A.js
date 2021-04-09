import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../Components/GameMenu';
import destination2 from '../WurzburgImages/destination2.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/wurzburg2A');
}

class Wurzburg2A extends Component {
    
  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && 
          <div> 
          <Timeline timelineProgress="2" timelineReference="8th A.D."/>
          <div className="clue-background">
            <div className="clue-background-title">Kilian’s Cathedral</div>
            <div className="clue-background-divs">
            <div className="clue-background-div">Dom St. Kilian, so ancient that it was consecreted in the presence of the Frankish king Charlemagne, is still here today documenting centuries of city, religion and art history.</div>
            <div><img src={destination2} className="destination1" alt="destination2" /></div>
            <iframe 
              className="clue-map"
              title="map"
              // frameborder="0" 
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJs12zIdSPokcRJ4YwI8k4eMM&key=AIzaSyDx8TjLXQy9CIDjVVVU2EH2LXibwQRNKxs" 
              // allowfullscreen 
            />
          
          {/* <div className="question-section"> */}
            <div className="clue-background-div question-section">Let's go there!</div>
          {/* </div> */}
            </div>
          </div>
          <div className="buttons-section">
            <Link to="/wuerzburg/kilianus/dom/openings">
                <div className="gameNext-button">
                    Arrived
                </div>
            </Link>
            <Link to="/wuerzburg/kilianus">
                <div className="gameNext-button-below">
                    Back
                </div>
            </Link>
          </div>
          </div>
          }
          <GameMenu {...this.props}/>  
          <CookieConsent 
              enableDeclineButton 
              buttonStyle={{ background: "#00695c", color: "white", fontWeight: "bold" }}
              onAccept={() => {
                  ReactGA.initialize('UA-192893120-1');
                  ReactGA.pageview('/wurzburg2A');
              }}
              >This website uses Google Analytics cookies to enhance the user experience.
          </CookieConsent>  
        </div>  
      );
    }
}

export default Wurzburg2A;
