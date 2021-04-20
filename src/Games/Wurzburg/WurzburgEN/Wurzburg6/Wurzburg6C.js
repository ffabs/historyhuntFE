
import Timeline from '../WurzburgComponents/Timeline';
import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import '../Wurzburg.css';

class Wurzburg6C extends Component {
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

    checkAnswer = event => {
        if (this.state.season === "Spring") {
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
                <Redirect to="/wuerzburg/falkenhous/taxes/clueAnswer" />
            ) 
        } else {
            return ( 
                <div>
                    <Timeline timelineProgress="6" timelineReference="17th A.D."/>
                    <div className="clue-background">
                        <div className="clue-background-title">The Falkenhous</div>
                        <div>foto e storia della casa: https://wuerzburgwiki.de/wiki/Falkenhaus</div>
                        <div className="clue-background-div">Which of the following sketches is the right one on the facade?</div>
                        <div className="number-form"> 
                            <div className="clue-background-div">Answer: </div>
                            <select type="text" onChange={this.updateSeason} className={this.state.season}>
                                <option value="Spring"> 🌱 Spring </option>
                                <option value="Summer"> ☀️ Summer </option>
                                <option value="Autumn"> 🍂 Autumn </option>
                                <option value="Winter"> ❄️ Winter </option>
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

export default Wurzburg6C;