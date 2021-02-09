import React, { Component } from 'react';
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
                <div className="clue-background-div">Since the foundation of the bishop and cathedral, the bishops have become increasingly more powerful. In 1168 the bishop of Würzburg was even made duke by the emperor Barbarossa, starting the period of the prince-bishops of Würzburg which lasted until 1803!</div>
            </div>
            <div className="question-section">
                <div className="clue-background-div">Are you ready to find one inside?</div>
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
