import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../../Components/ComponentsEN/GameMenu';
import kilianus from '../../WurzburgImages/kilianus.png';
import totnam from '../../WurzburgImages/totnam.png';
import kolonatus from '../../WurzburgImages/kolonatus.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/wurzburg1CHelp');
}

class Wurzburg1CHelp extends Component {
    
  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && 
          <div> 
          <Timeline timelineProgress="1" timelineReference="7th A.D."/>
            <div className="clue-background">
            <div className="clue-background-title">Clue Help</div>
            <div className="clue-background-div">Make sure to write the names as they are written on the statues:</div>
            <div>
              <img src={kilianus} className="solution-image" alt="kilianus" />
              <img src={totnam} className="solution-image" alt="totnam" />
              <img src={kolonatus} className="solution-image" alt="kolonatus" />
            </div>
          </div>
        <div className="buttons-section">
            <Link to="/wuerzburg/bridge/clue">
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
                  ReactGA.pageview('/wurzburg1CHelp');
              }}
              >This website uses Google Analytics cookies to enhance the user experience.
          </CookieConsent>  
        </div>  
      );
  }
}

export default Wurzburg1CHelp;