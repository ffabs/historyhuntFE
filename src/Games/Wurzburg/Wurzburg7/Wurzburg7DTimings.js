import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../Components/GameMenu';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/wurzburg7DTimings');
}

class Wurzburg7DTimings extends Component {

  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && <div>
          <Timeline timelineProgress="6" timelineReference="17-18th A.D."/>
          <div className="clue-background">
            <div className="clue-background-title">Residence Garden opening times:</div>
            <div className="clue-background-div">April-October: 9am-6pm</div>
            <div className="clue-background-div">November-March: 10am-4.30pm</div>
            <div className="clue-background-div">
              Closed on: 01.01., Shrove Tuesday, 24.12., 25.12., 31.12.
            </div>
          </div>
          <div className="buttons-section">
            <Link to="/wuerzburg/residenz/gate/intro">
                <div className="gameNext-button-below">
                    Continue
                </div>
            </Link>
            <Link to="/wuerzburg/residenz/garden/clue">
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
                  ReactGA.pageview('/wurzburg7DTimings');
              }}
              >This website uses Google Analytics cookies to enhance the user experience.
          </CookieConsent>
        </div>  
      );
  }
}

export default Wurzburg7DTimings;