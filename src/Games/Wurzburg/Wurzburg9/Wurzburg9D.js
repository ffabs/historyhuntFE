import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';

function Wurzburg9D() {
  return ( 
    <div>
      <Timeline timelineProgress="9" timelineReference="19-20th A.D."/>
      <div className="clue-background">
        <div className="clue-background-title">Well done!</div>
      </div>
      <div className="buttons-section">
        <div className="clue-background-div">What happened next?</div>
      </div>
      <div className="buttons-section">
        <Link to="/wuerzburg/worldwar">
            <div className="gameNext-button">
                Yes
            </div>
        </Link>
      </div>
    </div>  
  );
}

export default Wurzburg9D;