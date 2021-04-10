import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../Components/GameMenu';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/wurzburg2D');
}

class Wurzburg2D extends Component {

    constructor (props) {
        super(props);   
        this.state = {
            inputValue: "details",
            inputValueCSS: "select-input",
            answers: "wrong"
        };
    }

    updateAnswer = event => {
        let inputValue = event.target.value;
        this.setState({
            inputValue: inputValue,
            inputValueCSS: "select-input"
        });
    }

    checkAnswer = event => {
        if (this.state.inputValue === "emblems") {
            this.setState({
                answers: "right"
            });
        } else {
            this.setState({
                answers: "wrong",
                inputValueCSS: "wrong-select-input",
            });
        }
    }

    render() {
        // console.log(this.props.inside);

        if(this.state.answers === "right"){
            return (
                <Redirect to="/wuerzburg/domAnswer" />
            ) 
        } else {
            return ( 
                <div>
                    {this.props.gamemenu !== true && 
                    <div> 
                    <Timeline timelineProgress="2" timelineReference="8th A.D."/>
                    <div className="clue-background">
                        <div className="clue-background-title">Kilian’s Cathedral</div>
                        <div className="clue-background-div">Comparing Lorenz's tombstone with the older one at his right and the new one at his left, what is kept from the Gothic tradition?</div>
                    </div>
                    <div className="number-form"> 
                            <select onChange={this.updateAnswer} className={this.state.inputValueCSS}>        
                                <option value="angels"> 👼 angels in the baldachin </option>
                                <option value="columns"> 🏛️ columns </option>
                                <option value="emblems"> ⚜️ emblems </option>
                                <option value="nature"> 📐 sharp shapes </option>
                            </select>
                        </div>
                    <div className="buttons-section">
                        <div 
                            type="button" 
                            onClick={this.checkAnswer}
                            className="gameNext-button"
                        >
                            Check answer
                        </div>
                        <Link to="/wuerzburg/kilianus/dom/inside">
                            <div className="gameNext-button-below">
                                Back
                            </div>
                        </Link>

                        <Link to="/wuerzburg/kilianus/dom/help">
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
                            ReactGA.pageview('/wurzburg2D');
                        }}
                        >This website uses Google Analytics cookies to enhance the user experience.
                    </CookieConsent> 
                </div>  
            );
        }
    }
}

export default Wurzburg2D;
