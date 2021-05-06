import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../TimelineMunich';
import {Link} from 'react-router-dom';
import '../Munich.css';
import GameMenu from '../../../../Components/ComponentsEN/GameMenu';
// import money from '../../MunichImages/money.png';
import mouse from '../../MunichImages/mouse.png';
import fire from '../../MunichImages/fire.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/munich10B');
}

class Munich10B extends Component {
    
  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && 
          <div> 
          <Timeline timelineProgress="10" timelineReference="17th A.D."/>
          <div className="clue-background">
            <div className="clue-background-title">The 30 Years War</div>
            <div className="clue-background-divs">
              {/* <img src={money} className="memorial-image" alt="money" /> */}
              <div className="clue-background-div">In 1618 the Thirty Years' War between Catholics and Protestants started. It is considered one of the most destructive conflicts in European history.</div>
              <img src={fire} className="memorial-image" alt="fire" />
              <div className="clue-background-div">During this war, Munich suffered also from the lack of food supplies, the presence of plague and the Swedish occupation.</div>
              <img src={mouse} className="munich-text-image" alt="mouse" />
              <div className="clue-background-div">Neverthless, later the Swedish army also suffered a major defeat and to commemorate the survival of Munich, a painting (in Wallfahrtkirche in Ramersdorf) was done and Mary's column was erected, which since then changed the name of the square from Marktplatz to Marienplatz.</div>
              <div className="clue-background-div">Let's find out more about it!</div>
          {/* </div>
          <div className="question-section"> */}
              <div className="clue-background-div question-section">Are you ready for the next clue?</div>
            </div>
          </div>
          <div className="buttons-section">
              <Link to="/munich/30ywar/clue">
                  <div className="gameNext-button">
                      Yes
                  </div>
              </Link>
              <Link to="/munich/30ywar">
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
                  ReactGA.pageview('/munich10B');
              }}
              >This website uses Google Analytics cookies to enhance the user experience.
          </CookieConsent>   
        </div>  
      );
  }
}

export default Munich10B;