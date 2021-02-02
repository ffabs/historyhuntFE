import Timeline from '../WurzburgComponents/Timeline';
import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import '../Wurzburg.css';

class Wurzburg4C extends Component {
    constructor (props) {
        super(props);   
        this.state = {
            year: "1500",
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

    updateYear = event => {
        let year = Number(event.target.value);
        this.setState({
            year: year
        });
    }

    higherYear = event => {
        let year = Number(this.state.year) + 1;
        this.setState({
            year: year
        });
    }

    lowerYear = event => {
        let year = Number(this.state.year) - 1;
        this.setState({
            year: year
        });
    }

    showErrors = event => {
        let seasonInputCheck;
        let yearInputCheck;
        if (this.state.season === "Spring") {
            seasonInputCheck = "right";
        } else {
            seasonInputCheck = "wrong";
        }
        if (this.state.year === 1525) {
            yearInputCheck = "right";
        } else {
            yearInputCheck = "wrong";
        }
        this.setState({
            seasonCSS: seasonInputCheck,
            yearCSS: yearInputCheck
        });
    }

    checkAnswer = event => {
        if (this.state.season === "Spring" && this.state.year === 1525) {
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
                <Redirect to="/wuerzburg/peasants/memorial/clueAnswer" />
            ) 
        } else {
            return ( 
                <div>
                    <Timeline timelineProgress="25" timelineReference="16th A.D."/>
                    <div className="clue-background">
                        <div className="clue-background-title">The Peasants’ War</div>
                        <div className="clue-background-div">In which year of the 16th century and season were the peasants defeated? (bauernkrieg means "peasants’ war" in German)</div>
                        <div className="number-form"> 
                            <div className="clue-background-div">Season: </div>
                            <select type="text" onChange={this.updateSeason} className={this.state.season}>
                                <option value="Spring"> 🌱 Spring </option>
                                <option value="Summer"> ☀️ Summer </option>
                                <option value="Autumn"> 🍂 Autumn </option>
                                <option value="Winter"> ❄️ Winter </option>
                            </select>
                        </div>
                        <div className="number-form"> 
                            <div className="clue-background-div">Year: </div>
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
                        <div
                            onClick={this.checkAnswer}
                            className="gameNext-button"
                        >
                            Check answers
                        </div>
                    </div>
                </div>  
            );
        }
    }
}

export default Wurzburg4C;