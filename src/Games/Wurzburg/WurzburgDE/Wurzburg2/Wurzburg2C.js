import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import lorenz from '../../WurzburgImages/lorenz.png';
import {Link} from 'react-router-dom';
import Timeline from '../WurzburgComponents/Timeline';
import '../Wurzburg.css';
import GameMenu from '../../../../Components/ComponentsDE/GameMenu';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/DE/wurzburg2C');
}

class Wurzburg2C extends Component {

        render() {
            console.log(this.props.inside);
    
        return ( 
            <div>
            {this.props.gamemenu !== true && 
            <div> 
            <Timeline timelineProgress="2" timelineReference="8. Jh. n.Chr."/>
            <div className="clue-background">
                <div className="clue-background-title">Dom St. Kilian</div>
                <div className="clue-background-div">Die Kathedrale, die im Laufe der Jahrhunderte überlebt hat, zeigt viele verschiedene künstlerische Stile. Ein interessantes Beispiel ist das Denkmal für den Fürstbischof Lorenz von Bibra, das den Übergang von der Gotik zur Renaissance zeigt:</div>
                <img src={lorenz} className="lorenz-image" alt="lorenz" />
            </div>
            <div className="question-section">
                <div className="clue-background-div">Konnten Sie es finden?</div>
                {/* <div>{this.props.inside}</div> */}
            </div>
            <div className="buttons-section">
                <Link to="/DE/wuerzburg/kilianus/dom/inside/clue">
                    <div className="gameNext-button">
                        Ja
                    </div>
                </Link>
                <Link to="/DE/wuerzburg/kilianus/dom/openings">
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
                  ReactGA.pageview('/DE/wurzburg2C');
              }}
              >Diese Website verwendet Google Analytics-Cookies, um die Nutzererfahrung zu verbessern.
            </CookieConsent>
            </div>  
        );
    }
}

export default Wurzburg2C;
