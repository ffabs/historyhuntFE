import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
// import Weather from '../WurzburgComponents/Weather';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';


class Wurzburg3C extends Component {

    render() {

        return ( 
            <div>
            <Timeline timelineProgress="4" timelineReference="12-14th A.D."/>
            <div className="clue-background">
                <div className="clue-background-title">The Town Hall</div>
                {/* <div className="clue-background-div">
                    <Weather /> 
                </div> */}
                {/* (after which the convicts were taken to the small prison in the building) and the citizens' meal (commemorating the repeal of the imperial ban) was held  */} 
                <div className="clue-background-div">
                    The painting is not just a decoration but also a commemoration of a real linden tree that used to be in front of the town hall.
                    In the Middle Ages, the tree was very involved in the citizens' activities: both the court and the citizens' meal were held under it. 
                </div>
                <div className="clue-background-div">
                    So, at the end of the 16th century, after the real tree had fallen over, the painting was done.
                </div>
            </div>                
            <div className="question-section">
                <div className="clue-background-div">Ready for the clue?</div>
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
