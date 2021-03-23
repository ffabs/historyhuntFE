import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../Components/GameMenu';
import warriors from '../WurzburgImages/warriors.png';
import crosses from '../WurzburgImages/crosses.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/wurzburg10CHelp');
}

class Wurzburg10CHelp extends Component {
    
  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && 
          <div>
        <Timeline timelineProgress="9" timelineReference="20th A.D."/>
            <div className="clue-background">
            <div className="clue-background-title">Clue Help</div>
            <div className="clue-background-div">The massive warriors allowed National Socialists to misuse this as a “Hero's Memorial”. After the Second World War, crosses were added, one for each year of the second war.</div>
            <div className="war-memorial">
              <img src={warriors} className="warriors" alt="warriors" />
              <img src={crosses} className="crosses" alt="crosses" />
            </div>
          </div>
        <div className="buttons-section">
            <Link to="/wuerzburg/worldwar/intro/clue">
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
                  ReactGA.pageview('/wurzburg10CHelp');
              }}
              >This website uses Google Analytics cookies to enhance the user experience.
          </CookieConsent>
        </div>  
      );
  }
}

export default Wurzburg10CHelp;