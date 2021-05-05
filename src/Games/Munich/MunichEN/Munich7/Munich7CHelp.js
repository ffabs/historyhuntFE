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
              <img src={munich_clue7help} className="solution-image" alt="munich_clue7help" />
            </div>
            <div className="clue-background-div">To answer the first question, read the name of the second statue from the top, sounds familiar?</div>
            <div className="clue-background-div">The answer of the second question is the beginning of the text over the doors!</div>
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