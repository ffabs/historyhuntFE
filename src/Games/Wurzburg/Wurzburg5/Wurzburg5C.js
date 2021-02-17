import Timeline from '../WurzburgComponents/Timeline';
import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';

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
            firstCSS: [firstCSS],
            secondCSS: [secondCSS],
            thirdCSS: [thirdCSS],
            forthCSS: [forthCSS],
            fifthCSS: [fifthCSS],
            sixthCSS: [sixthCSS],
            seventhCSS: [seventhCSS],
            eightCSS: [eightCSS],
            ninethCSS: [ninethCSS],
            tenthCSS: [tenthCSS]
        });
    } else {
        if (thirdCSS === "quizItemSelected" && seventhCSS === "quizItemSelected" && tenthCSS === "quizItemSelected") {
            this.setState({
                answers: "right"
            })
        } else {
            answers = "notAll";
        }
    }
}


    render() {
        if(this.state.answers === "right"){
            return (
                <Redirect to="/wuerzburg/julius/statue/clueAnswer" />
            ) 
        } else {
            return ( 
                <div>
                    <Timeline timelineProgress="5" timelineReference="16th A.D."/>
                    <div className="clue-background">
                        <div className="clue-background-title">Julius Echter</div>
                        <div className="clue-background-div">As illustrated in the facade, the Juliusspital was built as an hospital for the elderly, the sick and the needy. Which of the following does the Juliusspital include today?</div>
                        <div className="quizSection">
                            <div
                                onClick={this.firstInput}
                                className={this.state.firstCSS}
                            >
                                <div className="quiz-icon">🌿</div>
                                <div>a botanical garden</div>
                            </div>
                            <div
                                onClick={this.secondInput}
                                className={this.state.secondCSS}
                            >
                                <div className="quiz-icon">🍻</div>
                                <div>a brewery</div>                                 
                            </div>
                            <div
                                onClick={this.thirdInput}
                                className={this.state.thirdCSS}
                            >                                 
                                <div className="quiz-icon">🏥</div>
                                <div>a clinic</div>                               
                            </div>
                            <div
                                onClick={this.forthInput}
                                className={this.state.forthCSS}
                            >
                                <div className="quiz-icon">🧑‍🚒</div>
                                <div>a fire station</div> 
                            </div>
                            <div
                                onClick={this.fifthInput}
                                className={this.state.fifthCSS}
                            >
                                <div className="quiz-icon">📜</div>
                                <div>a historical institution</div>                                   
                            </div>
                            <div
                                onClick={this.sixthInput}
                                className={this.state.sixthCSS}
                            >
                                <div className="quiz-icon">🚔</div>
                                <div>a police station</div>                                 
                            </div>
                            <div
                                onClick={this.seventhInput}
                                className={this.state.seventhCSS}
                            >                                
                                <div className="quiz-icon">🥐</div>
                                <div>a bakery</div>                                
                            </div>
                            <div
                                onClick={this.eightInput}
                                className={this.state.eightCSS}
                            >
                                <div className="quiz-icon">🏫</div>
                                <div>a school</div>                                 
                            </div>
                            <div
                                onClick={this.ninethInput}
                                className={this.state.ninethCSS}
                            >
                                <div className="quiz-icon">🚊</div>
                                <div>a tram deposit</div>                                 
                            </div>
                            <div
                                onClick={this.tenthInput}
                                className={this.state.tenthCSS}
                            >
                                <div className="quiz-icon">🥂</div>
                                <div>a winery</div>
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
                        <Link to="/wuerzburg/julius/statue">
                            <div className="gameNext-button-below">
                                Back
                            </div>
                        </Link>
                        <a href="https://us1.list-manage.com/survey?u=27bed50594116df471c55e108&id=e11c3c40f6" target="_blank" rel="noopener noreferrer">
                            <div className="gameFeedback-button">Give Feedback</div>
                        </a>
                    </div>
                </div>  
            );
        }
    }
}

export default Wurzburg5C;