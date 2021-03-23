import Timeline from '../WurzburgComponents/Timeline';
import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../Components/GameMenu';

class Wurzburg11C extends Component {
    constructor (props) {
        super(props);   
        this.state = {
            year: "1000",
            answers: "wrong",
            yearCSS: "number-input"
        };
    }

    updateYear = event => {
        let year = Number(event.target.value);
        this.setState({
            year: year,
            yearCSS: "number-input"
        });
    }

    higherYear = event => {
        let year = Number(this.state.year) + 100;
        this.setState({
            year: year,
            yearCSS: "number-input"
        });
    }

    lowerYear = event => {
        let year = Number(this.state.year) - 100;
        this.setState({
            year: year,
            yearCSS: "number-input"
        });
    }

    checkAnswer = event => {
        if (this.state.year === 1300) {
            this.setState({
                answers: "right"
            });
        } else {
            this.setState({
                answers: "wrong",
                yearCSS: "wrong-number-input"
            });
        }
    }
    render() {
        if(this.state.answers === "right"){
            return (
                <Redirect to="/wuerzburg/currenttimes/intro/clueAnswer" />
            ) 
        } else {
            return ( 
                <div>
                    {this.props.gamemenu !== true && <div>
                    <Timeline timelineProgress="10" timelineReference="20-21th A.D."/>
                    <div className="clue-background">
                        <div className="clue-background-title">Current times</div>
                        <div className="clue-background-div">In 2004, a major milestone was reached in the history of Würzburg. How many years of history were celebrated?</div>
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
                        </div>
                    </div>
                    <div className="buttons-section">
                        <div
                            onClick={this.checkAnswer}
                            className="gameNext-button"
                        >
                            Check answer
                        </div>
                        <Link to="/wuerzburg/currenttimes/intro">
                            <div className="gameNext-button-below">
                                Back
                            </div>
                        </Link>
                        <Link to="/wuerzburg/currenttimes/help">
                            <div className="gameFeedback-button">Help</div>
                        </Link>
                    </div>
                    </div>}<GameMenu {...this.props}/>
                </div>  
            );
        }
    }
}

export default Wurzburg11C;