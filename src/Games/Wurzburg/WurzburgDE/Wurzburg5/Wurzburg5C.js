import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import Timeline from '../WurzburgComponents/Timeline';
import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../../Components/ComponentsDE/GameMenu';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/DE/wurzburg5C');
}

class Wurzburg5C extends Component {
    constructor (props) {
        super(props);
        this.state = {
            firstCSS: "quizItem",
            secondCSS: "quizItem",
            thirdCSS: "quizItem",
            forthCSS: "quizItem",
            fifthCSS: "quizItem",
            sixthCSS: "quizItem",
            seventhCSS: "quizItem",
            eightCSS: "quizItem",
            ninethCSS: "quizItem",
            tenthCSS: "quizItem",
            season: "brewery",
            answers: "wrong",
            seasonCSS: "select-input"
        };
    }

updateQuizState(answer) {
    if (this.state[answer] === "quizItem"){
        this.setState({
            [answer]: "quizItemSelected",
        });
    } else {
        this.setState({
            [answer]: "quizItem",
        });
    }
    
}

firstInput = event => {
    this.updateQuizState("firstCSS");
}
secondInput = event => {
    this.updateQuizState("secondCSS");
}
thirdInput = event => {
    this.updateQuizState("thirdCSS");
}
forthInput = event => {
    this.updateQuizState("forthCSS");
}
fifthInput = event => {
    this.updateQuizState("fifthCSS");
}
sixthInput = event => {
    this.updateQuizState("sixthCSS");
}
seventhInput = event => {
    this.updateQuizState("seventhCSS");
}
eightInput = event => {
    this.updateQuizState("eightCSS");
}
ninethInput = event => {
    this.updateQuizState("ninethCSS");
}
tenthInput = event => {
    this.updateQuizState("tenthCSS");
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
    let ninethCSS = this.state.ninethCSS;
    let tenthCSS = this.state.tenthCSS;
    let answers = "right";
    if (firstCSS === "quizItemSelected") {
        firstCSS = "wrongItemSelected";
        answers = "wrong";
    }
    if (secondCSS === "quizItemSelected") {
        secondCSS = "wrongItemSelected";
        answers = "wrong";
    }
    if (forthCSS === "quizItemSelected") {
        forthCSS = "wrongItemSelected";
        answers = "wrong";
    }
    if (fifthCSS === "quizItemSelected") {
        fifthCSS = "wrongItemSelected";
        answers = "wrong";
    }
    if (sixthCSS === "quizItemSelected") {
        sixthCSS = "wrongItemSelected";
        answers = "wrong";
    }
    if (seventhCSS === "quizItemSelected") {
        seventhCSS = "wrongItemSelected";
        answers = "wrong";
    }
    if (eightCSS === "quizItemSelected") {
        eightCSS = "wrongItemSelected";
        answers = "wrong";
    }
    if (ninethCSS === "quizItemSelected") {
        ninethCSS = "wrongItemSelected";
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
            eightCSS: eightCSS,
            ninethCSS: ninethCSS,
            tenthCSS: tenthCSS
        });
    } else {
        if (thirdCSS === "quizItemSelected" 
        // && seventhCSS === "quizItemSelected" 
        && tenthCSS === "quizItemSelected") {
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
                <Redirect to="/DE/wuerzburg/julius/statue/clueAnswer" />
            ) 
        } else {
            return ( 
                <div>
                    {this.props.gamemenu !== true && <div> 
                    <Timeline timelineProgress="5" timelineReference="16. Jh. n.Chr."/>
                    <div className="clue-background">
                        <div className="clue-background-title">Julius Echter</div>
                        <div className="clue-background-div">Wie die Fassade zeigt, wurde das Juliusspital als Krankenhaus für ältere, kranke und bedürftige Menschen gebaut. Welche der folgenden Aussagen umfasst das Juliusspital heute?</div>
                        <div className="quizSection">
                            <div
                                onClick={this.firstInput}
                                className={this.state.firstCSS}
                            >
                                <div className="quiz-icon">🌿</div>
                                <div>botanischer Garten</div>
                            </div>
                            <div
                                onClick={this.secondInput}
                                className={this.state.secondCSS}
                            >
                                <div className="quiz-icon">🍻</div>
                                <div>Brauerei</div>                                 
                            </div>
                            <div
                                onClick={this.thirdInput}
                                className={this.state.thirdCSS}
                            >                                 
                                <div className="quiz-icon">🏥</div>
                                <div>Klinik</div>                               
                            </div>
                            <div
                                onClick={this.forthInput}
                                className={this.state.forthCSS}
                            >
                                <div className="quiz-icon">🧑‍🚒</div>
                                <div>Feuerwache</div> 
                            </div>
                            <div
                                onClick={this.fifthInput}
                                className={this.state.fifthCSS}
                            >
                                <div className="quiz-icon">📜</div>
                                <div>historische Institution</div>                                   
                            </div>
                            <div
                                onClick={this.sixthInput}
                                className={this.state.sixthCSS}
                            >
                                <div className="quiz-icon">🚔</div>
                                <div>Polizeistation</div>                                 
                            </div>
                            {/* <div
                                onClick={this.seventhInput}
                                className={this.state.seventhCSS}
                            >                                
                                <div className="quiz-icon">🥐</div>
                                <div>a bakery</div>                                
                            </div> */}
                            <div
                                onClick={this.seventhInput}
                                className={this.state.seventhCSS}
                            >                                
                                <div className="quiz-icon">🥙</div>
                                <div>Kebab-Laden</div>                                
                            </div>
                            <div
                                onClick={this.eightInput}
                                className={this.state.eightCSS}
                            >
                                <div className="quiz-icon">🏫</div>
                                <div>Schule</div>                                 
                            </div>
                            <div
                                onClick={this.ninethInput}
                                className={this.state.ninethCSS}
                            >
                                <div className="quiz-icon">🚊</div>
                                <div>Straßenbahn Kaution</div>                                 
                            </div>
                            <div
                                onClick={this.tenthInput}
                                className={this.state.tenthCSS}
                            >
                                <div className="quiz-icon">🥂</div>
                                <div>Weingut</div>
                            </div>
                        </div>
                    </div>
                    {this.state.answers === "notAll" &&
                        <div className="clue-background">
                            <div className="clue-background-div red">Es sollte 2 richtige Antworten geben</div>
                        </div>
                    }
                    <div className="buttons-section">
                        <div
                            onClick={this.checkAnswer}
                            className="gameNext-button"
                        >
                            Antworten kontrollieren
                        </div>
                        <Link to="/DE/wuerzburg/julius/statue">
                            <div className="gameNext-button-below">
                                Zurück
                            </div>
                        </Link>
                        <Link to="/DE/wuerzburg/julius/help">
                            <div className="gameFeedback-button">Hilfe</div>
                        </Link>
                    </div>
                    </div>}<GameMenu {...this.props}/>
                    <CookieConsent 
                        buttonText="Ich akzeptiere"
                        declineButtonText="Ich lehne ab"
                        enableDeclineButton 
                        buttonStyle={{ background: "#00695c", color: "white", fontWeight: "bold" }}
                        onAccept={() => {
                            ReactGA.initialize('UA-192893120-1');
                            ReactGA.pageview('/DE/wurzburg5C');
                        }}
                        >Diese Website verwendet Google Analytics-Cookies, um die Nutzererfahrung zu verbessern.
                    </CookieConsent> 
                </div>  
            );
        }
    }
}

export default Wurzburg5C;