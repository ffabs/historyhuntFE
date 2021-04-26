import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../../Components/ComponentsEN/GameMenu';
import memorialtext from '../../WurzburgImages/memorialtext.jpeg';
import guard from '../../WurzburgImages/guard.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/wurzburg4D');
}

class Wurzburg4D extends Component {

  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && 
          <div> 
          <Timeline timelineProgress="5" timelineReference="16th A.D."/>
          <div className="clue-background">
            <div className="clue-background-title">Well done!</div>
            <div 
            // className="peasant-memorials"
            >
              {/* <img src={memorialbuilding} className="memorial50" alt="memorialbuilding" /> */}
              <img src={memorialtext} className="memorial-image" alt="memorialtext" />
            </div>
            <div className="clue-background-divs">
              <div className="clue-background-div">Interestingly, Martin Luther's revolution happened in roughtly the same years. However, even if Luther's thoughts may have added intensity to the uprising movements, it did not create them and he even opposed the revolts. Actually, Martin Luther was even received by the bishop Lorenz Von Bibra (earlier met in the Dom) and they got along very well.</div>
              <img src={guard} className="memorial-image" alt="guard" />
              <div className="clue-background-div">Not long after however, a new bishop was not as friendly with Luther's ideas...</div>
            </div>
          </div>
          <div className="buttons-section">
            <Link to="/wuerzburg/julius">
                <div className="gameNext-button">
                Next Clue
                </div>
            </Link>
            <Link to="/wuerzburg/peasants/memorial/clue">
                <div className="gameNext-button-below">
                    Back
                </div>
            </Link>
            <a href="https://us1.list-manage.com/survey?u=27bed50594116df471c55e108&id=e11c3c40f6" target="_blank" rel="noopener noreferrer">
                <div className="gameFeedback-button">Give Feedback</div>
            </a>
          </div>
          </div>}<GameMenu {...this.props}/> 
          <CookieConsent 
              enableDeclineButton 
              buttonStyle={{ background: "#00695c", color: "white", fontWeight: "bold" }}
              onAccept={() => {
                  ReactGA.initialize('UA-192893120-1');
                  ReactGA.pageview('/wurzburg4D');
              }}
              >This website uses Google Analytics cookies to enhance the user experience.
          </CookieConsent>
        </div>  
      );
    }
}

export default Wurzburg4D;
