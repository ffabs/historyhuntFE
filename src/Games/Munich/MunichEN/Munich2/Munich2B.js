import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../TimelineMunich';
import {Link} from 'react-router-dom';
import '../Munich.css';
import GameMenu from '../../../../Components/ComponentsEN/GameMenu';
import bridge from '../../MunichImages/bridge.png';
// import guard from '../../MunichImages/guard.png';
import archer from '../../MunichImages/archer.png';
import fire from '../../MunichImages/fire.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/munich2B');
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
              {/* <div className="clue-background-div">
               Before the invention of refrigeration, salt used to be crucially important for food conservation and was even used as a form of payment.
              </div>
              <img src={salt} className="memorial-image" alt="salt" /> */}
              <img src={bridge} className="bridge" alt="bridge" />
              <div className="clue-background-div">
              To benefit from the salt trade coming the Alps, Bishop Otto I had established a toll bridge over the Isar river in Föhring (now a Munich suburb) in the first half of the 12th century.
              </div>
              {/* <img src={bridge} className="bridge" alt="bridge" /> */}
              <img src={archer} className="memorial-image" alt="archer" />
              <div className="clue-background-div">
                However, the Duke of Bavaria, Henry the Lion, wanted to get this business for himself. He destroyed Otto's toll bridge and built a new one where Munich is now.
              </div>
              {/* <div className="peasant-memorials">
              <img src={archer} className="half-image " alt="archer" />
              <img src={fire} className="half-image " alt="fire" />
              </div> */}
              <img src={fire} className="memorial-image" alt="fire" />
          {/* </div>
          <div className="question-section"> */}
              <div className="clue-background-div question-section">Are you ready to discover more about the original "Salt way"?</div>
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
                  ReactGA.pageview('/munich2B');
              }}
              >This website uses Google Analytics cookies to enhance the user experience.
          </CookieConsent>   
        </div>  
      );
  }
}

export default Munich2B;