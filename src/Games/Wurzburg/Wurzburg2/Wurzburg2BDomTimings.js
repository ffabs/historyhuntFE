import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';

function Wurzburg2BDomTimings() {
  return ( 
    <div>
      <Timeline timelineProgress="2" timelineReference="8th A.D."/>
      <div className="clue-background">
        <div className="clue-background-title">Dom opening times:</div>
        <div className="clue-background-div">Mon-Sat: 10am-5pm</div>
        <div className="clue-background-div">Sun: 1pm-6pm</div>
    </div>
    <div className="buttons-section">
        <Link to="/wuerzburg/kilianus/dom/openings">
            <div className="gameNext-button">
                Back
            </div>
        </Link>
      </div>
    </div>  
  );
}

export default Wurzburg2BDomTimings;