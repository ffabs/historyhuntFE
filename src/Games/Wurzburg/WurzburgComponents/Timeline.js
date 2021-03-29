import React, { Component } from 'react';
import './Timeline.css';

class Timeline extends Component {

    render() {
        let timelineProgress = this.props.timelineProgress;
        let timelineReference = this.props.timelineReference;
        let minWidth = 20;
        let maxWidth = 100;
        let incrementWidth = timelineProgress * 8;
        let finalWidth = minWidth + incrementWidth;
        let timeline = "timeline";
        if(finalWidth >= maxWidth) {
            finalWidth = maxWidth;
            timeline = "timelineNoPadding";
        }
        
        return ( 
            <div className={timeline} style={{width: finalWidth+"%"}}>
                {timelineReference}
            </div>  
        );
    }
}

export default Timeline;