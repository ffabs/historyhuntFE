import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../TimelineMunich';
import {Link} from 'react-router-dom';
import '../Munich.css';
import GameMenu from '../../../../Components/ComponentsEN/GameMenu';
import munich_clue8help from '../../MunichImages/munichsuccess8.png';
import barrel from '../../MunichImages/barrelandbeer.png';
// import beer from '../../MunichImages/beer.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/munich8D');
}

class Munich8D extends Component {
  render() {
    return ( 
      <div>
        {this.props.gamemenu !== true && 
        <div> 
        <Timeline timelineProgress="6" timelineReference="16th A.D."/>
        <div className="clue-background">
          <div className="clue-background-title">Well done!</div>
          <div>
            <img src={munich_clue8help} className="solution-image" alt="beer hall" />
          </div>
          <div className="clue-background-divs">
            <div className="clue-background-div">However, William's politics defending Catholicism led to many debts and a weakening of the Bavarian treasury. As a consequence he abdicated in favour of his son Maximilian I.</div>
            <img src={barrel} className="memorial-image" alt="barrel" />
            <div className="clue-background-div">Ironically, beer was used by Maximilian to bring some financial order back, by nationalizing the Weißbier beer industry!</div>
            {/* <div className="clue-background-div">Nevertheless, Maximilian had received a strong religious education and he also ordered to arrest locals caught going to the pub instead of attending mass!</div> */}
          </div>
        </div>
        <div className="buttons-section">
          <Link to="/munich/max">
            <div className="gameNext-button">
                Next Clue
            </div>
          </Link>
          <Link to="/munich/william/clue">
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
                ReactGA.pageview('/munich8D');
            }}
            >This website uses Google Analytics cookies to enhance the user experience.
        </CookieConsent>  
      </div>  
    );
  }
}

export default Munich8D;