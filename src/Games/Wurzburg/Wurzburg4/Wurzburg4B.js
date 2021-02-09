import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';

function Wurzburg4B() {
  return ( 
    <div>
      <Timeline timelineProgress="5" timelineReference="16th A.D."/>
      <div className="clue-background">
        <div className="clue-background-title">The Peasants’ War</div>
        <div className="clue-background-div">The German Peasants' War was Europe's largest and most widespread popular uprising prior to the French Revolution.</div>
      </div>
      <div className="question-section">
        <div className="clue-background-div">Ready to solve the clue?</div>
      </div>
      <div className="buttons-section">
        <Link to="/wuerzburg/peasants/memorial/clue">
            <div className="gameNext-button">
                Yes
            </div>
        </Link>
      </div>
    </div>  
  );
}

export default Wurzburg4B;
