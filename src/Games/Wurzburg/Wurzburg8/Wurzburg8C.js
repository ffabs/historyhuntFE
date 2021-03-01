import Timeline from '../WurzburgComponents/Timeline';
import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';

class Wurzburg8C extends Component {
    constructor (props) {
        super(props);   
        this.state = {
            year: "1500",
            season: "Winter",
            answers: "wrong",
            seasonCSS: "select-input"
        };
    }

    updateSeason = event => {
        let season = event.target.value;
        this.setState({
            season: season,
            seasonCSS: "select-input"
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
                seasonCSS: "wrong-select-input",
            });
        }
    }

    render() {
        if(this.state.answers === "right"){
            return (
                <Redirect to="/wuerzburg/ringpark/intro/clueAnswer" />
            ) 
        } else {
            return ( 
                <div>
                    <Timeline timelineProgress="7" timelineReference="19th A.D."/>
                    <div className="clue-background">
                        <div className="clue-background-title">Ring Park</div>
                        <div className="clue-background-div">What did this park used to be before becoming the Ring Park?</div>
                        <div className="number-form"> 
                            <select type="text" onChange={this.updateSeason} className={this.state.seasonCSS}>
                                <option value="Winter"> 🏘️ Accomodations </option>
                                <option value="Spring"> 🏰 City walls </option>
                                <option value="Summer"> 🌊 City water </option>
                                <option value="Autumn"> 🛣️ Main road to Munich </option>
                                <option value="Winter"> 🏫 School </option>
                                <option value="Summer"> 🌲 Wild forests </option>
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
                        <Link to="/wuerzburg/ringpark/intro">
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

export default Wurzburg8C;