import Timeline from '../WurzburgComponents/Timeline';
import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import '../Wurzburg.css';
import {Link} from 'react-router-dom';

class Wurzburg10C extends Component {
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
                <Redirect to="/wuerzburg/worldwar/intro/clueAnswer" />
            ) 
        } else {
            return ( 
                <div>
                    <Timeline timelineProgress="9" timelineReference="20th A.D."/>
                    <div className="clue-background">
                        <div className="clue-background-title">World Wars</div>
                        <div className="clue-background-div">What is the key element of this memorial that allowed National Socialists to misuse it as a “Hero's Memorial”?</div>
                        <div className="number-form"> 
                            <div className="clue-background-div">Answer: </div>
                            <select type="text" onChange={this.updateSeason} className={this.state.season}>
                                <option value="Spring"> 🐘 the massive depiction of warriors with steel helmets in heavy coats and boots and as dull and heroic </option>
                                <option value="Summer"> 💣 the representation of weapons </option>
                                <option value="Autumn"> 📃 the lack of names of the deaths </option>
                                <option value="Winter"> ✝️ the lack of crosses </option>
                            </select>
                        </div>
                        <div>What was added after the second world?</div>
                    </div>
                    <div className="buttons-section">
                        <div
                            onClick={this.checkAnswer}
                            className="gameNext-button"
                        >
                            Check answer
                        </div>
                        <Link to="/wuerzburg/worldwar/intro">
                            <div className="gameNext-button-below">
                                Back
                            </div>
                        </Link>
                    </div>
                </div>  
            );
        }
    }
}

export default Wurzburg10C;