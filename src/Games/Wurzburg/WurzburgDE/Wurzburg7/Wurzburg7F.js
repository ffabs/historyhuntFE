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
    ReactGA.pageview('/DE/wurzburg7F');
}

class Wurzburg7F extends Component {
    constructor (props) {
        super(props);   
        this.state = {
            year: "1500",
            season: "Winter",
            answers: "wrong",
            seasonCSS: "select-input"
        };
    }

    updateSeason = event => {
        let season = event.target.value;
        this.setState({
            season: season,
            seasonCSS: "select-input"
        });
    }

    checkAnswer = event => {
        if (this.state.season === "Spring") {
            this.setState({
                answers: "right"
            });
        } else {
            this.setState({
                answers: "wrong",
                seasonCSS: "wrong-select-input",
            });
        }
    }

    render() {
        if(this.state.answers === "right"){
            return (
                <Redirect to="/DE/wuerzburg/residenz/garden/clueAnswer" />
            ) 
        } else {
            return ( 
                <div>
                    {this.props.gamemenu !== true && <div>
                    <Timeline timelineProgress="6" timelineReference="17.-18. Jh. n.Chr."/>
                    <div className="clue-background">
                        <div className="clue-background-title">Der Hofschlosser</div>
                        <div className="clue-background-divs">
                        <div className="clue-background-div">Die riesigen Eisentore des Gartens sind einige der wichtigsten Werke von Oegg und deshalb befindet sich hier ein Denkmal für ihn.</div>
                        <div className="question-section"> 
                            <div className="clue-background-div">Worum geht es in dem Papier in seiner Hand?</div>
                        </div>
                        </div>
                        <div className="number-form"> 
                            <select type="text" onChange={this.updateSeason} className={this.state.seasonCSS}>
                                <option value="Summer"> ✉️ ein Brief des Bischofs </option>
                                <option value="Summer"> 🔨 seine Werkzeuge</option>
                                <option value="Summer"> 📜 sein Titel als Schlosser </option>
                                <option value="Spring"> 📐 die Entwürfe der Tore </option>
                                {/* <option value="Summer"> ⚙️ die Menge des verwendeten Eisens </option> */}
                                <option value="Summer"> 💰 die Kosten der Arbeit </option>
                                <option value="Summer"> 📅 als er am Hof war </option>
                            </select>
                        </div>
                    </div>
                    <div className="buttons-section">
                        <div
                            onClick={this.checkAnswer}
                            className="gameNext-button"
                        >
                            Prüfe die Antwort
                        </div>
                        <Link to="/DE/wuerzburg/residenz/gate/intro">
                            <div className="gameNext-button-below">
                                Zurück
                            </div>
                        </Link>
                        <Link to="/DE/wuerzburg/residenz/garden/help">
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
                            ReactGA.pageview('/DE/wurzburg7F');
                        }}
                        >Diese Website verwendet Google Analytics-Cookies, um die Nutzererfahrung zu verbessern.
                    </CookieConsent>
                </div>  
            );
        }
    }
}

export default Wurzburg7F;