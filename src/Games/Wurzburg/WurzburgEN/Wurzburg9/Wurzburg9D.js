import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import lab from '../../WurzburgImages/lab.jpg';
import '../Wurzburg.css';
import GameMenu from '../../../../Components/ComponentsEN/GameMenu';
import handrays from '../../WurzburgImages/handrays.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/wurzburg9D');
}

class Wurzburg9D extends Component {

  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && <div>
          <Timeline timelineProgress="8" timelineReference="19-20th A.D."/>
          <div className="clue-background">
            <div className="clue-background-title">Well done!</div>
            <div>
              <img src={handrays} className="memorial-image" alt="handrays" />
            </div>
            <div className="clue-background-divs">
            <div className="clue-background-div">
              If you are interested, you can even visit his lab at the other side of the town for free! For more info check the following link: <a href="http://wilhelmconradroentgen.de/en/home" target="_blank" rel="noopener noreferrer">
                wilhelmconradroentgen.de
              </a>
            </div>
            <img src={lab} className="gameIntro-image" alt="lab" />
            
          {/* <div className="question-section"> */}
            <div className="clue-background-div question-section">Are you ready for what happened next?</div>
          {/* </div> */}
          </div>
          </div>
          <div className="buttons-section">
            <Link to="/wuerzburg/worldwar">
                <div className="gameNext-button">
                    Yes
                </div>
            </Link>
            <Link to="/wuerzburg/xrays/intro/clue">
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
                  ReactGA.pageview('/wurzburg9D');
              }}
              >This website uses Google Analytics cookies to enhance the user experience.
          </CookieConsent>
        </div>  
      );
  }
}

export default Wurzburg9D;