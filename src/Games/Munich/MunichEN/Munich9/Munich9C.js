import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import Timeline from '../TimelineMunich';
import {Link} from 'react-router-dom';
import '../Munich.css';
import GameMenu from '../../../../Components/ComponentsEN/GameMenu';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/munich9C');
}

class Munich9C extends Component {
    constructor (props) {
        super(props);   
        this.state = {
            firstInputValue: "",
            firstInputCSS: "formInput",
            firstAnswer: "Winter",
            answers: "wrong",
            firstAnswerCSS: "select-input-munich7 select-input-munich"
        };
    }

    firstInput = event => {
        const firstInputAdded = event.target.value.toLowerCase().trim().replace(/\s/g, '');
        this.setState({
            firstInputCSS: "formInput",
            firstInputValue: firstInputAdded
        });
    }

    updateFirstAnswer = event => {
        let firstAnswer = event.target.value;
        this.setState({
            firstAnswer: firstAnswer,
            firstAnswerCSS: "select-input-munich7 select-input-munich"
        });
    }

    showErrors = event => {
        let firstInputCheck;
        let firstInputCSS;
        if (this.state.firstAnswer === "Spring") {
            firstInputCheck = "select-input-munich7 right-select-input-munich";
        } else {
            firstInputCheck = "select-input-munich7 wrong-select-input-munich";
        }
        if (this.state.firstInputValue === "patronaboiaria") {
            firstInputCSS = "right"
        } else {
            firstInputCSS = "wrong"
        }
        this.setState({
            firstAnswerCSS: firstInputCheck,
            firstInputCSS: firstInputCSS,
        });
    }

    checkAnswer = event => {
        if (this.state.firstAnswer === "Spring" && this.state.firstInputValue === "patronaboiaria") {
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
                <Redirect to="/munich/diana/clueAnswer" />
            ) 
        } else {
            return ( 
                <div>
                    {this.props.gamemenu !== true && <div>
                        <Timeline timelineProgress="7" timelineReference="17th A.D."/>
                        <div className="clue-background">
                        <div className="clue-background-title">Maximilian I</div>
                        <div className="clue-background-div">In addition to the two lions a statue of what else is guarding the facade?</div>
                        <div className="munich-parent-forms">
                            <div className="munich-form">
                                <select type="text" onChange={this.updateFirstAnswer} className={this.state.firstAnswerCSS}>
                                    <option value="Winter"> 🦅 Eagle</option>
                                    <option value="Winter"> 🐉 Dragon </option>
                                    <option value="Winter"> ⚔️ Soldier</option>
                                    <option value="Spring"> ✝️ Holy Mary</option>
                                </select>
                            </div>
                            <div className="clue-background-div">And what is it written below as a description?</div>
                            <div>
                                <input
                                    type="text" 
                                    name="firstInput"
                                    onChange={this.firstInput}
                                    className={this.state.firstInputCSS}
                                    spellcheck="false"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="buttons-section">
                        <div
                            onClick={this.checkAnswer}
                            className="gameNext-button"
                        >
                            Check answers
                        </div>
                        <Link to="/munich/max/clueintro">
                            <div className="gameNext-button-below">
                                Back
                            </div>
                        </Link>
                        <Link to="/munich/max/cluehelp">
                            <div className="gameFeedback-button">Help</div>
                        </Link>
                    </div>
                    </div>}<GameMenu {...this.props}/>
                    <CookieConsent 
                        enableDeclineButton 
                        buttonStyle={{ background: "#00695c", color: "white", fontWeight: "bold" }}
                        onAccept={() => {
                            ReactGA.initialize('UA-192893120-1');
                            ReactGA.pageview('/munich9C');
                        }}
                        >This website uses Google Analytics cookies to enhance the user experience.
                    </CookieConsent>
                </div>  
            );
        }
    }
}

export default Munich9C;