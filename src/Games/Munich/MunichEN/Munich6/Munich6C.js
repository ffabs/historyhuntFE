import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import Timeline from '../TimelineMunich';
import {Link} from 'react-router-dom';
import '../Munich.css';
import GameMenu from '../../../../Components/ComponentsEN/GameMenu';
import munichFirstImage from '../../MunichImages/firstimagemunichsmall.jpeg';


let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/munich6C');
}

class Munich6C extends Component {
    constructor (props) {
        super(props);   
        this.state = {
            firstAnswer: "Winter",
            answers: "wrong",
            firstAnswerCSS: "select-input-munich6 select-input"
        };
    }

    updateFirstAnswer = event => {
        let firstAnswer = event.target.value;
        this.setState({
            firstAnswer: firstAnswer,
            firstAnswerCSS: "select-input-munich6 select-input"
        });
    }

    showErrors = event => {
        let firstInputCheck;
        if (this.state.firstAnswer === "Spring") {
            firstInputCheck = "select-input-munich6 right-select-input-munich";
        } else {
            firstInputCheck = "select-input-munich6 wrong-select-input-munich";
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
                <Redirect to="/munich/cupolas/clueAnswer" />
            ) 
        } else {
            return ( 
                <div>
                    {this.props.gamemenu !== true && <div>
                        <Timeline timelineProgress="5" timelineReference="15-16th A.D."/>
                        <div className="clue-background">
                        <div className="clue-background-title">Becoming a city of art</div>
                        <div className="clue-background-div">Comparing the 2 towers shown in the skyline of the first image of Munich with the current ones, how are they different today?</div>
                        <img src={munichFirstImage} className="tree-image" alt="munichFirstImage" />
                        <div className="munich-parent-forms">
                            <div className="munich-form">
                                <select type="text" onChange={this.updateFirstAnswer} className={this.state.firstAnswerCSS}>
                                    <option value="Winter">bigger windows</option>
                                    <option value="Spring">cupolas added</option>
                                    <option value="Winter">cross missing</option>
                                    <option value="Winter">1 tower less</option>
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
                        <Link to="/munich/firstimage/clueintro">
                            <div className="gameNext-button-below">
                                Back
                            </div>
                        </Link>
                        <Link to="/munich/firstimage/cluehelp">
                            <div className="gameFeedback-button">Help</div>
                        </Link>
                    </div>
                    </div>}<GameMenu {...this.props}/>
                    <CookieConsent 
                        enableDeclineButton 
                        buttonStyle={{ background: "#00695c", color: "white", fontWeight: "bold" }}
                        onAccept={() => {
                            ReactGA.initialize('UA-192893120-1');
                            ReactGA.pageview('/munich6C');
                        }}
                        >This website uses Google Analytics cookies to enhance the user experience.
                    </CookieConsent>
                </div>  
            );
        }
    }
}

export default Munich6C;