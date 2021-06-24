import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import Timeline from '../TimelineMunich';
import {Link} from 'react-router-dom';
import '../Munich.css';
import compass from '../../MunichImages/compass2.png';
import GameMenu from '../../../../Components/ComponentsEN/GameMenu';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/munich2C');
}

class Munich2C extends Component {

    constructor (props) {
        super(props);
        this.state = {
            firstCSS: "compassItem",
            secondCSS: "compassItem",
            thirdCSS: "compassItem",
            forthCSS: "compassItem",
            fifthCSS: "compassItem",
            sixthCSS: "compassItem",
            seventhCSS: "compassItem",
            eightCSS: "compassItem"
        };
    }
    
    firstInput = event => {
        this.setState({
            firstCSS: "compassSelected",
            secondCSS: "compassItem",
            thirdCSS: "compassItem",
            forthCSS: "compassItem",
            fifthCSS: "compassItem",
            sixthCSS: "compassItem",
            seventhCSS: "compassItem",
            eightCSS: "compassItem"
        });
    }
    secondInput = event => {
        this.setState({
            firstCSS: "compassItem",
            secondCSS: "mainDirection compassSelected",
            thirdCSS: "compassItem",
            forthCSS: "compassItem",
            fifthCSS: "compassItem",
            sixthCSS: "compassItem",
            seventhCSS: "compassItem",
            eightCSS: "compassItem"
        });
    }
    thirdInput = event => {
        this.setState({
            firstCSS: "compassItem",
            secondCSS: "compassItem",
            thirdCSS: "compassSelected",
            forthCSS: "compassItem",
            fifthCSS: "compassItem",
            sixthCSS: "compassItem",
            seventhCSS: "compassItem",
            eightCSS: "compassItem"
        });
    }
    forthInput = event => {
        this.setState({
            firstCSS: "compassItem",
            secondCSS: "compassItem",
            thirdCSS: "compassItem",
            forthCSS: "mainDirection compassSelected",
            fifthCSS: "compassItem",
            sixthCSS: "compassItem",
            seventhCSS: "compassItem",
            eightCSS: "compassItem"
        });
    }
    fifthInput = event => {
        this.setState({
            firstCSS: "compassItem",
            secondCSS: "compassItem",
            thirdCSS: "compassItem",
            forthCSS: "compassItem",
            fifthCSS: "mainDirection compassSelected",
            sixthCSS: "compassItem",
            seventhCSS: "compassItem",
            eightCSS: "compassItem"
        });
    }
    sixthInput = event => {
        this.setState({
            firstCSS: "compassItem",
            secondCSS: "compassItem",
            thirdCSS: "compassItem",
            forthCSS: "compassItem",
            fifthCSS: "compassItem",
            sixthCSS: "compassSelected",
            seventhCSS: "compassItem",
            eightCSS: "compassItem"
        });
    }
    seventhInput = event => {
        this.setState({
            firstCSS: "compassItem",
            secondCSS: "compassItem",
            thirdCSS: "compassItem",
            forthCSS: "compassItem",
            fifthCSS: "compassItem",
            sixthCSS: "compassItem",
            seventhCSS: "mainDirection compassSelected",
            eightCSS: "compassItem"
        });
    }
    eightInput = event => {
        this.setState({
            firstCSS: "compassItem",
            secondCSS: "compassItem",
            thirdCSS: "compassItem",
            forthCSS: "compassItem",
            fifthCSS: "compassItem",
            sixthCSS: "compassItem",
            seventhCSS: "compassItem",
            eightCSS: "compassSelected"
        });
    }
    
    checkAnswer = event => {
        let firstCSS = this.state.firstCSS;
        let secondCSS = this.state.secondCSS;
        let thirdCSS = this.state.thirdCSS;
        let forthCSS = this.state.forthCSS;
        let fifthCSS = this.state.fifthCSS;
        let sixthCSS = this.state.sixthCSS;
        let seventhCSS = this.state.seventhCSS;
        let eightCSS = this.state.eightCSS;
        let answers = "right";
        if (firstCSS === "compassSelected") {
            firstCSS = "wrongCompassSelected";
            answers = "wrong";
        }
        if (secondCSS === "mainDirection compassSelected") {
            secondCSS = "mainDirection wrongCompassSelected";
            answers = "wrong";
        }
        if (thirdCSS === "compassSelected") {
            thirdCSS = "wrongCompassSelected";
            answers = "wrong";
        }
        if (forthCSS === "mainDirection compassSelected") {
            forthCSS = "mainDirection wrongCompassSelected";
            answers = "wrong";
        }
        if (fifthCSS === "mainDirection compassSelected") {
            fifthCSS = "mainDirection wrongCompassSelected";
            answers = "wrong";
        }
        if (sixthCSS === "compassSelected") {
            sixthCSS = "wrongCompassSelected";
            answers = "wrong";
        }
        if (seventhCSS === "mainDirection compassSelected") {
            seventhCSS = "mainDirection wrongCompassSelected";
            answers = "wrong";
        }
        if (answers === "wrong") {
            this.setState({
                answers: "wrong",
                firstCSS: firstCSS,
                secondCSS: secondCSS,
                thirdCSS: thirdCSS,
                forthCSS: forthCSS,
                fifthCSS: fifthCSS,
                sixthCSS: sixthCSS,
                seventhCSS: seventhCSS,
                eightCSS: eightCSS
            });
        } else {
            if (eightCSS === "compassSelected") {
                this.setState({
                    answers: "right"
                })
            } else {
                answers = "notAll";
                this.setState({
                    answers: "notAll"
                })
            }
        }
    }

