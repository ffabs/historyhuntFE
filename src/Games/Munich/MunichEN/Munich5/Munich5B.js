import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../TimelineMunich';
import {Link} from 'react-router-dom';
import '../Munich.css';
import GameMenu from '../../../../Components/ComponentsEN/GameMenu';
import guard from '../../MunichImages/guard.png';
import castle from '../../MunichImages/castle.png';


let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/munich5B');
}

class Munich5B extends Component {
    
  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && 
          <div> 
          <Timeline timelineProgress="4" timelineReference="14th A.D."/>
          <div className="clue-background">
            <div className="clue-background-title">City Walls</div>
            <div className="clue-background-divs">
              <div className="clue-background-div">
                famous city gates and walls constructed (there was an inner wall section though)
              </div>
              <img src={guard} className="memorial-image" alt="guard" />
              <img src={castle} className="memorial-image" alt="castle" />
              <div className="clue-background-div question-section">Are you ready to discover more about them?</div>
            </div>
          </div>
          <div className="buttons-section">
              <Link to="/munich/walls/clue">
                  <div className="gameNext-button">
                      Yes
                  </div>
              </Link>
              <Link to="/munich/walls">
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
                  ReactGA.pageview('/munich5B');
              }}
              >This website uses Google Analytics cookies to enhance the user experience.
          </CookieConsent>   
        </div>  
      );
  }
}

export default Munich5B;