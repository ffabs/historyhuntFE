import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import Weather from '../WurzburgComponents/Weather';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';


class Wurzburg3C extends Component {

    render() {

        return ( 
            <div>
            <Timeline timelineProgress="24" timelineReference="13-14th A.D."/>
            <div className="clue-background">
                <div className="clue-background-title">The City Council</div>
                <div className="clue-background-div">
                    <Weather /> 
                </div>
                <div className="clue-background-div">Can you see the shade of the sundial on the building?</div>
                <Link to="/wuerzburg/kilianus/citycouncil">
                    <div className="gameNext-button">
                        Yes
                    </div>
                </Link>
            </div>
            </div>  
        );
    }
}

export default Wurzburg3C;
