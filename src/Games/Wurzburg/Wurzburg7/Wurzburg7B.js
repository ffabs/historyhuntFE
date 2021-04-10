import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import residenz from '../WurzburgImages/residenz-in-const.png';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../Components/GameMenu';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/wurzburg7B');
}

class Wurzburg7B extends Component {

  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && <div>
          <Timeline timelineProgress="6" timelineReference="17-18th A.D."/>
          <div className="clue-background">
            <div className="clue-background-title">The Residence</div>
            {/* <div className="clue-background-div">After the Swedish war and occupation, within a space of 100 years a bishop’s palace was built, the Residenz and the bishops moved from the fortress to the Residenz.</div> */}
            <div className="clue-background-div">The bishop Johann Philipp Franz von Schönborn wanted to appear as a monarch of his time, living in a palace comparable to the one of Versailles or Schönbrunn. Having won a fortune in a court case, he used it to undertake this impressive building project in 1720.</div>
          </div>
            <div className="clue-background-div-i">The Residence under construction in 1731:</div>
            <div><img src={residenz} className="gameIntro-image" alt="residenz" /></div>
          <div className="question-section">
            <div className="clue-background-div">Can you go in the Court Chapel?</div>
          </div>
          <div className="buttons-section">
            <Link to="/wuerzburg/residenz/intro/clue">
                <div className="gameNext-button">
                    Yes
                </div>
            </Link>
            <Link to="/wuerzburg/residenz/intro/help">
                <div className="gameNext-button-below">
                    No
                </div>
            </Link>
            <Link to="/wuerzburg/residenz">
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
                  ReactGA.pageview('/wurzburg7B');
              }}
              >This website uses Google Analytics cookies to enhance the user experience.
          </CookieConsent> 
        </div>  
      );
  }
}

export default Wurzburg7B;