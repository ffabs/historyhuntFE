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
    ReactGA.pageview('/munich4C');
}

class Munich4C extends Component {

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
        if (this.state.firstInputValue === "derbayer" || this.state.firstInputValue === "kaiserludwigderbayer" || this.state.firstInputValue === "bayer") {
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
                <Redirect to="/munich/bavarian/clueAnswer" />
            ) 
        } else {
            return ( 
                <div>
                    {this.props.gamemenu !== true && 
                    <div> 
                    <Timeline timelineProgress="4" timelineReference="14th A.D."/>
                    <div className="clue-background">       
                        <div className="clue-background-title">A Holy Roman Emperor</div>
                        <div className="clue-background-div">How was he also called (in German)?</div> 
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
                        <Link to="/munich/louis/clueintro">
                            <div className="gameNext-button-below">
                                Back
                            </div>
                        </Link>
                        <Link to="/munich/louis/cluehelp">
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
                            ReactGA.pageview('/munich4C');
                        }}
                        >This website uses Google Analytics cookies to enhance the user experience.
                    </CookieConsent>   
                </div>  
            );
        }
    }
}

export default Munich4C;
