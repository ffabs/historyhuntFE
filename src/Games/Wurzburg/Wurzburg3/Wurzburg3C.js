import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import Weather from '../WurzburgComponents/Weather';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';


class Wurzburg3C extends Component {

    render() {

        return ( 
            <div>
            <Timeline timelineProgress="4" timelineReference="12-14th A.D."/>
            <div className="clue-background">
                <div className="clue-background-title">The City Council</div>
                <div className="clue-background-div">
                    <Weather /> 
                </div>
            </div>
            <div className="question-section">
                <div className="clue-background-div">Can you see the shade of the sundial on the building?</div>
            </div>
            <div className="buttons-section">
                <Link to="/wuerzburg/citycouncil/sundial/clue">
                    <div className="gameNext-button">
                        Yes
                    </div>
                </Link>
                <Link to="/wuerzburg/citycouncil">
                    <div className="gameNext-button-below">
                        Back
                    </div>
                </Link>
            </div>
            </div>  
        );
    }
}

export default Wurzburg3C;
