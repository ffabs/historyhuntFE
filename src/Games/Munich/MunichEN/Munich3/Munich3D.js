import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../TimelineMunich';
import {Link} from 'react-router-dom';
import '../Munich.css';
import GameMenu from '../../../../Components/ComponentsEN/GameMenu';
import munich_clue3help from '../../MunichImages/munichsuccess3.png';
import munichflag from '../../MunichImages/munich-flag.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/munich3D');
}

class Munich3D extends Component {
  render() {
    return ( 
      <div>
        {this.props.gamemenu !== true && 
        <div> 
        <Timeline timelineProgress="3" timelineReference="13th A.D."/>
        <div className="clue-background">
          <div className="clue-background-title">Well done!</div>
          <div>
              <img src={munich_clue3help} className="solution-image" alt="munich_partnerships" />
          </div>
          <div className="clue-background-divs">
            <div className="clue-background-div">This specific coat of arms is the origin of the colors of nowadays flag of Munich!</div>
            <div><img src={munichflag} className="memorial-image" alt="munich-flag" /></div>
            <div className="clue-background-div">Actually, a black eagle on a gold background is the Empire's own coat of arms. Let's find out why it has become a symbol of Munich...</div>
          </div>
        </div>
        <div className="buttons-section">
          <Link to="/munich/louis">
            <div className="gameNext-button">
                Next Clue
            </div>
          </Link>
          <Link to="/munich/wittelsbach/clue">
              <div className="gameNext-button-below">
                  Back
              </div>
          </Link>
          <a href="https://us1.list-manage.com/survey?u=27bed50594116df471c55e108&id=d9e99d59ba&attribution=false" target="_blank" rel="noopener noreferrer">
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
                ReactGA.pageview('/munich3D');
            }}
            >This website uses Google Analytics cookies to enhance the user experience.
        </CookieConsent>  
      </div>  
    );
  }
}

export default Munich3D;