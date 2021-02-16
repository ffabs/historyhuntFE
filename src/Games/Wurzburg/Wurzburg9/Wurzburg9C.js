import Timeline from '../WurzburgComponents/Timeline';
import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import '../Wurzburg.css';

class Wurzburg9C extends Component {
    constructor (props) {
        super(props);   
        this.state = {
            year: "1896",
            season: "Spring",
            answers: "wrong",
            seasonCSS: "select-input",
            yearCSS: "number-input"
        };
    }

    updateSeason = event => {
        let season = event.target.value;
        this.setState({
            season: season
        });
    }

    checkAnswer = event => {
        if (this.state.season === "hand") {
            this.setState({
                answers: "right"
            });
        } else {
            this.setState({
                answers: "wrong",
                seasonCSS: "wrong",
            });
        }
    }

    render() {
        if(this.state.answers === "right"){
            return (
                <Redirect to="/wuerzburg/xrays/intro/clueAnswer" />
            ) 
        } else {
            return ( 
                <div>
                    <Timeline timelineProgress="8" timelineReference="19-20th A.D."/>
                    <div className="clue-background">
                        <div className="clue-background-title">X-Rays</div>
                        <div className="clue-background-div">Find him, what did he use as an object of illustration of the X-rays on?</div>
                        <div className="number-form"> 
                            <div className="clue-background-div">In</div>
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
                            <div className="clue-background-div">he took a x-rays picture of</div>
                            <select type="text" onChange={this.updateSeason} className={this.state.season}>
                                <option value="dog"> a scientist's </option>
                                <option value="horse"> a student's </option>
                                <option value="skull"> his wife's </option>
                                <option value="cat"> his own </option>
                            </select>
                            <select type="text" onChange={this.updateSeason} className={this.state.season}>
                                <option value="cat"> 🐈 cat </option>
                                <option value="dog"> 🐕 dog </option>
                                <option value="hand"> 🤚 hand </option>
                                <option value="skull"> 💀 head </option>
                                <option value="horse"> 🐎 horse </option>
                                <option value="body"> 🧍 whole body </option>
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
                    </div>
                </div>  
            );
        }
    }
}

export default Wurzburg9C;