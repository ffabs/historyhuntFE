import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../Components/GameMenu';
import juliushelp from '../WurzburgImages/juliushelp.png';
import juliusbar from '../WurzburgImages/juliusbar.png';
import castle from '../WurzburgImages/castle.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/wurzburg5D');
}

class Wurzburg5D extends Component {

  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && <div> 
          <Timeline timelineProgress="5" timelineReference="16th A.D."/>
          <div className="clue-background">
            <div className="clue-background-title">Well done!</div>
            <div>
              <img src={juliushelp} className="memorial-image" alt="juliushelp" />
              <img src={juliusbar} className="memorial-image" alt="juliusbar" />
            </div>
            <div className="clue-background-divs">
              <div className="clue-background-div">In addition to the Juliusspital, he erected the old university as well as multiple churches and schools.</div>
              
              <img src={castle} className="memorial-image" alt="castle" />
              <div className="clue-background-div">Finally, he also extended the fortress, renovating and improving it after a fire had damaged it. Probably, he did not expect that in the following centuries his successors would have stop living there...</div>
            </div>
            
          </div>
          <div className="buttons-section">
            <Link to="/wuerzburg/residenz">
                <div className="gameNext-button">
                    Next Clue
                </div>
            </Link>
            <Link to="/wuerzburg/julius/statue/clue">
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
                  ReactGA.pageview('/wurzburg5D');
              }}
              >This website uses Google Analytics cookies to enhance the user experience.
          </CookieConsent>  
        </div>  
      );
  }
}

export default Wurzburg5D;