import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../TimelineMunich';
import {Link} from 'react-router-dom';
import '../Munich.css';
import GameMenu from '../../../../Components/ComponentsEN/GameMenu';
import barrel from '../../MunichImages/barrel.png';
import beer from '../../MunichImages/beer.png';


let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/munich8B');
}

class Munich8B extends Component {
    
  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && 
          <div> 
          <Timeline timelineProgress="6" timelineReference="16th A.D."/>
          <div className="clue-background">
            <div className="clue-background-title">The Hofbräuhaus</div>
            <div className="clue-background-divs">
              <div className="clue-background-div">
                William V William V found the beer in Munich bad so he imported beer from Saxony and then founded this beer hall as the brewery to the old Royal Residence.
              </div>
              <img src={barrel} className="memorial-image" alt="barrel" />
              <img src={beer} className="memorial-image" alt="beer" />
              <div className="clue-background-div question-section">Are you ready to discover more about it?</div>
            </div>
          </div>
          <div className="buttons-section">
              <Link to="/munich/william/clue">
                  <div className="gameNext-button">
                      Yes
                  </div>
              </Link>
              <Link to="/munich/william">
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
                  ReactGA.pageview('/munich8B');
              }}
              >This website uses Google Analytics cookies to enhance the user experience.
          </CookieConsent>   
        </div>  
      );
  }
}

export default Munich8B;