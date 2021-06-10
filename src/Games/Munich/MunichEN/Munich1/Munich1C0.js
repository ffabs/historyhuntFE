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
    ReactGA.pageview('/Munich1C0');
}

class Munich1C0 extends Component {
    constructor (props) {
        super(props);   
        this.state = {
            firstAnswer: "Summer",
            secondAnswer: "Summer",
            answers: "wrong",
            firstAnswerCSS: "select-input-munich",
            secondAnswerCSS: "select-input-munich"
        };
    }

    updateFirstAnswer = event => {
        let firstAnswer = event.target.value;
        this.setState({
            firstAnswer: firstAnswer,
            firstAnswerCSS: "select-input-munich"
        });
    }

    updateSecondAnswer = event => {
        let secondAnswer = event.target.value;
        this.setState({
            secondAnswer: secondAnswer,
            secondAnswerCSS: "select-input-munich"
        });
    }

    showErrors = event => {
        let firstInputCheck;
        let secondInputCheck;
        if (this.state.firstAnswer === "Spring") {
            firstInputCheck = "right-select-input-munich";
        } else {
            firstInputCheck = "wrong-select-input-munich";
        }

        if (this.state.secondAnswer === "Spring") {
            secondInputCheck = "right-select-input-munich";
        } else {
            secondInputCheck = "wrong-select-input-munich";
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
                <Redirect to="/munich/monks/clueAnswer" />
            ) 
        } else {
            return ( 
                <div>
                    {this.props.gamemenu !== true && <div>
                    <Timeline timelineProgress="1.5" timelineReference="8-12th A.D."/>
                        <div className="clue-background">
                        <div className="clue-background-title">Munich before Munich</div>
                        <div className="clue-background-div">Could you find it? How does it look like?</div>
                        <div className="munich-parent-forms">
                            <div className="munich-form">
                                {/* <div className="clue-background-div">A</div> */}
                                <select type="text" onChange={this.updateFirstAnswer} className={this.state.firstAnswerCSS}>
                                    <option value="Winter"> An eagle 🦅</option>
                                    <option value="Winter"> A castle 🏰</option>                                    
                                    <option value="Winter"> A farmer 🚜</option>
                                    <option value="Winter"> A horse 🐎</option>
                                    <option value="Winter"> A king 🤴</option>   
                                    <option value="Winter"> A knight ⚔️</option>                                    
                                    <option value="Winter"> A lion 🦁</option>
                                    <option value="Spring"> A monk 🧍</option>                                 
                                </select>
                            </div>
                            {/* <div className="clue-background-div">with a</div> */}
                            <div className="munich-form">
                                {/* <div className="clue-background-div">with a</div> */}
                                <select type="text" onChange={this.updateSecondAnswer} className={this.state.secondAnswerCSS}>
                                    <option value="Winter"> with a beer 🍺</option>
                                    <option value="Spring"> with a book 📕</option>
                                    <option value="Winter"> with a candle 🕯️</option>                                    
                                    <option value="Winter"> with a cross ✝️</option>                                  
                                    <option value="Winter"> with a crown 👑</option>
                                    <option value="Winter"> with a torch 🔥</option>
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
                        <Link to="/munich/cityhall">
                            <div className="gameNext-button-below">
                                Back
                            </div>
                        </Link>
                        <Link to="/munich/coatofarms/cluehelp">
                            <div className="gameFeedback-button">Help</div>
                        </Link>
                    </div>
                    </div>}<GameMenu {...this.props}/>
                    <CookieConsent 
                        enableDeclineButton 
                        buttonStyle={{ background: "#00695c", color: "white", fontWeight: "bold" }}
                        onAccept={() => {
                            ReactGA.initialize('UA-192893120-1');
                            ReactGA.pageview('/munich3C');
                        }}
                        >This website uses Google Analytics cookies to enhance the user experience.
                    </CookieConsent>
                </div>  
            );
        }
    }
}

export default Munich1C0;