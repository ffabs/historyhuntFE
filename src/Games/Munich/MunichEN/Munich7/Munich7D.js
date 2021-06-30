import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../TimelineMunich';
import {Link} from 'react-router-dom';
import '../Munich.css';
import GameMenu from '../../../../Components/ComponentsEN/GameMenu';
import munich_clue7help from '../../MunichImages/munich_clue7help.png';
// import munichflag from '../../MunichImages/munich-flag.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/munich7D');
}

class Munich7D extends Component {
  render() {
    return ( 
      <div>
        {this.props.gamemenu !== true && 
        <div> 
        <Timeline timelineProgress="6" timelineReference="16th A.D."/>
        <div className="clue-background">
          <div className="clue-background-title">Well done!</div>
          <div>
              <img src={munich_clue7help} className="tree-image" alt="st. Michael" />
          </div>
          <div className="clue-background-divs">
            <div className="clue-background-div">William V was the Wittelsbach ruler at the time and when he died was buried right in this church.</div>
            <div className="clue-background-div">Like the rest of the elite of Munich at the time, even William's own child and successor was educated at the Jesuit college and was very religious.</div>
            {/* <div><img src={munichflag} className="memorial-image" alt="munich-flag" /></div> */}
            <div className="clue-background-div">William was not only interested in religious issues though...</div>
          </div>
        </div>
        <div className="buttons-section">
          <Link to="/munich/william">
            <div className="gameNext-button">
                Next Clue
            </div>
          </Link>
          <Link to="/munich/michael/clue">
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
                ReactGA.pageview('/munich7D');
            }}
            >This website uses Google Analytics cookies to enhance the user experience.
        </CookieConsent>  
      </div>  
    );
  }
}

export default Munich7D;