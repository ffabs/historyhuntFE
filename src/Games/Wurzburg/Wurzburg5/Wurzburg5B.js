import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';

function Wurzburg5B() {
  return ( 
    <div>
      <Timeline timelineProgress="25" timelineReference="16th A.D."/>
      <div className="clue-background">
        <div className="clue-background-title">Julius Echter</div>
        <div className="clue-background-div">julius echter von mespelbrunn controriforma e cambia tutto</div>
        <div className="clue-background-div">Juliusspital hospital</div>
        <div className="clue-background-div">re-establishment of the university</div>
        <div className="clue-background-div">extension of the fortress </div>
        <div className="clue-background-div">witch hunts</div>
        <Link to="/wuerzburg/julius/statue/clue">
            <div className="gameNext-button">
                Yes
            </div>
        </Link>
      </div>
    </div>  
  );
}

export default Wurzburg5B;