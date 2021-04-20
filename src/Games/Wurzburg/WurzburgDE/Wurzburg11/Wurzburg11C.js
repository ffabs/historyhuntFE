import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import Timeline from '../WurzburgComponents/Timeline';
import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../../Components/ComponentsDE/GameMenu';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/DE/wurzburg11C');
}

class Wurzburg11C extends Component {
    constructor (props) {
        super(props);   
        this.state = {
            year: "1000",
            answers: "wrong",
            yearCSS: "number-input"
        };
    }

    updateYear = event => {
        let year = Number(event.target.value);
        this.setState({
            year: year,
            yearCSS: "number-input"
        });
    }

    higherYear = event => {
        let year = Number(this.state.year) + 100;
        this.setState({
            year: year,
            yearCSS: "number-input"
        });
    }

    lowerYear = event => {
        let year = Number(this.state.year) - 100;
        this.setState({
            year: year,
            yearCSS: "number-input"
        });
    }

    checkAnswer = event => {
        if (this.state.year === 1300) {
            this.setState({
                answers: "right"
            });
        } else {
            this.setState({
                answers: "wrong",
                yearCSS: "wrong-number-input"
            });
        }
    }
    render() {
        if(this.state.answers === "right"){
            return (
                <Redirect to="/DE/wuerzburg/currenttimes/intro/clueAnswer" />
            ) 
        } else {
            return ( 
                <div>
                    {this.props.gamemenu !== true && <div>
                    <Timeline timelineProgress="10" timelineReference="20.-21. Jh. n.Chr."/>
                    <div className="clue-background">
                        <div className="clue-background-title">Aktuelle Zeiten</div>
                        <div className="clue-background-div">2004 wurde ein wichtiger Meilenstein in der Geschichte Würzburgs erreicht. Wie viele Jahre Geschichte wurden gefeiert?</div>
                        <div className="number-form">
                            <button 
                                className="number-input-less"
                                type="button" 
                                onClick={this.lowerYear}
                            >
                                -
                            </button>
                            <input
                                className={this.state.yearCSS}
                                type="number" 
                                name="amount"
                                value={this.state.year}
                                onChange={this.updateYear}
                            />
                            <button 
                                className="number-input-more"
                                type="button" 
                                onClick={this.higherYear}
                            >
                                +
                            </button>
                        </div>
                    </div>
                    <div className="buttons-section">
                        <div
                            onClick={this.checkAnswer}
                            className="gameNext-button"
                        >
                            Prüfe die Antwort
                        </div>
                        <Link to="/DE/wuerzburg/currenttimes/intro">
                            <div className="gameNext-button-below">
                                Zurück
                            </div>
                        </Link>
                        <Link to="/DE/wuerzburg/currenttimes/help">
                            <div className="gameFeedback-button">Hilfe</div>
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
                            ReactGA.pageview('/DE/wurzburg11C');
                        }}
                        >Diese Website verwendet Google Analytics-Cookies, um die Nutzererfahrung zu verbessern.
                    </CookieConsent>
                </div>  
            );
        }
    }
}

export default Wurzburg11C;