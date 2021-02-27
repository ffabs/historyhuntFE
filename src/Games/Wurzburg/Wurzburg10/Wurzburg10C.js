import Timeline from '../WurzburgComponents/Timeline';
import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import '../Wurzburg.css';
import {Link} from 'react-router-dom';

class Wurzburg10C extends Component {
    constructor (props) {
        super(props);   
        this.state = {
            firstAnswer: "Summer",
            secondAnswer: "Summer",
            answers: "wrong",
            firstAnswerCSS: "select-input",
            secondAnswerCSS: "select-input",
            yearCSS: "number-input"
        };
    }

    updateFirstAnswer = event => {
        let firstAnswer = event.target.value;
        this.setState({
            firstAnswer: firstAnswer,
            firstAnswerCSS: "select-input"
        });
    }

    updateSecondAnswer = event => {
        let secondAnswer = event.target.value;
        this.setState({
            secondAnswer: secondAnswer,
            secondAnswerCSS: "select-input"
        });
    }

    checkAnswer = event => {
        if (this.state.firstAnswer === "Spring" && this.state.secondAnswer === "Spring") {
            this.setState({
                answers: "right"
            });
        } else {
            this.setState({
                answers: "wrong",
                firstAnswerCSS: "wrong-select-input",
                secondAnswerCSS: "wrong-select-input"
            });
        }
    }

    render() {
        if(this.state.answers === "right"){
            return (
                <Redirect to="/wuerzburg/worldwar/intro/clueAnswer" />
            ) 
        } else {
            return ( 
                <div>
                    <Timeline timelineProgress="9" timelineReference="20th A.D."/>
                    <div className="clue-background">
                        <div className="clue-background-title">World Wars</div>
                        <div className="clue-background-div">What is the key element of this memorial that allowed National Socialists to misuse it as a “Hero's Memorial”?</div>
                        <div className="number-form">
                            <select type="text" onChange={this.updateFirstAnswer} className={this.state.firstAnswerCSS}>
                                <option value="Summer"> 💣 the representation of weapons </option>
                                <option value="Spring"> 🐘 the massive depiction of warriors</option>
                                <option value="Autumn"> 📃 the lack of names of the deaths </option>
                                <option value="Winter"> ✝️ the lack of crosses </option>
                            </select>
                        </div>
                        <div className="clue-background-div"></div>
                        <div className="clue-background-div">And how was this memorial changed after the Second World War?</div>
                        <div className="number-form">
                            <select type="text" onChange={this.updateSecondAnswer} className={this.state.secondAnswerCSS}>
                                <option value="Summer"> 💣 the weapons were removed</option>
                                <option value="Winter"> 🐘 the warriors were made bigger</option>
                                <option value="Autumn"> 📃 the names were removed</option>
                                <option value="Spring"> ✝️ the crosses were added</option>
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
                        <Link to="/wuerzburg/worldwar/intro">
                            <div className="gameNext-button-below">
                                Back
                            </div>
                        </Link>
                    </div>
                </div>  
            );
        }
    }
}

export default Wurzburg10C;