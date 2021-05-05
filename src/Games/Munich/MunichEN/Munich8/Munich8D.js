import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../TimelineMunich';
import {Link} from 'react-router-dom';
import '../Munich.css';
import GameMenu from '../../../../Components/ComponentsEN/GameMenu';
import munich_clue8help from '../../MunichImages/munich_clue8help.png';
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
            <div className="clue-background-div">William V's politics and spending (especially on Church-related projects and foreign missionaries outside Bavaria) put tremendous strain on the Bavarian treasury, which was already suffering from other art investiments. As a consequence to all the debts, he abdicated in favour of his son Maximilian I.</div>
            <img src={barrel} className="memorial-image" alt="barrel" />
            <div className="clue-background-div">Hironically, his son used beer to bring some order to the financial debts. He nationalized the Weißbier brewing industry and erected his own brewereries including extending the Hofbräuhaus.</div>
            {/* <img src={beer} className="memorial-image" alt="beer" /> */}
            <div className="clue-background-div">Funny also that he had a very Jesuit education and therefore he ordered to arrest Münchner caught going to the pub instead of attending mass.</div>
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
                ReactGA.pageview('/munich8D');
            }}
            >This website uses Google Analytics cookies to enhance the user experience.
        </CookieConsent>  
      </div>  
    );
  }
}

export default Munich8D;