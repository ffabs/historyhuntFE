import Timeline from '../WurzburgComponents/Timeline';
import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import '../Wurzburg.css';
import {Link} from 'react-router-dom';

class Wurzburg7C extends Component {
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
        if (this.state.season === "mirrors") {
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
                <Redirect to="/wuerzburg/residenz/garden/clue" />
            ) 
        } else {
            return ( 
                <div>
                    <Timeline timelineProgress="6" timelineReference="17-18th A.D."/>
                    <div className="clue-background">
                        <div className="clue-background-title">The Residence</div>
                        <div className="clue-background-div">The Chapel is now a prime example of the sacral Baroque style in Germany but building it was not an easy task. A key problem the architect Neumann faced was that the left side of the Chapel was windowless. How did he solve it?</div>
                        <div className="number-form">
                            <select type="text" onChange={this.updateSeason} className={this.state.seasonCSS}>
                                <option value="close"> 🔒 Closing the windows to the right </option>
                                <option value="open"> ⛏️ Creating new windows to the left </option>
                                <option value="dark"> 🕶️ Keeping the room dark </option>
                                <option value="paint"> 🎨 Using bright paint </option>
                                <option value="mirrors"> ✨ Using mirrors </option>
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
                        <Link to="/wuerzburg/residenz/intro">
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

export default Wurzburg7C;