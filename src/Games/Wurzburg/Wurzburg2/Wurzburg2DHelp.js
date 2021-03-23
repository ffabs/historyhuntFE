import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../Components/GameMenu';
import lorenz from '../WurzburgImages/lorenz.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/wurzburg2DHelp');
}

class Wurzburg2DHelp extends Component {
    
  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && 
          <div> 
          <Timeline timelineProgress="2" timelineReference="8th A.D."/>
            <div className="clue-background">
            <div className="clue-background-title">Clue Help</div>
            <div className="clue-background-div">All bishops' statues have emblems around them.</div>
            <div>
              <img src={lorenz} className="lorenz-image" alt="lorenz" />
            </div>
          </div>
        <div className="buttons-section">
            <Link to="/wuerzburg/kilianus/dom/inside/clue">
                <div className="gameNext-button">
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
                  ReactGA.pageview('/wurzburg2DHelp');
              }}
              >This website uses Google Analytics cookies to enhance the user experience.
          </CookieConsent> 
        </div>  
      );
  }
}

export default Wurzburg2DHelp;