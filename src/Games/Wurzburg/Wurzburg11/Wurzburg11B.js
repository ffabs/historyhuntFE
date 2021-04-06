import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import unesco from '../WurzburgImages/unesco.jpg';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../Components/GameMenu';
import builder from '../WurzburgImages/builder.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/wurzburg11B');
}

class Wurzburg11B extends Component {

  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && <div>
          <Timeline timelineProgress="10" timelineReference="20-21th A.D." animate="yes"/>
          <div className="clue-background">
            <div className="clue-background-title">Current times</div>
            <div className="clue-background-divs">
            <div className="clue-background-div">
              After the Second World War, the city recovered quickly from its destructions. Most of the houses and historical buildings were rebuilt.
            </div>
            <img src={builder} className="gameIntro-image" alt="builder" />
            <div className="clue-background-div">
              Since 1981 the Residence and its garden have even been protected by UNESCO. They are included in the list of "cultural and natural heritage of the world" because considered as a great example of European Baroque.
              {/* In 2010, the € 100 gold coin UNESCO World Heritage - Würzburg Residence and Court Garden appeared */}
            </div>
            </div>
            <img src={unesco} className="gameIntro-image" alt="unesco" />
          </div>
          <div className="question-section">
            <div className="clue-background-div">Are you ready for the last clue?</div>
          </div>
          <div className="buttons-section">
            <Link to="/wuerzburg/currenttimes/intro/clue">
                <div className="gameNext-button">
                    Yes
                </div>
            </Link>
            <Link to="/wuerzburg/worldwar/intro/clueAnswer">
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
                  ReactGA.pageview('/wurzburg11B');
              }}
              >This website uses Google Analytics cookies to enhance the user experience.
          </CookieConsent>
        </div>  
      );
  }
}

export default Wurzburg11B;