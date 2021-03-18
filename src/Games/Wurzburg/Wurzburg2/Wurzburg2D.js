import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../Components/GameMenu';

class Wurzburg2D extends Component {

    constructor (props) {
        super(props);   
        this.state = {
            inputValue: "details",
            inputValueCSS: "select-input",
            answers: "wrong"
        };
    }

    updateAnswer = event => {
        let inputValue = event.target.value;
        this.setState({
            inputValue: inputValue,
            inputValueCSS: "select-input"
        });
    }

    checkAnswer = event => {
        if (this.state.inputValue === "emblems") {
            this.setState({
                answers: "right"
            });
        } else {
            this.setState({
                answers: "wrong",
                inputValueCSS: "wrong-select-input",
            });
        }
    }

    render() {
        // console.log(this.props.inside);

        if(this.state.answers === "right"){
            return (
                <Redirect to="/wuerzburg/domAnswer" />
            ) 
        } else {
            return ( 
                <div>
                    {this.props.gamemenu !== true && 
                    <div> 
                    <Timeline timelineProgress="2" timelineReference="8th A.D."/>
                    <div className="clue-background">
                        <div className="clue-background-title">Kilian’s Cathedral</div>
                        <div className="clue-background-div">Comparing Lorenz's tombstone with the older ones at his right, what is kept from the Gothic tradition?</div>
                    </div>
                    <div className="buttons-section">

                        <div className="number-form"> 
                            <select onChange={this.updateAnswer} className={this.state.inputValueCSS}>        
                                <option value="details"> 🔎 many details </option>
                                <option value="nature"> 🍃 natural elements </option>
                                <option value="angels"> 👼 the angels </option>
                                <option value="emblems"> ⚜️ the emblems </option>
                                <option value="sword"> 🗡️ the sword </option>
                                <option value="columns"> 🏛️ usage of columns </option>
                            </select>
                        </div>

                        <div 
                            type="button" 
                            onClick={this.checkAnswer}
                            className="gameNext-button"
                        >
                            Check answer
                        </div>
                        <Link to="/wuerzburg/kilianus/dom/inside">
                            <div className="gameNext-button-below">
                                Back
                            </div>
                        </Link>
                        <a href="https://us1.list-manage.com/survey?u=27bed50594116df471c55e108&id=e11c3c40f6" target="_blank" rel="noopener noreferrer">
                            <div className="gameFeedback-button">Help</div>
                        </a>
                    </div>
                    </div>
                    }
                    <GameMenu {...this.props}/>  
                </div>  
            );
        }
    }
}

export default Wurzburg2D;
