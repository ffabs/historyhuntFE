import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../TimelineMunich';
import {Link} from 'react-router-dom';
import '../Munich.css';
import GameMenu from '../../../../Components/ComponentsEN/GameMenu';
import munich_clue7help from '../../MunichImages/munich_clue7help.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/munich7CHelp');
}

class Munich7CHelp extends Component {
    
  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && 
          <div> 
          <Timeline timelineProgress="6" timelineReference="16th A.D."/>
            <div className="clue-background">
            <div className="clue-background-title">Clue Help</div>
            <div>
              <img src={munich_clue7help} className="tree-image" alt="munich_clue7help" />
            </div>
            <div className="clue-background-div">To answer the first question, read the name of the second statue at the bottom left. Does it sound familiar?</div>
            <div className="clue-background-div">To answer the second question, read the golden text over the doors. The name is at the beginning!</div>
          </div>
        <div className="buttons-section">
            <Link to="/munich/michael/clue">
                <div className="gameNext-button">
                    Back
                </div>
            </Link>
          </div>
          </div>}<GameMenu {...this.props}/> 
          <CookieConsent 
              enableDeclineButton 
              buttonStyle={{ background: "#00695c", color: "white", fontWeight: "bold" }}
              onAccept={() => {
                  ReactGA.initialize('UA-192893120-1');
                  ReactGA.pageview('/munich7CHelp');
              }}
              >This website uses Google Analytics cookies to enhance the user experience.
          </CookieConsent>  
        </div>  
      );
  }
}

export default Munich7CHelp;