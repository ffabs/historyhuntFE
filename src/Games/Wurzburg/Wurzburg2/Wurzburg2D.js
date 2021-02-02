import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Redirect} from 'react-router-dom';
import '../Wurzburg.css';

class Wurzburg2D extends Component {

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
        console.log(this.props.inside);

        if(this.state.answers === "right"){
            return (
                <Redirect to="/wuerzburg/domAnswer" />
            ) 
        } else {
            return ( 
                <div>
                    <Timeline timelineProgress="23" timelineReference="12th A.D."/>
                    <div className="clue-background">
                        <div className="clue-background-title">Kilian’s Cathedral</div>
                        <div className="clue-background-div">
                        Find some of the bishops that will join this time travel:
                        - Herold von Hochheim (primo ma forse non c’è)
                        - Hermann I von Lobdeburg (va al castello) forse non c’è- Gottfried III. from Hohenlohe (statuetta forse da fuori e conferma il primo ospedale)
                        - Johann I von Egloffstein (battaglia del 1400 con i cittadini) forse non c’è
                        - Lorenz von Bibra (Martin lutero e tomba figa nella chiesa)
                        </div>
                        <div> I am
                            <input
                                type="text" 
                                name="firstInput"
                                onChange={this.firstInput}
                                className={this.state.firstInputCSS}
                            />
                        </div>

                        <div> I sit next to
                            <select type="select" name="secondInput" onChange={this.secondInput} className={this.state.secondInputCSS}>
                                <option value="rolls"> 🧻 Toilet paper </option>
                                <option value="tofu"> 🍢 Tofu </option>
                                <option value="soymilk"> 🥛 Soymilk </option>
                            </select>
                        </div>

                        <div> and I have
                            <select type="text" name="thirdInput" onChange={this.thirdInput} className={this.state.thirdInputCSS}>
                                <option value="rolls"> 🧻 Toilet paper </option>
                                <option value="tofu"> 🍢 Tofu </option>
                                <option value="soymilk"> 🥛 Soymilk </option>
                            </select>
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

export default Wurzburg2D;
