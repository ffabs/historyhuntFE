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
    ReactGA.pageview('/munich10C');
}

class Munich10C extends Component {
    constructor (props) {
        super(props);   
        this.state = {
            firstAnswer: "Spring",
            secondAnswer: "Summer",
            thirdAnswer: "Spring",
            forthAnswer: "Summer",
            answers: "wrong",
            firstAnswerCSS: "select-input-munich",
            secondAnswerCSS: "select-input-munich",
            thirdAnswerCSS: "select-input-munich",
            forthAnswerCSS: "select-input-munich"
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

    updateThirdAnswer = event => {
        let thirdAnswer = event.target.value;
        this.setState({
            thirdAnswer: thirdAnswer,
            thirdAnswerCSS: "select-input-munich"
        });
    }

    updateForthAnswer = event => {
        let forthAnswer = event.target.value;
        this.setState({
            forthAnswer: forthAnswer,
            forthAnswerCSS: "select-input-munich"
        });
    }

    showErrors = event => {
        let firstInputCheck;
        let secondInputCheck;
        let thirdInputCheck;
        let forthInputCheck;
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

        if (this.state.thirdAnswer === "Spring") {
            thirdInputCheck = "right-select-input-munich";
        } else {
            thirdInputCheck = "wrong-select-input-munich";
        }

        if (this.state.forthAnswer === "Spring") {
            forthInputCheck = "right-select-input-munich";
        } else {
            forthInputCheck = "wrong-select-input-munich";
        }

        this.setState({
            firstAnswerCSS: firstInputCheck,
            secondAnswerCSS: secondInputCheck,
            thirdAnswerCSS: thirdInputCheck,
            forthAnswerCSS: forthInputCheck
        });
    }

    checkAnswer = event => {
        if (this.state.firstAnswer === "Spring" && this.state.secondAnswer === "Spring" && this.state.thirdAnswer === "Spring" && this.state.forthAnswer === "Spring") {
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
                <Redirect to="/munich/westphalia/clueAnswer" />
            ) 
        } else {
            return ( 
                <div>
                    {this.props.gamemenu !== true && <div>
                        <Timeline timelineProgress="10" timelineReference="17th A.D."/>
                        <div className="clue-background">
                        <div className="clue-background-title">The 30 Years War</div>
                        <div className="clue-background-div">The golden statue was actually created at the end of the 16th  for William V grave in St. Michael but since 1639 it was joined by four bronze depicting the demons Munich survived: hunger, war, plague and heresy. How are they represented?</div>
                        <div className="munich-parent-forms">
                            <div className="munich-form">
                                <div className="clue-background-div">Hunger:</div>
                                <select type="text" onChange={this.updateFirstAnswer} className={this.state.firstAnswerCSS}>
                                    <option value="Spring"> 🐉 dragon</option>
                                    <option value="Summer"> 🐟 fish </option>
                                    <option value="Summer"> 🦄 unicorn</option>
                                </select>
                            </div>
                            <div className="clue-background-div"></div>
                            <div className="munich-form">
                                <div className="clue-background-div">War:</div>
                                <select type="text" onChange={this.updateSecondAnswer} className={this.state.secondAnswerCSS}>
                                    <option value="Summer"> 🦅 eagle</option>
                                    <option value="Summer"> 🐎 horse </option>
                                    <option value="Spring"> 🦁 lion </option>
                                </select>
                            </div>
                            <div className="munich-form">
                                <div className="clue-background-div">Plague:</div>
                                <select type="text" onChange={this.updateThirdAnswer} className={this.state.thirdAnswerCSS}>
                                    <option value="Spring"> 🐍 basilisk</option> 
                                    <option value="Summer"> 🐕 dog</option>      
                                    <option value="Summer"> 🐭 mouse</option>                      
                                </select>
                            </div>
                            <div className="munich-form">
                                <div className="clue-background-div">Heresy:</div>
                                <select type="text" onChange={this.updateForthAnswer} className={this.state.forthAnswerCSS}>
                                    <option value="Summer"> 🐒 monkey</option>
                                    <option value="Summer"> 🐖 pig</option>
                                    <option value="Spring"> 🐍 serpent</option>                             
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
                        <Link to="/munich/30ywar/clueintro">
                            <div className="gameNext-button-below">
                                Back
                            </div>
                        </Link>
                        <Link to="/munich/30ywar/cluehelp">
                            <div className="gameFeedback-button">Help</div>
                        </Link>
                    </div>
                    </div>}<GameMenu {...this.props}/>
                    <CookieConsent 
                        enableDeclineButton 
                        buttonStyle={{ background: "#00695c", color: "white", fontWeight: "bold" }}
                        onAccept={() => {
                            ReactGA.initialize('UA-192893120-1');
                            ReactGA.pageview('/munich10C');
                        }}
                        >This website uses Google Analytics cookies to enhance the user experience.
                    </CookieConsent>
                </div>  
            );
        }
    }
}

export default Munich10C;