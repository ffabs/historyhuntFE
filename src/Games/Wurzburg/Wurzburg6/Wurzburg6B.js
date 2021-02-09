import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';

function Wurzburg6B() {
  return ( 
    <div>
      <Timeline timelineProgress="6" timelineReference="17th A.D."/>
      <div className="clue-background">
        <div className="clue-background-title">The Falkenhous</div>
        <div className="clue-background-div">Taxes story</div>
      </div>
      <div className="buttons-section">
        <div className="clue-background-div">Ready for the clue?</div>
      </div>
      <div className="buttons-section">
        <Link to="/wuerzburg/falkenhous/taxes/clue">
            <div className="gameNext-button">
                Yes
            </div>
        </Link>
      </div>
    </div>  
  );
}

export default Wurzburg6B;