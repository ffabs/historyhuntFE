import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../../Components/ComponentsEN/GameMenu';
import oegg from '../../WurzburgImages/oegg.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/wurzburg7G');
}

class Wurzburg7G extends Component {

  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && <div>
          <Timeline timelineProgress="7" timelineReference="19th A.D." animate="yes"/>
          <div className="clue-background">
            <div className="clue-background-title">Well done!</div>
            <div>
              <img src={oegg} className="destination1" alt="oegg" />
            </div>
            <div className="clue-background-divs">
            <div className="clue-background-div">Despite the growth of the town and the new achievements of the Residence, the age of the prince-bishops was coming to an end.</div>
            <div className="clue-background-div">Secularization finally divorced the sacred and the secular in 1803.</div>
    {/* <div>i bishops sono alla fine e (anche occupazione francese forse Napoleon)</div> */}
            </div>
          </div>
          <div className="buttons-section">
            <Link to="/wuerzburg/ringpark">
                <div className="gameNext-button">
                    Next
                </div>
            </Link>
            <Link to="/wuerzburg/residenz/garden/clueQuestion">
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
                  ReactGA.pageview('/wurzburg7G');
              }}
              >This website uses Google Analytics cookies to enhance the user experience.
          </CookieConsent>
        </div>  
      );
  }
}

export default Wurzburg7G;