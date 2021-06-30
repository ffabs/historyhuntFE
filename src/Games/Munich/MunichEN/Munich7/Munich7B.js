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
            <div className="clue-background-title">Jesuits and the Counter Reformation</div>
            <div className="clue-background-divs">
              <div className="clue-background-div">In the 16th A.D., the Protestant Movement started by Martin Luther arrived also to Munich.</div>
              <div className="clue-background-div">As a response, Munich became even more Catholic: the Counter Reformation movement and the ultra-religious Jesuits were welcomed into the city, most of Munich's elite started being educated at the new Jesuit college and it was even decided that only Catholics could be citizen of Munich.</div>
              <img src={bible} className="munich-text-image" alt="bible" />
              <div className="clue-background-div">The vast complex of Jesuit buildings built in this century, included St. Michael's Church, the biggest late-Renaissance church in Germany.</div>
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