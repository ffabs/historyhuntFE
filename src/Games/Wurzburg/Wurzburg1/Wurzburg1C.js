import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import '../Wurzburg.css';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';

class Wurzburg1C extends Component {

    constructor (props) {
        super(props);   
        this.state = {
            firstInputValue: "",
            firstInputCSS: "formInput",
            secondInputValue: "",
            secondInputCSS: "formInput",
            thirdInputValue: "",
            thirdInputCSS: "formInput",
            answers: "wrong"
        };
    }

    firstInput = event => {
        const firstInputAdded = event.target.value.toLowerCase();
        this.setState({
            firstInputCSS: "formInput",
            firstInputValue: firstInputAdded
        });
    }

    secondInput = event => {
        const secondInputAdded = event.target.value.toLowerCase();
        this.setState({
            secondInputCSS: "formInput",
            secondInputValue: secondInputAdded
        });
    }

    thirdInput = event => {
        const thirdInputAdded = event.target.value.toLowerCase();
        this.setState({
            thirdInputCSS: "formInput",
            thirdInputValue: thirdInputAdded
        });
    }

    showErrors = event => {
        let firstInputCheck;
        let secondInputCheck;
        let thirdInputCheck;
        if (this.state.firstInputValue === "kilianus") {
            firstInputCheck = "right";
        } else {
            firstInputCheck = "wrong";
        }

        if (this.state.secondInputValue === "totnan") {
            secondInputCheck = "right";
        } else {
            secondInputCheck = "wrong";
        }

        if (this.state.thirdInputValue === "kolonatus") {
            thirdInputCheck = "right";
        } else {
            thirdInputCheck = "wrong";
        } 

        this.setState({
            firstInputCSS: firstInputCheck,
            secondInputCSS: secondInputCheck,
            thirdInputCSS: thirdInputCheck
        });
    }

    checkAllInputs = event => {
        if (
            this.state.firstInputValue === "kilianus" &&
            this.state.secondInputValue === "totnan" &&
            this.state.thirdInputValue === "kolonatus"
            ) {
            this.setState({
                answers: "right"
            });
        } else {
            this.setState({
                answers: "wrong"
            });
            this.showErrors();
        }
    }

    render() {
        if(this.state.answers === "right"){
            return (
                <Redirect to="/wuerzburg/kilianus" />
            ) 
        } else {
            return ( 
                <div>
                    <Timeline timelineProgress="1" timelineReference="7th A.D."/>
                    <div className="clue-background">       
                        <div className="clue-background-title">A martyrdom that changed history</div>
            
                        <div className="clue-background-div">I am a bishop, as shown by my hat, and I hold a sword, the weapon used to killed me. I am... </div> 
                        <div> S.
                            <input
                                type="text" 
                                name="firstInput"
                                onChange={this.firstInput}
                                className={this.state.firstInputCSS}
                            />
                        </div>

                        <div className="clue-background-div">I look young and I hold the bible. My name is... </div> 
                        <div> S.
                            <input
                                type="text" 
                                name="secondInput"
                                onChange={this.secondInput}
                                className={this.state.secondInputCSS}
                            />
                        </div>

                        <div className="clue-background-div">I show no fear for the death. Usually, I hold a knife but it is currently missing from my statue. I am remembered as... </div>
                        <div> S.
                            <input
                                type="text" 
                                name="thirdInput"
                                onChange={this.thirdInput}
                                className={this.state.thirdInputCSS}
                            />
                        </div>
                    </div>
                    <div className="buttons-section">
                        <div 
                            type="button" 
                            onClick={this.checkAllInputs}
                            className="gameNext-button"
                        >
                            Check answers
                        </div>
                        <Link to="/wuerzburg/bridge">
                            <div className="gameNext-button-below">
                                Back
                            </div>
                        </Link>
                        <a href="https://us1.list-manage.com/survey?u=27bed50594116df471c55e108&id=e11c3c40f6" target="_blank" rel="noopener noreferrer">
                            <div className="gameFeedback-button">Help</div>
                        </a>
                    </div>

                </div>  
            );
        }
    }
}

export default Wurzburg1C;
