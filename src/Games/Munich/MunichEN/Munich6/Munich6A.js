import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../TimelineMunich';
import {Link} from 'react-router-dom';
import '../Munich.css';
import GameMenu from '../../../../Components/ComponentsEN/GameMenu';
// import annouce from '../../MunichImages/annouce.png';
// import destination1 from '../../MunichImages/destination1.png';
import munich6location from '../../MunichImages/munichlocation6.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/munich6A');
}

class Munich6A extends Component {
    
  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && 
          <div> 
          <Timeline timelineProgress="5" timelineReference="15-16th A.D." animate="yes"/>
          <div className="clue-background">
            <div className="clue-background-title">Becoming a city of art</div>
            <div className="clue-background-divs">
              <div className="clue-background-div">After Ludwig IV, Munich was not the center of the empire anymore but impressive constructions were still built.</div>
              {/* <img src={annouce} className="memorial-image" alt="annouce" /> */}
              <div className="clue-background-div">Let's go to Munich's Frauenkirche!</div>
              {/* <img src={destination1} className="destination1" alt="destination1" /> */}
              <img src={munich6location} className="destination1" alt="destination1" />
              <iframe 
                className="clue-map"
                title="map"
                // frameborder="0" 
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJl3iTk_R1nkcRWv8Z_6jCLAA&key=AIzaSyDx8TjLXQy9CIDjVVVU2EH2LXibwQRNKxs" 
                // allowfullscreen 
              />
          {/* </div>
          <div className="question-section"> */}
            <div className="clue-background-div question-section">Are you there?</div>
            </div>
          </div>
          <div className="buttons-section">
            <Link to="/munich/firstimage/clueintro">
              <div className="gameNext-button">
                  Yes!
              </div>
            </Link>
            <Link to="/munich/bavarian/clueAnswer">
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
                  ReactGA.pageview('/munich6A');
              }}
              >This website uses Google Analytics cookies to enhance the user experience.
          </CookieConsent>   
        </div>  
      );
    }
}

export default Munich6A;
