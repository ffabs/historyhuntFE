import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import Timeline from '../WurzburgComponents/Timeline';
import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../../Components/ComponentsDE/GameMenu';
import destination9new from '../../WurzburgImages/destination9new.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/DE/wurzburg9C');
}

class Wurzburg9C extends Component {
    constructor (props) {
        super(props);   
        this.state = {
            year: "1880",
            season: "Spring",
            answers: "wrong",
            seasonCSS: "select-input",
            yearCSS: "number-input"
        };
    }

    updateSeason = event => {
        let season = event.target.value;
        this.setState({
            season: season,
            seasonCSS: "select-input"
        });
    }

    updateYear = event => {
        let year = Number(event.target.value);
        this.setState({
            year: year,
            yearCSS: "number-input"
        });
    }

    higherYear = event => {
        let year = Number(this.state.year) + 1;
        this.setState({
            year: year,
            yearCSS: "number-input"
        });
    }

    lowerYear = event => {
        let year = Number(this.state.year) - 1;
        this.setState({
            year: year,
            yearCSS: "number-input"
        });
    }

    showErrors = event => {
        let firstInputCheck;
        let secondInputCheck;
        if (this.state.season === "hand") {
            firstInputCheck = "right-select-input";
        } else {
            firstInputCheck = "wrong-select-input";
        }

        if (this.state.year === 1896) {
            secondInputCheck = "right-number-input";
        } else {
            secondInputCheck = "wrong-number-input";
        }

        this.setState({
            seasonCSS: firstInputCheck,
            yearCSS: secondInputCheck
        });
    }

    checkAnswer = event => {
        if (this.state.season === "hand" && this.state.year === 1896) {
            this.setState({
                answers: "right"
            });
        } else {
            this.setState({
                answers: "wrong"
            });
            this.showErrors();
        }
    }

    render() {
        if(this.state.answers === "right"){
            return (
                <Redirect to="/DE/wuerzburg/xrays/intro/clueAnswer" />
            ) 
        } else {
            return ( 
                <div>
                    {this.props.gamemenu !== true && <div>
                    <Timeline timelineProgress="8" timelineReference="19.-20. Jh. n.Chr."/>
                    <div className="clue-background">
                        <div className="clue-background-title">Röntgen</div>
                        <div><img src={destination9new} className="destination2" alt="destination9" /></div>
                        <div className="clue-background-div">Könntest du ihn finden? Was hat er getan, um die Röntgenstrahlen zu veranschaulichen?</div>
                        <div className="align-multipleforms">
                        <div className="wurzburg3Dform">
                            <div className="number-form"> 
                                {/* <div className="clue-background-div">In</div> */}
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
                            <div className="number-form"> 
                                <div className="clue-background-div">machte er ein Röntgenbild</div>
                                {/* <select type="text" onChange={this.updateSeason} className={this.state.season}>
                                    <option value="picture"> </option>
                                    <option value="horse"> a student's </option>
                                    <option value="skull"> his wife's </option>
                                    <option value="cat"> his own </option>
                                    <option value="dog"> a scientist's </option>
                                    <option value="horse"> a student's </option>
                                    <option value="skull"> his wife's </option>
                                    <option value="cat"> his own </option>
                                </select> */}
                            </div>
                            <div className="number-form">                          
                                <select type="text" onChange={this.updateSeason} className={this.state.seasonCSS}>
                                    <option value="skull"> 🍖 eines Knochens </option>
                                    <option value="cat"> 🐈 einer Katze </option>
                                    <option value="dog"> 🐕 eines Hundes </option>
                                    <option value="hand"> 🤚 einer Hand </option>
                                    <option value="skull"> 💀 eines Kopfes </option>                             
                                    <option value="horse"> 🐎 eines Pferdes </option>                                    
                                    {/* <option value="skull"> 🦵 leg </option>    */}
                                    {/* <option value="body"> 🧍 whole person </option> */}
                                </select>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="buttons-section">
                        <div
                            onClick={this.checkAnswer}
                            className="gameNext-button"
                        >
                            Antworten kontrollieren
                        </div>
                        <Link to="/DE/wuerzburg/xrays/intro">
                            <div className="gameNext-button-below">
                                Zurück
                            </div>
                        </Link>
                        <Link to="/DE/wuerzburg/xrays/help">
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
                            ReactGA.pageview('/DE/wurzburg9C');
                        }}
                        >Diese Website verwendet Google Analytics-Cookies, um die Nutzererfahrung zu verbessern.
                    </CookieConsent>
                </div>  
            );
        }
    }
}

export default Wurzburg9C;