import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';

function Wurzburg2E() {
  return ( 
    <div>
      <Timeline timelineProgress="3" timelineReference="12-13th A.D."/>
      <div className="clue-background">
        <div className="clue-background-title">Well done!</div>
        <div className="clue-background-div">Not everyone in Würzburg has always been happy with the powerful bishops though. In 1253, as a sign of a breach of trust, the bishop even left the city to live protected in the castle.</div>
        <div className="clue-background-div">Keep going through this journey to discover key historical events about the citizens and the bishops...</div>
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