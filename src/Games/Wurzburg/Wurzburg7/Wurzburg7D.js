import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../Components/GameMenu';
import kirche from '../WurzburgImages/kirche.jpeg';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/wurzburg7D');
}

class Wurzburg7D extends Component {

  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && <div>
          <Timeline timelineProgress="6" timelineReference="17-18th A.D."/>
          <div className="clue-background">
            <div className="clue-background-title">Well Done!</div>
            <div>
              <img src={kirche} className="memorial-image" alt="kirche" />
            </div>
            <div className="clue-background-divs">
              <div className="clue-background-div">The Residence was built when Würzburg was still a fortified town. Therefore, the garden too had to be planned within the fortifications.</div>
              <div className="clue-background-div">Let's go through it to reach the next clue!</div>
            </div>
          </div>
          {/* <iframe 
              className="clue-map"
              title="map"
              // frameborder="0" 
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed/v1/place?q=place_id:GhIJZmZmZmblSEARXI_C9SjgI0A&key=AIzaSyDx8TjLXQy9CIDjVVVU2EH2LXibwQRNKxs" 
              // allowfullscreen 
          /> */}
          <div className="question-section">
            <div className="clue-background-div">...can you get in the garden?</div>
          </div>
          <div className="buttons-section">
            <Link to="/wuerzburg/residenz/gate/intro">
                <div className="gameNext-button">
                    Yes
                </div>
            </Link>
            <Link to="/wuerzburg/residenz/gate/intro">
                <div className="gameNext-button-below">
                    No
                </div>
            </Link>
            <Link to="/wuerzburg/residenz/garden/timings">
                <div className="gameNext-button-below">
                    When are they open?
                </div>
            </Link>
            <Link to="/wuerzburg/residenz/intro/clue">
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
                  ReactGA.pageview('/wurzburg7D');
              }}
              >This website uses Google Analytics cookies to enhance the user experience.
          </CookieConsent>
        </div>  
      );
  }
}

export default Wurzburg7D;