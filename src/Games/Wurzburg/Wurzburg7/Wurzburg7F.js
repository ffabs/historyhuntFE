import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import Timeline from '../WurzburgComponents/Timeline';
import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../Components/GameMenu';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/wurzburg7F');
}

class Wurzburg7F extends Component {
    constructor (props) {
        super(props);   
        this.state = {
            year: "1500",
            season: "Winter",
            answers: "wrong",
            seasonCSS: "select-input"
        };
    }

    updateSeason = event => {
        let season = event.target.value;
        this.setState({
            season: season,
            seasonCSS: "select-input"
        });
    }

    checkAnswer = event => {
        if (this.state.season === "Spring") {
            this.setState({
                answers: "right"
            });
        } else {
            this.setState({
                answers: "wrong",
                seasonCSS: "wrong-select-input",
            });
        }
    }

    render() {
        if(this.state.answers === "right"){
            return (
                <Redirect to="/wuerzburg/residenz/garden/clueAnswer" />
            ) 
        } else {
            return ( 
                <div>
                    {this.props.gamemenu !== true && <div>
                    <Timeline timelineProgress="6" timelineReference="17-18th A.D."/>
                    <div className="clue-background">
                        <div className="clue-background-title">The Court Locksmith</div>
                        <div className="clue-background-divs">
                        <div className="clue-background-div">The huge iron gates of the garden are some of Oegg's the most important works. That's why a memorial for him is just nearby. Could you find it?</div>
                        <div className="question-section"> 
                            <div className="clue-background-div">What is written on the paper he holds?</div>
                        </div>
                        </div>
                        <div className="number-form"> 
                            <select type="text" onChange={this.updateSeason} className={this.state.seasonCSS}>
                                {/* <option value="Autumn"> 👓 Glasses </option> */}
                                {/* <option value="Winter"> 🎩 Hat </option> */}
                                {/* <option value="Summer"> 🧺 Basket </option> */}
                                {/* <option value="Summer"> 👜 Handbag </option> */}
                                {/* <option value="Summer"> 🧵 Thread </option> */}
                                {/* <option value="Summer"> 🔥 Fire </option> */}

                                {/* <option value="Winter"> 🔨 a hammer </option>
                                <option value="Summer"> 👷 a helmet </option>
                                <option value="Summer"> 🔒 a lock </option>
                                <option value="Summer"> 👑 a metal crown </option>
                                <option value="Summer"> 🖌️ a paintbrush </option>
                                <option value="Spring"> 📜 a paper </option>
                                <option value="Summer"> ⚙️ a piece of metal </option>
                                <option value="Summer"> 🚪 a piece of the gate </option>
                                <option value="Summer"> 🧰 a toolbox </option> */}

                                <option value="Summer"> ✉️ a letter by the bishop </option>
                                <option value="Summer"> 🔨 a list of his tools </option>
                                <option value="Summer"> 📜 his title as locksmith </option>
                                <option value="Spring"> 📐 the designs of the gates </option>
                                <option value="Summer"> ⚙️ the amount of iron used </option>
                                <option value="Summer"> 💰 the cost of the work </option>
                                <option value="Summer"> 📅 when he was at the court </option>
                            </select>
                        </div>
                    </div>
                    <div className="buttons-section">
                        <div
                            onClick={this.checkAnswer}
                            className="gameNext-button"
                        >
                            Check answer
                        </div>
                        <Link to="/wuerzburg/residenz/gate/intro">
                            <div className="gameNext-button-below">
                                Back
                            </div>
                        </Link>
                        <Link to="/wuerzburg/residenz/garden/help">
                            <div className="gameFeedback-button">Help</div>
                        </Link>
                    </div>
                    </div>}<GameMenu {...this.props}/>
                    <CookieConsent 
                        enableDeclineButton 
                        buttonStyle={{ background: "#00695c", color: "white", fontWeight: "bold" }}
                        onAccept={() => {
                            ReactGA.initialize('UA-192893120-1');
                            ReactGA.pageview('/wurzburg7F');
                        }}
                        >This website uses Google Analytics cookies to enhance the user experience.
                    </CookieConsent>
                </div>  
            );
        }
    }
}

export default Wurzburg7F;