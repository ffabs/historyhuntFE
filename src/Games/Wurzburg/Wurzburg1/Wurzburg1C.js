import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import '../Wurzburg.css';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import GameMenu from '../../../Components/GameMenu';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/wurzburg1C');
}

class Wurzburg1C extends Component {

    constructor (props) {
        super(props);   
        this.state = {
            firstInputValue: "",
            firstInputCSS: "formInput",
            secondInputValue: "",
            secondInputCSS: "formInput",
            thirdInputValue: "",
            thirdInputCSS: "formInput",
            answers: "wrong"
        };
    }

    firstInput = event => {
        const firstInputAdded = event.target.value.toLowerCase().trim().replace(/\s/g, '');
        this.setState({
            firstInputCSS: "formInput",
            firstInputValue: firstInputAdded
        });
    }

    secondInput = event => {
        const secondInputAdded = event.target.value.toLowerCase().trim().replace(/\s/g, '');
        this.setState({
            secondInputCSS: "formInput",
            secondInputValue: secondInputAdded
        });
    }

    thirdInput = event => {
        const thirdInputAdded = event.target.value.toLowerCase().trim().replace(/\s/g, '');
        this.setState({
            thirdInputCSS: "formInput",
            thirdInputValue: thirdInputAdded
        });
    }

    showErrors = event => {
        let firstInputCheck;
        let secondInputCheck;
        let thirdInputCheck;
        if (this.state.firstInputValue === "kilianus" || this.state.firstInputValue === "s.kilianus" || this.state.firstInputValue === "skilianus") {
            firstInputCheck = "right";
        } else {
            firstInputCheck = "wrong";
        }

        if (this.state.secondInputValue === "totnan" || this.state.secondInputValue === "s.totnan" || this.state.secondInputValue === "stotnan") {
            secondInputCheck = "right";
        } else {
            secondInputCheck = "wrong";
        }

        if (this.state.thirdInputValue === "colonatus" || this.state.thirdInputValue === "s.colonatus" || this.state.thirdInputValue === "scolonatus") {
            thirdInputCheck = "right";
        } else {
            thirdInputCheck = "wrong";
        } 

        this.setState({
            firstInputCSS: firstInputCheck,
            secondInputCSS: secondInputCheck,
            thirdInputCSS: thirdInputCheck
        });
    }

    checkAllInputs = event => {
        let firstInputcheck;
        let secondInputcheck;
        let thirdInputcheck;

        if (this.state.firstInputValue === "kilianus" || this.state.firstInputValue === "s.kilianus" || this.state.firstInputValue === "skilianus") {
            firstInputcheck = "right";
        }
        if (this.state.secondInputValue === "totnan" || this.state.secondInputValue === "s.totnan" || this.state.secondInputValue === "stotnan") {
            secondInputcheck = "right";
        }
        if (this.state.thirdInputValue === "colonatus" || this.state.thirdInputValue === "s.colonatus" || this.state.thirdInputValue === "scolonatus") {
            thirdInputcheck = "right";
        }


        if (
            firstInputcheck === "right" 
            &&
            secondInputcheck === "right" 
            &&
            thirdInputcheck === "right"
        ) {
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
                <Redirect to="/wuerzburg/kilianus" />
            ) 
        } else {
            return ( 
                <div>
                    {this.props.gamemenu !== true && 
                    <div> 
                    <Timeline timelineProgress="1" timelineReference="7th A.D."/>
                    <div className="clue-background">       
                        <div className="clue-background-title">A martyrdom that changed history</div>
            
                        <div className="clue-background-div">I am a bishop, as shown by my hat, and I hold a sword, the weapon used to killed me. I am... </div> 
                        <div>
                            <input
                                type="text" 
                                name="firstInput"
                                onChange={this.firstInput}
                                className={this.state.firstInputCSS}
                            />
                        </div>

                        <div className="clue-background-div">I look young and I hold the bible. My name is... </div> 
                        <div>
                            <input
                                type="text" 
                                name="secondInput"
                                onChange={this.secondInput}
                                className={this.state.secondInputCSS}
                            />
                        </div>

                        <div className="clue-background-div">I show no fear for the death. Usually, I hold a knife but it is currently missing from my statue. I am remembered as... </div>
                        <div>
                            <input
                                type="text" 
                                name="thirdInput"
                                onChange={this.thirdInput}
                                className={this.state.thirdInputCSS}
                            />
                        </div>
                    </div>
                    <div className="buttons-section">
                        <div 
                            type="button" 
                            onClick={this.checkAllInputs}
                            className="gameNext-button"
                        >
                            Check answers
                        </div>
                        <Link to="/wuerzburg/bridge">
                            <div className="gameNext-button-below">
                                Back
                            </div>
                        </Link>
                        <Link to="/wuerzburg/bridge/help">
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
                            ReactGA.pageview('/wurzburg1C');
                        }}
                        >This website uses Google Analytics cookies to enhance the user experience.
                    </CookieConsent>   
                </div>  
            );
        }
    }
}

export default Wurzburg1C;
