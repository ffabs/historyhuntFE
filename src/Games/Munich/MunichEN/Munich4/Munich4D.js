import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../TimelineMunich';
import {Link} from 'react-router-dom';
import '../Munich.css';
import GameMenu from '../../../../Components/ComponentsEN/GameMenu';
import munich_clue4help from '../../MunichImages/munichsuccess4.png';
import castle from '../../MunichImages/castle.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/munich4D');
}

class Munich4D extends Component {
  render() {
    return ( 
      <div>
        {this.props.gamemenu !== true && 
        <div> 
        <Timeline timelineProgress="4" timelineReference="14th A.D."/>
        <div className="clue-background">
          <div className="clue-background-title">Well done!</div>
          <div>
              <img src={munich_clue4help} className="memorial-image" alt="Louis IV" />
          </div>
          <div className="clue-background-divs">
          <div className="clue-background-div">Actually, he started being called "the Bavarian" in a derogatory way by the Pope, who did not recognise him as Emperor and who even excommunicated him.</div>
            
            <div className="clue-background-div">
              Nevertheless, in the 14th century Munich gained much importance thanks to Ludwig: it was the center of the empire, became even richer thanks to a lucrative salt monopoly he created for the city and was expanded by building the famous city gates still visible today!</div>
            <img src={castle} className="memorial-image" alt="castle" />
          </div>
        </div>
        <div className="buttons-section">
          <Link to="/munich/firstimage">
            <div className="gameNext-button">
                Next Clue
            </div>
          </Link>
          <Link to="/munich/louis/clue">
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
                ReactGA.pageview('/munich4D');
            }}
            >This website uses Google Analytics cookies to enhance the user experience.
        </CookieConsent>  
      </div>  
    );
  }
}

export default Munich4D;