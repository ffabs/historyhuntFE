import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import Timeline from '../TimelineMunich';
import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';
import '../Munich.css';
import GameMenu from '../../../../Components/ComponentsEN/GameMenu';
import amsterdam from '../../MunichImages/amsterdam.png';
import berlin from '../../MunichImages/berlin.png';
import bordeaux from '../../MunichImages/bordeaux.png';
import edinburgh from '../../MunichImages/edinburgh.png';
import london from '../../MunichImages/london.png';
import milan from '../../MunichImages/milan.png';
import prague from '../../MunichImages/prague.png';
import venice from '../../MunichImages/venice.png';
import verona from '../../MunichImages/verona.png';
import würzburg from '../../MunichImages/wuerzburg.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/munich1C');
}

class Munich1C extends Component {
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
            seasonCSS: "select-input-munich"
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
    if (tenthCSS === "quizItemSelected") {
        tenthCSS = "wrongItemSelected";
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
        && forthCSS === "quizItemSelected" 
        && ninethCSS === "quizItemSelected") {
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
                <Redirect to="/munich/partnercities/clueAnswer" />
            ) 
        } else {
            return ( 
                <div>
                    {this.props.gamemenu !== true && <div> 
                    <Timeline timelineProgress="1.5" timelineReference="8-12th A.D."/>
                    <div className="clue-background">
                        <div className="clue-background-title">Munich before Munich</div>
                        <div className="clue-background-div">Around Munich's coat of arms, the coat of arms of the current Munich's partner cities can be found. Which among the following are partner cities?</div>
                        <div className="quizSection">
                            <div
                                onClick={this.firstInput}
                                className={this.state.firstCSS}
                            >
                                <img src={amsterdam} className="city-image" alt="amsterdam" />
                                <div>Amsterdam</div>
                            </div>
                            <div
                                onClick={this.secondInput}
                                className={this.state.secondCSS}
                            >
                                <img src={berlin} className="city-image" alt="berlin" />
                                <div>Berlin</div>                                 
                            </div>
                            <div
                                onClick={this.thirdInput}
                                className={this.state.thirdCSS}
                            >                                 
                                <img src={bordeaux} className="city-image" alt="bordeaux" />
                                <div>Bordeaux</div>                               
                            </div>
                            <div
                                onClick={this.forthInput}
                                className={this.state.forthCSS}
                            >
                                <img src={edinburgh} className="city-image" alt="edinburgh" />
                                <div>Edinburgh</div> 
                            </div>
                            <div
                                onClick={this.fifthInput}
                                className={this.state.fifthCSS}
                            >
                                <img src={london} className="city-image" alt="london" />
                                <div>London</div>                                   
                            </div>
                            <div
                                onClick={this.sixthInput}
                                className={this.state.sixthCSS}
                            >
                                <img src={milan} className="city-image" alt="milan" />
                                <div>Milan</div>                                 
                            </div>
                            <div
                                onClick={this.seventhInput}
                                className={this.state.seventhCSS}
                            >                                
                                <img src={prague} className="city-image" alt="prague" />
                                <div>Prague</div>                                
                            </div>
                            <div
                                onClick={this.eightInput}
                                className={this.state.eightCSS}
                            >
                                <img src={venice} className="city-image" alt="venice" />
                                <div>Venice</div>                                 
                            </div>
                            <div
                                onClick={this.ninethInput}
                                className={this.state.ninethCSS}
                            >
                                <img src={verona} className="city-image" alt="verona" />
                                <div>Verona</div>                                 
                            </div>
                            <div
                                onClick={this.tenthInput}
                                className={this.state.tenthCSS}
                            >
                                <img src={würzburg} className="city-image" alt="würzburg" />
                                <div>Würzburg</div>
                            </div>
                        </div>
                    </div>
                    {this.state.answers === "notAll" &&
                        <div className="clue-background">
                            <div className="clue-background-div red">There should be 3 correct answers</div>
                        </div>
                    }
                    <div className="buttons-section">
                        <div
                            onClick={this.checkAnswer}
                            className="gameNext-button"
                        >
                            Check answers
                        </div>
                        <Link to="/munich/cityhall">
                            <div className="gameNext-button-below">
                                Back
                            </div>
                        </Link>
                        <Link to="/munich/partnerships/help">
                            <div className="gameFeedback-button">Help</div>
                        </Link>
                    </div>
                    </div>}<GameMenu {...this.props}/>
                    <CookieConsent 
                        enableDeclineButton 
                        buttonStyle={{ background: "#00695c", color: "white", fontWeight: "bold" }}
                        onAccept={() => {
                            ReactGA.initialize('UA-192893120-1');
                            ReactGA.pageview('/munich1C');
                        }}
                        >This website uses Google Analytics cookies to enhance the user experience.
                    </CookieConsent> 
                </div>  
            );
        }
    }
}

export default Munich1C;