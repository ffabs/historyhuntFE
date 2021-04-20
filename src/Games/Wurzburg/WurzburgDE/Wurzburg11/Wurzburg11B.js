import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import unesco from '../../WurzburgImages/unesco.jpg';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../../Components/ComponentsDE/GameMenu';
import builder from '../../WurzburgImages/builder.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/DE/wurzburg11B');
}

class Wurzburg11B extends Component {

  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && <div>
          <Timeline timelineProgress="10" timelineReference="20.-21. Jh. n.Chr." animate="yes"/>
          <div className="clue-background">
            <div className="clue-background-title">Aktuelle Zeiten</div>
            <div className="clue-background-divs">
            <div className="clue-background-div">
            Nach dem Zweiten Weltkrieg erholte sich die Stadt schnell von ihren Zerstörungen. Die meisten Häuser und historischen Gebäude wurden wieder aufgebaut.
            </div>
            <img src={builder} className="gameIntro-image" alt="builder" />
            <div className="clue-background-div">
            Since 1981 the Residence and its garden have even been protected by UNESCO because considered as a great example of European Baroque.
              {/* In 2010, the € 100 gold coin UNESCO World Heritage - Würzburg Residence and Court Garden appeared */}
            </div>
            </div>
            <img src={unesco} className="gameIntro-image" alt="unesco" />
          </div>
          <div className="question-section">
            <div className="clue-background-div">Bist du bereit für den letzten Hinweis?</div>
          </div>
          <div className="buttons-section">
            <Link to="/DE/wuerzburg/currenttimes/intro/clue">
                <div className="gameNext-button">
                    Ja
                </div>
            </Link>
            <Link to="/DE/wuerzburg/worldwar/intro/clueAnswer">
                <div className="gameNext-button-below">
                  Zurück
                </div>
            </Link>
          </div>
          </div>}<GameMenu {...this.props}/>
          <CookieConsent 
              buttonText="Ich akzeptiere"
              declineButtonText="Ich lehne ab"
              enableDeclineButton 
              buttonStyle={{ background: "#00695c", color: "white", fontWeight: "bold" }}
              onAccept={() => {
                  ReactGA.initialize('UA-192893120-1');
                  ReactGA.pageview('/DE/wurzburg11B');
              }}
              >Diese Website verwendet Google Analytics-Cookies, um die Nutzererfahrung zu verbessern.
          </CookieConsent>
        </div>  
      );
  }
}

export default Wurzburg11B;