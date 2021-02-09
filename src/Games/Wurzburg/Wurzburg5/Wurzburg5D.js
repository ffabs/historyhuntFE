import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';

function Wurzburg5D() {
  return ( 
    <div>
      <Timeline timelineProgress="5" timelineReference="16th A.D."/>
      <div className="clue-background">
        <div className="clue-background-title">Well done!</div>
        <div className="clue-background-div">julius echter von mespelbrunn controriforma e cambia tutto</div>
        <div className="clue-background-div">Juliusspital hospital question hunt on the facade</div>
        <div className="clue-background-div">re-establishment of the university</div>
        <div className="clue-background-div">extension of the fortress </div>
        <div className="clue-background-div">witch hunts</div>
      </div>
      <div className="buttons-section">
        <Link to="/wuerzburg/falkenhous">
            <div className="gameNext-button">
                Yes
            </div>
        </Link>
      </div>
    </div>  
  );
}

export default Wurzburg5D;