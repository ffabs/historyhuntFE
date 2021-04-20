import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../../Components/ComponentsEN/GameMenu';
import xraysdesign from '../../WurzburgImages/xraysdesign.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/wurzburg9B');
}

class Wurzburg9B extends Component {

  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && <div>
          <Timeline timelineProgress="8" timelineReference="19-20th A.D."/>
          <div className="clue-background">
            <div className="clue-background-title">X-Rays</div>
            <div className="clue-background-divs">
              <div className="clue-background-div">At the end of the 19th century, the Physics professor Wilhelm Röntgen stumbled on X-rays and began studying them.</div>
            <div className="clue-background-div">When he submitted the first paper ever written on X-rays, he referred to the radiation as "X" to indicate that it was an unknown type. The name stuck until today!</div>
          </div>
          <img src={xraysdesign} className="memorial-image" alt="xraysdesign"/>
          </div>
          <div className="question-section">
            <div className="clue-background-div">Are you ready to look for him in this part of the park?</div>
          </div>
          <div className="buttons-section">
            <Link to="/wuerzburg/xrays/intro/clue">
                <div className="gameNext-button">
                    Yes
                </div>
            </Link>
            <Link to="/wuerzburg/xrays">
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
                  ReactGA.pageview('/wurzburg9B');
              }}
              >This website uses Google Analytics cookies to enhance the user experience.
          </CookieConsent>
        </div>  
      );
  }
}

export default Wurzburg9B;