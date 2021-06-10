import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../TimelineMunich';
import {Link} from 'react-router-dom';
import '../Munich.css';
import GameMenu from '../../../../Components/ComponentsEN/GameMenu';
// import money from '../../MunichImages/money.png';
// import mouse from '../../MunichImages/mouse.png';
// import fire from '../../MunichImages/fire.png';

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
            <div className="clue-background-title">Maximilian I</div>
            <div className="clue-background-divs">
              {/* <img src={money} className="memorial-image" alt="money" /> */}
              <div className="clue-background-div">He was a typical "absolutist" ruler, wanted to make Bavaria a regional power of renown.</div>
              {/* <img src={mouse} className="munich-text-image" alt="mouse" /> */}
              <div className="clue-background-div">This motivated him to start building as well great monuments: expanding the Residenz making it a grand one commissioned what is now called the Maximilian Residenz (Maximilianische Residenz ), the west wing of the palace. Until the 19th century, it was the only publicly visible facade and it still is preserved. (as well as with Hofkapelle, Reiche Kapelle, Kaiserall and the Hofgarten...)</div>
              {/* <img src={fire} className="memorial-image" alt="fire" /> */}
              <div className="clue-background-div">The building is guarded by 2 lions (which have a very bright nouse because it is considered to bring good luck) but also by something else!</div>
          {/* </div>
          <div className="question-section"> */}
              <div className="clue-background-div question-section">Are you ready to find what it was build by Maximilian?</div>
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