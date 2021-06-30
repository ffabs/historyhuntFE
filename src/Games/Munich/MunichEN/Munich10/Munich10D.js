import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../TimelineMunich';
import {Link} from 'react-router-dom';
import '../Munich.css';
import GameMenu from '../../../../Components/ComponentsEN/GameMenu';
import munich_clue10help from '../../MunichImages/munichhelp10.png';
import munichflag from '../../MunichImages/munich-flag.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/munich10D');
}

class Munich10D extends Component {
  render() {
    return ( 
      <div>
        {this.props.gamemenu !== true && 
        <div> 
        <Timeline timelineProgress="10" timelineReference="17th A.D."/>
        <div className="clue-background">
          <div className="clue-background-title">Congrats for reaching the end!</div>
          <div>
              <img src={munich_clue10help} className="destination1" alt="mary's column" />
          </div>
          <div className="clue-background-divs">
            {/* <div className="clue-background-div">However, the erection of this column didn't determine the end of the war. There was another battle also in Munich but this time the new walls were finished and the Swedish didn't win.</div> */}
            <div className="clue-background-div">In 1468 the war ended definitively with the <i>Peace of Westphalia.</i> It consisted of an agreement between European leaders of non-interference in internal affairs and is therefore regarded as the institution of the principle of "state sovereignty"!</div>
            <div className="clue-background-div">This is the end of the journey! We hope you enjoyed discovering the first centuries of this great city!</div>
            <div><img src={munichflag} className="memorial-image" alt="munich-flag" /></div>
          </div>
        </div>
        <div className="buttons-section">
          <a href="https://us1.list-manage.com/survey?u=27bed50594116df471c55e108&id=d9e99d59ba&attribution=false" target="_blank" rel="noopener noreferrer">
              <div className="gameNext-button-below">Give Feedback</div>
          </a>
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
          <Link to="/munich/30ywar/clue">
              <div className="gameNext-button-below">
                  Back
              </div>
          </Link>
        </div>
        </div>
        }
        <GameMenu {...this.props}/> 
        <CookieConsent 
            enableDeclineButton 
            buttonStyle={{ background: "#00695c", color: "white", fontWeight: "bold" }}
            onAccept={() => {
                ReactGA.initialize('UA-192893120-1');
                ReactGA.pageview('/munich10D');
            }}
            >This website uses Google Analytics cookies to enhance the user experience.
        </CookieConsent>  
      </div>  
    );
  }
}

export default Munich10D;