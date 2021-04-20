import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../../Components/ComponentsEN/GameMenu';
import gothic from '../../WurzburgImages/gothic.png';
import renaissance from '../../WurzburgImages/renaissance.png';
import king from '../../WurzburgImages/king.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/wurzburg2E');
}

class Wurzburg2E extends Component {

  render() {

    return ( 
        <div>
          {this.props.gamemenu !== true && 
          <div> 
          <Timeline timelineProgress="3" timelineReference="12th A.D." animate="yes"/>
          <div className="clue-background">
            <div className="clue-background-title">Well done!</div>
            <div className="center">
              <img src={gothic} className="imgclue2" alt="gothic" />
              <img src={renaissance} className="imgclue2" alt="renaissance" />
            </div>
            <div className="clue-background-divs">
            <div className="clue-background-div">Since the foundation of the bishop and cathedral, the bishops have become increasingly more powerful. In 1168 the bishop of Würzburg was even made duke by the emperor Barbarossa, starting the period of the prince-bishops of Würzburg which lasted until 1803.</div>
            <img src={king} className="memorial-image" alt="king" />
            <div className="clue-background-div">Not everyone has always been happy with the powerful bishops though...</div>
            </div>
          </div>
          <div className="buttons-section">
            <Link to="/wuerzburg/domAnswer/citizens">
              <div className="gameNext-button">
                  Next Clue
              </div>
            </Link>
            <Link to="/wuerzburg/kilianus/dom/inside/clue">
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
                  ReactGA.pageview('/wurzburg2E');
              }}
              >This website uses Google Analytics cookies to enhance the user experience.
          </CookieConsent> 
        </div>  
      );
  }
}

export default Wurzburg2E;