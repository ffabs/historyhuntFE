import React, { Component } from 'react';
import './Timeline.css';

class Timeline extends Component {

    render() {
        let timelineProgress = this.props.timelineProgress;
        let timelineReference = this.props.timelineReference;
        
        return ( 
            <div className="timeline" style={{width: timelineProgress+"%"}}>
                {timelineReference}
            </div>  
        );
    }
}

export default Timeline;