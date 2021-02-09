import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';

function Wurzburg8B() {
  return ( 
    <div>
      <Timeline timelineProgress="8" timelineReference="19th A.D."/>
      <div className="clue-background">
        <div className="clue-background-title">Ring Park</div>
        <div className="clue-background-div">City walls replaced with Ring park</div>
      </div>
      <div className="buttons-section">
        <div className="clue-background-div">Ready for the clue?</div>
      </div>
      <div className="buttons-section">
        <Link to="/wuerzburg/ringpark/intro/clue">
            <div className="gameNext-button">
                Yes
            </div>
        </Link>
      </div>
    </div>  
  );
}

export default Wurzburg8B;