import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';

function Wurzburg8D() {
  return ( 
    <div>
      <Timeline timelineProgress="28" timelineReference="19th A.D."/>
      <div className="clue-background">
        <div className="clue-background-title">Well done!</div>
        <div className="clue-background-div">...next?</div>
        <Link to="/wuerzburg/xrays">
            <div className="gameNext-button">
                Yes
            </div>
        </Link>
      </div>
    </div>  
  );
}

export default Wurzburg8D;