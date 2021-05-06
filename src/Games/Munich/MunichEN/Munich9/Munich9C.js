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
            firstAnswer: "Winter",
            secondAnswer: "Summer",
            thirdAnswer: "Summer",
            answers: "wrong",
            firstAnswerCSS: "select-input-munich7 select-input",
            secondAnswerCSS: "select-input",
            thirdAnswerCSS: "select-input"
        };
    }

    updateFirstAnswer = event => {
        let firstAnswer = event.target.value;
        this.setState({
            firstAnswer: firstAnswer,
            firstAnswerCSS: "select-input-munich7 select-input"
        });
    }

    showErrors = event => {
        let firstInputCheck;
        if (this.state.firstAnswer === "Spring") {
            firstInputCheck = "select-input-munich7 right-select-input-munich";
        } else {
            firstInputCheck = "select-input-munich7 wrong-select-input-munich";
        }

        this.setState({
            firstAnswerCSS: firstInputCheck
        });
    }

    checkAnswer = event => {
        if (this.state.firstAnswer === "Spring") {
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
                        <div className="clue-background-title">Maximilian I and the Court Gardens</div>
                        <div className="clue-background-div">At the top of the building, there is a statue that was built a few years earlier (the original is now in the Residenzmuseum). What does the main statue mean?</div>
                        <div className="munich-parent-forms">
                            <div className="munich-form">
                                <select type="text" onChange={this.updateFirstAnswer} className={this.state.firstAnswerCSS}>
                                    <option value="Winter"> 🍺 The power of beer</option>
                                    <option value="Winter"> 🌲 The power of nature</option>
                                    <option value="Winter"> ✝️ The power of religion</option>
                                    <option value="Winter"> 💪 The strength of Diana</option>
                                    <option value="Spring"> 💰 The wealth of Baviera</option>
                                </select>
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