import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../TimelineMunich';
import {Link} from 'react-router-dom';
import '../Munich.css';
import GameMenu from '../../../../Components/ComponentsEN/GameMenu';
import munich_clue1help from '../../MunichImages/munich_clue1help.png';
import bishop from '../../MunichImages/bishop.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/munich1D');
}

class Munich1D extends Component {
  render() {
    return ( 
      <div>
        {this.props.gamemenu !== true && 
        <div> 
        <Timeline timelineProgress="1" timelineReference="8-12th A.D." animate="no"/>
        <div className="clue-background">
          <div className="clue-background-title">Well done!</div>
          <div>
              <img src={munich_clue1help} className="solution-image" alt="munich_partnerships" />
          </div>
          <div className="clue-background-divs">
            <div className="clue-background-div">The inspiration behind Munich's unique coat of arms was indeed the fact that this area was orinally inabitated by monks from the 8th century.</div>
            <div className="clue-background-div">It is even probable that the name of the city is a derivation from the German word <i>Mönche</i>, meaning 'monks'.</div>
            <img src={bishop} className="memorial-image" alt="bishop" />
            <div className="clue-background-div">However, the city was not born for religious movements but rather for economic reasons...</div>
          </div>
        </div>
        <div className="buttons-section">
          <Link to="/munich/marktplatz">
            <div className="gameNext-button">
                Next Clue
            </div>
          </Link>
          <Link to="/munich/partnerships">
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
                ReactGA.pageview('/munich1D');
            }}
            >This website uses Google Analytics cookies to enhance the user experience.
        </CookieConsent>  
      </div>  
    );
  }
}

export default Munich1D;