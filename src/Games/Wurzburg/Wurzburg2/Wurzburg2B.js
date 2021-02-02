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
      <Timeline timelineProgress="22" timelineReference="8th A.D."/>
      <div className="clue-background">
        <div className="clue-background-title">Kilian’s Cathedral</div>
        <div className="clue-background-div">The cathedral is normally {doors} at this time.</div>
        {/* <div className="clue-background-div">Opening times:</div>
        <div className="clue-background-div">Mon-Sat: 10am-5pm</div>
        <div className="clue-background-div">Sun: 1pm-6pm</div> */}
        {doors === "open" &&
            <div className="clue-background-div">Do you confirm you can go inside?</div>
        }
        {doors === "closed" &&
            <div className="clue-background-div">Can you go inside anyway?</div>
        }
        <Link to="/wuerzburg/kilianus/dom/inside">
            <div className="gameNext-button">
                Yes
            </div>
        </Link>
        <Link to="/wuerzburg/kilianus/dom/virtuallyinside">
            <div className="gameNext-button">
                No
            </div>
        </Link>
      </div>
    </div>  
  );
}

export default Wurzburg2B;
