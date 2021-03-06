import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../TimelineMunich';
import {Link} from 'react-router-dom';
import '../Munich.css';
import GameMenu from '../../../../Components/ComponentsEN/GameMenu';
import munichemblem from '../../MunichImages/munichemblem.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/munich1B');
}

class Munich1B extends Component {
    
  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && 
          <div> 
          <Timeline timelineProgress="1.5" timelineReference="8-12th A.D."/>
          <div className="clue-background">
            <div className="clue-background-title">Munich before Munich</div>
            <div className="clue-background-divs">
              <div className="clue-background-div">The answer is in the symbol of the city (the Munich's coat of arms) which can be found in many places in the New Town Hall and around the city.</div>
              <img src={munichemblem} className="memorial-image" alt="MunichEmblem" />
          {/* </div>
          <div className="question-section"> */}
              <div className="clue-background-div question-section">Let's check inside the entrance and look for it!</div>
            </div>
          </div>
          <div className="buttons-section">
              <Link to="/munich/coatofarms">
                  <div className="gameNext-button">
                      Next
                  </div>
              </Link>
              {/* <Link to="/munich/start/help">
                <div className="gameNext-button-below">
                    No, how does it look?
                </div>
              </Link> */}
              <Link to="/munich/start">
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
                  ReactGA.pageview('/munich1B');
              }}
              >This website uses Google Analytics cookies to enhance the user experience.
          </CookieConsent>   
        </div>  
      );
  }
}

export default Munich1B;