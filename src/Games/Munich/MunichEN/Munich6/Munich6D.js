import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../TimelineMunich';
import {Link} from 'react-router-dom';
import '../Munich.css';
import GameMenu from '../../../../Components/ComponentsEN/GameMenu';
import munich_clue6help from '../../MunichImages/munich_clue6help.png';
// import munichflag from '../../MunichImages/munich-flag.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/munich6D');
}

class Munich6D extends Component {
  render() {
    return ( 
      <div>
        {this.props.gamemenu !== true && 
        <div> 
        <Timeline timelineProgress="5" timelineReference="15-16th A.D."/>
        <div className="clue-background">
          <div className="clue-background-title">Well done!</div>
          <div>
              <img src={munich_clue6help} className="solution-image" alt="cupolas" />
          </div>
          <div className="clue-background-divs">
            <div className="clue-background-div">munich's Frauenkirche red bricks (but cupolas later done) the last late gothic building in bavaria and the larsgest halled church in southern germnay.</div>
            {/* <div><img src={munichflag} className="memorial-image" alt="munich-flag" /></div> */}
            <div className="clue-background-div">Even if Frauenkirche was the most significant church in the 15th century, the 16th century had another protagonist...</div>
            <div className="clue-background-div"><i>consider to change this clue to have only 15th century stuff here and the next one for 16th</i></div>
          </div>
        </div>
        <div className="buttons-section">
          <Link to="/munich/michael">
            <div className="gameNext-button">
                Next Clue
            </div>
          </Link>
          <Link to="/munich/firstimage/clue">
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
                ReactGA.pageview('/munich6D');
            }}
            >This website uses Google Analytics cookies to enhance the user experience.
        </CookieConsent>  
      </div>  
    );
  }
}

export default Munich6D;