import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../TimelineMunich';
import {Link} from 'react-router-dom';
import '../Munich.css';
import GameMenu from '../../../../Components/ComponentsEN/GameMenu';
// import annouce from '../../MunichImages/annouce.png';
import destination1 from '../../MunichImages/destination1.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/munich3A');
}

class Munich3A extends Component {
    
  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && 
          <div> 
          <Timeline timelineProgress="2" timelineReference="12th A.D."/>
          <div className="clue-background">
            <div className="clue-background-title">The Wittelsbach's Old Court</div>
            <div className="clue-background-divs">
              <div className="clue-background-div">Henry lost Munich and most of his lands due to Barbarossa, who instead appointed Otto I von Wittelsback as Duke of Bavaria, starting in this way the longest and most conservative reign of any dynasty in Germany...</div>
              <div className="clue-background-div"><i>Barbarossa also ordered to transfer the bridge back to where it used to be but this never happened as probably Munich was already too big to fall.</i></div>
              {/* <img src={annouce} className="memorial-image" alt="annouce" /> */}
              <div className="clue-background-div">Let's go to Wittelsbach's Old Court!</div>
              <img src={destination1} className="destination1" alt="destination1" />
            <iframe 
              className="clue-map"
              title="map"
              // frameborder="0" 
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJLST_l-51nkcR7RNhg-M6V80&key=AIzaSyDx8TjLXQy9CIDjVVVU2EH2LXibwQRNKxs" 
              // allowfullscreen 
            />
          {/* </div>
          <div className="question-section"> */}
            <div className="clue-background-div question-section">Are you there?</div>
            </div>
          </div>
          <div className="buttons-section">
            <Link to="/munich/wittelsbach/clueintro">
              <div className="gameNext-button">
                  Yes, I am!
              </div>
            </Link>
            <Link to="/munich/saltz/clueAnswer">
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
                  ReactGA.pageview('/munich3A');
              }}
              >This website uses Google Analytics cookies to enhance the user experience.
          </CookieConsent>   
        </div>  
      );
    }
}

export default Munich3A;
