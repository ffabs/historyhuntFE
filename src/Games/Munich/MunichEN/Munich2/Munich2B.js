import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../TimelineMunich';
import {Link} from 'react-router-dom';
import '../Munich.css';
import GameMenu from '../../../../Components/ComponentsEN/GameMenu';
import salt from '../../MunichImages/salt.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/wurzburg2B');
}

class Munich2B extends Component {
    
  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && 
          <div> 
          <Timeline timelineProgress="2" timelineReference="12th A.D."/>
          <div className="clue-background">
            <div className="clue-background-title">Salt, the white gold</div>
            <div className="clue-background-divs">
              <div className="clue-background-div">
                Salt used to be very important for food conservation and even used for payments.
                The area were Munich is on the Salt way, from Saltzburg and Reichenhall to Augsburg.
              </div>
              <img src={salt} className="memorial-image" alt="salt" />
              <div className="clue-background-div">
                In the first half of the 12th century, Bishop Otto I of Freising had established a toll bridge in Föhring (now a Munich suburb).
                However, the Duke of Bavaria, Henry the Lion, wanted to get this business, destroying Otto's toll bridge and building a new one 8 km away, where Munich is now.
              </div>
          {/* </div>
          <div className="question-section"> */}
              <div className="clue-background-div question-section">Are you ready to find the original Salt way?</div>
            </div>
          </div>
          <div className="buttons-section">
              <Link to="/munich/marktplatz/clue">
                  <div className="gameNext-button">
                      Yes
                  </div>
              </Link>
              <Link to="/munich/marktplatz">
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
                  ReactGA.pageview('/wurzburg2B');
              }}
              >This website uses Google Analytics cookies to enhance the user experience.
          </CookieConsent>   
        </div>  
      );
  }
}

export default Munich2B;