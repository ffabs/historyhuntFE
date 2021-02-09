import React, { Component } from 'react';
import lorenz from '../WurzburgImages/lorenz.png';
import {Link} from 'react-router-dom';
import Timeline from '../WurzburgComponents/Timeline';
import '../Wurzburg.css';

class Wurzburg2C extends Component {

        render() {
            console.log(this.props.inside);
    
        return ( 
            <div>
            <Timeline timelineProgress="3" timelineReference="12th A.D."/>
            <div className="clue-background">
                <div className="clue-background-title">Kilian’s Cathedral</div>
                <div className="clue-background-div">The cathedral, having survived through the centuries, shows many different artistic styles. An interesting example is the monument for the prince-bishop Lorenz von Bibra which shows the transition from Gothic to Renaissance:</div>
                <img src={lorenz} className="lorenz-image" alt="lorenz" />
            </div>
            <div className="question-section">
                <div className="clue-background-div">Could you find it?</div>
                {/* <div>{this.props.inside}</div> */}
            </div>
            <div className="buttons-section">
                <Link to="/wuerzburg/kilianus/dom/inside/clue">
                    <div className="gameNext-button">
                        Yes
                    </div>
                </Link>
                
            </div>
            </div>  
        );
    }
}

export default Wurzburg2C;
