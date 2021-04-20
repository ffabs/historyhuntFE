import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../../Components/ComponentsDE/GameMenu';
import treedesign from '../../WurzburgImages/treedesign.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/DE/wurzburg3C');
}

class Wurzburg3C extends Component {

    render() {

        return ( 
            <div>
            {this.props.gamemenu !== true && 
            <div> 
            <Timeline timelineProgress="4" timelineReference="12.-14. Jh. n.Chr."/>
            <div className="clue-background">
                <div className="clue-background-title">Das Rathaus</div>
                {/* <div className="clue-background-div">
                    <Weather /> 
                </div> */}
                {/* (after which the convicts were taken to the small prison in the building) and the citizens' meal (commemorating the repeal of the imperial ban) was held  */} 
                <div className="clue-background-divs">
                <div className="clue-background-div">
                Das Gemälde ist nicht nur eine Dekoration, sondern auch eine Erinnerung an eine echte Linde, die sich früher vor dem Rathaus befand. Im Mittelalter war der Baum sehr an den Aktivitäten der Bürger beteiligt: Sowohl das Gericht als auch das Essen der Bürger wurden unter ihm abgehalten.
                </div>
                <img src={treedesign} className="memorial-image" alt="treedesign" />
                <div className="clue-background-div">
                Ende des 16. Jahrhunderts, nachdem der echte Baum umgefallen war, wurde das Bild gemalt.
                </div>
                </div>
            </div>                
            <div className="question-section">
                <div className="clue-background-div">Bereit für den Hinweis?</div>
            </div>
            <div className="buttons-section">
                <Link to="/DE/wuerzburg/citycouncil/sundial/clue">
                    <div className="gameNext-button">
                        Ja
                    </div>
                </Link>
                <Link to="/DE/wuerzburg/citycouncil">
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
                    ReactGA.pageview('/DE/wurzburg3C');
                }}
                >Diese Website verwendet Google Analytics-Cookies, um die Nutzererfahrung zu verbessern.
            </CookieConsent> 
            </div>  
        );
    }
}

export default Wurzburg3C;
