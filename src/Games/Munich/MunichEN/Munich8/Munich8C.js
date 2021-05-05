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
    ReactGA.pageview('/munich8C');
}

class Munich8C extends Component {
    constructor (props) {
        super(props);   
        this.state = {
            year: "1550",
            answers: "wrong",
            yearCSS: "number-input"
        };
    }

    updateYear = event => {
        let year = Number(event.target.value);
        this.setState({
            year: year,
            yearCSS: "number-input"
        });
    }

    higherYear = event => {
        let year = Number(this.state.year) + 1;
        this.setState({
            year: year,
            yearCSS: "number-input"
        });
    }

    lowerYear = event => {
        let year = Number(this.state.year) - 1;
        this.setState({
            year: year,
            yearCSS: "number-input"
        });
    }

    showErrors = event => {
        let yearInputCheck;
        if (this.state.year === 1589) {
            yearInputCheck = "right-number-input";
        } else {
            yearInputCheck = "wrong-number-input";
        }
        this.setState({
            yearCSS: yearInputCheck
        });
    }

    checkAnswer = event => {
        if (this.state.year === 1589) {
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
                <Redirect to="/munich/1589/clueAnswer" />
            ) 
        } else {
            return ( 
                <div>
                    {this.props.gamemenu !== true && 
                    <div> 
                    <Timeline timelineProgress="6" timelineReference="16th A.D."/>
                    <div className="clue-background">
                        <div className="clue-background-title">The Hofbräuhaus</div>
                        <div className="clue-background-div">In which year of the second half of the 16th century was it built?</div>
                        <div className="wurzburg3Dform"> 
                            <div className="number-form"> 
                                {/* <div className="clue-background-div">Year: </div> */}
                                <button 
                                    className="number-input-less"
                                    type="button" 
                                    onClick={this.lowerYear}
                                >
                                    -
                                </button>
                                <input
                                    className={this.state.yearCSS}
                                    type="number" 
                                    name="amount"
                                    value={this.state.year}
                                    onChange={this.updateYear}
                                />
                                <button 
                                    className="number-input-more"
                                    type="button" 
                                    onClick={this.higherYear}
                                >
                                    +
                                </button>
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
                        <Link to="/munich/william/clueintro">
                            <div className="gameNext-button-below">
                                Back
                            </div>
                        </Link>
                        <Link to="/munich/william/cluehelp">
                            <div className="gameFeedback-button">Help</div>
                        </Link>
                    </div>
                    </div>}<GameMenu {...this.props}/>
                    <CookieConsent 
                        enableDeclineButton 
                        buttonStyle={{ background: "#00695c", color: "white", fontWeight: "bold" }}
                        onAccept={() => {
                            ReactGA.initialize('UA-192893120-1');
                            ReactGA.pageview('/munich8C');
                        }}
                        >This website uses Google Analytics cookies to enhance the user experience.
                    </CookieConsent>
                </div>  
            );
        }
    }
}

export default Munich8C;