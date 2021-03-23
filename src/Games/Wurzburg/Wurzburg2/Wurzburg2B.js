import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../Components/GameMenu';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/wurzburg2B');
}

class Wurzburg2B extends Component {
    
    render() {
        var date = new Date();
        var day = date.getDay();
        var hour = date.getHours();
        let doors;
        if(day === 0) {
            if(hour<18 && hour>12) {
                doors = "open"
            } else {
                doors = "close";
            }
        } else {
            if(hour<17 && hour>9) {
                doors = "open";
            } else {
                doors = "closed";
            }
        }
        return ( 
            <div>
                {this.props.gamemenu !== true && 
                <div> 
                <Timeline timelineProgress="2" timelineReference="8th A.D."/>
                <div className="clue-background">
                    <div className="clue-background-title">Kilian’s Cathedral</div>
                    <div className="clue-background-divs">
                    <div className="clue-background-div">The cathedral is normally {doors} at this time.</div>
                    
                {/* <div className="question-section"> */}
                    {doors === "open" &&
                        <div className="clue-background-div question-section">Do you confirm you can go inside?</div>
                    }
                    {doors === "closed" &&
                        <div className="clue-background-div question-section">Can you go inside anyway?</div>
                    }
                {/* </div> */}
                    </div>
                </div>
                <div className="buttons-section">
                    <Link to="/wuerzburg/kilianus/dom/inside">
                        <div className="gameNext-button">
                            Yes, I am in!
                        </div>
                    </Link>
                    {/* <Link to="/wuerzburg/kilianus/dom/virtuallyinside">
                        <div className="gameNext-button-below">
                            No, I can't
                        </div>
                    </Link> */}
                    <Link to="/wuerzburg/kilianus/dom/timings">
                        <div className="gameNext-button-below">
                            No, when is it open?
                        </div>
                    </Link>
                    <Link to="/wuerzburg/kilianus/dom">
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
                        ReactGA.pageview('/wurzburg2B');
                    }}
                    >This website uses Google Analytics cookies to enhance the user experience.
                </CookieConsent> 
            </div>  
        );
    }
}

export default Wurzburg2B;
