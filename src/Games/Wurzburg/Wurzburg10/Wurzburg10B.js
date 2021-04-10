import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../Components/GameMenu';
import soldierw2 from '../WurzburgImages/soldierw2.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/wurzburg10B');
}

class Wurzburg10B extends Component {

  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && <div>
          <Timeline timelineProgress="9" timelineReference="20th A.D."/>
          <div className="clue-background">
            <div className="clue-background-title">World Wars</div>
            <div className="clue-background-divs">
              <div className="clue-background-div">
                Originally, this war memorial was made before the Second World War for the fallen soldiers of the First World War.
              </div>
              <div className="clue-background-div">
                At the time, the National Socialists rejected it but then misused it as a “Hero's Memorial” for Nazi propaganda.
              </div>
            </div>
            <img src={soldierw2} className="oegg" alt="soldierw2"/>
          </div>
            <div className="question-section">
              <div className="clue-background-div">Are you ready for the clue?</div>
            </div>
          <div className="buttons-section">
            <Link to="/wuerzburg/worldwar/intro/clue">
                <div className="gameNext-button">
                    Yes
                </div>
            </Link>
            <Link to="/wuerzburg/worldwar">
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
                  ReactGA.pageview('/wurzburg10B');
              }}
              >This website uses Google Analytics cookies to enhance the user experience.
          </CookieConsent>
        </div>  
      );
  }
}

export default Wurzburg10B;