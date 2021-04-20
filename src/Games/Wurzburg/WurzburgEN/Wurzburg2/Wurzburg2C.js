import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import lorenz from '../../WurzburgImages/lorenz.png';
import {Link} from 'react-router-dom';
import Timeline from '../WurzburgComponents/Timeline';
import '../Wurzburg.css';
import GameMenu from '../../../../Components/ComponentsEN/GameMenu';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/wurzburg2C');
}

class Wurzburg2C extends Component {

        render() {
            console.log(this.props.inside);
    
        return ( 
            <div>
            {this.props.gamemenu !== true && 
            <div> 
            <Timeline timelineProgress="2" timelineReference="8th A.D."/>
            <div className="clue-background">
                <div className="clue-background-title">Kilian’s Cathedral</div>
                <div className="clue-background-div">The cathedral, having survived through the centuries, shows many different artistic styles. An interesting example is the monument for the prince-bishop Lorenz von Bibra which shows the transition from Gothic to Renaissance:</div>
                <img src={lorenz} className="lorenz-image" alt="lorenz" />
            </div>
            <div className="question-section">
                <div className="clue-background-div">Could you find it?</div>
                {/* <div>{this.props.inside}</div> */}
            </div>
            <div className="buttons-section">
                <Link to="/wuerzburg/kilianus/dom/inside/clue">
                    <div className="gameNext-button">
                        Yes
                    </div>
                </Link>
                <Link to="/wuerzburg/kilianus/dom/openings">
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
                  ReactGA.pageview('/wurzburg2C');
              }}
              >This website uses Google Analytics cookies to enhance the user experience.
            </CookieConsent>
            </div>  
        );
    }
}

export default Wurzburg2C;
