import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';

function Wurzburg3E() {
  return ( 
    <div>
      <Timeline timelineProgress="4" timelineReference="12-14th A.D."/>
      <div className="clue-background">
        <div className="clue-background-title">Well done!</div>
        <div className="clue-background-div">The citizens of the Würzburg revolted multiple times against the prince-bishops and in 1400 they suffered a major defeat.</div>
        <div className="clue-background-div">However the contrasts between the bishops and the citizens were not over yet...</div>
      </div>
      <div className="buttons-section">
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