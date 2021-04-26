import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import Timeline from '../WurzburgComponents/Timeline';
import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import '../Wurzburg.css';
import {Link} from 'react-router-dom';
import GameMenu from '../../../../Components/ComponentsDE/GameMenu';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/DE/wurzburg7C');
}

class Wurzburg7C extends Component {
    constructor (props) {
        super(props);   
        this.state = {
            season: "Spring",
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
        if (this.state.season === "mirrors") {
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
                <Redirect to="/DE/wuerzburg/residenz/garden/clue" />
            ) 
        } else {
            return ( 
                <div>
                    {this.props.gamemenu !== true && <div>
                    <Timeline timelineProgress="6" timelineReference="17.-18. Jh. n.Chr."/>
                    <div className="clue-background">
                        <div className="clue-background-title">Die Residenz</div>
                        <div className="clue-background-div">Die Kapelle ist heute ein Paradebeispiel für den sakralen Barockstil in Deutschland, aber der Bau war keine leichte Aufgabe. Ein Hauptproblem des Architekten Neumanns war, dass die linke Seite der Kapelle fensterlos war. Wie hat er es gelöst?</div>
                        <div className="number-form">
                            <select type="text" onChange={this.updateSeason} className={this.state.seasonCSS}>
                                <option value="close"> 🔒 Fenster schließen</option>
                                <option value="open"> ⛏️ Neue Fenster bauen</option>
                                <option value="dark"> 🕶️ Den Raum dunkel halten</option>
                                <option value="paint"> 🎨 Mit heller Farbe</option>
                                <option value="mirrors"> ✨ Spiegel verwenden</option>
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
                        <Link to="/DE/wuerzburg/residenz/intro">
                            <div className="gameNext-button-below">
                                Zurück
                            </div>
                        </Link>
                        <Link to="/DE/wuerzburg/residenz/help">
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
                            ReactGA.pageview('/DE/wurzburg7C');
                        }}
                        >Diese Website verwendet Google Analytics-Cookies, um die Nutzererfahrung zu verbessern.
                    </CookieConsent>
                </div>  
            );
        }
    }
}

export default Wurzburg7C;