import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../Components/GameMenu';
import destination6 from '../WurzburgImages/destination6.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/wurzburg7A');
}

class Wurzburg7A extends Component {

  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && <div>
          <Timeline timelineProgress="6" timelineReference="17-18th A.D." animate="yes"/>
          <div className="clue-background">
            <div className="clue-background-title">The Residence</div>
            <div className="clue-background-div">Come to the new home of the bishops: the Residence.</div>
            <div><img src={destination6} className="destination1" alt="destination6" /></div>
            <iframe 
              className="clue-map"
              title="map"
              // frameborder="0" 
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJIXAT0C2QokcRP7mt9f4E7NA&key=AIzaSyDx8TjLXQy9CIDjVVVU2EH2LXibwQRNKxs" 
              // allowfullscreen 
            />
          </div>
          <div className="question-section">
            <div className="clue-background-div">...arrived?</div>
          </div>
          <div className="buttons-section">
            <Link to="/wuerzburg/residenz/intro">
                <div className="gameNext-button">
                    Yes
                </div>
            </Link>
            <Link to="/wuerzburg/julius/statue/clueAnswer">
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
                  ReactGA.pageview('/wurzburg7A');
              }}
              >This website uses Google Analytics cookies to enhance the user experience.
          </CookieConsent> 
        </div>  
      );
  }
}

export default Wurzburg7A;