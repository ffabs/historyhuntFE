import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import uni from '../../WurzburgImages/uni.svg.png';
import statua from '../../WurzburgImages/statua.png';
import GameMenu from '../../../../Components/ComponentsDE/GameMenu';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/DE/wurzburg5B');
}

class Wurzburg5B extends Component {

  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && <div> 
          <Timeline timelineProgress="5" timelineReference="16. Jh. n.Chr."/>
          <div className="clue-background">
            <div className="clue-background-title">Julius Echter</div>
            <div className="clue-background-divs">
            <div className="clue-background-div">Julius Echter war ein starker Vertreter der Gegenreformation, der den Katholizismus in die Diözese Würzburg zurückbrachte und die Protestanten vertrieb.</div>
            </div>
            <img src={statua} className="uni" alt="statua"/>
            <div className="clue-background-divs">
            <div className="clue-background-div">Darüber hinaus ist er dafür bekannt, das staatliche Rechtssystem erneuert, die Diözese ohne Steuern aus der Verschuldung geführt und die Universität wieder aufgebaut zu haben, die bis heute seinen Namen trägt!</div>
            </div>
            <img src={uni} className="uni" alt="uni" />
            <div className="clue-background-divs">
            <div className="clue-background-div">Er ist jedoch nicht nur als wichtiger Verwaltungsreformer, sondern auch als großer Baumeister bekannt. Ein Beispiel ist das Gebäude auf der anderen Straßenseite, das ebenfalls seinen Namen trägt: das Juliusspital.</div>
            </div>
          </div>
          <div className="buttons-section">
            <Link to="/DE/wuerzburg/julius/statue/clue">
                <div className="gameNext-button">
                  Nächster
                </div>
            </Link>
            <Link to="/DE/wuerzburg/julius">
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
                  ReactGA.pageview('/DE/wurzburg5B');
              }}
              >Diese Website verwendet Google Analytics-Cookies, um die Nutzererfahrung zu verbessern.
          </CookieConsent>
        </div>  
      );
  }
}

export default Wurzburg5B;