    render() {
        if(this.state.answers === "right"){
            return (
                <Redirect to="/munich/saltz/clueAnswer" />
            ) 
        } else {
            return ( 
                <div>
                    {this.props.gamemenu !== true && 
                    <div> 
                    <Timeline timelineProgress="2" timelineReference="12th A.D."/>
                    <div className="clue-background">       
                        <div className="clue-background-title">Salt, the white gold</div> 
                        <div className="clue-background-div">From which direction was salt coming to this square?</div>
                        <div className="compassAlign">
                            <div
                                onClick={this.firstInput}
                                className={"nordwest "+this.state.firstCSS}
                            >
                                {/* <img src={venice} className="city-image" alt="venice" /> */}
                                <div><b>Nord-West</b></div>                                 
                            </div>
                            <div
                                onClick={this.secondInput}
                                className={this.state.secondCSS}
                            >
                                {/* <img src={venice} className="city-image" alt="venice" /> */}
                                <div><b>Nord</b></div>                                 
                            </div>
                            <div
                                onClick={this.thirdInput}
                                className={"nordeast "+this.state.thirdCSS}
                            >
                                {/* <img src={venice} className="city-image" alt="venice" /> */}
                                <div><b>Nord-East</b></div>                                 
                            </div>
                        </div>
                        <div className="compassAlign">
                            <div
                                onClick={this.forthInput}
                                className={this.state.forthCSS}
                            >
                                {/* <img src={venice} className="city-image" alt="venice" /> */}
                                <div><b>West</b></div>                                 
                            </div>
                            <img src={compass} className="compass" alt="compass" />
                            <div
                                onClick={this.fifthInput}
                                className={this.state.fifthCSS}
                            >
                                {/* <img src={london} className="city-image" alt="london" /> */}
                                <div><b>East</b></div>                                   
                            </div>
                        </div>
                        <div className="compassAlign">
                            <div
                                onClick={this.sixthInput}
                                className={"southwest "+this.state.sixthCSS}
                            >
                                {/* <img src={milan} className="city-image" alt="milan" /> */}
                                <div><b>South-West</b></div>                                 
                            </div>
                            <div
                                onClick={this.seventhInput}
                                className={this.state.seventhCSS}
                            >                                
                                {/* <img src={prague} className="city-image" alt="prague" /> */}
                                <div><b>South</b></div>                                
                            </div>
                            <div
                                onClick={this.eightInput}
                                className={"southeast "+this.state.eightCSS}
                            >
                                {/* <img src={venice} className="city-image" alt="venice" /> */}
                                <div><b>South-East</b></div>                                 
                            </div>
                        </div>
                    </div>
                    {this.state.answers === "notAll" &&
                        <div className="clue-background">
                            <div className="clue-background-div red"><b>Choose one direction clicking on it!</b></div>
                        </div>
                    }
                    <div className="buttons-section">
                        <div 
                            type="button" 
                            onClick={this.checkAnswer}
                            className="gameNext-button"
                        >
                            Check answer
                        </div>
                        <Link to="/munich/marktplatz/clueintro">
                            <div className="gameNext-button-below">
                                Back
                            </div>
                        </Link>
                        <Link to="/munich/marktplatz/cluehelp">
                            <div className="gameFeedback-button">Help</div>
                        </Link>
                    </div>
                    </div>
                    }
                    <GameMenu {...this.props}/>
                    <CookieConsent 
                        enableDeclineButton 
                        buttonStyle={{ background: "#00695c", color: "white", fontWeight: "bold" }}
                        onAccept={() => {
                            ReactGA.initialize('UA-192893120-1');
                            ReactGA.pageview('/munich2C');
                        }}
                        >This website uses Google Analytics cookies to enhance the user experience.
                    </CookieConsent>   
                </div>  
            );
        }
    }
}

export default Munich2C;
