import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../../Components/ComponentsDE/GameMenu';
import tree from '../../WurzburgImages/tree.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/DE/wurzburg3E');
}

class Wurzburg3E extends Component {

  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && 
          <div> 
          <Timeline timelineProgress="4" timelineReference="12.-14. Jh. n.Chr."/>
          <div className="clue-background">
            <div className="clue-background-title">Gut gemacht!</div>
            <div>
              <img src={tree} className="tree-image" alt="tree" />
            </div>
            <div className="clue-background-divs">
            <div className="clue-background-div">Trotz der Anwesenheit des Rathauses war die Stadt immer noch vollständig unter der Kontrolle der Fürstbischöfe.</div>
            <div className="clue-background-div">Die Bürger empörten sich mehrmals und erlitten 1400 eine schwere Niederlage. Die Kontraste zwischen den Bischöfen und den Bürgern waren jedoch noch nicht vorbei...</div>
            </div>
          </div>
          <div className="buttons-section">
            <Link to="/DE/wuerzburg/peasants">
              <div className="gameNext-button">
                Nächster Hinweis
              </div>
            </Link>
            <Link to="/DE/wuerzburg/citycouncil/sundial/clue">
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
                  ReactGA.pageview('/DE/wurzburg3E');
              }}
              >Diese Website verwendet Google Analytics-Cookies, um die Nutzererfahrung zu verbessern.
          </CookieConsent>
        </div>  
      );
  }
}

export default Wurzburg3E;