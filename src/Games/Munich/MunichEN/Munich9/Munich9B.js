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
    ReactGA.pageview('/munich9B');
}

class Munich9B extends Component {
    
  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && 
          <div> 
          <Timeline timelineProgress="7" timelineReference="17th A.D."/>
          <div className="clue-background">
            <div className="clue-background-title">Wittelsbach's Old Court</div>
            <div className="clue-background-divs">
              <img src={money} className="memorial-image" alt="money" />
              <div className="clue-background-div">During the centuries that this dinasty has ruled, the city has experienced periods of wealth, culture, population growth and the establishment of the city council.</div>
              <img src={mouse} className="munich-text-image" alt="mouse" />
              <div className="clue-background-div">Nevertheless, under this dinasty the city has also been through periods of impoverishment, bad city management, religious persecutions, pestilences and fires.</div>
              <img src={fire} className="memorial-image" alt="fire" />
              <div className="clue-background-div">Let's check the area inside their court!</div>
          {/* </div>
          <div className="question-section"> */}
              <div className="clue-background-div question-section">Are you there?</div>
            </div>
          </div>
          <div className="buttons-section">
              <Link to="/munich/max/clue">
                  <div className="gameNext-button">
                      Yes
                  </div>
              </Link>
              <Link to="/munich/max">
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
                  ReactGA.pageview('/munich9B');
              }}
              >This website uses Google Analytics cookies to enhance the user experience.
          </CookieConsent>   
        </div>  
      );
  }
}

export default Munich9B;