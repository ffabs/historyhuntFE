import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../TimelineMunich';
import {Link} from 'react-router-dom';
import '../Munich.css';
import GameMenu from '../../../../Components/ComponentsEN/GameMenu';
import bible from '../../MunichImages/bible.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/munich7B');
}

class Munich7B extends Component {
    
  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && 
          <div> 
          <Timeline timelineProgress="6" timelineReference="16th A.D."/>
          <div className="clue-background">
            <div className="clue-background-title">Jesuits and the counter reformation</div>
            <div className="clue-background-divs">
              <div className="clue-background-div">In the 16th A.D. the Protestant Reformation movement started by Martin Luther arrived to Munich too. As a response, Munich became even more Catholic, embracing the counter reformation, welcoming the ultra-religious Jesuits and even ruling that only Catholics could be citizen of the city.</div>
              <img src={bible} className="munich-text-image" alt="bible" />
              <div className="clue-background-div">In addition, many of Munich's future elite were now educated at the new Jesuit college, part of a vast complex of Jesuit buildings, including the St Michael's Church, the biggest late-Renaissance church in Germnay.</div>
          {/* </div>
          <div className="question-section"> */}
              <div className="clue-background-div question-section">Are you ready to discover some of its secrets?</div>
            </div>
          </div>
          <div className="buttons-section">
              <Link to="/munich/michael/clue">
                  <div className="gameNext-button">
                      Yes
                  </div>
              </Link>
              <Link to="/munich/michael">
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
                  ReactGA.pageview('/munich7B');
              }}
              >This website uses Google Analytics cookies to enhance the user experience.
          </CookieConsent>   
        </div>  
      );
  }
}

export default Munich7B;