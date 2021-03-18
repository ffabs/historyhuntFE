import Timeline from '../WurzburgComponents/Timeline';
import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../Components/GameMenu';

class Wurzburg7E extends Component {
    constructor (props) {
        super(props);   
        this.state = {
            year: "1",
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
        if (this.state.year === 16) {
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
                <Redirect to="/wuerzburg/residenz/garden/clueAnswer" />
            ) 
        } else {
            return ( 
                <div>
                    {this.props.gamemenu !== true && <div>
                    <Timeline timelineProgress="6" timelineReference="17-18th A.D."/>
                    <div className="clue-background">
                        <div className="clue-background-title">The Residence Garden</div>
                        <div className="clue-background-div">Roses can be found in many places of the garden but there is only 1 place where multiple species of roses are collected with their scientific names. Can you find it? How many species are there?</div>
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
                        <Link to="/wuerzburg/residenz/garden/clue">
                            <div className="gameNext-button-below">
                                Back
                            </div>
                        </Link>
                        <a href="https://us1.list-manage.com/survey?u=27bed50594116df471c55e108&id=e11c3c40f6" target="_blank" rel="noopener noreferrer">
                            <div className="gameFeedback-button">Help</div>
                        </a>
                    </div>
                    </div>}<GameMenu {...this.props}/>
                </div>  
            );
        }
    }
}

export default Wurzburg7E;