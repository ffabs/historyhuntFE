import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../../Components/ComponentsEN/GameMenu';
import treedesign from '../../WurzburgImages/treedesign.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/wurzburg3C');
}

class Wurzburg3C extends Component {

    render() {

        return ( 
            <div>
            {this.props.gamemenu !== true && 
            <div> 
            <Timeline timelineProgress="4" timelineReference="12-14th A.D."/>
            <div className="clue-background">
                <div className="clue-background-title">The Town Hall</div>
                {/* <div className="clue-background-div">
                    <Weather /> 
                </div> */}
                {/* (after which the convicts were taken to the small prison in the building) and the citizens' meal (commemorating the repeal of the imperial ban) was held  */} 
                <div className="clue-background-divs">
                <div className="clue-background-div">
                    The painting is not just a decoration but also a commemoration of a real linden tree that used to be in front of the town hall.
                    In the Middle Ages, the tree was very involved in the citizens' activities: both the court and the citizens' meal were held under it. 
                </div>
                <img src={treedesign} className="memorial-image" alt="treedesign" />
                <div className="clue-background-div">
                    So, at the end of the 16th century, after the real tree had fallen over, the painting was done.
                </div>
                </div>
            </div>                
            <div className="question-section">
                <div className="clue-background-div">Ready for the clue?</div>
            </div>
            <div className="buttons-section">
                <Link to="/wuerzburg/citycouncil/sundial/clue">
                    <div className="gameNext-button">
                        Yes
                    </div>
                </Link>
                <Link to="/wuerzburg/citycouncil">
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
                    ReactGA.pageview('/wurzburg3C');
                }}
                >This website uses Google Analytics cookies to enhance the user experience.
            </CookieConsent> 
            </div>  
        );
    }
}

export default Wurzburg3C;
