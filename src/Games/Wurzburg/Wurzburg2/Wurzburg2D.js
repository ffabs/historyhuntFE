import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Redirect} from 'react-router-dom';
import '../Wurzburg.css';

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
            inputValue: inputValue
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
                    <Timeline timelineProgress="3" timelineReference="12th A.D."/>
                    <div className="clue-background">
                        <div className="clue-background-title">Kilian’s Cathedral</div>
                        <div className="clue-background-div">The cathedral, having survived through the centuries, shows many different artistic styles. The monument for the prince-bishop Lorenz von Bibra shows the transition from Gothic to Renaissance.</div>
                        <div className="clue-background-div">Comparing Lorenz's tombstone (the 3rd last to the left) with the older monuments at his right, what is kept from the Gothic tradition?</div>
                        
                    </div>
                    <div className="buttons-section">

                        <div className="number-form"> 
                            <select onChange={this.updateAnswer} className={this.state.inputValueCSS}>
                                <option value="details"> 🔎 abundance of details </option>
                                <option value="angels"> 👼 angels </option>
                                <option value="columns"> 🏛️ columns </option>
                                <option value="emblems"> ⚜️ emblems </option>
                                <option value="nature"> 🍃 nature </option>
                                <option value="sword"> 🗡️ sword </option>
                            </select>
                        </div>

                        <div 
                            type="button" 
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

export default Wurzburg2D;
