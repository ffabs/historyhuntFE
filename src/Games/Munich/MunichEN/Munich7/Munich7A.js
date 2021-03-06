import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../TimelineMunich';
import {Link} from 'react-router-dom';
import '../Munich.css';
import GameMenu from '../../../../Components/ComponentsEN/GameMenu';
// import annouce from '../../MunichImages/annouce.png';
import munichlocation7 from '../../MunichImages/newmunichlocation7.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/munich7A');
}

class Munich7A extends Component {
    
  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && 
          <div> 
          <Timeline timelineProgress="6" timelineReference="16th A.D." animate="yes"/>
          <div className="clue-background">
            <div className="clue-background-title">Jesuits and the Counter Reformation</div>
            <div className="clue-background-divs">
              <div className="clue-background-div">Let's go to St. Michael's Church!</div>
              {/* <img src={annouce} className="memorial-image" alt="annouce" /> */}
              {/* <div className="clue-background-div">Let's go there 1585 foundation stone!</div> */}
              <img src={munichlocation7} className="destination1" alt="St. Michael's Church" />
            <iframe 
              className="clue-map"
              title="map"
              // frameborder="0" 
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJw7zEPvR1nkcRsRdv1Zmqm7M&key=AIzaSyDx8TjLXQy9CIDjVVVU2EH2LXibwQRNKxs" 
              // allowfullscreen 
            />
          {/* </div>
          <div className="question-section"> */}
            <div className="clue-background-div question-section">Are you arrived?</div>
            </div>
          </div>
          <div className="buttons-section">
            <Link to="/munich/michael/clueintro">
              <div className="gameNext-button">
                  Yes
              </div>
            </Link>
            <Link to="/munich/cupolas/clueAnswer">
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
                  ReactGA.pageview('/munich7A');
              }}
              >This website uses Google Analytics cookies to enhance the user experience.
          </CookieConsent>   
        </div>  
      );
    }
}

export default Munich7A;
