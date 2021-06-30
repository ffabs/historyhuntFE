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
                Originally, the quality of the local beer was very low and even dangerous for customers. To solve this issue, the <i>Beer Purity Law</i> was issued in the first part of the 16th century.
              </div>
              <img src={barrel} className="memorial-image" alt="barrel" />
              <div className="clue-background-div">
                Nevertheless, William V did not like the taste of the local beer and therefore he founded his own brewery, the Hofbräuhaus!
              </div>
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