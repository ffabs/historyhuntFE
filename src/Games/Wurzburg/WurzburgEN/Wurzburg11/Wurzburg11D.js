import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import kilianifest from '../../WurzburgImages/kilianifest.png';
import '../Wurzburg.css';
import GameMenu from '../../../../Components/ComponentsEN/GameMenu';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/wurzburg11D');
}

class Wurzburg11D extends Component {

  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && <div>
          <Timeline timelineProgress="10" timelineReference="21th A.D." animate="yes"/>
          <div className="clue-background">
            <div className="clue-background-title">Congrats for reaching the end!</div>
            <div className="clue-background-div">This is the end of the journey. Hopefully you enjoyed discovering the history of this great city!</div>
            <img src={kilianifest} className="gameIntro-image" alt="kilianifest" />
            <div className="clue-background-div">By the way, do you remember how the journey started? Today, Kilian still plays an important role for the city, he is the patron saint of Würzburg and every July there is a big fair with fireworks called "Kiliani"!</div>
          </div>
          {/* <div className="question-section"> */}
          {/* </div> */}
          <div className="buttons-section">
            <Link to="/support-us">
              <div className="gameNext-button-below">
                Support Us!
              </div>
            </Link>
            <Link to="/">
              <div className="gameNext-button-below">
                Home
              </div>
            </Link>
            <Link to="/wuerzburg/currenttimes/intro/clue">
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
                ReactGA.pageview('/wurzburg11D');
            }}
            >This website uses Google Analytics cookies to enhance the user experience.
        </CookieConsent>
        </div>  
      );
  }
}

export default Wurzburg11D;