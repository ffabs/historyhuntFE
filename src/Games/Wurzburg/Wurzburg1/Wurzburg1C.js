import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import '../Wurzburg.css';
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
        console.log("errors");
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
                    <Timeline timelineProgress="21" timelineReference="7th A.D."/>
                    <div className="clue-background">       
                        <div className="clue-background-title">A martyrdom that changed everything</div>
            
                        <div className="clue-background-div">I am a bishop, as shown by my hat, and I hold a sword, the instrument of my martyrdom. </div> 
                        <div> I am S.
                            <input
                                type="text" 
                                name="firstInput"
                                onChange={this.firstInput}
                                className={this.state.firstInputCSS}
                            />
                        </div>

                        <div className="clue-background-div">I look young and I hold the bible.</div> 
                        <div> My name is S.
                            <input
                                type="text" 
                                name="secondInput"
                                onChange={this.secondInput}
                                className={this.state.secondInputCSS}
                            />
                        </div>

                        <div className="clue-background-div">I show no fear for the death. </div>
                        <div> I am remembered as S.
                            <input
                                type="text" 
                                name="thirdInput"
                                onChange={this.thirdInput}
                                className={this.state.thirdInputCSS}
                            />
                        </div>

                        <div 
                            type="button" 
                            onClick={this.checkAllInputs}
                            className="gameNext-button"
                        >
                            Check answers
                        </div>

                    </div>

                </div>  
            );
        }
    }
}

export default Wurzburg1C;
