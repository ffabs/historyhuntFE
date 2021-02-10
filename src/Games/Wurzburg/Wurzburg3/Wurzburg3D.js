import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Redirect} from 'react-router-dom';
import '../Wurzburg.css';


class Wurzburg3D extends Component {
    constructor (props) {
        super(props);   
        this.state = {
            answer: "",
            firstCSS: "quizItem",
            secondCSS: "quizItem",
            thirdCSS: "quizItem",
            forthCSS: "quizItem",
            fifthCSS: "quizItem",
            sixthCSS: "quizItem",
            answers: "wrong"
        };
    }

    firstInput = event => {
        this.setState({
            answer: "first",
            firstCSS: "quizItemSelected",
            secondCSS: "quizItem",
            thirdCSS: "quizItem",
            forthCSS: "quizItem",
            fifthCSS: "quizItem",
            sixthCSS: "quizItem",
        });
    }

    secondInput = event => {
        this.setState({
            answer: "second",
            firstCSS: "quizItem",
            secondCSS: "quizItemSelected",
            thirdCSS: "quizItem",
            forthCSS: "quizItem",
            fifthCSS: "quizItem",
            sixthCSS: "quizItem",
        });
    }

    thirdInput = event => {
        this.setState({
            answer: "third",
            firstCSS: "quizItem",
            secondCSS: "quizItem",
            thirdCSS: "quizItemSelected",
            forthCSS: "quizItem",
            fifthCSS: "quizItem",
            sixthCSS: "quizItem",
        });
    }

    forthInput = event => {
        this.setState({
            answer: "forth",
            firstCSS: "quizItem",
            secondCSS: "quizItem",
            thirdCSS: "quizItem",
            forthCSS: "quizItemSelected",
            fifthCSS: "quizItem",
            sixthCSS: "quizItem",
        });
    }

    fifthInput = event => {
        this.setState({
            answer: "fifth",
            firstCSS: "quizItem",
            secondCSS: "quizItem",
            thirdCSS: "quizItem",
            forthCSS: "quizItem",
            fifthCSS: "quizItemSelected",
            sixthCSS: "quizItem",
        });
    }

    sixthInput = event => {
        this.setState({
            answer: "sixth",
            firstCSS: "quizItem",
            secondCSS: "quizItem",
            thirdCSS: "quizItem",
            forthCSS: "quizItem",
            fifthCSS: "quizItem",
            sixthCSS: "quizItemSelected",
        });
    }

    showError(answer){
        switch(answer) {
            case "first":
                this.setState({
                    answer: "first",
                    firstCSS: "wrongItemSelected",
                    secondCSS: "quizItem",
                    thirdCSS: "quizItem",
                    forthCSS: "quizItem",
                    fifthCSS: "quizItem",
                    sixthCSS: "quizItem",
                });
            break;
            case "second":
                this.setState({
                    answer: "second",
                    firstCSS: "quizItem",
                    secondCSS: "wrongItemSelected",
                    thirdCSS: "quizItem",
                    forthCSS: "quizItem",
                    fifthCSS: "quizItem",
                    sixthCSS: "quizItem",
                });
            break;
            case "third":
                this.setState({
                    answer: "third",
                    firstCSS: "quizItem",
                    secondCSS: "quizItem",
                    thirdCSS: "wrongItemSelected",
                    forthCSS: "quizItem",
                    fifthCSS: "quizItem",
                    sixthCSS: "quizItem",
                });
            break;
            case "forth":
                this.setState({
                    answer: "forth",
                    firstCSS: "quizItem",
                    secondCSS: "quizItem",
                    thirdCSS: "quizItem",
                    forthCSS: "wrongItemSelected",
                    fifthCSS: "quizItem",
                    sixthCSS: "quizItem",
                });
            break;
            case "fifth":
                this.setState({
                    answer: "fifth",
                    firstCSS: "quizItem",
                    secondCSS: "quizItem",
                    thirdCSS: "quizItem",
                    forthCSS: "quizItem",
                    fifthCSS: "wrongItemSelected",
                    sixthCSS: "quizItem",
                });
            break;
            case "sixth":
                this.setState({
                    answer: "sixth",
                    firstCSS: "quizItem",
                    secondCSS: "quizItem",
                    thirdCSS: "quizItem",
                    forthCSS: "quizItem",
                    fifthCSS: "quizItem",
                    sixthCSS: "wrongItemSelected",
                });
            break;
            default:
                this.setState({
                    answer: "",
                    firstCSS: "quizItem",
                    secondCSS: "quizItem",
                    thirdCSS: "quizItem",
                    forthCSS: "quizItem",
                    fifthCSS: "quizItem",
                    sixthCSS: "quizItem",
                });
          }
    }

    checkAnswer = event => {
        let answer = this.state.answer;
        if (answer === "first") {
            this.setState({
                answers: "right"
            });
        } else {
            this.setState({
                answers: "wrong"
            });
            this.showError(answer);
        }
    }

    render() {
        // console.log(this.props.inside);


        if(this.state.answers === "right"){
            return (
                <Redirect to="/wuerzburg/citycouncil/sundial/clueAnswer" />
            ) 
        } else {
            return ( 
                <div>
                    <Timeline timelineProgress="4" timelineReference="12-14th A.D."/>
                    <div className="clue-background">
                        <div className="clue-background-title">The City Council</div>
                        <div className="clue-background-div">This building was changed over the centuries though. Can you guess what happened?</div>
                        <div className="quizSection">
                            <div
                                onClick={this.firstInput}
                                className={this.state.firstCSS}
                            >
                                The tower used to be half as high, ending where the clock hangs now
                            </div>
                            <div
                                onClick={this.secondInput}
                                className={this.state.secondCSS}
                            >
                                The window at the bottom used to be the main door, it shows how the street level has changed
                            </div>
                        </div>
                        <div className="clue-background-div">Where is it pointing to now?</div>
                        <div className="quizSection">
                            <div
                                onClick={this.firstInput}
                                className={this.state.firstCSS}
                            >
                                A tree 
                            </div>
                            <div
                                onClick={this.secondInput}
                                className={this.state.secondCSS}
                            >
                                A fountain 
                            </div>
                            <div
                                onClick={this.thirdInput}
                                className={this.state.thirdCSS}
                            >
                                A bank 
                            </div>
                            <div
                                onClick={this.forthInput}
                                className={this.state.forthCSS}
                            >
                                A bar 
                            </div>
                            <div
                                onClick={this.fifthInput}
                                className={this.state.fifthCSS}
                            >
                                The Dom 
                            </div>
                            <div
                                onClick={this.sixthInput}
                                className={this.state.sixthCSS}
                            >
                                The bridge 
                            </div>
                        </div>
                    </div>
                    <div className="buttons-section">

                        <div
                            onClick={this.checkAnswer}
                            className="gameNext-button"
                        >
                            Check answer
                        </div>
                    </div>
                </div>  
            );
        }
    }
}

export default Wurzburg3D;
