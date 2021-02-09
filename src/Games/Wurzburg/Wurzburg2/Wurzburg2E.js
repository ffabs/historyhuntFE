import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';

function Wurzburg2E() {
  return ( 
    <div>
      <Timeline timelineProgress="3" timelineReference="12-13th A.D."/>
      <div className="clue-background">
        <div className="clue-background-title">Well done!</div>
        <div className="clue-background-div">Not everyone in Würzburg has always been fine with the powerful bishops though.</div>
        <div className="clue-background-div">As a sign of a breach of trust the bishop left the city in 1253 for the castle...</div>
      </div>
      <div className="buttons-section">
        <Link to="/wuerzburg/domAnswer/citizens">
          <div className="gameNext-button">
              Next Clue
          </div>
        </Link>
      </div>
    </div>  
  );
}

export default Wurzburg2E;