import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import Timeline from '../WurzburgComponents/Timeline';
import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import '../Wurzburg.css';
import {Link} from 'react-router-dom';
import GameMenu from '../../../../Components/ComponentsEN/GameMenu';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/wurzburg10C');
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
                <Redirect to="/wuerzburg/worldwar/intro/clueAnswer" />
            ) 
        } else {
            return ( 
                <div>
                    {this.props.gamemenu !== true && <div>
                    <Timeline timelineProgress="9" timelineReference="20th A.D."/>
                    <div className="clue-background">
                        <div className="clue-background-title">World Wars</div>
                        <div className="clue-background-div">What is the key element of this memorial that allowed National Socialists to misuse it for the "Nazi Propaganda"?</div>
                        <div className="number-form">
                            <select type="text" onChange={this.updateFirstAnswer} className={this.state.firstAnswerCSS}>
                                <option value="Summer"> 💣 presence of weapons </option>
                                <option value="Spring"> 🐘 massive warriors</option>
                                {/* <option value="Autumn"> 📃 lack of real names </option> */}
                                <option value="Winter"> ✝️ presence of crosses </option>
                            </select>
                        </div>
                        <div className="clue-background-div"></div>
                        <div className="clue-background-div">And how was this memorial changed after the Second World War?</div>
                        <div className="number-form">
                            <select type="text" onChange={this.updateSecondAnswer} className={this.state.secondAnswerCSS}>
                                <option value="Summer"> 💣 weapons were added</option>
                                <option value="Winter"> 🐘 warriors were added</option>
                                {/* <option value="Autumn"> 📃 names were removed</option> */}
                                <option value="Spring"> ✝️ crosses were added</option>
                            </select>
                        </div>
                    </div>
                    <div className="buttons-section">
                        <div
                            onClick={this.checkAnswer}
                            className="gameNext-button"
                        >
                            Check answers
                        </div>
                        <Link to="/wuerzburg/worldwar/intro">
                            <div className="gameNext-button-below">
                                Back
                            </div>
                        </Link>
                        <Link to="/wuerzburg/worldwar/help">
                            <div className="gameFeedback-button">Help</div>
                        </Link>
                    </div>
                    </div>}<GameMenu {...this.props}/>
                    <CookieConsent 
                        enableDeclineButton 
                        buttonStyle={{ background: "#00695c", color: "white", fontWeight: "bold" }}
                        onAccept={() => {
                            ReactGA.initialize('UA-192893120-1');
                            ReactGA.pageview('/wurzburg10C');
                        }}
                        >This website uses Google Analytics cookies to enhance the user experience.
                    </CookieConsent>
                </div>  
            );
        }
    }
}

export default Wurzburg10C;