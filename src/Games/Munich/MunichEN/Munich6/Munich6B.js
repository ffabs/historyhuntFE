import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../TimelineMunich';
import {Link} from 'react-router-dom';
import '../Munich.css';
import GameMenu from '../../../../Components/ComponentsEN/GameMenu';
import munichFirstImage from '../../MunichImages/firstimagemunichsmall.jpeg';
import bricks from '../../MunichImages/bricks.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/munich6B');
}

class Munich6B extends Component {
    
  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && 
          <div> 
          <Timeline timelineProgress="5" timelineReference="15-16th A.D."/>
          <div className="clue-background">
            <div className="clue-background-title">Becoming a city of art</div>
            <div className="clue-background-divs">
              <div className="clue-background-div">This is how Munich appeared at the end of the 15th century.</div>
              <div className="clue-background-div-i-munich">The oldest existing image of Munich - Hartmann Schedel in 1493</div>
              <img src={munichFirstImage} className="tree-image" alt="munichFirstImage" />
              <div className="clue-background-div">Even if in the 15th Munich was not the center of the empire enymore, the city invested heavily on buildings and arts (after 15th more bricks to avoid fires): the tanzenhaus (later rathaus), the kunstkammer, the antiquarian, the residenz, city arsenal, brothel 1430s at am anger, a slaughterhause in 1465 followed by a municipal backery</div>
              <img src={bricks} className="munich-text-image" alt="bricks" />
          {/* </div>
          <div className="question-section"> */}
              <div className="clue-background-div question-section">Are you ready for the clue?</div>
            </div>
          </div>
          <div className="buttons-section">
              <Link to="/munich/firstimage/clue">
                  <div className="gameNext-button">
                      Yes
                  </div>
              </Link>
              <Link to="/munich/firstimage">
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
                  ReactGA.pageview('/munich6B');
              }}
              >This website uses Google Analytics cookies to enhance the user experience.
          </CookieConsent>   
        </div>  
      );
  }
}

export default Munich6B;