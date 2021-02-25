import Timeline from '../WurzburgComponents/Timeline';
import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';

class Wurzburg3D extends Component {
    constructor (props) {
        super(props);   
        this.state = {
            year: "1",
            season: "middle",
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

    checkAnswer = event => {
        if (this.state.season === "beginning" && this.state.year === 20) {
            this.setState({
                answers: "right"
            });
        } else {
            this.setState({
                answers: "wrong"
            });
        }
    }

    render() {
        if(this.state.answers === "right"){
            return (
                <Redirect to="/wuerzburg/citycouncil/sundial/clueAnswer" />
            ) 
        } else {
            return ( 
                <div>
                    <Timeline timelineProgress="4" timelineReference="12-14th A.D."/>
                    <div className="clue-background">
                        <div className="clue-background-title">The Town Hall</div>
                    </div>
                    <div className="question-section">
                        <div className="clue-background-div">When was the tree repainted?</div>
                    </div>
                        <div className="number-form">
                            <select onChange={this.updateSeason} className={this.state.seasonCSS}>
                                <option value="middle"> Around the middle </option>
                                <option value="beginning"> At the beginning </option>
                                <option value="end"> At the end </option>
                            </select>
                            <div className="clue-background-div">of the</div>
                        </div>
                        <div className="number-form">
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
                            <div className="clue-background-div">century</div>
                        </div>
                    <div className="buttons-section">
                        <div
                            onClick={this.checkAnswer}
                            className="gameNext-button"
                        >
                            Check answer
                        </div>
                        <Link to="/wuerzburg/citycouncil">
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

export default Wurzburg3D;