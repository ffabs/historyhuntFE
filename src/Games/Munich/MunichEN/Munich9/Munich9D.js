import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../TimelineMunich';
import {Link} from 'react-router-dom';
import '../Munich.css';
import GameMenu from '../../../../Components/ComponentsEN/GameMenu';
import munich_clue9help from '../../MunichImages/munich_clue9help.png';
import castle from '../../MunichImages/castle.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/munich9D');
}

class Munich9D extends Component {
  render() {
    return ( 
      <div>
        {this.props.gamemenu !== true && 
        <div> 
        <Timeline timelineProgress="7" timelineReference="17th A.D."/>
        <div className="clue-background">
          <div className="clue-background-title">Well done!</div>
          <div>
              <img src={munich_clue9help} className="solution-image" alt="riches of bavaria"/>
          </div>
          <div className="clue-background-divs">
            <div className="clue-background-div">Indeed it represents the wealth of Bavaria from salt from the Alps.</div>
            <img src={castle} className="memorial-image" alt="castle" />
            <div className="clue-background-div">His biggest building project, though, was a new city wall, which was started too late though...</div>
            <div className="clue-background-div">Are you ready for the last clue?</div>
          </div>
        </div>
        <div className="buttons-section">
          <Link to="/munich/30ywar">
            <div className="gameNext-button">
                Next Clue
            </div>
          </Link>
          <Link to="/munich/max/clue">
              <div className="gameNext-button-below">
                  Back
              </div>
          </Link>
          <a href="https://us1.list-manage.com/survey?u=27bed50594116df471c55e108&id=e11c3c40f6" target="_blank" rel="noopener noreferrer">
              <div className="gameFeedback-button">Give Feedback</div>
          </a>
        </div>
        </div>
        }
        <GameMenu {...this.props}/> 
        <CookieConsent 
            enableDeclineButton 
            buttonStyle={{ background: "#00695c", color: "white", fontWeight: "bold" }}
            onAccept={() => {
                ReactGA.initialize('UA-192893120-1');
                ReactGA.pageview('/munich9D');
            }}
            >This website uses Google Analytics cookies to enhance the user experience.
        </CookieConsent>  
      </div>  
    );
  }
}

export default Munich9D;