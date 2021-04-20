import React, { Component } from 'react';
import './Timeline.css';

class Timeline extends Component {

    render() {
        let timelineProgress = this.props.timelineProgress;
        let timelineReference = this.props.timelineReference;
        let animate = this.props.animate;

        let minWidth = 28;
        let maxWidth = 100;
        let incrementWidth = timelineProgress * 7;
        let finalWidth = minWidth + incrementWidth;
        let timeline = "timeline";

        if(finalWidth < maxWidth && animate === "yes") {
            if(timelineProgress > 3) {
                timeline = "animatedTimeline30";
            } else {
                timeline = "animatedTimeline";
            } 
        }
        if(finalWidth >= maxWidth && animate !== "yes") {
            finalWidth = maxWidth;
            timeline = "timelineNoPadding";
        }
        if(finalWidth >= maxWidth && animate === "yes") {
            finalWidth = maxWidth;
            timeline = "animatedTimelineNoPadding";
        }
    

        return ( 
            <div className={timeline} style={{width: finalWidth+"%"}}> 
                {/* <div className="shine"></div> */}
                    {timelineReference}
            </div>  
        );
    }
}

export default Timeline;