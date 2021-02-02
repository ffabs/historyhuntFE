import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Timeline from '../WurzburgComponents/Timeline';
import '../Wurzburg.css';

class Wurzburg2C extends Component {

        render() {
            console.log(this.props.inside);
    
        return ( 
            <div>
            <Timeline timelineProgress="23" timelineReference="12th A.D."/>
            <div className="clue-background">
                <div className="clue-background-title">Kilian’s Cathedral</div>
                {/* <div className="clue-background-div">The cathedral, having survived through the centuries, shows many different architectural styles.</div> */}
                <div className="clue-background-div">Beyond this nave documents no less than 700 years of city, church and art history (see the line of episcopal tombstones arranged chronologically).</div>
                <div className="clue-background-div">The bishops have become increasingly more powerful and in 1168 the bishop was made duke by the emperor Barbarossa starting the period of the prince-bishops of Würzburg which lasted until 1803.</div>
                <div className="clue-background-div">Are you ready to find some of them that will accompany our journey?</div>
                <div>{this.props.inside}</div>
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
