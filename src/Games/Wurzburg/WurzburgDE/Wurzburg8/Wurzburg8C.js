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
    ReactGA.pageview('/DE/wurzburg8C');
}

class Wurzburg8C extends Component {
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
                <Redirect to="/DE/wuerzburg/ringpark/intro/clueAnswer" />
            ) 
        } else {
            return ( 
                <div>
                    {this.props.gamemenu !== true && <div>
                    <Timeline timelineProgress="7" timelineReference="19. Jh. n.Chr."/>
                    <div className="clue-background">
                        <div className="clue-background-title">Der Ringpark</div>
                        <div className="clue-background-div">Was war dieser Park, bevor er zum Ringpark wurde?</div>
                        <div className="number-form"> 
                            <select type="text" onChange={this.updateSeason} className={this.state.seasonCSS}>
                                <option value="Winter"> 🏘️ Unterkünfte </option>
                                <option value="Summer"> 🌊 Stadtaquädukt </option>
                                <option value="Spring"> 🏰 Stadtmauern </option>
                                <option value="Autumn"> 🛣️ Straße nach München </option>
                                <option value="Winter"> 🏫 Schule </option>
                                <option value="Summer"> 🌲 Wilde Wälder </option>
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
                        <Link to="/DE/wuerzburg/ringpark">
                            <div className="gameNext-button-below">
                                Zurück
                            </div>
                        </Link>
                        <Link to="/DE/wuerzburg/ringpark/help">
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
                            ReactGA.pageview('/DE/wurzburg8C');
                        }}
                        >Diese Website verwendet Google Analytics-Cookies, um die Nutzererfahrung zu verbessern.
                    </CookieConsent>
                </div>  
            );
        }
    }
}

export default Wurzburg8C;