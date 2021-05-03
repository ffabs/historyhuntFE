import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../TimelineMunich';
import {Link} from 'react-router-dom';
import '../Munich.css';
import GameMenu from '../../../../Components/ComponentsEN/GameMenu';
import money from '../../MunichImages/money.png';
import mouse from '../../MunichImages/mouse.png';
import fire from '../../MunichImages/fire.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/wurzburg3B');
}

class Munich3B extends Component {
    
  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && 
          <div> 
          <Timeline timelineProgress="3" timelineReference="13th A.D." animate="yes"/>
          <div className="clue-background">
            <div className="clue-background-title">Wittelsbach's Old Court</div>
            <div className="clue-background-divs">
              <div className="clue-background-div">Growth and even Council but bad management, Jews as well as issues like Pestilences and fires.</div>
              <div className="clue-background-div">Let's check the area inside the court!</div>
              <img src={money} className="memorial-image" alt="money" />
              <img src={mouse} className="memorial-image" alt="mouse" />
              <img src={fire} className="memorial-image" alt="fire" />
          {/* </div>
          <div className="question-section"> */}
              <div className="clue-background-div question-section">Are you there?</div>
            </div>
          </div>
          <div className="buttons-section">
              <Link to="/munich/wittelsbach/clue">
                  <div className="gameNext-button">
                      Yes
                  </div>
              </Link>
              <Link to="/munich/wittelsbach">
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
                  ReactGA.pageview('/wurzburg3B');
              }}
              >This website uses Google Analytics cookies to enhance the user experience.
          </CookieConsent>   
        </div>  
      );
  }
}

export default Munich3B;