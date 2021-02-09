import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';

function Wurzburg2B() {
    var date = new Date();
    var day = date.getDay();
    var hour = date.getHours();
    let doors;
    if(day === 0) {
        if(hour<18 && hour>12) {
            doors = "open"
        } else {
            doors = "close";
        }
    } else {
        if(hour<17 && hour>9) {
            doors = "open";
        } else {
            doors = "closed";
        }
    }
  return ( 
    <div>
        <Timeline timelineProgress="2" timelineReference="8th A.D."/>
        <div className="clue-background">
            <div className="clue-background-title">Kilian’s Cathedral</div>
            <div className="clue-background-div">The cathedral is normally {doors} at this time.</div>
            </div>
        <div className="question-section">
            {doors === "open" &&
                <div className="clue-background-div">Do you confirm you can go inside?</div>
            }
            {doors === "closed" &&
                <div className="clue-background-div">Can you go inside anyway?</div>
            }
        </div>
        <div className="buttons-section">
            <Link to="/wuerzburg/kilianus/dom/inside">
                <div className="gameNext-button">
                    Yes
                </div>
            </Link>
            <Link to="/wuerzburg/kilianus/dom/virtuallyinside">
                <div className="gameNext-button-below">
                    No, I can't
                </div>
            </Link>
            <Link to="/wuerzburg/kilianus/dom/timings">
                <div className="gameNext-button-below">
                    When is it open?
                </div>
            </Link>
        </div>
    </div>  
  );
}

export default Wurzburg2B;
