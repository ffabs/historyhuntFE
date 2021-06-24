import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../TimelineMunich';
import {Link} from 'react-router-dom';
import '../Munich.css';
import GameMenu from '../../../../Components/ComponentsEN/GameMenu';
import munich2_oldcityhall from '../../MunichImages/munichsuccess2.png';
import annouce from '../../MunichImages/annouce.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/munich2D');
}

class Munich2D extends Component {
  render() {
    return ( 
      <div>
        {this.props.gamemenu !== true && 
        <div> 
        <Timeline timelineProgress="2" timelineReference="12th A.D." animate="no"/>
        <div className="clue-background">
          <div className="clue-background-title">Well done!</div>
          <div>
              <img src={munich2_oldcityhall} className="memorial-image" alt="oldcityhall" />
          </div>
          <div className="clue-background-divs">
          <div className="clue-background-div">If you would follow this direction until the river, you would end up at the 'Ludwig bridge'. This bridge stands where the first one used to and is therefore part of the original "Salt way" from Saltzburg and Reichenhall to Augsburg.</div>
            <div className="clue-background-div">Consequently to Henry's actions, in 1158, the Holy Roman Emperor Barbarossa issued the first document where Munich is mentioned, now considered as the Munich's foundation document.</div>
            <img src={annouce} className="memorial-image" alt="annouce" />
            <div className="clue-background-div">However, Henry's good favour with Barbarossa did not last...</div>
          </div>
        </div>
        <div className="buttons-section">
          <Link to="/munich/wittelsbach">
            <div className="gameNext-button">
                Next Clue
            </div>
          </Link>
          <Link to="/munich/marktplatz/clue">
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
                ReactGA.pageview('/munich2D');
            }}
            >This website uses Google Analytics cookies to enhance the user experience.
        </CookieConsent>  
      </div>  
    );
  }
}

export default Munich2D;