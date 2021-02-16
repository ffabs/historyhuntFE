import Timeline from '../WurzburgComponents/Timeline';
import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import '../Wurzburg.css';

class Wurzburg5C extends Component {
    constructor (props) {
        super(props);   
        this.state = {
            season: "brewery",
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
        if (this.state.season === "winery") {
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
                <Redirect to="/wuerzburg/julius/statue/clueAnswer" />
            ) 
        } else {
            return ( 
                <div>
                    <Timeline timelineProgress="5" timelineReference="16th A.D."/>
                    <div className="clue-background">
                        <div className="clue-background-title">Julius Echter</div>
                        <div className="clue-background-div">As illustrated in the facade, the Juliusspital was built as an hospital for the elderly, the sick and the needy. Today it still includes a clinic and a retirement home but also something else. What is it?</div>
                        <div className="number-form"> 
                            <div className="clue-background-div">Answer: </div>
                            <select type="text" onChange={this.updateSeason} className={this.state.seasonCSS}>
                                <option value="brewery"> 🍻 a brewery </option>
                                <option value="fire"> 🧑‍🚒 a fire station </option>
                                <option value="historical"> 📜 a historical institution </option>
                                <option value="police"> 🚔 a police station </option>
                                <option value="school"> 🏫 a school </option>
                                <option value="tram"> 🚊 a tram deposit </option>
                                <option value="winery"> 🥂 a winery </option>
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

export default Wurzburg5C;