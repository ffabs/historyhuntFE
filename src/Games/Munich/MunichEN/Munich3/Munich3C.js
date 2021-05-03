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
    ReactGA.pageview('/wurzburg3C');
}

class Wurzburg3C extends Component {
    constructor (props) {
        super(props);   
        this.state = {
            firstAnswer: "Spring",
            secondAnswer: "Summer",
            thirdAnswer: "Summer",
            answers: "wrong",
            firstAnswerCSS: "select-input",
            secondAnswerCSS: "select-input",
            thirdAnswerCSS: "select-input"
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

    updateThirdAnswer = event => {
        let thirdAnswer = event.target.value;
        this.setState({
            thirdAnswer: thirdAnswer,
            thirdAnswerCSS: "select-input"
        });
    }

    showErrors = event => {
        let firstInputCheck;
        let secondInputCheck;
        let thirdInputCheck;
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

        this.setState({
            firstAnswerCSS: firstInputCheck,
            secondAnswerCSS: secondInputCheck,
            thirdAnswerCSS: thirdInputCheck
        });
    }

    checkAnswer = event => {
        if (this.state.firstAnswer === "Spring" && this.state.secondAnswer === "Spring" && this.state.thirdAnswer === "Spring") {
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
                <Redirect to="/munich/alterhof/clueAnswer" />
            ) 
        } else {
            return ( 
                <div>
                    {this.props.gamemenu !== true && <div>
                        <Timeline timelineProgress="3" timelineReference="13th A.D."/>
                        <div className="clue-background">
                        <div className="clue-background-title">Wittelsbach's Old Court</div>
                        <div className="clue-background-div">Among the symbols on the building, there is one particularly prominent. What does it show?</div>
                        <div className="munich-parent-forms">
                            <div className="munich-form">
                                <div className="clue-background-div">A</div>
                                <select type="text" onChange={this.updateFirstAnswer} className={this.state.firstAnswerCSS}>
                                    <option value="Spring"> ⬛ black</option>
                                    <option value="Winter"> 🟦 blue</option>
                                    <option value="Winter"> 🟨 gold</option>
                                    <option value="Winter"> 🟥 red</option>
                                    <option value="Winter"> ⬜ white</option>
                                </select>
                            </div>
                            <div className="clue-background-div"></div>
                            <div className="munich-form">
                                <select type="text" onChange={this.updateSecondAnswer} className={this.state.secondAnswerCSS}>
                                    <option value="Spring"> 🐉 dragon</option>
                                    <option value="Spring"> 🦅 eagle</option>
                                    <option value="Winter"> 🦁 lion </option>
                                    <option value="Winter"> 🐍 snake </option>
                                </select>
                                <div className="clue-background-div">on a</div>
                            </div>
                            <div className="munich-form">
                                <select type="text" onChange={this.updateThirdAnswer} className={this.state.thirdAnswerCSS}>
                                    <option value="Winter"> ⬛ black</option>
                                    <option value="Winter"> 🟦 blue</option>
                                    <option value="Spring"> 🟨 gold</option>
                                    <option value="Winter"> 🟥 red</option>
                                    <option value="Winter"> ⬜ white</option>                                
                                </select>
                                <div className="clue-background-div">background</div>
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
                        <Link to="/munich/wittelsbach/clueintro">
                            <div className="gameNext-button-below">
                                Back
                            </div>
                        </Link>
                        <Link to="/munich/wittelsbach/cluehelp">
                            <div className="gameFeedback-button">Help</div>
                        </Link>
                    </div>
                    </div>}<GameMenu {...this.props}/>
                    <CookieConsent 
                        enableDeclineButton 
                        buttonStyle={{ background: "#00695c", color: "white", fontWeight: "bold" }}
                        onAccept={() => {
                            ReactGA.initialize('UA-192893120-1');
                            ReactGA.pageview('/wurzburg3C');
                        }}
                        >This website uses Google Analytics cookies to enhance the user experience.
                    </CookieConsent>
                </div>  
            );
        }
    }
}

export default Wurzburg3C;