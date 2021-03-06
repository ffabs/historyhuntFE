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
    ReactGA.pageview('/wurzburg11CHelp');
}

class Wurzburg11CHelp extends Component {
    
  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && 
          <div>
        <Timeline timelineProgress="10" timelineReference="20-21th A.D."/>
            <div className="clue-background">
            <div className="clue-background-title">Clue Help</div>
            <div className="clue-background-div">Officially, the history of the city begins at the beginning of the 8th century, when the town was first documented as such. This was just in between the famous martyrdom and the foundation of the bishopric.</div>
            <div>
                <img src={kilianus} className="solution-image" alt="kilianus" />
                <img src={totnam} className="solution-image" alt="totnam" />
                <img src={kolonatus} className="solution-image" alt="kolonatus" />
            </div>
          </div>
        <div className="buttons-section">
            <Link to="/wuerzburg/currenttimes/intro/clue">
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
                  ReactGA.pageview('/wurzburg11CHelp');
              }}
              >This website uses Google Analytics cookies to enhance the user experience.
          </CookieConsent>
        </div>  
      );
  }
}

export default Wurzburg11CHelp;