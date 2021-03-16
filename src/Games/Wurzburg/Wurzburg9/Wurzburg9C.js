import Timeline from '../WurzburgComponents/Timeline';
import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';

class Wurzburg9C extends Component {
    constructor (props) {
        super(props);   
        this.state = {
            year: "1880",
            season: "Spring",
            answers: "wrong",
            seasonCSS: "select-input",
            yearCSS: "number-input"
        };
    }

    updateSeason = event => {
        let season = event.target.value;
        this.setState({
            season: season,
            seasonCSS: "select-input"
        });
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
        let firstInputCheck;
        let secondInputCheck;
        if (this.state.season === "hand") {
            firstInputCheck = "right-select-input";
        } else {
            firstInputCheck = "wrong-select-input";
        }

        if (this.state.year === 1896) {
            secondInputCheck = "right-number-input";
        } else {
            secondInputCheck = "wrong-number-input";
        }

        this.setState({
            seasonCSS: firstInputCheck,
            yearCSS: secondInputCheck
        });
    }

    checkAnswer = event => {
        if (this.state.season === "hand" && this.state.year === 1896) {
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
                <Redirect to="/wuerzburg/xrays/intro/clueAnswer" />
            ) 
        } else {
            return ( 
                <div>
                    <Timeline timelineProgress="8" timelineReference="19-20th A.D."/>
                    <div className="clue-background">
                        <div className="clue-background-title">X-Rays</div>
                        <div className="clue-background-div">Could you find him? What did he do to illustrate the X-rays?</div>
                        <div className="align-multipleforms">
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
                            </div>
                            <div className="number-form"> 
                                <div className="clue-background-div">he took a x-rays picture </div>
                                {/* <select type="text" onChange={this.updateSeason} className={this.state.season}>
                                    <option value="picture"> </option>
                                    <option value="horse"> a student's </option>
                                    <option value="skull"> his wife's </option>
                                    <option value="cat"> his own </option>
                                    <option value="dog"> a scientist's </option>
                                    <option value="horse"> a student's </option>
                                    <option value="skull"> his wife's </option>
                                    <option value="cat"> his own </option>
                                </select> */}
                            </div>
                            <div className="number-form"> 
                                <div className="clue-background-div">of a</div>                            
                                <select type="text" onChange={this.updateSeason} className={this.state.seasonCSS}>
                                    <option value="skull"> 🍖 broken bone </option>
                                    <option value="cat"> 🐈 cat </option>
                                    <option value="dog"> 🐕 dog </option>
                                    <option value="hand"> 🤚 hand </option>
                                    <option value="skull"> 💀 head </option>                             
                                    <option value="horse"> 🐎 horse </option>                                    
                                    {/* <option value="skull"> 🦵 leg </option>    */}
                                    {/* <option value="body"> 🧍 whole person </option> */}
                                </select>
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
                        <Link to="/wuerzburg/xrays/intro">
                            <div className="gameNext-button-below">
                                Back
                            </div>
                        </Link>
                        <a href="https://us1.list-manage.com/survey?u=27bed50594116df471c55e108&id=e11c3c40f6" target="_blank" rel="noopener noreferrer">
                            <div className="gameFeedback-button">Help</div>
                        </a>
                    </div>
                </div>  
            );
        }
    }
}

export default Wurzburg9C;