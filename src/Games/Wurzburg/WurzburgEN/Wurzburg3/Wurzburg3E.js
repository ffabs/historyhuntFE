import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../../Components/ComponentsEN/GameMenu';
import tree from '../../WurzburgImages/tree.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/wurzburg3E');
}

class Wurzburg3E extends Component {

  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && 
          <div> 
          <Timeline timelineProgress="4" timelineReference="12-14th A.D."/>
          <div className="clue-background">
            <div className="clue-background-title">Well done!</div>
            <div>
              <img src={tree} className="tree-image" alt="tree" />
            </div>
            <div className="clue-background-divs">
            <div className="clue-background-div">Despite the presence of the town hall, the city was still fully under control of the prince-bishops.</div>
            <div className="clue-background-div">The citizens revolted multiple times and in 1400 they suffered a major defeat. However, the contrasts between the bishops and the citizens were not over yet...</div>
            </div>
          </div>
          <div className="buttons-section">
            <Link to="/wuerzburg/peasants">
              <div className="gameNext-button">
                  Next Clue
              </div>
            </Link>
            <Link to="/wuerzburg/citycouncil/sundial/clue">
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
                  ReactGA.pageview('/wurzburg3E');
              }}
              >This website uses Google Analytics cookies to enhance the user experience.
          </CookieConsent>
        </div>  
      );
  }
}

export default Wurzburg3E;