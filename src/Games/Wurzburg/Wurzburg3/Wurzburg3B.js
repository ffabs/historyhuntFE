import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../Components/GameMenu';
import castle from '../WurzburgImages/castle.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/wurzburg3B');
}

class Wurzburg3B extends Component {

  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && 
          <div> 
          <Timeline timelineProgress="4" timelineReference="12-14th A.D."/>
          <div className="clue-background">
            <div className="clue-background-title">The Town Hall</div>
            <div className="clue-background-divs">
            <div className="clue-background-div">In the 12th century the people of Würzburg formed a corporation to contrast the increasing demands of the prince-bishops. As consequences, in the 13th century the bishop left the city to live protected in the castle and banned the city council.</div>
            <img src={castle} className="memorial-image" alt="castle" />
            <div className="clue-background-div">Nevertheless, at the beginning of the 14th century the city council procured this tower building which has since served as the Rathaus or town hall.</div>
            </div>
          </div>
          <div className="question-section">
            <div className="clue-background-div">Why is there a tree painting on the building?</div>
          </div>
          <div className="buttons-section">
            <Link to="/wuerzburg/citycouncil/sundial">
                <div className="gameNext-button">
                    Let's find out!
                </div>
            </Link>
            <Link to="/wuerzburg/citycouncil/sundial/clue">
                <div className="gameNext-button-below">
                    Skip this part
                </div>
            </Link>
            <Link to="/wuerzburg/domAnswer/citizens">
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
                ReactGA.pageview('/wurzburg3B');
            }}
            >This website uses Google Analytics cookies to enhance the user experience.
          </CookieConsent> 
        </div>  
      );
  }
}

export default Wurzburg3B;
