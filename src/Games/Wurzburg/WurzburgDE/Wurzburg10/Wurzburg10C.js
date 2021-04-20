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
    ReactGA.pageview('/DE/wurzburg10C');
}

class Wurzburg10C extends Component {
    constructor (props) {
        super(props);   
        this.state = {
            firstAnswer: "Summer",
            secondAnswer: "Summer",
            answers: "wrong",
            firstAnswerCSS: "select-input",
            secondAnswerCSS: "select-input",
            yearCSS: "number-input"
        };
    }

    updateFirstAnswer = event => {
        let firstAnswer = event.target.value;
        this.setState({
            firstAnswer: firstAnswer,
            firstAnswerCSS: "select-input"
        });
    }

    updateSecondAnswer = event => {
        let secondAnswer = event.target.value;
        this.setState({
            secondAnswer: secondAnswer,
            secondAnswerCSS: "select-input"
        });
    }

    showErrors = event => {
        let firstInputCheck;
        let secondInputCheck;
        if (this.state.firstAnswer === "Spring") {
            firstInputCheck = "right-select-input";
        } else {
            firstInputCheck = "wrong-select-input";
        }

        if (this.state.secondAnswer === "Spring") {
            secondInputCheck = "right-select-input";
        } else {
            secondInputCheck = "wrong-select-input";
        }

        this.setState({
            firstAnswerCSS: firstInputCheck,
            secondAnswerCSS: secondInputCheck
        });
    }

    checkAnswer = event => {
        if (this.state.firstAnswer === "Spring" && this.state.secondAnswer === "Spring") {
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
                <Redirect to="/DE/wuerzburg/worldwar/intro/clueAnswer" />
            ) 
        } else {
            return ( 
                <div>
                    {this.props.gamemenu !== true && <div>
                    <Timeline timelineProgress="9" timelineReference="20. Jh. n.Chr."/>
                    <div className="clue-background">
                        <div className="clue-background-title">Weltkriege</div>
                        <div className="clue-background-div">Was ist das Schlüsselelement dieses Denkmals, das es den Nationalsozialisten ermöglichte, es für die "NS-Propaganda" zu missbrauchen?</div>
                        <div className="number-form">
                            <select type="text" onChange={this.updateFirstAnswer} className={this.state.firstAnswerCSS}>
                                <option value="Summer"> 💣 Waffen </option>
                                <option value="Spring"> 🐘 große Krieger</option>
                                {/* <option value="Autumn"> 📃 lack of real names </option> */}
                                <option value="Winter"> ✝️ Kreuzen </option>
                            </select>
                        </div>
                        <div className="clue-background-div"></div>
                        <div className="clue-background-div">Und was wurde diesem Denkmal nach dem Zweiten Weltkrieg hinzugefügt?</div>
                        <div className="number-form">
                            <select type="text" onChange={this.updateSecondAnswer} className={this.state.secondAnswerCSS}>
                                <option value="Summer"> 💣 Waffen</option>
                                <option value="Winter"> 🐘 Krieger</option>
                                {/* <option value="Autumn"> 📃 names were removed</option> */}
                                <option value="Spring"> ✝️ Kreuzen</option>
                            </select>
                        </div>
                    </div>
                    <div className="buttons-section">
                        <div
                            onClick={this.checkAnswer}
                            className="gameNext-button"
                        >
                            Antworten kontrollieren
                        </div>
                        <Link to="/DE/wuerzburg/worldwar/intro">
                            <div className="gameNext-button-below">
                                Zurück
                            </div>
                        </Link>
                        <Link to="/DE/wuerzburg/worldwar/help">
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
                            ReactGA.pageview('/DE/wurzburg10C');
                        }}
                        >Diese Website verwendet Google Analytics-Cookies, um die Nutzererfahrung zu verbessern.
                    </CookieConsent>
                </div>  
            );
        }
    }
}

export default Wurzburg10C;