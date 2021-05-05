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
    ReactGA.pageview('/munich2C');
}

class Munich2C extends Component {

    constructor (props) {
        super(props);   
        this.state = {
            firstInputValue: "",
            firstInputCSS: "formInput",
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

    showErrors = event => {
        this.setState({
            firstInputCSS: "wrong",
        });
    }

    checkAllInputs = event => {
        if (this.state.firstInputValue === "tal") {
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
            
                        <div className="clue-background-div">The main square of Munich is exactly on the way from the first toll bridge of Munich build by Henry the Lion.</div> 
                        <div className="clue-background-div">What is the current name of the street arriving to the main square and pointing to the direction of the first bridge of Munich?</div> 
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
                    <div className="buttons-section">
                        <div 
                            type="button" 
                            onClick={this.checkAllInputs}
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
