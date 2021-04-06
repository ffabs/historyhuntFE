import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../Components/GameMenu';
import peasant from '../WurzburgImages/peasant.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/wurzburg4B');
}

class Wurzburg4B extends Component {

  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && 
          <div> 
          <Timeline timelineProgress="5" timelineReference="16th A.D."/>
          <div className="clue-background">
            <div className="clue-background-title">The Peasants’ Revolt</div>
            <div className="clue-background-divs">
            <div className="clue-background-div">The German Peasants' Revolt was Europe's largest and most widespread popular uprising prior to the French Revolution.</div>
            <img src={peasant} className="memorial-image" alt="peasant" />
          {/* </div>
          <div className="question-section"> */}
            <div className="clue-background-div question-section">A tip for the next clue: remember to look around and that "bauernkrieg" means "peasants’ war" in German!</div>
            <div className="clue-background-div">Ready for the next clue?</div>
          </div>
          </div>
          <div className="buttons-section">
            <Link to="/wuerzburg/peasants/memorial/clue">
                <div className="gameNext-button">
                    Yes
                </div>
            </Link>
            <Link to="/wuerzburg/peasants">
              <div className="gameNext-button-below">
                  Back
              </div>
            </Link>
          </div>
          </div>}<GameMenu {...this.props}/> 
          <CookieConsent 
              enableDeclineButton 
              buttonStyle={{ background: "#00695c", color: "white", fontWeight: "bold" }}
              onAccept={() => {
                  ReactGA.initialize('UA-192893120-1');
                  ReactGA.pageview('/wurzburg4B');
              }}
              >This website uses Google Analytics cookies to enhance the user experience.
          </CookieConsent>
        </div>  
      );
    }
}

export default Wurzburg4B;
