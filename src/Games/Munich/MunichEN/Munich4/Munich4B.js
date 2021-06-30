import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../TimelineMunich';
import {Link} from 'react-router-dom';
import '../Munich.css';
import GameMenu from '../../../../Components/ComponentsEN/GameMenu';
import guard from '../../MunichImages/guard.png';
// import histsoldier from '../../MunichImages/histsoldier.png';
import kingchill from '../../MunichImages/kingchill.png';


let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/munich4B');
}

class Munich4B extends Component {
    
  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && 
          <div> 
          <Timeline timelineProgress="4" timelineReference="14th A.D."/>
          <div className="clue-background">
            <div className="clue-background-title">A Holy Roman Emperor</div>
            <div className="clue-background-divs">
              <div className="clue-background-div">
                Ludwig's election as king of Germany in 1314 was controversial, as Frederick 'the Handsome' of the House of Habsburg was simultaneously elected king by a separate set of electors.
              </div>
              <img src={guard} className="memorial-image" alt="guard" />
              <div className="clue-background-div">
              Eventually, Ludwig defeated Frederick in the last great knights battle and in 1328 became emperor of the Holy Roman Empire.
              </div>
              {/* <img src={histsoldier} className="memorial-image" alt="histsoldier" /> */}
              <img src={kingchill} className="memorial-image" alt="king" />
              <div className="clue-background-div question-section">Are you ready to discover more about him?</div>
            </div>
          </div>
          <div className="buttons-section">
              <Link to="/munich/louis/clue">
                  <div className="gameNext-button">
                      Yes
                  </div>
              </Link>
              <Link to="/munich/louis">
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
                  ReactGA.pageview('/munich4B');
              }}
              >This website uses Google Analytics cookies to enhance the user experience.
          </CookieConsent>   
        </div>  
      );
  }
}

export default Munich4B;