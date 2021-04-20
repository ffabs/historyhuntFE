import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../../Components/ComponentsDE/GameMenu';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/DE/wurzburg2D');
}

class Wurzburg2D extends Component {

    constructor (props) {
        super(props);   
        this.state = {
            inputValue: "details",
            inputValueCSS: "select-input",
            answers: "wrong"
        };
    }

    updateAnswer = event => {
        let inputValue = event.target.value;
        this.setState({
            inputValue: inputValue,
            inputValueCSS: "select-input"
        });
    }

    checkAnswer = event => {
        if (this.state.inputValue === "emblems") {
            this.setState({
                answers: "right"
            });
        } else {
            this.setState({
                answers: "wrong",
                inputValueCSS: "wrong-select-input",
            });
        }
    }

    render() {
        // console.log(this.props.inside);

        if(this.state.answers === "right"){
            return (
                <Redirect to="/DE/wuerzburg/domAnswer" />
            ) 
        } else {
            return ( 
                <div>
                    {this.props.gamemenu !== true && 
                    <div> 
                    <Timeline timelineProgress="2" timelineReference="8. Jh. n.Chr."/>
                    <div className="clue-background">
                        <div className="clue-background-title">Dom St. Kilian</div>
                        <div className="clue-background-div">Wenn man Lorenz 'Grabstein mit dem älteren zu seiner Rechten und dem neuen zu seiner Linken vergleicht, was bleibt von der gotischen Tradition erhalten?</div>
                    </div>
                    <div className="number-form"> 
                            <select onChange={this.updateAnswer} className={this.state.inputValueCSS}>        
                                <option value="angels"> 👼 Engel im Baldachin </option>
                                <option value="columns"> 🏛️ Säulen </option>
                                <option value="emblems"> ⚜️ Embleme </option>
                                <option value="nature"> 📐 scharfe Formen </option>
                            </select>
                        </div>
                    <div className="buttons-section">
                        <div 
                            type="button" 
                            onClick={this.checkAnswer}
                            className="gameNext-button"
                        >
                            Antworten kontrollieren
                        </div>
                        <Link to="/DE/wuerzburg/kilianus/dom/inside">
                            <div className="gameNext-button-below">
                                Zurück
                            </div>
                        </Link>

                        <Link to="/DE/wuerzburg/kilianus/dom/help">
                            <div className="gameFeedback-button">Hilfe</div>
                        </Link>
                    </div>
                    </div>
                    }
                    <GameMenu {...this.props}/> 
                    <CookieConsent 
                        buttonText="Ich akzeptiere"
                        declineButtonText="Ich lehne ab"
                        enableDeclineButton 
                        buttonStyle={{ background: "#00695c", color: "white", fontWeight: "bold" }}
                        onAccept={() => {
                            ReactGA.initialize('UA-192893120-1');
                            ReactGA.pageview('/DE/wurzburg2D');
                        }}
                        >Diese Website verwendet Google Analytics-Cookies, um die Nutzererfahrung zu verbessern.
                    </CookieConsent> 
                </div>  
            );
        }
    }
}

export default Wurzburg2D;
