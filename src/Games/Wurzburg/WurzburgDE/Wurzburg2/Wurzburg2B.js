import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../../Components/ComponentsDE/GameMenu';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/DE/wurzburg2B');
}

class Wurzburg2B extends Component {
    
    render() {
        var date = new Date();
        var day = date.getDay();
        var hour = date.getHours();
        let doors;
        if(day === 0) {
            if(hour<18 && hour>12) {
                doors = "geöffnet"
            } else {
                doors = "geschlossen";
            }
        } else {
            if(hour<17 && hour>9) {
                doors = "geöffnet";
            } else {
                doors = "geschlossen";
            }
        }
        return ( 
            <div>
                {this.props.gamemenu !== true && 
                <div> 
                <Timeline timelineProgress="2.5" timelineReference="8. Jh. n.Chr."/>
                <div className="clue-background">
                    <div className="clue-background-title">Dom St. Kilian</div>
                    <div className="clue-background-divs">
                    <div className="clue-background-div">Die Kathedrale ist normalerweise zu dieser Zeit {doors}.</div>
                    
                {/* <div className="question-section"> */}
                    {doors === "geöffnet" &&
                        <div className="clue-background-div question-section">Bestätigen Sie, dass Sie hineingehen können?</div>
                    }
                    {doors === "geschlossen" &&
                        <div className="clue-background-div question-section">Kannst du trotzdem hineingehen?</div>
                    }
                {/* </div> */}
                    </div>
                </div>
                <div className="buttons-section">
                    <Link to="/DE/wuerzburg/kilianus/dom/inside">
                        <div className="gameNext-button">
                            Ja, ich bin drin!
                        </div>
                    </Link>
                    {/* <Link to="/wuerzburg/kilianus/dom/virtuallyinside">
                        <div className="gameNext-button-below">
                            No, I can't
                        </div>
                    </Link> */}
                    <Link to="/DE/wuerzburg/kilianus/dom/timings">
                        <div className="gameNext-button-below">
                            Nein
                        </div>
                    </Link>
                    <Link to="/DE/wuerzburg/kilianus/dom">
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
                        ReactGA.pageview('/DE/wurzburg2B');
                    }}
                    >Diese Website verwendet Google Analytics-Cookies, um die Nutzererfahrung zu verbessern.
                </CookieConsent> 
            </div>  
        );
    }
}

export default Wurzburg2B;
