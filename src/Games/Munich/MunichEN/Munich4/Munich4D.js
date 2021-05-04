import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../TimelineMunich';
import {Link} from 'react-router-dom';
import '../Munich.css';
import GameMenu from '../../../../Components/ComponentsEN/GameMenu';
import munich_clue4help from '../../MunichImages/munich_clue4help.png';
import castle from '../../MunichImages/castle.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/munich4D');
}

class Wurzburg4D extends Component {
  render() {
    return ( 
      <div>
        {this.props.gamemenu !== true && 
        <div> 
        <Timeline timelineProgress="4" timelineReference="14th A.D."/>
        <div className="clue-background">
          <div className="clue-background-title">Well done!</div>
          <div>
              <img src={munich_clue4help} className="solution-image" alt="Louis IV" />
          </div>
          <div className="clue-background-divs">
          <div className="clue-background-div">issues with the Pope when it was weaker (not recognised his election, excommunication, called the bavarian.., maybe because the Pope was with the Habsburgers?!)but then decided that emperor were elected by a collage without the pope and excluding bavaria duke</div>
            
            <div className="clue-background-div">Munich became a focal point for the empire, center of intellectual (theologians, philosophers, artists...disputes with Catholic Church...) state administration set up (ducal court, court chapel, chancellery) To reward Munich for its loyalty (and also to line his own pockets), Ludwig created a lucrative monopoly for the city in 1322 by ordering that all the salt mined within Hallein or Reichenhall must pass directly through Munich.</div>
            <img src={castle} className="memorial-image" alt="castle" />
            <div className="clue-background-div">famous city gates and walls constructed (there was an inner wall section though)</div>
          </div>
        </div>
        <div className="buttons-section">
          <Link to="/munich/walls">
            <div className="gameNext-button">
                Next Clue
            </div>
          </Link>
          <Link to="/munich/louis/clue">
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
                ReactGA.pageview('/munich4D');
            }}
            >This website uses Google Analytics cookies to enhance the user experience.
        </CookieConsent>  
      </div>  
    );
  }
}

export default Wurzburg4D;