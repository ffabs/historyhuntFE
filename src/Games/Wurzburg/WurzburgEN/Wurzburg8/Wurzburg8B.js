import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../../Components/ComponentsEN/GameMenu';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/wurzburg8B');
}

class Wurzburg8B extends Component {

  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && <div>
          <Timeline timelineProgress="7" timelineReference="19th A.D."/>
          <div className="clue-background">
            <div className="clue-background-title">Ring Park</div>
            <div className="clue-background-divs">
            <div className="clue-background-div">In order to solve the next clue, it might be helpful to learn the following German words:</div>
            <ul className="clue-background-div">
              <li>Bürgermeister = Mayor</li>
              <li>Wald = Forest</li>
              <li>Wasser = Water</li>
              <li>Wohnung = Housing</li>
              <li>Befestigungsanlage = Fortification</li>
              <li>Schulwesen = School System</li>
              <li>Reformierte = Reform</li>
            </ul>
          {/* <div className="question-section"> */}
            <div className="clue-background-div question-section">Ready for the clue?</div>
          {/* </div> */}
            </div>
          </div>
          <div className="buttons-section">
            <Link to="/wuerzburg/ringpark/intro/clue">
                <div className="gameNext-button">
                    Yes
                </div>
            </Link>
            <Link to="/wuerzburg/ringpark">
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
                  ReactGA.pageview('/wurzburg8B');
              }}
              >This website uses Google Analytics cookies to enhance the user experience.
          </CookieConsent>
        </div>  
      );
  }
}

export default Wurzburg8B;