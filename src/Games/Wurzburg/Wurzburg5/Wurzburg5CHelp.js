import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../Components/GameMenu';
import juliushelp from '../WurzburgImages/juliushelp.png';
import juliusbar from '../WurzburgImages/juliusbar.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/wurzburg5CHelp');
}

class Wurzburg5CHelp extends Component {
    
  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && 
          <div> 
          <Timeline timelineProgress="5" timelineReference="16th A.D."/>
            <div className="clue-background">
            <div className="clue-background-title">Clue Help</div>
            <div className="clue-background-div">There are 3 correct answers: a clinic, a winery and also a backery!</div>
            <div>
              <img src={juliushelp} className="memorial-image" alt="juliushelp" />
              <img src={juliusbar} className="memorial-image" alt="juliusbar" />
            </div>
          </div>
        <div className="buttons-section">
            <Link to="/wuerzburg/julius/statue/clue">
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
                  ReactGA.pageview('/wurzburg5CHelp');
              }}
              >This website uses Google Analytics cookies to enhance the user experience.
          </CookieConsent>  
        </div>  
      );
  }
}

export default Wurzburg5CHelp;