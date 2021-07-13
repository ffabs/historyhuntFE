import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../TimelineMunich';
import {Link} from 'react-router-dom';
import '../Munich.css';
import GameMenu from '../../../../Components/ComponentsEN/GameMenu';
import munichemblemhelp from '../../MunichImages/munichsuccess1.png';
import munichname from '../../MunichImages/munichname.png';
import money from '../../MunichImages/money.png';

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
        <Timeline timelineProgress="1.5" timelineReference="8-12th A.D." animate="no"/>
        <div className="clue-background">
          <div className="clue-background-title">Well done!</div>
          <div>
              <img src={munichemblemhelp} className="solution-image" alt="munich emblem" />
          </div>
          <div className="clue-background-divs">
            <div className="clue-background-div">The inspiration behind Munich's unique coat of arms was that this area was inabitated by monks since the 8th century.</div>
            <img src={munichname} className="memorial-image" alt="monks" />
            <div className="clue-background-div">It is even probable that the name of the city is a derivation from the German word <i>Mönche</i>, meaning 'monks'.</div>
            <img src={money} className="memorial-image" alt="money" />
            <div className="clue-background-div">However, the city was not born for religious reasons but rather for economic ones...</div>
          </div>
        </div>
        <div className="buttons-section">
          <Link to="/munich/marktplatz">
            <div className="gameNext-button">
                Next Clue
            </div>
          </Link>
          <Link to="/munich/coatofarms">
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
                ReactGA.pageview('/munich1D');
            }}
            >This website uses Google Analytics cookies to enhance the user experience.
        </CookieConsent>  
      </div>  
    );
  }
}

export default Munich1D;