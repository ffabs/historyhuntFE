import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';

function Wurzburg7D() {
  return ( 
    <div>
      <Timeline timelineProgress="6" timelineReference="17-18th A.D."/>
      <div className="clue-background">
        <div className="clue-background-title">The Residence</div>
        <div className="clue-background-title">Well Done!</div>
        <div className="clue-background-div">This clue is not over yet thought! To complete it, go into the gardens of the Residence.</div>
      </div>
      <div className="question-section">
        <div className="clue-background-div">Are you there?</div>
      </div>
      <div className="buttons-section">
        <Link to="/wuerzburg/residenz/garden/clueQuestion">
            <div className="gameNext-button">
                Yes
            </div>
        </Link>
      </div>
    </div>  
  );
}

export default Wurzburg7D;