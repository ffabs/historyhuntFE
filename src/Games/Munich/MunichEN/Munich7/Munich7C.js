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
    ReactGA.pageview('/munich7C');
}

class Munich7C extends Component {
    constructor (props) {
        super(props);   
        this.state = {
            firstAnswer: "Winter",
            textInputValue: "",
            answers: "wrong",
            firstAnswerCSS: "select-input-munich7 select-input-munich",
            textInputCSS: "formInput"
        };
    }

    updateFirstAnswer = event => {
        let firstAnswer = event.target.value;
        this.setState({
            firstAnswer: firstAnswer,
            firstAnswerCSS: "select-input-munich7 select-input-munich"
        });
    }

    textInput = event => {
        const textInputValue = event.target.value.toLowerCase().trim().replace(/\s/g, '');
        this.setState({
            textInputCSS: "formInput",
            textInputValue: textInputValue
        });
    }

    showErrors = event => {
        let firstInputCheck;
        let textInputCheck;
        if (this.state.firstAnswer === "Spring") {
            firstInputCheck = "select-input-munich7 right-select-input-munich";
        } else {
            firstInputCheck = "select-input-munich7 wrong-select-input-munich";
        }

        if (this.state.textInputValue === "gvilielmvsv" ||
            this.state.textInputValue === "guilielmusv" ||
            this.state.textInputValue === "gvilielmvs" ||
            this.state.textInputValue === "guilielmus" ||
            this.state.textInputValue === "william" ||
            this.state.textInputValue === "williamv"
        ) {
            textInputCheck = "right";
        } else {
            textInputCheck = "wrong";
        }

        this.setState({
            firstAnswerCSS: firstInputCheck,
            textInputCSS: textInputCheck,
        });
    }

    checkAnswer = event => {
        if (this.state.firstAnswer === "Spring" && (this.state.textInputValue === "gvilielmvsv" || 
            this.state.textInputValue === "guilielmusv" ||
            this.state.textInputValue === "gvilielmvs" ||
            this.state.textInputValue === "guilielmus" ||
            this.state.textInputValue === "william" ||
            this.state.textInputValue === "williamv")) 
        {
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
                <Redirect to="/munich/william/clueAnswer" />
            ) 
        } else {
            return ( 
                <div>
                    {this.props.gamemenu !== true && <div>
                        <Timeline timelineProgress="6" timelineReference="16th A.D."/>
                        <div className="clue-background">
                        <div className="clue-background-title">Jesuits and the counter reformation</div>
                        <div className="munich-parent-forms">
                        <div className="clue-background-div">What are the statues on the facade about?</div>
                        
                            <div className="munich-form">
                                <select type="text" onChange={this.updateFirstAnswer} className={this.state.firstAnswerCSS}>
                                    <option value="Winter"> members of Munich elite</option>
                                    <option value="Winter"> bishops of Munich</option>
                                    <option value="Spring"> Wittelsbach's family</option>
                                </select>
                            </div>
                            <div className="clue-background-div"></div>
                            <div className="clue-background-div">Who is responsible for the construction of this Church?</div>
                            <div>
                                <input
                                    type="text" 
                                    name="firstInput"
                                    onChange={this.textInput}
                                    className={this.state.textInputCSS}
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
                        <Link to="/munich/michael/clueintro">
                            <div className="gameNext-button-below">
                                Back
                            </div>
                        </Link>
                        <Link to="/munich/michael/cluehelp">
                            <div className="gameFeedback-button">Help</div>
                        </Link>
                    </div>
                    </div>}<GameMenu {...this.props}/>
                    <CookieConsent 
                        enableDeclineButton 
                        buttonStyle={{ background: "#00695c", color: "white", fontWeight: "bold" }}
                        onAccept={() => {
                            ReactGA.initialize('UA-192893120-1');
                            ReactGA.pageview('/munich7C');
                        }}
                        >This website uses Google Analytics cookies to enhance the user experience.
                    </CookieConsent>
                </div>  
            );
        }
    }
}

export default Munich7C;