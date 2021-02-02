import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';

function Wurzburg3E() {
  return ( 
    <div>
      <Timeline timelineProgress="24" timelineReference="13-14th A.D."/>
      <div className="clue-background">
        <div className="clue-background-title">Well done!</div>
        <div className="clue-background-div">However, the bishop did not allow a representative new building.</div>
        <div className="clue-background-div">The citizens of the city revolted several times against the prince-bishop and were defeated.</div>
        <Link to="/wuerzburg/peasants">
          <div className="gameNext-button">
              Next Clue
          </div>
        </Link>
      </div>
    </div>  
  );
}

export default Wurzburg3E;